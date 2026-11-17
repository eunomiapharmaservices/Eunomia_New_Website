import { NextResponse, type NextRequest } from "next/server";
import { APEX_HOST, CANONICAL_ORIGIN, LEGACY_TAG_FALLBACK, legacyRedirects } from "./data/legacy-redirects";
import { countryLocaleHints, defaultLocale, isLocale, type Locale } from "./data/i18n/locales";

const legacy = new Map(legacyRedirects.map((r) => [safeDecode(r.source).toLowerCase(), r.destination]));

function safeDecode(path: string) {
  try { return decodeURIComponent(path); } catch { return path; }
}

// Where a path ends up after trailing-slash and legacy-URL redirects, so a
// visitor can be sent there in one hop.
function finalPath(pathname: string) {
  const bare = pathname.replace(/\/+$/, "") || "/";
  const key = safeDecode(bare).toLowerCase();
  return legacy.get(key) ?? (key.startsWith("/tag/") ? LEGACY_TAG_FALLBACK.destination : bare);
}

function redirectTo(target: string, search: string, base: string) {
  const [path, hash] = target.split("#");
  return NextResponse.redirect(new URL(path + search + (hash ? `#${hash}` : ""), base), 308);
}

function preferredBrowserLocale(header: string | null): Locale | null {
  if (!header) return null;
  const preferences = header
    .split(",")
    .map((entry, index) => {
      const [tag, quality] = entry.trim().split(";q=");
      return { tag: tag.toLowerCase(), quality: quality === undefined ? 1 : Number(quality), index };
    })
    .filter((item) => Number.isFinite(item.quality) && item.quality > 0)
    .sort((a, b) => b.quality - a.quality || a.index - b.index);

  for (const preference of preferences) {
    const exact = preference.tag;
    if (isLocale(exact)) return exact;
    const base = exact.split("-")[0];
    if (base === "zh") return "zh-CN";
    if (isLocale(base)) return base;
  }
  return null;
}

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const next = () => NextResponse.next();

  // The bare domain goes straight to the final www page in one hop, instead of
  // first to the same path on www and then on to the new URL.
  const host = request.headers.get("host")?.split(":")[0].toLowerCase();
  if (host === APEX_HOST) return redirectTo(finalPath(pathname), search, CANONICAL_ORIGIN);

  // The legacy WordPress eBook has no current replacement.
  if (pathname === "/wp-content/uploads/2025/10/ebook.pdf") {
    return new NextResponse(null, { status: 410 });
  }

  // A saved language choice wins. Otherwise, use a mapped country default;
  // only use browser language where the visitor's country has no mapped default.
  if (pathname === "/") {
    const saved = request.cookies.get("eps-locale")?.value;
    if (saved && isLocale(saved)) {
      if (saved !== defaultLocale) {
        return NextResponse.redirect(new URL(`/${saved}${search}`, request.url), 307);
      }
    } else {
      const country = request.headers.get("x-vercel-ip-country")?.toUpperCase();
      const countryLocale = country ? countryLocaleHints[country] : undefined;
      if (countryLocale) {
        if (countryLocale !== defaultLocale) {
          return NextResponse.redirect(new URL(`/${countryLocale}${search}`, request.url), 307);
        }
      } else {
        const browserLocale = preferredBrowserLocale(request.headers.get("accept-language"));
        if (browserLocale && browserLocale !== defaultLocale) {
          return NextResponse.redirect(new URL(`/${browserLocale}${search}`, request.url), 307);
        }
      }
    }
  }

  // Old URLs are usually indexed with a trailing slash (/fmv/). Without this,
  // they take two redirects on our side (strip slash, then legacy mapping).
  if (pathname.length <= 1 || !pathname.endsWith("/")) return next();
  return redirectTo(finalPath(pathname), search, request.url);
}

export const config = {
  matcher: [
    "/wp-content/uploads/2025/10/ebook.pdf",
    "/((?!_next/|api/|.*\\.[A-Za-z0-9]+/?$).*)",
    // Every path on the bare domain, including files such as /index.php.
    { source: "/:path*", has: [{ type: "host", value: "eunomiapharmaservices.com" }] },
  ],
};

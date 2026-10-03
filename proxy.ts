import { NextResponse, type NextRequest } from "next/server";
import { legacyRedirects } from "./data/legacy-redirects";
import { countryLocaleHints, defaultLocale, isLocale, type Locale } from "./data/i18n/locales";

const legacy = new Map(legacyRedirects.map((r) => [safeDecode(r.source).toLowerCase(), r.destination]));

function safeDecode(path: string) {
  try { return decodeURIComponent(path); } catch { return path; }
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

  // A visitor's saved choice always wins. On a first visit, a mapped
  // country sets the default; otherwise use the browser's supported language.
  if (pathname === "/") {
    const saved = request.cookies.get("eps-locale")?.value;
    if (saved && isLocale(saved)) {
      if (saved !== defaultLocale) {
        return NextResponse.redirect(new URL(`/${saved}${search}`, request.url), 307);
      }
    } else {
      const country = request.headers.get("x-vercel-ip-country")?.toUpperCase();
      const countryLocale = country ? countryLocaleHints[country] : undefined;
      if (countryLocale && countryLocale !== defaultLocale) {
        return NextResponse.redirect(new URL(`/${countryLocale}${search}`, request.url), 307);
      }
      const browserLocale = preferredBrowserLocale(request.headers.get("accept-language"));
      if (browserLocale && browserLocale !== defaultLocale) {
        return NextResponse.redirect(new URL(`/${browserLocale}${search}`, request.url), 307);
      }
    }
  }

  // Old URLs are usually indexed with a trailing slash (/fmv/). Without this,
  // they take two redirects on our side (strip slash, then legacy mapping).
  if (pathname.length <= 1 || !pathname.endsWith("/")) return NextResponse.next();
  const bare = pathname.replace(/\/+$/, "") || "/";
  const target = legacy.get(safeDecode(bare).toLowerCase()) ?? bare;
  const [path, hash] = target.split("#");
  const url = new URL(path + search + (hash ? `#${hash}` : ""), request.url);
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next/|api/|.*\\.[A-Za-z0-9]+/?$).*)"],
};

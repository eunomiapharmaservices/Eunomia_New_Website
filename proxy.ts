import { NextResponse, type NextRequest } from "next/server";
import { legacyRedirects } from "./data/legacy-redirects";

// Old URLs are usually indexed with a trailing slash (/fmv/). Without this,
// they take two redirects on our side (strip slash, then legacy mapping).
// Strip the slash and apply the legacy mapping in one 308.
const legacy = new Map(legacyRedirects.map((r) => [safeDecode(r.source).toLowerCase(), r.destination]));

function safeDecode(path: string) {
  try { return decodeURIComponent(path); } catch { return path; }
}

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  if (pathname.length <= 1 || !pathname.endsWith("/")) return NextResponse.next();
  const bare = pathname.replace(/\/+$/, "") || "/";
  const target = legacy.get(safeDecode(bare).toLowerCase()) ?? bare;
  const [path, hash] = target.split("#");
  // A plain URL: NextURL would re-add the trailing slash it was parsed with.
  const url = new URL(path + search + (hash ? `#${hash}` : ""), request.url);
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next/|api/|.*\\.[A-Za-z0-9]+/?$).*)"],
};

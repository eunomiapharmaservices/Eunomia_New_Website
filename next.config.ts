import type { NextConfig } from 'next';
import { legacyRedirects } from './data/legacy-redirects';

const nextConfig: NextConfig = {
  // proxy.ts strips trailing slashes itself, so legacy URLs such as /fmv/
  // resolve in one redirect instead of two.
  skipTrailingSlashRedirect: true,
  images: {
    // Small responsive variants avoid downloading a 640px logo on phones.
    imageSizes: [32, 48, 64, 96, 128, 160, 192, 256, 320, 384],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Permitted-Cross-Domain-Policies', value: 'none' },
          { key: 'Permissions-Policy', value: 'camera=(), geolocation=(), microphone=()' },
          {
            key: 'Content-Security-Policy-Report-Only',
            value: "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'self'; form-action 'self'; script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self' https://challenges.cloudflare.com https://*.challenges.cloudflare.com https://vitals.vercel-insights.com; frame-src https://challenges.cloudflare.com; upgrade-insecure-requests",
          },
        ],
      },
      { source: "/downloads/:file*", headers: [{ key: "X-Robots-Tag", value: "noindex" }] },
      { source: "/resources/documents/fair-market-value-methodology.pdf", headers: [{ key: "Link", value: '<https://www.eunomiapharmaservices.com/resources/fair-market-value-methodology>; rel="canonical"' }] },
      { source: "/resources/documents/materials-review-shared-service-case-study.pdf", headers: [{ key: "Link", value: '<https://www.eunomiapharmaservices.com/resources/materials-review-shared-service-case-study>; rel="canonical"' }] },
    ];
  },
  async redirects() {
    return legacyRedirects;
  },
};

export default nextConfig;

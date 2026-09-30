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

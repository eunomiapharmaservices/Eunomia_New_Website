import type { NextConfig } from 'next';
import articles from './data/resource-articles.json';

const nextConfig: NextConfig = {
  async headers() {
    return [
      { source: "/resources/documents/fair-market-value-methodology.pdf", headers: [{ key: "Link", value: '<https://www.eunomiapharmaservices.com/resources/fair-market-value-methodology>; rel="canonical"' }] },
      { source: "/resources/documents/materials-review-shared-service-case-study.pdf", headers: [{ key: "Link", value: '<https://www.eunomiapharmaservices.com/resources/materials-review-shared-service-case-study>; rel="canonical"' }] },
    ];
  },
  async redirects() {
    return articles.map(({ slug }) => ({ source: `/${slug}`, destination: `/resources/articles/${slug}`, permanent: true }));
  },
};

export default nextConfig;

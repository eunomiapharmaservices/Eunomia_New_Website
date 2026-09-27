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
    const duplicateAiArticle = "ai-in-healthcare-compliance-navigating-opportunities-risks-regulatory-landscapes";
    return [
      // Duplicate of /resources/articles/ai-in-healthcare-compliance; send both old URLs to the original.
      { source: `/resources/articles/${duplicateAiArticle}`, destination: "/resources/articles/ai-in-healthcare-compliance", permanent: true },
      { source: `/${duplicateAiArticle}`, destination: "/resources/articles/ai-in-healthcare-compliance", permanent: true },
      ...articles.map(({ slug }) => ({ source: `/${slug}`, destination: `/resources/articles/${slug}`, permanent: true })),
    ];
  },
};

export default nextConfig;

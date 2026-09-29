import type { NextConfig } from 'next';
import articles from './data/resource-articles.json';

const nextConfig: NextConfig = {
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
    const duplicateAiArticle = "ai-in-healthcare-compliance-navigating-opportunities-risks-regulatory-landscapes";
    return [
      { source: "/resources/articles/healthcare-compliance-services", destination: "/services", permanent: true },
      { source: "/resources/articles/compliancetraining", destination: "/services/governance-assurance", permanent: true },
      { source: "/resources/articles/sop", destination: "/services/governance-assurance", permanent: true },
      { source: "/resources/articles/monitoring-and-auditing", destination: "/services/governance-assurance", permanent: true },
      { source: "/resources/articles/audits", destination: "/services/governance-assurance", permanent: true },
      { source: "/resources/articles/risk-assessment-framework-and-internal-controls", destination: "/services/governance-assurance", permanent: true },
      { source: "/resources/articles/fmv", destination: "/resources/fair-market-value-methodology", permanent: true },
      { source: "/resources/articles/material", destination: "/services/shared-services", permanent: true },
      { source: "/resources/articles/transparency", destination: "/services/shared-services", permanent: true },
      { source: "/resources/articles/contact", destination: "/contact", permanent: true },
      // Duplicate of /resources/articles/ai-in-healthcare-compliance; send both old URLs to the original.
      { source: `/resources/articles/${duplicateAiArticle}`, destination: "/resources/articles/ai-in-healthcare-compliance", permanent: true },
      { source: `/${duplicateAiArticle}`, destination: "/resources/articles/ai-in-healthcare-compliance", permanent: true },
      { source: "/fmv", destination: "/resources/fair-market-value-methodology", permanent: true },
      { source: "/transparency", destination: "/services/shared-services", permanent: true },
      { source: "/compliancetraining", destination: "/services/governance-assurance", permanent: true },
      { source: "/systems-automation", destination: "/services/automation-of-compliance-operations", permanent: true },
      { source: "/category/blog", destination: "/resources#articles", permanent: true },
      // Legacy content URLs identified in Search Console exports (29 Sep 2026).
      { source: "/risk-assessment-framework-and-internal-controls", destination: "/resources/articles/pharma-compliance-risk-assessment-framework", permanent: true },
      { source: "/third-party-vendor-management", destination: "/resources/articles/from-risk-to-resilience-why-third-party-risk-management-is-pharmas-biggest-competitive-advantage", permanent: true },
      { source: "/third‑party-vendor-management", destination: "/resources/articles/from-risk-to-resilience-why-third-party-risk-management-is-pharmas-biggest-competitive-advantage", permanent: true },
      { source: "/third%E2%80%91party-vendor-management", destination: "/resources/articles/from-risk-to-resilience-why-third-party-risk-management-is-pharmas-biggest-competitive-advantage", permanent: true },
      { source: "/monitoring-and-auditing", destination: "/services/governance-assurance", permanent: true },
      { source: "/compliance", destination: "/services", permanent: true },
      { source: "/material", destination: "/services/shared-services", permanent: true },
      { source: "/blog", destination: "/resources", permanent: true },
      { source: "/ai-governance", destination: "/services/automation-of-compliance-operations", permanent: true },
      { source: "/audits", destination: "/services/governance-assurance", permanent: true },
      { source: "/dataprotection", destination: "/services/governance-assurance#scope-of-support", permanent: true },
      { source: "/sop", destination: "/services/governance-assurance", permanent: true },
      // Old WordPress URLs still indexed by Bing / Google (found 28 Sep 2026)
      { source: "/healthcare-compliance-services", destination: "/services", permanent: true },
      { source: "/engagement-with-external-stakeholders", destination: "/services/governance-assurance", permanent: true },
      { source: "/bespoke-compliance-trainings", destination: "/services/governance-assurance", permanent: true },
      { source: "/compilencetraining", destination: "/services/governance-assurance", permanent: true },
      { source: "/index", destination: "/", permanent: true },
      ...articles.map(({ slug }) => ({ source: `/${slug}`, destination: `/resources/articles/${slug}`, permanent: true })),
    ];
  },
};

export default nextConfig;

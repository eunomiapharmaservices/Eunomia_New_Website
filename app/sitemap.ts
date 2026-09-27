import type { MetadataRoute } from "next";
import articles from "../data/resource-articles.json";
import { markets } from "../data/markets";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.eunomiapharmaservices.com";
  const routes = ["/resources/fair-market-value-methodology", "/resources/materials-review-shared-service-case-study", "/", "/about", "/team", "/services", "/services/governance-assurance", "/services/automation-of-compliance-operations", "/services/local-legal-mandates", "/services/shared-services", "/legal-mandates", "/resources", "/contact", "/privacy"];
  return [...routes.map((path) => ({ url: base + path })), ...markets.map(({ slug }) => ({ url: `${base}/markets/${slug}` })), ...articles.map(({ slug }) => ({ url: `${base}/resources/articles/${slug}` }))];
}

import type { MetadataRoute } from "next";
import articles from "../data/resource-articles.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.eunomiapharmaservices.com";
  const routes = ["/", "/about", "/team", "/services", "/services/governance-assurance", "/services/automation-of-compliance-operations", "/services/local-legal-mandates", "/services/shared-services", "/legal-mandates", "/resources", "/contact", "/privacy"];
  return [...routes.map((path) => ({ url: base + path })), ...articles.map(({ slug }) => ({ url: `${base}/resources/articles/${slug}` }))];
}

import enhancements from "../data/editorial-enhancements.json";
import type { MetadataRoute } from "next";
import articles from "../data/resource-articles.json";
import { markets } from "../data/markets";
import { populatedCategories } from "../data/article-categories";
import { leadMagnets } from "../data/lead-magnets";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.eunomiapharmaservices.com";
  const routes = ["/resources/fair-market-value-methodology", "/resources/materials-review-shared-service-case-study", "/", "/about", "/team", "/services", "/services/governance-assurance", "/services/automation-of-compliance-operations", "/services/local-legal-mandates", "/services/shared-services", "/legal-mandates", "/resources", "/contact", "/privacy"];
  const updatedPages = new Set(["/", "/services/governance-assurance", "/services/automation-of-compliance-operations", "/services/local-legal-mandates", "/services/shared-services"]);
  return [...routes.map((path) => ({ url: base + path, ...(updatedPages.has(path) ? { lastModified: "2026-09-29" } : {}), ...(path.startsWith("/resources/") && path.split("/").at(-1)! in enhancements ? { lastModified: enhancements[path.split("/").at(-1)! as keyof typeof enhancements].updated } : {}) })), ...markets.map(({ slug }) => ({ url: `${base}/markets/${slug}` })), ...articles.map(({ slug }) => ({ url: `${base}/resources/articles/${slug}`, ...(slug in enhancements ? { lastModified: enhancements[slug as keyof typeof enhancements].updated } : {}) }))];
}

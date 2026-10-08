import { locales, defaultLocale, languageAlternates } from "../data/i18n/locales";
import { practicalResources } from "../data/practical-resources";
import enhancements from "../data/editorial-enhancements.json";
import type { MetadataRoute } from "next";
import articles from "../data/resource-articles.json";
import { markets } from "../data/markets";
import { ukServicePages, UK_SERVICE_BASE } from "../data/uk-service-pages";
import { populatedCategories } from "../data/article-categories";
import { leadMagnets } from "../data/lead-magnets";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.eunomiapharmaservices.com";
  const routes = ["/resources/hcp-fmv-assessment", "/resources/fair-market-value-methodology", "/resources/materials-review-shared-service-case-study", "/", "/team", "/services", "/services/governance-assurance", "/services/automation-of-compliance-operations", "/services/local-legal-mandates", "/services/shared-services", "/legal-mandates", "/resources", "/resources/disclosure-deadlines", "/resources/glossary", "/resources/pmcpa-cases", "/contact", "/privacy"];
  const updatedPages = new Set(["/", "/services/automation-of-compliance-operations", "/services/local-legal-mandates", "/services/shared-services"]);
  const translatedPaths = ["", "/contact", "/privacy", "/team", "/resources", "/services",
    "/services/governance-assurance", "/services/automation-of-compliance-operations",
    "/services/local-legal-mandates", "/services/shared-services",
    ...markets.map(({ slug }) => `/markets/${slug}`)];
  const translatedEntries = Object.keys(locales).filter(code => code !== defaultLocale).flatMap(code =>
    translatedPaths.map(path => ({ url: `${base}/${code}${path}`, alternates: { languages: languageAlternates(path) } }))
  );
  const englishEntries: MetadataRoute.Sitemap = [...practicalResources.map(({ slug }) => ({ url: `${base}/resources/${slug}`, lastModified: "2026-09-30" })), ...routes.map((path) => ({ url: base + path, ...(path === "/services/governance-assurance" ? { lastModified: "2026-09-30" } : updatedPages.has(path) ? { lastModified: "2026-09-29" } : {}), ...(path.startsWith("/resources/") && path.split("/").at(-1)! in enhancements ? { lastModified: enhancements[path.split("/").at(-1)! as keyof typeof enhancements].updated } : {}) })), ...ukServicePages.map(({ slug }) => ({ url: `${base}${UK_SERVICE_BASE}/${slug}`, lastModified: "2026-09-30" })), ...markets.map(({ slug }) => ({ url: `${base}/markets/${slug}`, lastModified: "2026-09-29" })), ...populatedCategories.map(({ slug }) => ({ url: `${base}/resources/category/${slug}` })), ...leadMagnets.map(({ slug }) => ({ url: `${base}/resources/checklists/${slug}` })), ...articles.map(({ slug }) => ({ url: `${base}/resources/articles/${slug}`, ...(slug in enhancements ? { lastModified: enhancements[slug as keyof typeof enhancements].updated } : {}) }))];
  return [...englishEntries.map(entry => {
    const path = entry.url.slice(base.length).replace(/^\/$/, "");
    return translatedPaths.includes(path) ? { ...entry, alternates: { languages: languageAlternates(path) } } : entry;
  }), ...translatedEntries];
}

import { articlePath } from "../lib/article-path";
import { locales, defaultLocale, languageAlternates } from "../data/i18n/locales";
import { practicalResources } from "../data/practical-resources";
import enhancements from "../data/editorial-enhancements.json";
import type { MetadataRoute } from "next";
import articles from "../data/resource-articles.json";
import { markets } from "../data/markets";
import { ukServicePages, UK_SERVICE_BASE } from "../data/uk-service-pages";
import { articlesIn, populatedCategories } from "../data/article-categories";
import { leadMagnets } from "../data/lead-magnets";

// Last significant content change for each page, taken from the git history of
// the page and the data it renders. Update a date when you change that page.
const pageUpdated: Record<string, string> = {
  "/": "2026-11-16",
  "/team": "2026-11-16",
  "/services": "2026-10-19",
  "/services/promotional-materials-review": "2026-10-19",
  "/services/governance-assurance": "2026-11-16",
  "/services/automation-of-compliance-operations": "2026-09-29",
  "/services/local-legal-mandates": "2026-09-29",
  "/services/shared-services": "2026-09-29",
  "/legal-mandates": "2026-10-01",
  "/markets": "2026-11-07",
  "/entering-europe": "2026-11-07",
  "/contact": "2026-10-03",
  "/privacy": "2026-10-08",
  "/resources": "2026-10-28",
  "/resources/disclosure-deadlines": "2026-10-01",
  "/resources/glossary": "2026-10-01",
  "/resources/pmcpa-cases": "2026-10-01",
  "/resources/hcp-fmv-assessment": "2026-11-16",
  "/resources/fair-market-value-methodology": "2026-11-16",
};
// Articles changed since their editorial-enhancement or publication date.
const articleUpdated: Record<string, string> = {
  "fair-market-value-fmv-in-healthcare-compliance": "2026-11-16",
  "eu-ai-act-pharma": "2026-11-16",
  "eu-ai-act-governance-article-50-pharma": "2026-11-16",
};
const ukServicePagesUpdated = "2026-11-16";
const marketsUpdated = "2026-11-07";
const checklistsUpdated = "2026-10-01";
// Translated pages: the later of the translation and the shared page template.
const translatedUpdated: Record<string, string> = {
  "": "2026-11-16",
  "/contact": "2026-10-08",
  "/privacy": "2026-10-08",
  "/team": "2026-10-08",
  "/resources": "2026-10-28",
  "/services": "2026-10-19",
  "/services/promotional-materials-review": "2026-10-19",
  "/services/governance-assurance": "2026-10-19",
  "/services/automation-of-compliance-operations": "2026-10-19",
  "/services/local-legal-mandates": "2026-10-19",
  "/services/shared-services": "2026-10-19",
  "/markets/united-states": "2026-11-16",
  "/markets/canada": "2026-11-16",
  "/markets/india": "2026-11-16",
};

function articleDate(slug: string) {
  return articleUpdated[slug]
    ?? (slug in enhancements ? enhancements[slug as keyof typeof enhancements].updated : undefined)
    ?? articles.find((article) => article.slug === slug)?.date.slice(0, 10);
}

function latest(dates: (string | undefined)[]) {
  return dates.filter((date): date is string => Boolean(date)).sort().at(-1);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.eunomiapharmaservices.com";
  const routes = ["/services/promotional-materials-review", "/resources/hcp-fmv-assessment", "/resources/fair-market-value-methodology", "/resources/materials-review-shared-service-case-study", "/", "/team", "/services", "/services/governance-assurance", "/services/automation-of-compliance-operations", "/services/local-legal-mandates", "/services/shared-services", "/legal-mandates", "/resources", "/resources/disclosure-deadlines", "/resources/glossary", "/resources/pmcpa-cases", "/markets", "/entering-europe", "/contact", "/privacy"];
  const translatedPaths = ["/services/promotional-materials-review", "", "/contact", "/privacy", "/team", "/resources", "/services",
    "/services/governance-assurance", "/services/automation-of-compliance-operations",
    "/services/local-legal-mandates", "/services/shared-services",
    ...markets.map(({ slug }) => `/markets/${slug}`)];
  const translatedEntries = Object.keys(locales).filter(code => code !== defaultLocale).flatMap(code =>
    translatedPaths.map(path => ({ url: `${base}/${code}${path}`, lastModified: translatedUpdated[path] ?? marketsUpdated, alternates: { languages: languageAlternates(path) } }))
  );
  const resourceUpdated = (path: string) => {
    const slug = path.split("/").at(-1)!;
    return path.startsWith("/resources/") && slug in enhancements ? enhancements[slug as keyof typeof enhancements].updated : undefined;
  };
  const englishEntries: MetadataRoute.Sitemap = [
    ...practicalResources.map(({ slug }) => ({ url: `${base}/resources/${slug}`, lastModified: "2026-09-30" })),
    ...routes.map((path) => ({ url: base + path, lastModified: pageUpdated[path] ?? resourceUpdated(path) })),
    ...ukServicePages.map(({ slug }) => ({ url: `${base}${UK_SERVICE_BASE}/${slug}`, lastModified: ukServicePagesUpdated })),
    ...markets.map(({ slug }) => ({ url: `${base}/markets/${slug}`, lastModified: marketsUpdated })),
    ...populatedCategories.map(({ slug }) => ({ url: `${base}/resources/category/${slug}`, lastModified: latest(articlesIn(slug).map(articleDate)) })),
    ...leadMagnets.map(({ slug }) => ({ url: `${base}/resources/checklists/${slug}`, lastModified: checklistsUpdated })),
    ...articles.map(({ slug }) => ({ url: `${base}${articlePath(slug)}`, lastModified: articleDate(slug) })),
  ];
  return [...englishEntries.map(entry => {
    const path = entry.url.slice(base.length).replace(/^\/$/, "");
    return translatedPaths.includes(path) ? { ...entry, alternates: { languages: languageAlternates(path) } } : entry;
  }), ...translatedEntries];
}

// Keep content identifiers stable when a published article changes URL.
export const ARTICLE_50_SLUG = "eu-ai-act-governance-article-50-pharma";
export const ARTICLE_50_PATH = "/insights/eu-ai-act-article-50-pharma-compliance";

export const PHASE_III_SLUG = "phase-iii-pharma-compliance-commercialisation-readiness";
export const PHASE_III_PATH = "/phase-iii-pharma-compliance-commercialisation-readiness";
export const PHASE_III_IMAGE = "/phase-iii-commercial-compliance.webp";

export function articlePath(slug: string) {
  if (slug === ARTICLE_50_SLUG) return ARTICLE_50_PATH;
  if (slug === PHASE_III_SLUG) return PHASE_III_PATH;
  return `/resources/articles/${slug}`;
}

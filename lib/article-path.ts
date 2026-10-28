// Keep content identifiers stable when a published article changes URL.
export const ARTICLE_50_SLUG = "eu-ai-act-governance-article-50-pharma";
export const ARTICLE_50_PATH = "/insights/eu-ai-act-article-50-pharma-compliance";

export function articlePath(slug: string) {
  return slug === ARTICLE_50_SLUG ? ARTICLE_50_PATH : `/resources/articles/${slug}`;
}

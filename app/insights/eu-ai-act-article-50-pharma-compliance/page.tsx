import ResourceArticle, { generateMetadata as articleMetadata } from "../../resources/articles/[slug]/page";
import { ARTICLE_50_SLUG } from "../../../lib/article-path";

export function generateMetadata() {
  return articleMetadata({ params: Promise.resolve({ slug: ARTICLE_50_SLUG }) });
}

export default function Article50Insight() {
  return ResourceArticle({ params: Promise.resolve({ slug: ARTICLE_50_SLUG }) });
}

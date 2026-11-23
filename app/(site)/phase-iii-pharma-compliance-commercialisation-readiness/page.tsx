import type { Metadata } from "next";
import ResourceArticle, { generateMetadata as articleMetadata } from "../resources/articles/[slug]/page";
import articleSeo from "../../../data/article-seo.json";
import { PHASE_III_IMAGE, PHASE_III_SLUG } from "../../../lib/article-path";

const props = { params: Promise.resolve({ slug: PHASE_III_SLUG }) };

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await articleMetadata(props);
  const seo = articleSeo.find(({ slug }) => slug === PHASE_III_SLUG);
  return {
    ...metadata,
    title: seo?.title,
    openGraph: {
      ...metadata.openGraph,
      images: [{ url: PHASE_III_IMAGE, width: 1440, height: 960, alt: "A team wearing face masks reviews data on a monitor around a conference table." }],
    },
    twitter: { ...metadata.twitter, images: [PHASE_III_IMAGE] },
  };
}

export default function PhaseIIIArticle() {
  return ResourceArticle(props);
}

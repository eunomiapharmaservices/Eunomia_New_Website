import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarketView } from "../../../components/MarketView";
import { markets, getMarket } from "../../../data/markets";
import { languageAlternates } from "../../../data/i18n/locales";
import { withSocial } from "../../../lib/seo";

export function generateStaticParams() {
  return markets.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const market = getMarket(slug);
  if (!market) return {};
  const path = `/markets/${slug}`;
  return withSocial(path, {
    title: market.metaTitle,
    description: market.metaDescription,
    alternates: { canonical: `https://www.eunomiapharmaservices.com${path}`, languages: languageAlternates(path) },
  });
}

export default async function MarketPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const market = getMarket(slug);
  if (!market) notFound();
  return <MarketView market={market} />;
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarketView } from "../../../../components/MarketView";
import { markets } from "../../../../data/markets";
import { languageAlternates, locales, type Locale } from "../../../../data/i18n/locales";
import { localized } from "../../../../lib/content";
import { withSocial } from "../../../../lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return (Object.keys(locales) as Locale[])
    .filter((locale) => locale !== "en")
    .flatMap((locale) => markets.map(({ slug }) => ({ locale, slug })));
}

function find(locale: string, slug: string) {
  if (!Object.prototype.hasOwnProperty.call(locales, locale) || locale === "en") return undefined;
  const market = localized("markets", locale as Locale, markets).find((m) => m.slug === slug);
  return market && { market, locale: locale as Locale };
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const found = find(locale, slug);
  if (!found) return {};
  const path = `/markets/${slug}`;
  return withSocial(`/${locale}${path}`, {
    title: found.market.metaTitle,
    description: found.market.metaDescription,
    alternates: { canonical: `https://www.eunomiapharmaservices.com/${locale}${path}`, languages: languageAlternates(path) },
    openGraph: { locale: locale.replace("-", "_") },
  });
}

export default async function LocalizedMarketPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const found = find(locale, slug);
  if (!found) notFound();
  return <MarketView market={found.market} locale={found.locale} />;
}

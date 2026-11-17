import { notFound } from 'next/navigation';
import { SiteDocument, siteMetadata } from '../../components/SiteDocument';
import { isLocale, locales, type Locale } from '../../data/i18n/locales';

export const metadata = siteMetadata;
export const dynamicParams = false;

export function generateStaticParams() {
  return (Object.keys(locales) as Locale[]).filter((locale) => locale !== "en").map((locale) => ({ locale }));
}

export default async function LocaleRootLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") notFound();
  return <SiteDocument locale={locale}>{children}</SiteDocument>;
}

import { withSocial } from "../../../../lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { languageAlternates, locales, isLocale, type Locale } from "../../../../data/i18n/locales";
import chromeStrings from "../../../../data/i18n/site-chrome.json";
import { ServicePage as Service0 } from "../../../../components/services/governance-assurance";
import { ServicePage as Service1 } from "../../../../components/services/automation-of-compliance-operations";
import { ServicePage as Service2 } from "../../../../components/services/local-legal-mandates";
import { ServicePage as Service3 } from "../../../../components/services/shared-services";
const pages = {
  "governance-assurance": { Page: Service0, title: "governanceService", summary: "governanceSummary" },
  "automation-of-compliance-operations": { Page: Service1, title: "automationService", summary: "automationSummary" },
  "local-legal-mandates": { Page: Service2, title: "localMandatesService", summary: "localMandatesSummary" },
  "shared-services": { Page: Service3, title: "sharedServices", summary: "sharedServicesSummary" },
} as const;
type Slug = keyof typeof pages;
export const dynamicParams = false;
function valid(locale: string, slug: string): locale is Exclude<Locale,"en"> {
  return isLocale(locale) && locale !== "en" && Object.hasOwn(pages, slug);
}
export function generateStaticParams() {
  return Object.keys(locales).filter(l => l !== "en").flatMap(locale => Object.keys(pages).map(slug => ({locale,slug})));
}
export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const {locale,slug} = await params;
  if (!valid(locale,slug)) return {};
  const page=pages[slug as Slug];
  const copy=chromeStrings[locale] as Record<string,string>;
  const path=`/services/${slug}`;
  return withSocial(`/${locale}${path}`, {title: `${copy[page.title]} | Eunomia`, description: copy[page.summary], alternates: {canonical: `https://www.eunomiapharmaservices.com/${locale}${path}`, languages: languageAlternates(path)}});
}
export default async function LocalizedServicePage({params}: {params: Promise<{locale:string;slug:string}>}) {
  const {locale,slug}=await params;
  if (!valid(locale,slug)) notFound();
  const {Page}=pages[slug as Slug];
  return <Page locale={locale} />;
}

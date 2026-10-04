import { headers } from 'next/headers';
import { isLocale, type Locale, languageAlternates } from '../data/i18n/locales';
import { HomePage } from '../components/HomePage';
import { withSocial } from '../lib/seo';
import type { Metadata } from 'next';
export const metadata: Metadata = withSocial("/", {
  alternates: { canonical: "https://www.eunomiapharmaservices.com/", languages: languageAlternates("") },
  title: "UK & Global Pharmaceutical Compliance Services | Eunomia",
  description: "UK-based pharmaceutical compliance support with global reach. Programme design, operational automation, local representation and outsourced compliance services.",
});

export default async function Home() {
  const requestHeaders = await headers();
  const suggestionCandidate = requestHeaders.get("x-eps-locale-suggestion");
  const suggestion =
    suggestionCandidate && isLocale(suggestionCandidate) && suggestionCandidate !== "en"
      ? (suggestionCandidate as Exclude<Locale, "en">)
      : null;

return <HomePage suggestion={suggestion} />;
}

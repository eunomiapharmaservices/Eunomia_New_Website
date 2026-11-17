import { languageAlternates } from '../../data/i18n/locales';
import { HomePage } from '../../components/HomePage';
import { withSocial } from '../../lib/seo';
import type { Metadata } from 'next';
export const metadata: Metadata = withSocial("/", {
  alternates: { canonical: "https://www.eunomiapharmaservices.com/", languages: languageAlternates("") },
  title: "UK & Global Pharmaceutical Compliance Services | Eunomia",
  description: "UK-based pharmaceutical compliance support with global reach. Programme design, operational automation, local representation and outsourced compliance services.",
});

export default function Home() {
  return <HomePage />;
}

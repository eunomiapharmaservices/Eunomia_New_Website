import type { Metadata } from "next";
import { languageAlternates } from "../../../data/i18n/locales";
import { withSocial } from "../../../lib/seo";
import { ServicePage } from "../../../components/services/local-legal-mandates";
export const metadata: Metadata = withSocial("/services/local-legal-mandates", {
  alternates: { canonical: "https://www.eunomiapharmaservices.com/services/local-legal-mandates", languages: languageAlternates("/services/local-legal-mandates") },
  title: "Local Legal Representative for Pharma | Eunomia",
  description: "Local legal representative and compliance support for pharma market entry, country-specific codes, HCP engagement and transparency obligations.",
});
export default function Page() { return <ServicePage />; }

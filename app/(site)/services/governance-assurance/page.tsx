import type { Metadata } from "next";
import { languageAlternates } from "../../../../data/i18n/locales";
import { withSocial } from "../../../../lib/seo";
import { ServicePage } from "../../../../components/services/governance-assurance";
export const metadata: Metadata = withSocial("/services/governance-assurance", {
  alternates: { canonical: "https://www.eunomiapharmaservices.com/services/governance-assurance", languages: languageAlternates("/services/governance-assurance") },
  title: "Pharmaceutical Compliance Consultancy UK & EU | Eunomia",
  description: "UK & EU pharma compliance consultancy: commercial compliance, ABPI and EFPIA Codes, risk assessment, policies, training and monitoring. Non-GxP.",
});
export default function Page() { return <ServicePage />; }

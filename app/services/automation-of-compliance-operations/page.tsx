import type { Metadata } from "next";
import { languageAlternates } from "../../../data/i18n/locales";
import { withSocial } from "../../../lib/seo";
import { ServicePage } from "../../../components/services/automation-of-compliance-operations";
export const metadata: Metadata = withSocial("/services/automation-of-compliance-operations", {
  alternates: { canonical: "https://www.eunomiapharmaservices.com/services/automation-of-compliance-operations", languages: languageAlternates("/services/automation-of-compliance-operations") },
  title: "Pharma Compliance Automation UK & Europe | Eunomia",
  description: "Pharma compliance automation and AI governance for risk assessment, monitoring, audit trails, copy and event approval, and EFPIA disclosure using controlled workflows with human oversight.",
});
export default function Page() { return <ServicePage />; }

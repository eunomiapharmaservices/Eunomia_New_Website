import type { Metadata } from "next";
import { languageAlternates } from "../../../data/i18n/locales";
import { withSocial } from "../../../lib/seo";
import { ServicePage } from "../../../components/services/automation-of-compliance-operations";
export const metadata: Metadata = withSocial("/services/automation-of-compliance-operations", {
  alternates: { canonical: "https://www.eunomiapharmaservices.com/services/automation-of-compliance-operations", languages: languageAlternates("/services/automation-of-compliance-operations") },
  title: "Pharma Compliance Automation UK & Europe | Eunomia",
  description: "Automate pharma compliance workflows, EFPIA disclosure data and monitoring with SharePoint, Power BI and controlled AI, supported by compliance specialists.",
});
export default function Page() { return <ServicePage />; }

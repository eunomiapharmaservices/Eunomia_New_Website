import type { Metadata } from "next";
import { languageAlternates } from "../../../data/i18n/locales";
import { withSocial } from "../../../lib/seo";
import { ServicePage } from "../../../components/services/shared-services";
export const metadata: Metadata = withSocial("/services/shared-services", {
  alternates: { canonical: "https://www.eunomiapharmaservices.com/services/shared-services", languages: languageAlternates("/services/shared-services") },
  title: "Outsourced Pharma Compliance & Shared Services | Eunomia",
  description: "Pharma compliance shared services for copy approval, HCP meetings, FMV and transparency reporting, delivered through outsourced operations, GBS and GCC models.",
});
export default function Page() { return <ServicePage />; }

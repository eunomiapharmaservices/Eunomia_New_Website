import type { Metadata } from "next";
import { languageAlternates } from "../../../data/i18n/locales";
import { withSocial } from "../../../lib/seo";
import { ServicePage } from "../../../components/services/shared-services";
export const metadata: Metadata = withSocial("/services/shared-services", {
  alternates: { canonical: "https://www.eunomiapharmaservices.com/services/shared-services", languages: languageAlternates("/services/shared-services") },
  title: "Outsourced Pharma Compliance & Shared Services | Eunomia",
  description: "Outsourced pharma compliance for materials review, HCP fair market value, EFPIA disclosure and daily operations through shared services, GBS and GCC support.",
});
export default function Page() { return <ServicePage />; }

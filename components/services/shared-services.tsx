import { serviceTranslator } from "../../data/i18n/full-service-copy";
import { localHref } from "../../lib/i18n";
import type { Locale } from "../../data/i18n/locales";
import { ServiceSubpage } from "../../components/ServiceSubpage";
export function ServicePage({locale = "en"}: {locale?: Locale}) {
const t = serviceTranslator(locale);
const href = (path: string) => localHref(locale, path);
  return (
    <ServiceSubpage locale={locale}
      servicePath="/services/shared-services"
      heading={t("Outsourced Pharma Compliance and Shared Services for the UK and Europe")}
      kicker={t("Shared Services / GBS / GCC")}
      title={t("Your compliance function, run with you.")}
      serviceTitleFirst
      serviceImage={{ src: "/compliance-collaboration.png", alt: t("Compliance specialists reviewing documents together") }}
      intro={t("Our outsourced pharma compliance team works within your SOPs and systems to review materials, support HCP engagements and manage transparency reporting, including EFPIA disclosure processes. Shared services, GBS and GCC support adds operational capacity while you retain accountability and oversight.")}
      services={[
        t("Promotional and medical materials review"),
        t("Activity, event and congress review"),
        t("HCP engagement and fair market value assessment"),
        t("Transparency reporting and disclosure"),
        t("Operational compliance support across markets"),
        t("Centralised workflow and evidence management"),
      ]}
      outcomes={[
        t("Dependable capacity without building a full in-house team"),
        t("Consistent decisions, records and turnaround times"),
        t("A service that can scale by market, activity or workload"),
      ]}
      faqs={[
        {
          question: t("What is a healthcare compliance shared service?"),
          answer:
            t("A dedicated team performs defined compliance activities through agreed processes, systems, service levels and escalation routes while your organisation retains oversight and accountability."),
        },
        {
          question:
            t("Can the service work within our existing SOPs and systems?"),
          answer:
            t("Yes. The operating model is designed around your approved procedures, technology, decision rights and documentation requirements."),
        },
        {
          question: t("Which activities can be included?"),
          answer:
            t("Typical scope includes materials and activity review, events and HCP engagements, fair market value, disclosures, transparency reporting and associated records."),
        },
        {
          question: t("Can we start with one process or market?"),
          answer:
            t("Yes. A shared service can begin with a defined activity, team or market and expand after the workflow and service levels are proven."),
        },
        {
          question: t("Who remains accountable for compliance decisions?"),
          answer:
            t("Your organisation retains ultimate accountability. Roles, delegated authority, review routes and escalations are defined clearly at the outset."),
        },
        {
          question: t("How is performance managed?"),
          answer:
            t("The service can use agreed measures for volume, turnaround, quality, exceptions, escalation and stakeholder experience, supported by regular governance reviews."),
        },
      ]}
    />
  );
}

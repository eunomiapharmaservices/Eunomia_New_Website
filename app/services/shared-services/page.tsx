import type { Metadata } from "next";
import { ServiceSubpage } from "../../../components/ServiceSubpage";
export const metadata: Metadata = {
  title: "Healthcare compliance shared services | Eunomia Pharma Services",
  description:
    "A named healthcare compliance team working within your SOPs, systems and timelines—from materials review to disclosure reporting.",
};
export default function Page() {
  return (
    <ServiceSubpage
      kicker="Shared Services / GBS / GCC"
      title="Your compliance function, run with you."
      serviceTitleFirst
      intro="A named team works inside your SOPs and systems—reviewing materials, clearing activities and filing disclosures. You keep accountability and visibility; we provide the operational capacity."
      services={[
        "Promotional and medical materials review",
        "Activity, event and congress review",
        "HCP engagement and fair market value",
        "Transparency reporting and disclosure",
        "Operational compliance support across markets",
        "Centralised workflow and evidence management",
      ]}
      outcomes={[
        "Dependable capacity without building a full in-house team",
        "Consistent decisions, records and turnaround times",
        "A service that can scale by market, activity or workload",
      ]}
      faqs={[
        {
          question: "What is a healthcare compliance shared service?",
          answer:
            "A dedicated team performs defined compliance activities through agreed processes, systems, service levels and escalation routes while your organisation retains oversight and accountability.",
        },
        {
          question:
            "Can the service work within our existing SOPs and systems?",
          answer:
            "Yes. The operating model is designed around your approved procedures, technology, decision rights and documentation requirements.",
        },
        {
          question: "Which activities can be included?",
          answer:
            "Typical scope includes materials and activity review, events and HCP engagements, fair market value, disclosures, transparency reporting and associated records.",
        },
        {
          question: "Can we start with one process or market?",
          answer:
            "Yes. A shared service can begin with a defined activity, team or market and expand after the workflow and service levels are proven.",
        },
        {
          question: "Who remains accountable for compliance decisions?",
          answer:
            "Your organisation retains ultimate accountability. Roles, delegated authority, review routes and escalations are defined clearly at the outset.",
        },
        {
          question: "How is performance managed?",
          answer:
            "The service can use agreed measures for volume, turnaround, quality, exceptions, escalation and stakeholder experience, supported by regular governance reviews.",
        },
      ]}
    />
  );
}

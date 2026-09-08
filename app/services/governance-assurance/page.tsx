import type { Metadata } from "next";
import { ServiceSubpage } from "../../../components/ServiceSubpage";
export const metadata: Metadata = {
  title: "Healthcare compliance programme design and implementation | Eunomia",
  description:
    "Compliance programme design, audit readiness, policy, monitoring and training with a defensible evidence trail.",
};
export default function Page() {
  return (
    <ServiceSubpage
      accent="orange"
      serviceTitleFirst
      kicker="Healthcare Compliance Programme Design and Implementation"
      title="A practical programme, built to work day to day."
      intro="Frameworks, policies, processes and guidance designed to work in practice—not just on paper. We translate complex requirements into clear, operational ways of working, supported by governance, training and evidence trails that make compliance consistent, repeatable and able to stand up to scrutiny."
      services={[
        "Compliance programme design and implementation",
        "Policy and SOP development",
        "Risk assessment and monitoring",
        "Gap analysis, audits and inspections",
        "CAPA and remediation support",
        "Compliance training",
        "Third-party due diligence",
        "Whistle-blowing",
        "Grants and Funding Management",
        "Conflict of Interest",
        "Legal mandate mapping including ABAC and FCPA",
      ]}
      outcomes={[
        "A practical framework with clear ownership",
        "Inspection-ready records and evidence",
        "Training, monitoring and remediation connected to real risks",
      ]}
      faqs={[
        {
          question: "How do I set up a pharmaceutical compliance programme?",
          answer:
            "Establish governance, roles, practical policies and SOPs, approval and monitoring processes, evidence requirements and role-based training aligned to applicable obligations.",
        },
        {
          question: "What is audit readiness?",
          answer:
            "A continuous state in which documentation, controls, evidence and governance are embedded in routine operations rather than assembled immediately before an audit.",
        },
        {
          question: "What is included in a compliance audit?",
          answer:
            "Scope may include document review, operational testing, interviews, system walkthroughs, risk-rated findings and a practical remediation roadmap.",
        },
        {
          question: "Can you support PMCPA readiness and remediation?",
          answer:
            "Yes. Support can assess governance, procedures, approvals, training, HCP engagement, FMV, transparency, monitoring and certification against relevant expectations.",
        },
        {
          question: "How is an effective CAPA plan structured?",
          answer:
            "It identifies root causes, actions, accountable owners, due dates, dependencies and effectiveness checks, with progress tracked through governance.",
        },
        {
          question: "Can compliance training be tailored?",
          answer:
            "Yes. Training can be adapted by role, market, process and system using classroom, virtual, e-learning or blended delivery with effectiveness measures.",
        },
      ]}
    />
  );
}

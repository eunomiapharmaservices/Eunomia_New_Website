import type { Metadata } from "next";
import { withSocial } from "../../../lib/seo";
import { ServiceSubpage } from "../../../components/ServiceSubpage";
export const metadata: Metadata = withSocial("/services/governance-assurance", {
  alternates: { canonical: "https://www.eunomiapharmaservices.com/services/governance-assurance" },
  title: "Compliance Programme Design & Audit Readiness, UK & EU | Eunomia",
  description: "UK pharmaceutical compliance consultancy for programme design, ABPI Code compliance support, ABAC risk assessment, policies, training and monitoring.",
});
export default function Page() {
  return (
    <ServiceSubpage
      servicePath="/services/governance-assurance"
      heading="Pharmaceutical Compliance Programme Design and Audit Readiness, UK and Europe"
      accent="orange"
      serviceImage={{ src: "/home-compliance-team.jpeg", alt: "Compliance specialists discussing programme design and implementation" }}
      serviceTitleFirst
      kicker="Healthcare Compliance Programme Design and Implementation"
      title="A practical programme, built to work day to day."
      intro="Our UK pharmaceutical compliance consultancy helps pharma and biotech companies design and implement practical healthcare compliance programmes. We support ABPI Code compliance and anti-bribery and anti-corruption (ABAC) controls through policies, risk assessments, training and monitoring tailored to your activities and markets."
      services={[
        "Compliance programme design and implementation",
        "Policy and SOP development",
        "Data Protection",
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
      problem={{
        heading: "Policies on paper are not the same as compliance in practice",
        body: [
          "Many pharmaceutical and biotech companies have policies, SOPs and approval workflows in place, yet still meet audit findings, operational friction or reputational exposure. The cause is rarely a lack of intent. More often it is the gap between how compliance was designed and how the business actually operates.",
          "Regulators do not assess whether a checklist was completed. They assess whether risks were identified, understood and effectively managed, and whether the evidence shows it.",
        ],
      }}
      audience={[
        "Emerging biotechs approaching Phase III, launch and first commercial activity",
        "Small and mid-sized pharma building or refreshing a compliance programme",
        "Companies preparing for an audit, inspection or PMCPA scrutiny",
        "Organisations remediating findings through a structured CAPA plan",
      ]}
      caseStudy={{
        href: "/resources/fair-market-value-methodology",
        label: "HCP engagement governance",
        title: "A defensible fair market value methodology across five markets",
        result: "A five-step FMV calculation framework, objective four-tier HCP classification and rate cards for six stakeholder categories in the UK, Germany, France, Italy and Spain, each traceable to its source data.",
      }}
      why={[
        { title: "Built by practitioners", body: "Led by compliance professionals who have held senior roles inside pharmaceutical companies, not generalist consultants." },
        { title: "Designed around your operations", body: "We start with an as-is and gap analysis and map workflows before drafting, so policies fit how your teams actually work." },
        { title: "Delivered as a project", body: "PRINCE2 and Agile project management, with clear scope, owners and timelines, because compliance without execution is just paperwork." },
        { title: "Local codes in one programme", body: "Named partners across Europe and beyond bring national codes and laws into a single, consistent framework." },
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

import type { Metadata } from "next";
import { languageAlternates } from "../../../data/i18n/locales";
import { withSocial } from "../../../lib/seo";
import { ServiceSubpage } from "../../../components/ServiceSubpage";
import { ukServicePages, UK_SERVICE_BASE } from "../../../data/uk-service-pages";
export const metadata: Metadata = withSocial("/services/governance-assurance", {
  alternates: { canonical: "https://www.eunomiapharmaservices.com/services/governance-assurance", languages: languageAlternates("/services/governance-assurance") },
  title: "Pharmaceutical Compliance Consultancy UK | Eunomia",
  description: "UK pharmaceutical compliance consultancy for programme design, ABPI Code compliance support, ABAC risk assessment, policies, training and monitoring.",
});
export default function Page() {
  return (
    <ServiceSubpage
      servicePath="/services/governance-assurance"
      heading="Pharmaceutical Compliance Consultancy UK"
      accent="orange"
      serviceImage={{ src: "/home-compliance-team.jpeg", alt: "Compliance specialists discussing programme design and implementation" }}
      serviceTitleFirst
      detailSection={
        <section className="section-pad uk-related" aria-labelledby="uk-specialist-title">
          <p className="section-kicker">Specialist services in the UK</p>
          <h2 id="uk-specialist-title">Training, risk assessment, SOPs, audits and FMV</h2>
          <ul>
            {ukServicePages.map((p) => <li key={p.slug}><a href={`${UK_SERVICE_BASE}/${p.slug}`}>{p.heading}</a></li>)}
          </ul>
        </section>
      }
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

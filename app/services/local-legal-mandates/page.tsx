import type { Metadata } from "next";
import { Bot, FileCheck2, Globe2, Scale, ShieldCheck, Sparkles } from "lucide-react";
import { ServiceSubpage } from "../../../components/ServiceSubpage";
import { CoverageMap } from "../../../components/CoverageMap";

const mandates = [
  {
    icon: <ShieldCheck />,
    title: "Anti-bribery and corruption",
    body: "UK Bribery Act 2010—including section 7 failure to prevent and its broad territorial reach—plus the FCPA and OECD Anti-Bribery Convention.",
  },
  {
    icon: <Scale />,
    title: "Promotion of medicines",
    body: "EU Directive 2001/83/EC, including the advertising and inducement framework for medicinal products.",
  },
  {
    icon: <Globe2 />,
    title: "National anti-gift and benefit rules",
    body: "Country-specific requirements including French DMOS as amended by Ordonnance 2017-49, Portuguese INFARMED rules, and relevant Greek, Turkish and Polish regimes.",
  },
  {
    icon: <Sparkles />,
    title: "Failure to prevent fraud",
    body: "The ECCTA 2023 offence, in force since 1 September 2025—a live control gap in many pharmaceutical third-party frameworks.",
  },
  {
    icon: <FileCheck2 />,
    title: "Transparency and disclosure",
    body: "US Sunshine Act / Open Payments, France’s Loi Bertrand, Danish and Portuguese registers, plus the code-based EFPIA disclosure layer—translated into data, process and reporting controls.",
  },
  {
    icon: <Bot />,
    title: "EU AI Act and related regulation",
    body: "Regulation (EU) 2024/1689, read alongside the GDPR, EU Data Act and, where AI forms part of a medical device or diagnostic, the MDR and IVDR—covering risk classification, data governance, transparency, human oversight, technical documentation, post-market monitoring and accountability.",
  },
];
export const metadata: Metadata = {
  title: "Local legal mandates and representation | Eunomia Pharma Services",
  description:
    "In-market compliance representation and local-code support without the need to build in-country headcount.",
};
export default function Page() {
  return (
    <ServiceSubpage
      accent="teal"
      serviceTitleFirst
      kicker="Local Legal Mandates and Representation"
      title="In-market presence without in-country headcount."
      intro="Entering a market often requires someone who understands the local code, association expectations and regulator. We provide named local support and translate mandates into workable ownership, review routes, evidence and reporting."
      services={[
        "Responsible person and local representative support",
        "Local code interpretation and queries",
        "Association liaison and self-regulatory filings",
        "Cross-border HCP engagement review",
        "Market-entry compliance assessment",
        "Local transparency and disclosure requirements",
      ]}
      outcomes={[
        "Local context brought into global processes",
        "Clear ownership and escalation by market",
        "Faster market entry without unnecessary fixed overhead",
      ]}
      detailSection={
        <>
        <section className="local-coverage section-pad" aria-labelledby="local-coverage-title">
          <div className="local-coverage-heading">
            <p className="section-kicker">Named local expertise</p>
            <h2 id="local-coverage-title">Local context, connected globally.</h2>
            <p>Explore our coverage. Select a red partner marker to open that compliance officer&apos;s biography on the Team page.</p>
          </div>
          <CoverageMap showOfficers />
        </section>
        <section className="mandates section-pad" id="mandates">
          <div className="mandate-intro">
            <p className="section-kicker">Legal mandates</p>
            <h2>
              Designed around the rules that sit behind the <em>process</em>…
            </h2>
            <p>
              We map legal and self-regulatory requirements into practical
              controls, review routes, evidence and ownership.
            </p>
          </div>
          <div className="mandate-list">
            {mandates.map((mandate) => (
              <article key={mandate.title}>
                <span>{mandate.icon}</span>
                <div>
                  <h3>{mandate.title}</h3>
                  <p>{mandate.body}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mandate-sources">
            <h3>Primary references</h3>
            <div className="source-links">
              <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32001L0083" target="_blank" rel="noreferrer">EU Directive</a>
              <a href="https://www.legislation.gov.uk/ukpga/2010/23/section/7" target="_blank" rel="noreferrer">UK Bribery Act</a>
              <a href="https://www.gov.uk/government/publications/offence-of-failure-to-prevent-fraud-introduced-by-eccta" target="_blank" rel="noreferrer">ECCTA guidance</a>
              <a href="https://www.cms.gov/priorities/key-initiatives/open-payments/law-policy" target="_blank" rel="noreferrer">Open Payments</a>
              <a href="https://www.efpia.eu/relationships-code/the-efpia-code/" target="_blank" rel="noreferrer">EFPIA Code</a>
              <a href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj" target="_blank" rel="noreferrer">EU AI Act</a>
              <a href="https://eur-lex.europa.eu/eli/reg/2016/679/oj" target="_blank" rel="noreferrer">GDPR</a>
              <a href="https://eur-lex.europa.eu/eli/reg/2023/2854/oj" target="_blank" rel="noreferrer">EU Data Act</a>
              <a href="https://eur-lex.europa.eu/eli/reg/2017/745/oj" target="_blank" rel="noreferrer">MDR</a>
              <a href="https://eur-lex.europa.eu/eli/reg/2017/746/oj" target="_blank" rel="noreferrer">IVDR</a>
            </div>
          </div>
          <p className="legal-note">
            This overview is informational and does not constitute legal advice.
            Scope and application should be confirmed for the organisation,
            market, activity and counterparty in question.
          </p>
        </section>
        </>
      }
      faqs={[
        {
          question: "What does local compliance representation mean?",
          answer:
            "It means providing a named, market-aware compliance contact who can interpret local requirements, support queries and connect local obligations to your global governance model.",
        },
        {
          question: "Which markets can Eunomia support?",
          answer:
            "Coverage includes EU5, more than 20 European markets, MENA, the United States, South America and Asia. Exact scope is confirmed for each engagement.",
        },
        {
          question: "Can you interpret country-specific industry codes?",
          answer:
            "Yes. Support can cover local legal requirements, industry codes, association expectations and the practical implications for activities and documentation.",
        },
        {
          question: "Do we need to open a local office?",
          answer:
            "Not necessarily. The appropriate model depends on the legal obligation and activity, but many compliance-support and representation needs can be met without permanent local headcount.",
        },
        {
          question: "Can you support cross-border HCP engagements?",
          answer:
            "Yes. We can identify relevant home- and host-country requirements, establish the review route and document the rationale and approvals.",
        },
        {
          question: "How does local support connect to our global team?",
          answer:
            "Named contacts, decision rights, escalation paths and reporting are agreed so local advice feeds into a consistent global operating model.",
        },
      ]}
    />
  );
}

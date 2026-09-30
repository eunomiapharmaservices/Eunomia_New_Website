// "Rules behind this service" blocks for service pages. Each summary restates
// the linked official source (the same sources used on /legal-mandates and in
// article source notes). Add new facts only with a source link.

export type Framework = { title: string; body: string; href: string; label: string };
export type ServiceFrameworks = {
  intro: string;
  frameworks: Framework[];
  steps: { title: string; body: string }[];
  resources: { label: string; href: string }[];
};

const efpia: Framework = {
  title: "EFPIA Code of Practice",
  body: "Sets European standards for interactions with healthcare professionals, healthcare organisations and patient organisations, including annual disclosure of transfers of value within six months of the end of each calendar year. Member associations transpose it into national codes and may adopt stricter standards.",
  href: "https://www.efpia.eu/relationships-code/the-efpia-code/",
  label: "EFPIA Code",
};
const abpi: Framework = {
  title: "2024 ABPI Code of Practice",
  body: "Took effect on 1 October 2024, with a transition period to 31 December 2024, and is administered by the PMCPA independently of the ABPI. Clause 24 addresses contracted services, including legitimate need, selection, advance contracting and remuneration reflecting fair market value.",
  href: "https://www.pmcpa.org.uk/the-code/2024-abpi-code-of-practice-launched-with-a-new-constitution-and-procedure-for-the-pmcpa/",
  label: "PMCPA: 2024 ABPI Code",
};
const bribery: Framework = {
  title: "UK Bribery Act 2010, section 7",
  body: "A commercial organisation can be liable for failing to prevent bribery by persons associated with it, such as agents and service providers. Having adequate procedures in place is a defence.",
  href: "https://www.legislation.gov.uk/ukpga/2010/23/section/7",
  label: "Bribery Act, s.7",
};
const eccta: Framework = {
  title: "Failure to prevent fraud (ECCTA 2023)",
  body: "The corporate offence introduced by the Economic Crime and Corporate Transparency Act 2023 has applied since 1 September 2025, and belongs in the assessment of third-party and commercial controls.",
  href: "https://www.gov.uk/government/publications/offence-of-failure-to-prevent-fraud-introduced-by-eccta",
  label: "ECCTA guidance",
};
const sfo: Framework = {
  title: "SFO guidance on compliance programmes",
  body: "Explains how the UK Serious Fraud Office assesses whether a corporate compliance programme works in practice. It is enforcement guidance, not a pharmaceutical certification standard.",
  href: "https://www.gov.uk/government/publications/sfo-guidance-on-evaluating-a-corporate-compliance-programme/sfo-guidance-on-evaluating-a-corporate-compliance-programme",
  label: "SFO guidance",
};
const disclosureUk: Framework = {
  title: "Disclosure UK",
  body: "The ABPI’s public database of industry payments to UK healthcare professionals and organisations, part of a Europe-wide transparency initiative.",
  href: "https://www.abpi.org.uk/reputation/disclosure-uk/",
  label: "Disclosure UK",
};
const aiAct: Framework = {
  title: "EU AI Act",
  body: "Regulation (EU) 2024/1689, read alongside the GDPR, the EU Data Act and, where AI forms part of a medical device or diagnostic, the MDR and IVDR.",
  href: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
  label: "EU AI Act",
};
const gdpr: Framework = {
  title: "GDPR",
  body: "Regulation (EU) 2016/679 governs processing of personal data, including healthcare professionals’ data held for engagement, payment and disclosure purposes.",
  href: "https://eur-lex.europa.eu/eli/reg/2016/679/oj",
  label: "GDPR",
};
const directive: Framework = {
  title: "EU Directive 2001/83/EC",
  body: "The EU code for medicinal products for human use, including the advertising and inducement framework that national laws implement.",
  href: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32001L0083",
  label: "Directive 2001/83/EC",
};
const blueGuide: Framework = {
  title: "MHRA Blue Guide",
  body: "The MHRA’s guidance on how it applies the UK legal requirements for advertising medicines in Part 14 of the Human Medicines Regulations 2012.",
  href: "https://www.gov.uk/government/publications/blue-guide-advertising-and-promoting-medicines",
  label: "MHRA Blue Guide",
};

const checklists = [
  { label: "Pharma Compliance Readiness Checklist", href: "/resources/checklists/pharma-compliance-readiness-checklist" },
  { label: "EFPIA Code Self-Assessment Checklist", href: "/resources/checklists/efpia-code-self-assessment-checklist" },
];

export const serviceFrameworks: Record<string, ServiceFrameworks> = {
  "/services/governance-assurance": {
    intro: "A UK programme is usually assessed against both industry codes and the law. These are the main frameworks we design controls around; the right set depends on your activities and markets.",
    frameworks: [abpi, bribery, eccta, sfo],
    steps: [
      { title: "Scope", body: "Agree the activities, markets and obligations in scope, and the people who own them." },
      { title: "Assess", body: "Review existing policies, approvals, records and training against those obligations, and risk-rate the gaps." },
      { title: "Design and implement", body: "Build or update policies, SOPs, approval routes, evidence requirements and role-based training." },
      { title: "Monitor and improve", body: "Set up monitoring, CAPA and governance reporting so the programme is tested and improved in routine operation." },
    ],
    resources: [...checklists, { label: "Compliance programmes, audits and training articles", href: "/resources/category/compliance-programmes" }],
  },
  "/services/automation-of-compliance-operations": {
    intro: "Automated workflows still have to meet the underlying rules. These frameworks shape what the data, reviews and records in an automated process must show.",
    frameworks: [efpia, disclosureUk, gdpr, aiAct],
    steps: [
      { title: "Map", body: "Document the current process, decision points, owners and the evidence each step must produce." },
      { title: "Define", body: "Agree requirements with compliance and technical stakeholders, including human review and escalation." },
      { title: "Build", body: "Configure workflows, reporting and connected data in your existing technology, such as SharePoint and Power BI." },
      { title: "Hand over", body: "Test with real cases, train users and agree ownership, change control and monitoring." },
    ],
    resources: [{ label: "Disclosure preparation and methodological-note guide", href: "/resources/disclosure-preparation-checklist" }, { label: "Promotional review workflow guide", href: "/resources/promotional-review-workflow" }, { label: "EFPIA Code Self-Assessment Checklist", href: "/resources/checklists/efpia-code-self-assessment-checklist" }, { label: "AI and digital compliance articles", href: "/resources/category/ai-digital-compliance" }],
  },
  "/services/local-legal-mandates": {
    intro: "Local support sits between European frameworks and national rules. These are the European layers; our country guides cover the national detail.",
    frameworks: [directive, efpia, bribery],
    steps: [
      { title: "Define the activity", body: "Confirm the countries, planned activities and the entities and people involved." },
      { title: "Map local requirements", body: "Identify the national law and industry code that apply, and where they differ from your global policy." },
      { title: "Agree responsibilities", body: "Confirm named contacts, decision rights, review routes and any formal role for the engagement." },
      { title: "Operate and escalate", body: "Review activities as they arise and escalate questions through the agreed routes to your central team." },
    ],
    resources: [{ label: "Country compliance guides", href: "/legal-mandates" }, { label: "Our local compliance partners", href: "/team" }, { label: "EFPIA Code Self-Assessment Checklist", href: "/resources/checklists/efpia-code-self-assessment-checklist" }],
  },
  "/services/shared-services": {
    intro: "Shared-service reviewers work to the same rules as your in-house team. These are the frameworks most often behind materials review, HCP engagement and disclosure work.",
    frameworks: [blueGuide, abpi, efpia, disclosureUk],
    steps: [
      { title: "Agree the service", body: "Define the activities, volumes, review responsibilities, service measures and escalation routes." },
      { title: "Onboard", body: "Align with your SOPs, systems, templates and approval rights before reviews begin." },
      { title: "Deliver", body: "Carry out the agreed reviews, assessments and reporting within your processes." },
      { title: "Review performance", body: "Report volumes, turnaround, exceptions and recurring issues through regular governance." },
    ],
    resources: [{ label: "Disclosure preparation and methodological-note guide", href: "/resources/disclosure-preparation-checklist" }, { label: "Promotional review workflow guide", href: "/resources/promotional-review-workflow" }, { label: "Materials-review case study", href: "/resources/materials-review-shared-service-case-study" }, { label: "Fair market value case study", href: "/resources/fair-market-value-methodology" }, { label: "HCP engagement and transparency articles", href: "/resources/category/hcp-engagement-transparency" }],
  },
};


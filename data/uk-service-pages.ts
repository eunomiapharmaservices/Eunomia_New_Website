// Specialist UK service pages under Programme Design and Implementation.
// Deliberately not in the Services dropdown; linked from the parent service
// page, the sitemap and llms.txt. Legal and code statements restate the
// linked official sources (checked September 2026); delivery descriptions
// restate what the site already says about Eunomia's approach.
import type { Framework } from "./service-frameworks";

type Faq = { question: string; answer: string };
export type UkServicePage = {
  slug: string;
  topic: string;
  metaTitle: string;
  metaDescription: string;
  heading: string;
  kicker: string;
  title: string;
  intro: string;
  image: { src: string; alt: string };
  services: string[];
  outcomes: string[];
  faqs: Faq[];
  positioning: {
    problemTitle: string; problem: string; audience: string; delivery: string;
    difference: string; evidenceLabel: string; evidenceTitle: string; evidence: string; href: string;
  };
  frameworks: {
    intro: string;
    frameworks: Framework[];
    steps: { title: string; body: string }[];
    resources: { label: string; href: string }[];
  };
};

export const UK_SERVICE_BASE = "/services/governance-assurance";

const abpiTraining: Framework = {
  title: "ABPI Code, Clause 9: Training",
  body: "All relevant personnel, including representatives, staff and contractors involved in preparing or approving material or activities covered by the Code, must be fully conversant with the Code and the relevant laws and regulations. Representatives must pass an appropriate accredited examination within two years of starting in the role.",
  href: "https://www.pmcpa.org.uk/the-code/2024-interactive-abpi-code-of-practice/clause-9-training/",
  label: "PMCPA: Clause 9",
};
const briberyTraining: Framework = {
  title: "Bribery Act guidance, Principle 5",
  body: "The Ministry of Justice guidance on adequate procedures expects bribery prevention policies and procedures to be embedded and understood through communication, including training, proportionate to the risks the organisation faces.",
  href: "https://www.gov.uk/government/publications/bribery-act-2010-guidance",
  label: "MoJ Bribery Act guidance",
};
const briberyRisk: Framework = {
  title: "Bribery Act guidance, Principle 3",
  body: "A commercial organisation assesses the nature and extent of its exposure to potential external and internal risks of bribery by persons associated with it. The guidance describes the assessment as periodic, informed and documented.",
  href: "https://www.gov.uk/government/publications/bribery-act-2010-guidance",
  label: "MoJ Bribery Act guidance",
};
const ecctaRisk: Framework = {
  title: "Failure to prevent fraud guidance",
  body: "Guidance on the ECCTA 2023 offence, in force since 1 September 2025, lists risk assessment among six principles and describes the fraud risk assessment as dynamic, documented and kept under regular review.",
  href: "https://www.gov.uk/government/publications/offence-of-failure-to-prevent-fraud-introduced-by-eccta",
  label: "GOV.UK: ECCTA guidance",
};
const ecctaPrinciples: Framework = {
  title: "Failure to prevent fraud guidance",
  body: "The ECCTA 2023 guidance sets out six principles: top level commitment, risk assessment, proportionate risk-based prevention procedures, due diligence, communication (including training), and monitoring and review.",
  href: "https://www.gov.uk/government/publications/offence-of-failure-to-prevent-fraud-introduced-by-eccta",
  label: "GOV.UK: ECCTA guidance",
};
const abpiCert: Framework = {
  title: "ABPI Code, Clause 8: Certification",
  body: "Promotional material must not be issued unless its final form has been certified by one person on behalf of the company. Certificates and accompanying information must be preserved for at least three years after final use and produced on request from the MHRA or the PMCPA.",
  href: "https://www.pmcpa.org.uk/the-code/2024-interactive-abpi-code-of-practice/clause-8-certification-and-examination/",
  label: "PMCPA: Clause 8",
};
const abpiContracted: Framework = {
  title: "ABPI Code, Clause 24: Contracted services",
  body: "For arrangements within the Code’s scope, Clause 24 addresses legitimate need, selection, advance written contracting and reasonable remuneration reflecting fair market value, all of which an SOP has to turn into steps and records.",
  href: "https://www.pmcpa.org.uk/the-code/2024-interactive-abpi-code-of-practice/clause-24-contracted-services/",
  label: "PMCPA: Clause 24",
};
const pmcpaAudit: Framework = {
  title: "PMCPA audits of company procedures",
  body: "Under paragraph 12.4 of the PMCPA Constitution and Procedure, where the Code of Practice Appeal Board rules that there is a breach of the Code, it may require an audit of the company’s procedures in relation to the Code, carried out by the Authority.",
  href: "https://pmcpa.org.uk/the-code/2024-interactive-abpi-code-of-practice/prescription-medicines-code-of-practice-authority-constitution-and-procedure/12-code-of-practice-appeal-board-rulings-and-sanctions/",
  label: "PMCPA: paragraph 12.4",
};
const sfo: Framework = {
  title: "SFO guidance on compliance programmes",
  body: "Explains how the UK Serious Fraud Office assesses whether a corporate compliance programme works in practice. It is enforcement guidance, not a pharmaceutical certification standard.",
  href: "https://www.gov.uk/government/publications/sfo-guidance-on-evaluating-a-corporate-compliance-programme/sfo-guidance-on-evaluating-a-corporate-compliance-programme",
  label: "SFO guidance",
};
const efpiaRecords: Framework = {
  title: "EFPIA Code disclosure records",
  body: "Transfers of value are disclosed annually, within six months of the end of each calendar year. Disclosures stay public for at least three years and records are kept for at least five, unless national law requires otherwise.",
  href: "https://www.efpia.eu/relationships-code/the-efpia-code/",
  label: "EFPIA Code",
};

const readiness = { label: "Pharma Compliance Readiness Checklist", href: "/resources/checklists/pharma-compliance-readiness-checklist" };
const parent = { label: "Programme Design and Implementation", href: UK_SERVICE_BASE };

export const ukServicePages: UkServicePage[] = [
{
  "slug": "fmv-consulting",
  "topic": "fair market value assessment",
  "metaTitle": "FMV Consulting Services for Pharma UK | Eunomia",
  "metaDescription": "FMV consulting for UK pharma and biotech: HCP compensation methodology, benchmarking review, tiering, rate-card governance and engagement approval workflows.",
  "heading": "FMV Consulting Services for Pharma in the UK",
  "kicker": "Fair Market Value Consulting",
  "title": "A documented basis for HCP compensation.",
  "intro": "Eunomia helps pharmaceutical and biotech teams develop and operationalise fair market value (FMV) frameworks for healthcare professional engagements. Our UK FMV consulting support connects compensation methodology, documented expertise, engagement scope and approval records with the way your teams contract and pay for services.",
  "image": {
    "src": "/eunomia-workflow.png",
    "alt": "Compliance specialists reviewing an engagement workflow"
  },
  "services": [
    "FMV methodology design and review",
    "Benchmark source assessment and documented assumptions",
    "HCP tiering criteria and supporting evidence",
    "Rate-card governance and review processes",
    "Engagement-level fee rationale and exception workflows",
    "FMV policies, templates and stakeholder training",
    "Connections between contracts, approvals and payment records"
  ],
  "outcomes": [
    "A traceable explanation of compensation decisions",
    "Consistent assessment and escalation across teams",
    "An FMV framework connected to everyday engagement workflows"
  ],
  "faqs": [
    {
      "question": "What does pharma FMV consulting cover?",
      "answer": "The scope can include methodology, source-data review, documented tiering, rate-card governance and engagement-level assessment. We agree the countries, stakeholder groups, activities and deliverables before work begins."
    },
    {
      "question": "Is there one universal UK HCP hourly rate?",
      "answer": "This service does not provide a universal rate. An assessment needs a documented methodology and relevant evidence for the specific services and market. The accompanying worksheet records the rationale and approvals; it does not calculate or certify an FMV rate."
    },
    {
      "question": "Can you review an existing FMV framework?",
      "answer": "Yes. We can review the methodology, evidence, tiering approach, exceptions and operating process, then agree priorities for updating and implementing the framework."
    },
    {
      "question": "Does an FMV assessment approve the whole engagement?",
      "answer": "No. Compensation is one part of an engagement decision. The applicable requirements, business need, selection, contracting and other controls still need their own review."
    },
    {
      "question": "Can FMV workflows be automated?",
      "answer": "Defined steps such as collecting evidence, routing approvals, recording exceptions and reporting can be supported through controlled workflows. Accountable reviewers retain the decisions and approved methodology."
    },
    {
      "question": "How do we start?",
      "answer": "Bring your current methodology, engagement types, countries, rate cards and known concerns. We agree a focused review or a wider framework project. Share confidential records only through an agreed secure channel."
    }
  ],
  "positioning": {
    "problemTitle": "When compensation decisions are difficult to explain",
    "problem": "Different spreadsheets, inconsistent tiering and undocumented exceptions can leave teams unable to reconstruct why a fee was selected. A rate card alone does not explain the service, the time commitment or the evidence behind a decision.",
    "audience": "Compliance, Medical Affairs, Legal, Finance and operational teams in emerging biotech and established pharmaceutical companies. Support can be scoped for a UK engagement model or a multi-market framework with country-specific inputs.",
    "delivery": "We review the existing approach and identify the evidence and decisions needed for a usable FMV framework. Agreed outputs can include a methodology document, tiering criteria, an assessment template, approval responsibilities and an implementation plan.",
    "difference": "Our focus includes operational delivery: how requests arrive, who checks the evidence, how exceptions are escalated and how the approved rationale remains connected to the contract and payment record. Benchmark availability and licensing are confirmed during scoping.",
    "evidenceLabel": "Related project",
    "evidenceTitle": "Fair Market Value Methodology for HCP Compensation",
    "evidence": "Read the published project account for an example of methodology, tiering and rate-card work. The case study is not a public rate schedule or a guarantee of future results.",
    "href": "/resources/fair-market-value-methodology"
  },
  "frameworks": {
    "intro": "Confirm the applicable code and market scope before using an FMV process. The following UK reference informs the engagement review.",
    "frameworks": [
      {
        "title": "ABPI Code, Clause 24: Contracted services",
        "body": "For arrangements within its scope, Clause 24.2 connects documented need and selection, advance written agreement, appropriate records and reasonable remuneration reflecting fair market value. It also addresses the risk of using an engagement as an inducement.",
        "href": "https://www.pmcpa.org.uk/the-code/2024-interactive-abpi-code-of-practice/clause-24-contracted-services/",
        "label": "PMCPA: Clause 24"
      }
    ],
    "steps": [
      {
        "title": "Agree scope",
        "body": "Identify markets, stakeholder groups, engagement types and the decisions the framework must support."
      },
      {
        "title": "Review evidence",
        "body": "Assess existing sources, assumptions, tiering and gaps against the agreed methodology."
      },
      {
        "title": "Design controls",
        "body": "Define documentation, responsibilities, exception handling and review triggers."
      },
      {
        "title": "Implement",
        "body": "Pilot templates and workflows, train users and agree ongoing ownership."
      }
    ],
    "resources": [
      {
        "label": "HCP FMV assessment guide and worksheet",
        "href": "/resources/hcp-fmv-assessment"
      },
      {
        "label": "FMV methodology case study",
        "href": "/resources/fair-market-value-methodology"
      }
    ]
  }
},
  {
    slug: "pharma-compliance-training",
    topic: "compliance training",
    metaTitle: "Pharmaceutical Compliance Training UK | Eunomia",
    metaDescription: "Bespoke pharmaceutical compliance training in the UK: ABPI Code, anti-bribery and HCP engagement training tailored by role, with scenarios and effectiveness measures.",
    heading: "Pharmaceutical Compliance Training in the UK",
    kicker: "Pharmaceutical Compliance Training",
    title: "Training that changes decisions, not just completion rates.",
    intro: "Eunomia designs and delivers bespoke compliance training for pharmaceutical and biotech teams in the UK. Training covers the ABPI Code, anti-bribery and anti-corruption, HCP and HCO engagement and your own policies, tailored by role, market, process and system, with classroom, virtual, e-learning or blended delivery.",
    image: { src: "/home-compliance-team.jpeg", alt: "Compliance team in a training workshop" },
    services: [
      "ABPI Code of Practice training",
      "Anti-bribery and anti-corruption (ABAC) training",
      "HCP and HCO engagement, hospitality and fair market value",
      "Materials review and certification process training",
      "Transparency and disclosure training",
      "Policy and SOP roll-out training",
      "Scenario workshops based on real PMCPA cases",
      "E-learning, virtual, classroom and blended programmes",
      "Training needs analysis and effectiveness measurement",
    ],
    outcomes: [
      "Teams who can apply the Code to the decisions they actually make",
      "Training records that show who was trained, on what and when",
      "Measures of behaviour change, not only attendance",
    ],
    faqs: [
      { question: "Does the ABPI Code require compliance training?", answer: "Yes. Clause 9.1 of the 2024 ABPI Code requires all relevant personnel, including contractors, involved in preparing or approving material or activities covered by the Code to be fully conversant with the Code and the relevant laws and regulations. Clause 9.4 requires representatives to pass an appropriate accredited examination within two years of starting in the role." },
      { question: "Can the training be tailored to our teams?", answer: "Yes. Training can be adapted by role, market, process and system, and delivered in classroom, virtual, e-learning or blended formats with effectiveness measures." },
      { question: "What makes compliance training effective?", answer: "Content tailored to each role’s real decisions, scenarios and case studies rather than only e-learning, short focused modules, and measures that show whether behaviour changes, not just completion rates." },
      { question: "Do you use real PMCPA cases?", answer: "Yes. Scenario-based sessions grounded in real rulings help teams see how role clarity, escalation and cross-functional accountability work in practice." },
      { question: "Is anti-bribery training part of adequate procedures?", answer: "The Ministry of Justice guidance on the Bribery Act 2010 lists communication, including training, as one of six principles of adequate procedures, proportionate to the risks the organisation faces." },
      { question: "Do you train teams outside the UK?", answer: "Yes. Training can be mapped to the codes and markets each role works under, with input from our local compliance partners across Europe and other regions." },
    ],
    positioning: {
      problemTitle: "Why checkbox training fails",
      problem: "Generic e-learning struggles with complex content, information overload and relevance to each role. People complete the module but still do not know who owns a decision, when to escalate or how the Code applies to the material or meeting in front of them. We design training around those decisions.",
      audience: "For compliance, medical, commercial and market access teams in pharmaceutical and biotech companies operating in the UK, from a first ABPI Code induction for a growing biotech to a refresh of an established global programme.",
      delivery: "We start with a training needs analysis against your activities, codes and markets, then build role-based modules with practical scenarios. Delivery can be classroom, virtual, e-learning or blended. We agree how effectiveness will be measured and how records will be kept.",
      difference: "Our trainers are compliance practitioners who work with these processes every day, so sessions use the situations your teams actually face. Training connects to your policies, SOPs and monitoring, so what people learn matches how the work is done.",
      evidenceLabel: "Related article",
      evidenceTitle: "What makes healthcare compliance training effective",
      evidence: "Our article explains why training should aim for the ‘apply’ level of Bloom’s taxonomy, use a mix of formats and be tailored to roles, so people can use the EFPIA or ABPI Code in real situations such as reviewing materials or planning HCP events.",
      href: "/resources/articles/what-makes-healthcare-compliance-training-effective",
    },
    frameworks: {
      intro: "UK pharmaceutical training obligations come from the industry code and from anti-bribery and fraud guidance. These are the main frameworks we design training around.",
      frameworks: [abpiTraining, briberyTraining, ecctaPrinciples],
      steps: [
        { title: "Analyse needs", body: "Map roles to the activities, codes and markets they work under, and find the gaps in current training." },
        { title: "Design", body: "Build role-based modules with scenarios drawn from real decisions and PMCPA cases." },
        { title: "Deliver", body: "Run classroom, virtual, e-learning or blended sessions, and keep records of who was trained on what." },
        { title: "Measure", body: "Check whether behaviour changes, using agreed measures, and refresh content as rules and risks change." },
      ],
      resources: [
        { label: "Role-based compliance training matrix", href: "/resources/role-based-compliance-training-matrix" },
        { label: "Compliance training beyond the Code", href: "/resources/articles/compliance-training-beyond-the-code" },
        { label: "Why bespoke compliance training matters", href: "/resources/articles/importance-of-bespoke-healthcare-compliance-training-for-pharmaceutical-industry" },
        readiness,
        parent,
      ],
    },
  },
  {
    slug: "pharma-risk-assessment",
    topic: "risk assessment",
    metaTitle: "Pharmaceutical Risk Assessment Services UK | Eunomia",
    metaDescription: "Pharmaceutical compliance risk assessment in the UK: ABAC, fraud and commercial compliance risk assessments with documented controls, owners and follow-up.",
    heading: "Pharmaceutical Risk Assessment Services in the UK",
    kicker: "Pharmaceutical Risk Assessment",
    title: "A risk assessment that drives action, not just a score.",
    intro: "Eunomia helps pharmaceutical and biotech companies in the UK assess commercial compliance risk: anti-bribery and anti-corruption, fraud, HCP and HCO engagement, promotion, third parties and disclosure. We build risk assessments that are documented, prioritised and connected to named owners, controls and follow-up.",
    image: { src: "/compliance-collaboration.png", alt: "Compliance specialists reviewing a risk register" },
    services: [
      "Anti-bribery and anti-corruption (ABAC) risk assessment",
      "Failure to prevent fraud risk assessment",
      "Commercial compliance risk assessment by activity and market",
      "Third-party and distributor risk assessment",
      "Risk register design and scoring methodology",
      "Control mapping and evidence testing",
      "Prioritised action plans with owners and dates",
      "Periodic review and update of the assessment",
    ],
    outcomes: [
      "A documented assessment that explains why each risk is rated as it is",
      "Controls and evidence mapped to the highest risks",
      "Actions with accountable owners, target dates and follow-up checks",
    ],
    faqs: [
      { question: "Is a bribery risk assessment expected in the UK?", answer: "The Ministry of Justice guidance on the Bribery Act 2010 lists risk assessment as one of six principles of adequate procedures. It describes the assessment as periodic, informed and documented." },
      { question: "Does the failure to prevent fraud offence need a separate risk assessment?", answer: "The ECCTA 2023 guidance lists risk assessment among its six principles and describes a fraud risk assessment as dynamic, documented and kept under regular review. It notes that organisations may extend existing risk assessments to cover the fraud risks in scope." },
      { question: "Where does a pharma compliance risk assessment start?", answer: "With the company’s actual activities, markets and third parties. Describe what could go wrong, assess the exposure and existing controls, then prioritise gaps with named owners and completion dates." },
      { question: "Is a risk score enough?", answer: "No. A useful risk register explains decisions and drives action. A score alone does not show that a risk is controlled; the assessment should identify the control, its owner and evidence that it operates in practice." },
      { question: "How often should the assessment be reviewed?", answer: "When activities or risks change, and on a regular cycle. The fraud guidance describes the assessment as kept under regular review, and the bribery guidance as periodic." },
      { question: "Can you cover markets outside the UK?", answer: "Yes. The assessment can be structured by country, with input from our local compliance partners where national law and codes differ." },
    ],
    positioning: {
      problemTitle: "Turn a risk register into decisions",
      problem: "Many risk assessments are a spreadsheet of scores that nobody uses. They do not say which activity creates the risk, which control addresses it or who is responsible for fixing a gap. We build assessments that start from real activities and end in owned actions.",
      audience: "For compliance and leadership teams in pharmaceutical and biotech companies in the UK: a first ABAC risk assessment, an extension to cover the failure to prevent fraud offence, or a refresh of an established assessment that has stopped reflecting the business.",
      delivery: "We record each activity, country, stakeholder group and specific risk scenario; identify existing controls, their owners and the evidence that they work; rate likelihood and impact consistently; and agree a response with an accountable owner, a target date and a check that the action worked.",
      difference: "We connect the assessment to the programme around it: policies, SOPs, training, monitoring and third-party due diligence. That means the highest risks lead directly to changes in how work is done, not a report on a shelf.",
      evidenceLabel: "Related article",
      evidenceTitle: "Building a practical pharma compliance risk assessment",
      evidence: "Our article on risk assessment frameworks for small and mid-sized pharma sets out how to move from activity and exposure, through existing controls and evidence, to priority, response and follow-up.",
      href: "/resources/articles/pharma-compliance-risk-assessment-framework",
    },
    frameworks: {
      intro: "In the UK, risk assessment sits at the heart of both the anti-bribery and the failure to prevent fraud guidance. These are the frameworks we build the assessment around.",
      frameworks: [briberyRisk, ecctaRisk, sfo],
      steps: [
        { title: "Scope", body: "List the activities, markets, stakeholders and third parties to assess." },
        { title: "Assess", body: "Describe risk scenarios, test existing controls and evidence, and rate likelihood and impact." },
        { title: "Prioritise", body: "Agree responses for the highest risks with accountable owners and target dates." },
        { title: "Review", body: "Check that actions worked and update the assessment when the business or risks change." },
      ],
      resources: [
        { label: "Risk assessment in healthcare and why it matters", href: "/resources/articles/risk-assessment-in-healthcare-and-its-importance" },
        { label: "Third-party risk management", href: "/resources/articles/from-risk-to-resilience-why-third-party-risk-management-is-pharmas-biggest-competitive-advantage" },
        readiness,
        parent,
      ],
    },
  },
  {
    slug: "sop-policy-development",
    topic: "SOPs and policies",
    metaTitle: "SOP and Policy Development for Pharma UK | Eunomia",
    metaDescription: "Compliance SOP and policy development for pharma in the UK: practical policies and SOPs for promotion, HCP engagement, certification and disclosure, mapped to real workflows.",
    heading: "SOP and Policy Development for Pharma in the UK",
    kicker: "SOP and Policy Development",
    title: "Policies and SOPs your teams can actually follow.",
    intro: "Eunomia writes and updates compliance policies and standard operating procedures for pharmaceutical and biotech companies in the UK. We start from how your teams work, benchmark against the ABPI Code, EFPIA requirements and UK law, and draft lean, practical documents with clear owners, steps, records and review cycles.",
    image: { src: "/eunomia-workflow.png", alt: "Workflow diagram for a compliance procedure" },
    services: [
      "Compliance policy framework and hierarchy",
      "Promotional materials review and certification SOPs",
      "HCP and HCO engagement and contracted services SOPs",
      "Events, meetings and hospitality SOPs",
      "Grants, donations and sponsorship SOPs",
      "Transparency and disclosure SOPs",
      "Anti-bribery, conflicts of interest and speak-up policies",
      "Harmonising SOPs across markets, with documented local variations",
      "Policy and SOP roll-out, training and review cycles",
    ],
    outcomes: [
      "Documents mapped to real workflows, so they can be followed and enforced",
      "Clear owners, approval steps and records for each process",
      "A review cycle that keeps documents current as rules change",
    ],
    faqs: [
      { question: "How do you write an effective pharmaceutical compliance policy?", answer: "Start with structure, not a blank document. We analyse current documentation, workflows and governance; benchmark against the applicable codes and regulations; map the policy to real workflows; and draft lean text with purpose and scope, principles, roles, process, monitoring and links to SOPs." },
      { question: "Which UK processes most need SOPs?", answer: "Usually promotional materials review and certification, HCP engagement and contracted services, events and hospitality, grants and donations, and disclosure. For example, Clause 8 of the ABPI Code requires promotional material to be certified in its final form and certificates to be kept for at least three years after final use." },
      { question: "Can you update SOPs for the 2024 ABPI Code?", answer: "Yes. We review existing SOPs against the current Code and your activities, and update the steps, roles and records that need to change." },
      { question: "Can one set of SOPs work across several countries?", answer: "Yes. A common global SOP with documented local variations is often clearer than separate documents per country. Our local partners help identify where national rules differ." },
      { question: "Do you help roll the documents out?", answer: "Yes. Roll-out can include training, templates, workflow configuration and a review cycle with named owners." },
    ],
    positioning: {
      problemTitle: "Close the gap between the document and the work",
      problem: "Policies copied from templates or from a previous company rarely match how teams actually operate. People work around them, and the evidence the procedure promises is never created. We write documents from the workflow outwards.",
      audience: "For compliance and quality leaders in pharmaceutical and biotech companies in the UK: a first policy and SOP set for a company preparing to launch, a Code update, or harmonisation across markets after growth or an acquisition.",
      delivery: "We run an as-is analysis of documents, workflows and governance, a gap analysis against the applicable codes and law, and workflow mapping with the people who do the work. Drafts are reviewed with process owners before approval, and we can support roll-out and training.",
      difference: "We write procedures as practitioners who operate them, including in our own shared-service work. That keeps documents short, practical and connected to the templates, systems and records teams use.",
      evidenceLabel: "Related article",
      evidenceTitle: "Crafting a high-quality pharmaceutical compliance policy",
      evidence: "Our guide sets out Eunomia’s approach: as-is analysis, gap analysis against EFPIA, EMA, ABPI and EU requirements, workflow mapping, and tailored drafting with clear purpose, roles, process, monitoring and links to SOPs.",
      href: "/resources/articles/a-definitive-guide-to-crafting-a-high-quality-policy-for-a-pharmaceutical-company",
    },
    frameworks: {
      intro: "Good SOPs turn code and legal requirements into steps and records. These are some of the requirements UK pharmaceutical SOPs most often have to deliver.",
      frameworks: [abpiCert, abpiContracted, efpiaRecords],
      steps: [
        { title: "Analyse", body: "Review current documents, workflows and governance, and where teams work around them." },
        { title: "Benchmark", body: "Compare against the ABPI Code, EFPIA requirements, UK law and your global standards." },
        { title: "Draft", body: "Write lean policies and SOPs with owners, steps, records and links between documents." },
        { title: "Roll out", body: "Approve, train, configure templates and workflows, and set a review cycle." },
      ],
      resources: [
        { label: "Audit readiness best practices", href: "/resources/articles/audit-readiness-best-practices" },
        { label: "EFPIA Code Self-Assessment Checklist", href: "/resources/checklists/efpia-code-self-assessment-checklist" },
        readiness,
        parent,
      ],
    },
  },
  {
    slug: "pharma-compliance-audits",
    topic: "compliance audits",
    metaTitle: "Pharma Compliance Audits UK | Eunomia",
    metaDescription: "Pharmaceutical compliance audits in the UK: ABPI Code and commercial compliance audits, gap analysis, audit readiness and CAPA support with risk-rated findings.",
    heading: "Pharma Compliance Audits in the UK",
    kicker: "Pharma Compliance Audits",
    title: "Audits that test what happens, not only what is written.",
    intro: "Eunomia carries out commercial compliance audits and gap analyses for pharmaceutical and biotech companies in the UK. We test selected activities against the ABPI Code, anti-bribery expectations and your own procedures, and deliver risk-rated findings with a practical remediation roadmap and CAPA support.",
    image: { src: "/compliance-collaboration.png", alt: "Auditor reviewing compliance documentation with a client team" },
    services: [
      "ABPI Code compliance audits",
      "Commercial compliance gap analysis",
      "HCP engagement, hospitality and fair market value audits",
      "Materials review and certification audits",
      "Transparency and disclosure data audits",
      "PMCPA audit readiness and remediation support",
      "CAPA design and effectiveness checks",
      "Internal audit programme design",
    ],
    outcomes: [
      "Risk-rated findings linked to specific activities and evidence",
      "A remediation roadmap with owners, dates and dependencies",
      "Follow-up checks that show whether corrective actions worked",
    ],
    faqs: [
      { question: "What is included in a compliance audit?", answer: "Scope may include document review, operational testing, interviews, system walkthroughs, risk-rated findings and a practical remediation roadmap." },
      { question: "Can the PMCPA require an audit?", answer: "Yes. Under paragraph 12.4 of the PMCPA Constitution and Procedure, where the Code of Practice Appeal Board rules that there is a breach of the Code, it may require an audit of the company’s procedures in relation to the Code, carried out by the Authority." },
      { question: "Can you support PMCPA audit readiness and remediation?", answer: "Yes. Support can assess governance, procedures, approvals, training, HCP engagement, FMV, transparency, monitoring and certification against relevant expectations." },
      { question: "What is the difference between an audit and a gap analysis?", answer: "An audit validates past adherence by testing what happened. A gap analysis compares obligations with how the business operates now, to assess current effectiveness and future readiness. We often use both." },
      { question: "How is an effective CAPA plan structured?", answer: "It identifies root causes, actions, accountable owners, due dates, dependencies and effectiveness checks, with progress tracked through governance." },
      { question: "Do you carry out GxP inspections?", answer: "No. Our audits cover commercial healthcare compliance, such as promotion, HCP engagement, anti-bribery and disclosure. They are not a substitute for a GxP inspection programme." },
    ],
    positioning: {
      problemTitle: "Find the gaps before someone else does",
      problem: "Policies can exist on paper while contracts, payments and approvals tell a different story. A useful audit tests whether the purpose was recorded, the right people reviewed the activity, the contract, payment and evidence agree, and exceptions were escalated.",
      audience: "For compliance leaders and leadership teams in pharmaceutical and biotech companies in the UK: a baseline audit for a growing company, a pre-inspection or pre-launch review, or independent testing after a complaint or Code ruling.",
      delivery: "We agree the scope and sample, review documents, test selected activities end to end, interview process owners and walk through systems. Findings are risk-rated and linked to evidence, then turned into a remediation roadmap and CAPA with effectiveness checks.",
      difference: "We audit as practitioners who design and run these processes. Findings come with practical fixes, and we can support remediation through programme design, training and shared-service capacity if you need it.",
      evidenceLabel: "Related article",
      evidenceTitle: "How gap analysis improves a healthcare compliance internal audit",
      evidence: "Our article explains how to test selected activities, examine evidence and prioritise weaknesses rather than only confirm that policies exist, with findings connected to a risk, an owner and a follow-up check.",
      href: "/resources/articles/healthcare-compliance-internal-audits",
    },
    frameworks: {
      intro: "UK compliance audits are usually tested against the industry code, UK enforcement guidance and your own procedures. These are the main external references.",
      frameworks: [pmcpaAudit, sfo, briberyRisk],
      steps: [
        { title: "Scope", body: "Agree the activities, period, markets and sample to test, and the standards to test against." },
        { title: "Test", body: "Review documents, test activities end to end, interview owners and walk through systems." },
        { title: "Report", body: "Deliver risk-rated findings linked to evidence, with root causes and recommendations." },
        { title: "Remediate", body: "Build the CAPA plan and check that corrective actions worked with a follow-up sample." },
      ],
      resources: [
        { label: "Compliance gap analysis", href: "/resources/articles/compliance-gap-analysis-reducing-risk-without-slowing-growth" },
        { label: "Ensuring audit readiness in pharma compliance", href: "/resources/articles/ensure-audit-readiness-in-pharma-compliance" },
        readiness,
        parent,
      ],
    },
  },
];

export function getUkServicePage(slug: string) {
  return ukServicePages.find((p) => p.slug === slug);
}

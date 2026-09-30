// Page-level FAQs. Every answer restates facts published elsewhere on the
// site (team bios, service pages, footer, legal mandates) or in the linked
// official sources on the Legal Mandates page.
import type { Faq } from "../components/PageFaqs";

export const aboutFaqs: Faq[] = [
  { question: "Who founded Eunomia Pharma Services?", answer: "Eunomia was founded by Rashmi Papneja, its Managing Director, a healthcare compliance leader with more than fifteen years in the pharmaceutical industry. She has worked at the most senior levels of the compliance function inside small and mid-sized pharmaceutical companies, is a PRINCE2-qualified project manager, holds a Master’s in International Healthcare Management and is INSEAD-qualified." },
  { question: "Where is Eunomia based?", answer: "Eunomia is based in Woking, UK. Eunomia Pharma Services is a trading name of Mivigilance Limited, registered in England and Wales, company number 12912269. We work with clients across Europe and internationally." },
  { question: "What experience does the wider team bring?", answer: "Our compliance partners include Alexandre Guillaume, former Head of Global Compliance at Servier with over 25 years in ethics and compliance; Nishant Chaturvedi, with over 13 years in legal, ethics and compliance including Novartis and Sandoz; and Mohamed Afir, with more than 20 years of MENA-market expertise. You can read every bio on the Team page." },
  { question: "How large is the team?", answer: "Eunomia is a small, accountable core team working with twelve named compliance partners across the UK, Europe, the United States and Canada, MENA and APAC. The people introduced to the work remain close to it." },
  { question: "What do clients say about working with Eunomia?", answer: "Eunomia holds a 4.9 rating from verified client reviews on Clutch. Reviewers describe the team as attentive, strategic, responsive, collaborative and pragmatic." },
];

export const servicesFaqs: Faq[] = [
  { question: "Which Eunomia service do we need?", answer: "If you do not have a compliance function yet, or your compliance manager is at capacity, start with Shared Services. If you are entering a market where you have no people, start with Local Legal Mandates and Representation. If you are building or refreshing your framework, start with Programme Design and Implementation. If your processes run on email and spreadsheets, look at Automation of Compliance Operations." },
  { question: "Can the four services be combined?", answer: "Yes. An engagement can focus on one activity, market or workstream, or combine programme design, local support, shared services and automation where the work requires them." },
  { question: "How are engagements structured commercially?", answer: "The commercial model is your choice: advisory support on defined questions, a fixed-scope project, a centralised function run consistently across your markets, or a full shared service operating to your SOPs, systems and timelines." },
  { question: "Which markets do the services cover?", answer: "We cover 30 countries, with named compliance partners in the UK, Germany, France, Spain, Portugal, Italy, Austria, Poland, the United States and Canada, MENA and APAC. Exact scope is confirmed for each engagement." },
];

export const legalFaqs: Faq[] = [
  { question: "What is the difference between pharmaceutical law and industry codes?", answer: "Laws, such as EU Directive 2001/83/EC, the UK Human Medicines Regulations 2012 and the UK Bribery Act 2010, apply to every company in scope. Industry codes of practice, such as the EFPIA Code and national codes like the ABPI Code, are self-regulatory rules set by trade associations for their members and the companies that agree to follow them." },
  { question: "How does the EFPIA Code relate to national codes?", answer: "The EFPIA Code sets European standards, and EFPIA’s member associations implement it through national codes. For disclosure of transfers of value, member associations must transpose the EFPIA requirements in full except where national law prevents it, and national codes can be stricter." },
  { question: "When did the 2024 ABPI Code of Practice take effect?", answer: "The 2024 ABPI Code took effect on 1 October 2024, with a transition period to 31 December 2024. It is administered by the PMCPA independently of the ABPI." },
  { question: "What is the failure to prevent fraud offence?", answer: "It is a corporate offence introduced by the UK Economic Crime and Corporate Transparency Act 2023, which has applied since 1 September 2025. It belongs in the assessment of pharmaceutical third-party controls." },
  { question: "Is this page legal advice?", answer: "No. It is an informational overview with links to official sources. Scope and application should be confirmed for the organisation, market, activity and counterparty concerned." },
];

export const teamFaqs: Faq[] = [
  { question: "Who will work on our engagement?", answer: "The people introduced to the work remain close to it. Our core team includes founder and governance lead Rashmi Papneja and specialists in healthcare compliance operations and IT and systems. Named Global Compliance Business Partners join for the markets and expertise the scope requires." },
  { question: "Which markets do your compliance partners cover?", answer: "Our twelve named partners cover the UK, Germany and the wider DACH region, France, Spain, Portugal, Italy, Austria, Poland, the United States and Canada, MENA and APAC." },
  { question: "What experience do your partners bring?", answer: "Examples include Alexandre Guillaume, former Head of Global Compliance at Servier with over 25 years in ethics and compliance; Nishant Chaturvedi, with over 13 years in legal, ethics and compliance including Novartis and Sandoz; and Mohamed Afir, with more than 20 years of MENA-market expertise. Each partner’s biography is on this page." },
  { question: "Can we speak to a specialist before agreeing scope?", answer: "Yes. Tell us what is on your desk through the contact page and we will listen, ask a few questions and recommend the right scope, without obligation or pressure." },
];

export const contactFaqs: Faq[] = [
  { question: "How quickly will you reply?", answer: "We endeavour to answer all enquiries within 24 hours on business days." },
  { question: "What should I include in my message?", answer: "Your company, the markets involved and the compliance question on your desk. That is enough for us to ask the right follow-up questions." },
  { question: "Is there any obligation?", answer: "No. We will listen, ask a few questions and say how we see it, without obligation or pressure." },
  { question: "What are Eunomia’s registered details?", answer: "Eunomia Pharma Services is a trading name of Mivigilance Limited, company number 12912269, registered office Rough Way, Heath House Road, Woking, GU22 0QU." },
];

export const resourcesFaqs: Faq[] = [
  { question: "Are the resources free?", answer: "Yes. Articles and case studies are free to read. Checklists, the case studies pack and the annual guide are free downloads; we ask for your name and email so we can send the file." },
  { question: "How are the articles sourced?", answer: "Each article opens with a short answer and ends with its sources. Legal and code statements link to the official text, such as EUR-Lex, legislation.gov.uk, the PMCPA or EFPIA." },
  { question: "Are these resources legal advice?", answer: "No. They are practical, informational guidance. Requirements depend on your organisation, markets and activities, and should be confirmed for your situation." },
  { question: "Where can I find country-specific rules?", answer: "Our country guides cover Germany, France, Spain, Italy, the Netherlands, Portugal, Ireland and Sweden, each with links to official sources. They are listed on the Legal Mandates page." },
];

export const caseStudyFaqs: Record<string, Faq[]> = {
  "fair-market-value-methodology": [
    { question: "Which markets and stakeholders did the FMV project cover?", answer: "The UK, Germany, France, Italy and Spain, covering general practitioners, specialists, nurses, pharmacists, payers and patient contributors. Rate cards were produced for six stakeholder categories." },
    { question: "How were HCPs tiered?", answer: "A four-tier framework distinguished global key opinion leaders, national leaders, regional experts and local practitioners, using documented criteria such as publications, trials, role and experience." },
    { question: "What results did the case study report?", answer: "Payments within the defensible FMV range increased from 66% to 98%, the average hourly rate fell from £520 to £385, and time to contract fell from 14 days to 6. These are results from this engagement, not general benchmarks." },
    { question: "Does the case study publish HCP rates?", answer: "No. It describes the project approach; it does not publish a universal HCP rate table." },
  ],
  "materials-review-shared-service-case-study": [
    { question: "Who was the client?", answer: "A mid-sized pharmaceutical company headquartered in the UK, expanding across Europe with a lean compliance organisation and no dedicated promotional review function." },
    { question: "What did the service include?", answer: "Experienced reviewers and signatories, workflows, SOPs, review templates, governance, quality assurance, audit-ready documentation and reporting, integrated into the client’s systems." },
    { question: "What results did the case study report?", answer: "Review turnaround fell from five days to two, and review cycles from four to two. These engagement-specific results do not guarantee equivalent outcomes elsewhere." },
    { question: "Can the service cover other markets?", answer: "The model provided global and UK review support, with access to local expertise as the business entered additional markets." },
  ],
};

export const downloadFaqs: Record<string, Faq[]> = {
  "pharma-compliance-readiness-checklist": [
    { question: "Who is the readiness checklist for?", answer: "Compliance leads, medical affairs and leadership teams at emerging biotech and small to mid-sized pharma who want to test whether their programme works day to day and would stand up to an audit or inspection." },
    { question: "Is the checklist legal advice?", answer: "No. It is a practical guide. Requirements depend on your markets, activities and the codes that apply to you." },
    { question: "What should we do with the results?", answer: "Use the gaps as a prioritised action list. If you would like help, our programme design service covers gap analysis, policies, training, monitoring and remediation." },
  ],
  "efpia-code-self-assessment-checklist": [
    { question: "Which edition of the EFPIA Code does it follow?", answer: "The 2026 EFPIA Code of Practice. Each item cites the relevant Article." },
    { question: "Does it cover national codes?", answer: "No. National codes transpose the EFPIA Code and may be stricter, and national law also applies. Our country guides cover national requirements." },
    { question: "Who should complete it?", answer: "Whoever owns HCP, HCO and patient organisation interactions and disclosure, usually compliance with input from medical affairs and finance." },
  ],
  "pharma-compliance-case-studies-pack": [
    { question: "What is in the case studies pack?", answer: "Two published Eunomia engagements: a five-market fair market value methodology and a shared-service materials review for a UK pharmaceutical company, with the results each case study reported." },
    { question: "Are the results typical?", answer: "They are the results reported for each engagement. They are not general benchmarks or promised outcomes." },
  ],
  "efpia-methodology-note-template": [
    { question: "Is the methodology note structure mandatory?", answer: "Yes, for EFPIA member companies’ HCP/HCO disclosures. The EFPIA Code of Practice 2026 requires methodology notes to follow the structure in Annex B, at the latest for the 2026 disclosure of 2025 transfers of value." },
    { question: "Does this template work for Disclosure UK?", answer: "The ABPI Code also requires a methodology note. This template follows the EFPIA Annex B structure; check the ABPI Code and Disclosure UK guidance for any UK-specific points." },
  ],
  "uk-eu-pharma-compliance-guide-2026": [
    { question: "What does the 2026 guide cover?", answer: "The main UK and EU frameworks and dates for 2026, eight country summaries and a disclosure calendar, each with its official source." },
    { question: "How current is it?", answer: "It is based on official sources checked in September 2026. We plan to refresh it as a 2027 edition." },
    { question: "Is it legal advice?", answer: "No. It is an informational summary. Confirm current requirements for your organisation, markets and activities." },
  ],
};

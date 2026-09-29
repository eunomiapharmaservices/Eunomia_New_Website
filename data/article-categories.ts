// Blog categories. The first six follow the SEO agency's recommendation; the
// last two cover existing articles that do not fit those six. A category
// with no articles yet gets no page (see app/resources/category).
export type ArticleCategory = { slug: string; name: string; description: string };

export const articleCategories: ArticleCategory[] = [
  { slug: "efpia-code-compliance", name: "EFPIA Code Compliance", description: "Applying the EFPIA Code and national codes to interactions with healthcare professionals, organisations and patient groups." },
  { slug: "abpi-code-pmcpa", name: "ABPI Code & PMCPA", description: "UK promotional compliance under the ABPI Code of Practice and PMCPA guidance and cases." },
  { slug: "gdpr-data-compliance", name: "GDPR & Data Compliance in Pharma", description: "Data protection and data governance for pharmaceutical compliance." },
  { slug: "hcp-engagement-transparency", name: "HCP Engagement & Transparency Reporting", description: "Fair market value, transfers of value and disclosure under EFPIA and national transparency laws." },
  { slug: "regulatory-updates", name: "Regulatory Updates & Compliance News", description: "New guidance, legislation and developments affecting pharmaceutical compliance." },
  { slug: "third-party-due-diligence", name: "Third-Party Due Diligence & Supply Chain Compliance", description: "Managing compliance risk in distributors, vendors and other third parties." },
  { slug: "compliance-programmes", name: "Compliance Programmes, Audits & Training", description: "Designing, auditing and embedding healthcare compliance programmes, policies and training." },
  { slug: "ai-digital-compliance", name: "AI & Digital Compliance", description: "AI governance, automation and data analytics in healthcare compliance." },
];

// Primary category first.
export const articleCategoryMap: Record<string, string[]> = {
  "gdpr-and-transparency-reporting-hcp-disclosure": ["gdpr-data-compliance", "hcp-engagement-transparency"],
  "hcp-personal-data-gdpr-crm-fmv-engagement-records": ["gdpr-data-compliance", "hcp-engagement-transparency"],
  "a-definitive-guide-to-crafting-a-high-quality-policy-for-a-pharmaceutical-company": ["compliance-programmes"],
  "ai-in-healthcare-compliance": ["ai-digital-compliance", "regulatory-updates"],
  "audit-readiness-best-practices": ["compliance-programmes", "hcp-engagement-transparency"],
  "compliance-gap-analysis-reducing-risk-without-slowing-growth": ["compliance-programmes"],
  "compliance-training-beyond-the-code": ["abpi-code-pmcpa", "compliance-programmes"],
  "digitalisation-in-pharma-industry": ["ai-digital-compliance"],
  "ensure-audit-readiness-in-pharma-compliance": ["compliance-programmes"],
  "entering-phase-iii-compliance-expectations-already-have": ["compliance-programmes", "efpia-code-compliance"],
  "fair-market-value-fmv-in-healthcare-compliance": ["hcp-engagement-transparency"],
  "from-risk-to-resilience-why-third-party-risk-management-is-pharmas-biggest-competitive-advantage": ["third-party-due-diligence"],
  "healthcare-compliance-challenges-in-pharma-industry": ["compliance-programmes"],
  "healthcare-compliance-internal-audits": ["compliance-programmes"],
  "how-to-avoid-common-healthcare-compliance-mistakes-in-pharmaceuticals": ["compliance-programmes", "hcp-engagement-transparency"],
  "importance-of-bespoke-healthcare-compliance-training-for-pharmaceutical-industry": ["compliance-programmes", "efpia-code-compliance"],
  "managing-compliance-risks-best-practices-strategies": ["compliance-programmes"],
  "navigating-country-level-accountability-in-europe": ["regulatory-updates"],
  "pharma-compliance-risk-assessment-framework": ["compliance-programmes"],
  "pmcpas-2026-social-media-guidance": ["abpi-code-pmcpa", "regulatory-updates"],
  "right-sized-compliance-support-for-biotech-and-global-pharma": ["compliance-programmes"],
  "risk-assessment-in-healthcare-and-its-importance": ["compliance-programmes"],
  "scalable-compliance-models-for-growing-pharma-in-the-age-of-ai": ["compliance-programmes"],
  "stakeholder-engagement-vs-risk-efpia-ifpma-compliance": ["efpia-code-compliance", "hcp-engagement-transparency"],
  "staying-ahead-in-healthcare-compliance-navigating-ai-challenges-with-ethical-governance": ["ai-digital-compliance"],
  "sunshine-act-in-france-transparency-healthcare-system": ["hcp-engagement-transparency", "regulatory-updates"],
  "the-future-of-diversity-inclusion-in-pharma-compliance": ["regulatory-updates"],
  "top-transparency-reporting-mistakes-pharmaceutical-companies-should-avoid": ["hcp-engagement-transparency"],
  "transparency-reporting-in-pharmaceutical-industry": ["hcp-engagement-transparency"],
  "unleash-the-power-of-data-analytics-for-healthcare-compliance": ["ai-digital-compliance"],
  "what-makes-healthcare-compliance-training-effective": ["compliance-programmes"],
};

export function categoriesFor(slug: string) {
  return (articleCategoryMap[slug] ?? [])
    .map((c) => articleCategories.find((x) => x.slug === c))
    .filter((c): c is ArticleCategory => Boolean(c));
}

export function articlesIn(category: string) {
  return Object.entries(articleCategoryMap)
    .filter(([, cats]) => cats.includes(category))
    .map(([slug]) => slug);
}

export const populatedCategories = articleCategories.filter((c) => articlesIn(c.slug).length > 0);

// Category FAQs (each answer restates the linked official sources used on
// the Legal Mandates page and country guides).
export const categoryFaqs: Record<string, { question: string; answer: string }[]> = {
  "efpia-code-compliance": [
    { question: "What is the EFPIA Code of Practice?", answer: "It is the collection of ethical rules agreed by EFPIA members for the promotion of medicinal products to healthcare professionals and for interactions with healthcare professionals, healthcare organisations and patient organisations. The current edition is the 2026 EFPIA Code of Practice." },
    { question: "Do companies follow the EFPIA Code directly?", answer: "EFPIA’s member associations transpose the EFPIA Code into their national codes, and member companies are bound by the relevant national code in each country. Member associations may adopt stricter standards." },
    { question: "When must transfers of value be disclosed under the EFPIA Code?", answer: "Annually, for each full calendar year, within six months of the end of the reporting period. Disclosures must stay public for at least three years and records must be kept for at least five years, unless national law requires otherwise." },
  ],
  "abpi-code-pmcpa": [
    { question: "Who administers the ABPI Code of Practice?", answer: "The Prescription Medicines Code of Practice Authority (PMCPA) administers the ABPI Code independently of the ABPI." },
    { question: "When did the 2024 ABPI Code take effect?", answer: "It took effect on 1 October 2024, with a transition period to 31 December 2024. The PMCPA began operating under its new constitution and procedure, including an abridged complaints procedure, from 1 October 2024." },
  ],
  "hcp-engagement-transparency": [
    { question: "Where are UK industry payments to HCPs and HCOs published?", answer: "On Disclosure UK, the ABPI’s database, which is part of a Europe-wide initiative to increase transparency between pharmaceutical companies and healthcare professionals and organisations." },
    { question: "How is transparency handled in France?", answer: "France has a legal transparency regime under Loi n° 2011-2012 (the Loi Bertrand). Disclosures are published on the public Transparence Santé database, managed by the Direction générale de la santé." },
  ],
  "regulatory-updates": [
    { question: "What is the UK failure to prevent fraud offence?", answer: "A corporate offence introduced by the Economic Crime and Corporate Transparency Act 2023, which has applied since 1 September 2025." },
    { question: "Which EU regulation governs AI?", answer: "Regulation (EU) 2024/1689, the EU AI Act, read alongside the GDPR, the EU Data Act and, where AI forms part of a medical device or diagnostic, the MDR and IVDR." },
  ],
  "third-party-due-diligence": [
    { question: "Are pharmaceutical companies responsible for their third parties?", answer: "Often, yes. Under section 7 of the UK Bribery Act 2010, a commercial organisation can be liable for failing to prevent bribery by persons associated with it, such as agents and service providers, unless it had adequate procedures in place." },
    { question: "Does the EFPIA Code cover work done through third parties?", answer: "The EFPIA Code’s disclosure rules cover transfers of value made directly or indirectly, so payments made through agencies and other intermediaries need to be captured in disclosure processes." },
  ],
  "compliance-programmes": [
    { question: "What does a pharmaceutical compliance programme include?", answer: "Governance and roles, practical policies and SOPs, approval and monitoring processes, evidence requirements and role-based training, aligned to the obligations that apply to your activities and markets." },
    { question: "What is audit readiness?", answer: "A continuous state in which documentation, controls, evidence and governance are built into routine operations, rather than assembled immediately before an audit." },
  ],
  "gdpr-data-compliance": [
    { question: "What lawful basis is needed to disclose an HCP’s transfers of value?", answer: "Naming an HCP is processing of personal data, so it needs a lawful basis under Article 6 of the GDPR. EFPIA’s training material identifies individual consent or legitimate interest, with a documented process." },
    { question: "Is HCO disclosure data personal data?", answer: "The ABPI’s December 2025 Disclosure UK factsheet states that information about HCOs is not considered personal data, so a lawful basis is not required for it." },
    { question: "How is legitimate interests documented?", answer: "The ICO describes a three-part test (purpose, necessity and balancing) and recommends recording the outcome in a legitimate interests assessment." },
  ],
  "ai-digital-compliance": [
    { question: "Can automation replace compliance reviewers?", answer: "No. Automation can improve routing, consistency, monitoring and evidence, while experienced people remain responsible for contextual judgement and accountable decisions." },
    { question: "What is an AI compliance readiness assessment?", answer: "A review of proposed AI use cases, data, governance, controls, accountability and regulatory exposure, to identify what must be in place before deployment." },
  ],
};

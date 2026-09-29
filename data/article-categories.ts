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

// Downloadable checklists. The EFPIA checklist follows the EFPIA Code of
// Practice (2026 edition, efpia.eu); each item cites its Article. The
// readiness checklist reflects the approach in Eunomia's published articles.
export type ChecklistSection = { heading: string; items: { text: string; ref?: string }[] };
export type LeadMagnet = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  audience: string;
  file: string;
  note: string;
  source?: { label: string; href: string };
  sections: ChecklistSection[];
};

export const leadMagnets: LeadMagnet[] = [
  {
    slug: "pharma-compliance-readiness-checklist",
    title: "Pharma Compliance Readiness Checklist",
    metaTitle: "Pharma Compliance Readiness Checklist (free download) | Eunomia",
    metaDescription:
      "A practical checklist to test whether your pharmaceutical compliance programme is ready for audit, inspection and growth: governance, risk, HCP engagement, transparency and more.",
    summary:
      "A practical self-check for pharmaceutical and biotech companies: is your compliance programme working day to day, and would the evidence stand up to an audit or inspection?",
    audience: "Compliance leads, medical affairs and leadership teams at emerging biotech and small to mid-sized pharma.",
    file: "/downloads/eunomia-pharma-compliance-readiness-checklist.pdf",
    note: "This checklist is a practical guide, not legal advice. Requirements depend on your markets, activities and the codes that apply to you.",
    sections: [
      { heading: "Governance and ownership", items: [
        { text: "A named senior owner is accountable for compliance, with authority to escalate." },
        { text: "Compliance roles, decision rights and escalation routes are documented." },
        { text: "Compliance matters are reported to leadership through a regular governance forum." },
      ] },
      { heading: "Policies and SOPs", items: [
        { text: "Core policies exist for promotion and materials review, HCP and HCO engagement, patient organisations, grants and donations, anti-bribery and anti-corruption, and conflicts of interest." },
        { text: "SOPs are mapped to how teams actually work, not only to the code." },
        { text: "Policies have owners and a defined review cycle." },
      ] },
      { heading: "Risk assessment", items: [
        { text: "A documented compliance risk assessment covers your highest-risk activities, such as HCP engagements, materials review, transparency and third parties." },
        { text: "The assessment is refreshed when the business changes, not only annually." },
        { text: "Monitoring and training plans are driven by the assessed risks." },
      ] },
      { heading: "HCP engagement and fair market value", items: [
        { text: "Each engagement has a documented legitimate need and objective selection criteria." },
        { text: "Written contracts are signed before services start." },
        { text: "Fees follow a documented fair market value methodology with tiering criteria." },
      ] },
      { heading: "Materials review and approval", items: [
        { text: "A defined review workflow with qualified reviewers and certifying signatories." },
        { text: "Every approved item has a retrievable audit trail." },
        { text: "Turnaround and review cycles are measured." },
      ] },
      { heading: "Transparency and disclosure", items: [
        { text: "Transfers of value are captured when the engagement is planned, not at year end." },
        { text: "Classification rules are documented and applied consistently." },
        { text: "Country-specific disclosure requirements are mapped and reconciled before submission." },
      ] },
      { heading: "Third parties", items: [
        { text: "Distributors, agencies and vendors are risk-rated and subject to proportionate due diligence." },
        { text: "Contracts include compliance, audit and termination clauses." },
        { text: "Higher-risk third parties are monitored after onboarding." },
      ] },
      { heading: "Training and culture", items: [
        { text: "Training is role-based and scenario-based, not a one-off e-learning." },
        { text: "Training effectiveness is measured." },
        { text: "People know how to raise concerns, and concerns are followed up." },
      ] },
      { heading: "Monitoring, audit and CAPA", items: [
        { text: "A risk-based monitoring plan is in place and followed." },
        { text: "Internal audits test how controls operate, not only whether documents exist." },
        { text: "Findings have root causes, owners, due dates and effectiveness checks." },
      ] },
      { heading: "Markets, data and technology", items: [
        { text: "Local codes, laws and any legal representative roles are mapped for each country you operate in." },
        { text: "Compliance records and evidence can be retrieved quickly for an audit." },
        { text: "Any AI use in compliance processes is assessed, documented and subject to human oversight." },
      ] },
    ],
  },
  {
    slug: "efpia-code-self-assessment-checklist",
    title: "EFPIA Code Self-Assessment Checklist",
    metaTitle: "EFPIA Code Self-Assessment Checklist 2026 (free download) | Eunomia",
    metaDescription:
      "A self-assessment checklist against the EFPIA Code of Practice (2026): promotion, events and hospitality, gifts, contracted services, samples, patient organisations and disclosure.",
    summary:
      "Check your processes against the main requirements of the EFPIA Code of Practice (2026 edition), article by article: promotion, events and hospitality, gifts, donations, contracted services, samples, patient organisations and disclosure.",
    audience: "Compliance, medical and commercial teams at companies operating under EFPIA-member national codes.",
    file: "/downloads/eunomia-efpia-code-self-assessment-checklist.pdf",
    note: "National industry codes transpose the EFPIA Code and may be stricter; national law also applies. This checklist summarises the EFPIA Code and is not legal advice.",
    source: { label: "EFPIA Code of Practice (2026)", href: "https://www.efpia.eu/relationships-code/the-efpia-code/" },
    sections: [
      { heading: "Promotion", items: [
        { text: "No promotion before marketing authorisation or outside approved indications, and promotion is consistent with the SmPC.", ref: "Art. 1" },
        { text: "Promotional material includes SmPC-consistent essential information with its date, the supply classification and, where appropriate, price and reimbursement conditions.", ref: "Art. 2" },
        { text: "Claims are accurate, balanced, up to date and capable of substantiation, which is provided promptly on request.", ref: "Art. 3" },
        { text: "“Safe” is never used without proper qualification, “new” is not used after one year, and no material states a product has no side-effects.", ref: "Art. 3.07–3.09" },
        { text: "Quotations and artwork are faithfully reproduced, with precise sources.", ref: "Art. 3.06, 4" },
        { text: "Promotion goes only to HCPs with a reasonable need or interest, mailing lists are kept up to date, and digital promotion is sent only with prior permission.", ref: "Art. 6" },
        { text: "Promotion is never disguised, and sponsored material clearly states the sponsor.", ref: "Art. 7" },
      ] },
      { heading: "Events and hospitality", items: [
        { text: "Events are held in appropriate venues, avoiding those renowned for entertainment or extravagant.", ref: "Art. 10.01" },
        { text: "Events outside the home country are justified by where invitees come from or where the relevant expertise is.", ref: "Art. 10.02" },
        { text: "Hospitality is limited to travel, meals, accommodation and genuine registration fees, is reasonable, and excludes entertainment.", ref: "Art. 10.04, 10.07, 10.08" },
        { text: "Meals stay within the monetary threshold in the host country’s national code.", ref: "Art. 10.05" },
        { text: "Hospitality is offered only to participants in their own right.", ref: "Art. 10.06" },
      ] },
      { heading: "Gifts, materials and funding", items: [
        { text: "No gifts for personal benefit, cash, cash equivalents or personal services, and no promotional aids for prescription-only medicines.", ref: "Art. 11" },
        { text: "Informational or educational materials and items of medical utility are inexpensive, relevant and not product-branded unless essential.", ref: "Art. 17" },
        { text: "Donations and grants go only to HCOs or POs, support healthcare, research or education, are documented, and are not an inducement.", ref: "Art. 12" },
        { text: "Sponsorship is clearly acknowledged, logos are used only with written permission, and the company does not require to be sole funder.", ref: "Art. 13–14" },
      ] },
      { heading: "Contracted services", items: [
        { text: "A written contract specifying the services and basis for payment is agreed in advance.", ref: "Art. 15.02" },
        { text: "The legitimate need is documented in advance, selection criteria relate to that need, and numbers are no greater than necessary.", ref: "Art. 15.02" },
        { text: "Remuneration is reasonable and reflects fair market value; records of the services are kept.", ref: "Art. 15.02" },
        { text: "Contracts ask consultants to declare the relationship when they write or speak publicly on related matters.", ref: "Art. 15.03" },
      ] },
      { heading: "Education, studies and samples", items: [
        { text: "Lifelong learning activities are non-promotional, fair and balanced, and the company’s role is acknowledged.", ref: "Art. 16" },
        { text: "Non-interventional studies are primarily scientific, have a written plan, are approved and supervised by the scientific service, and use sales representatives only administratively.", ref: "Art. 18" },
        { text: "Samples are given only exceptionally, on a signed written request, within the 4x2 standard, in the smallest presentation, marked and with the SmPC, and are accounted for.", ref: "Art. 19" },
      ] },
      { heading: "Company staff", items: [
        { text: "A scientific service is in place, with a medical doctor or pharmacist certifying promotional material before release.", ref: "Art. 20.01" },
        { text: "A senior employee is responsible for ensuring the company meets the applicable codes.", ref: "Art. 20.01" },
        { text: "Sales representatives are trained, behave ethically, and pass on side-effect reports to the scientific service.", ref: "Art. 20.01–20.02" },
      ] },
      { heading: "Patient organisations", items: [
        { text: "PO independence is respected and POs are never asked to promote a prescription-only medicine.", ref: "Art. 21.01" },
        { text: "Significant support is covered by a written agreement stating the amount and purpose.", ref: "Art. 21.03" },
        { text: "The company does not influence sponsored PO material in its commercial interest.", ref: "Art. 21.04" },
      ] },
      { heading: "Disclosure of transfers of value", items: [
        { text: "Transfers of value are disclosed annually for each full calendar year, within six months of the year end.", ref: "Art. 22.01" },
        { text: "Disclosures stay public for at least three years, and records are kept for at least five years.", ref: "Art. 22.01" },
        { text: "Disclosures use the national template and platform that apply in each country.", ref: "Art. 22.03" },
      ] },
    ],
  },
];

export function getLeadMagnet(slug: string) {
  return leadMagnets.find((m) => m.slug === slug);
}

type Resource = { href: string; title: string; blurb: string };
const training: Resource = {
  href: "/resources/role-based-compliance-training-matrix",
  title: "Build your role-based training plan",
  blurb: "Map learning to real responsibilities with the role-based compliance training guide and editable Excel matrix.",
};
const disclosure: Resource = {
  href: "/resources/disclosure-preparation-checklist",
  title: "Prepare your disclosure return",
  blurb: "Use the disclosure preparation checklist and Excel workbook to organise owners, reconciliation, evidence and methodological-note drafting.",
};
const promotional: Resource = {
  href: "/resources/promotional-review-workflow",
  title: "Map your promotional review workflow",
  blurb: "Connect intake, review, certification, release and withdrawal with the practical guide and editable workflow checklist.",
};
const fmv: Resource = {
  href: "/resources/hcp-fmv-assessment",
  title: "Document your HCP FMV assessment",
  blurb: "Use the assessment guide and Excel worksheet to record methodology, supporting evidence, fee rationale and review decisions.",
};

// Deliberate topic matches; unrelated articles retain their existing checklist.
export const articlePracticalResources: Record<string, Resource> = {
  "what-makes-healthcare-compliance-training-effective": training,
  "compliance-training-beyond-the-code": training,
  "importance-of-bespoke-healthcare-compliance-training-for-pharmaceutical-industry": training,
  "failure-to-prevent-fraud-pharma": training,
  "efpia-disclosure-requirements-template": disclosure,
  "disclosure-uk-guide": disclosure,
  "gdpr-and-transparency-reporting-hcp-disclosure": disclosure,
  "top-transparency-reporting-mistakes-pharmaceutical-companies-should-avoid": disclosure,
  "transparency-reporting-in-pharmaceutical-industry": disclosure,
  "abpi-signatory-certification-requirements": promotional,
  "pmcpas-2026-social-media-guidance": promotional,
  "digitalisation-in-pharma-industry": promotional,
  "a-definitive-guide-to-crafting-a-high-quality-policy-for-a-pharmaceutical-company": promotional,
  "fair-market-value-fmv-in-healthcare-compliance": fmv,
  "hcp-personal-data-gdpr-crm-fmv-engagement-records": fmv,
  "stakeholder-engagement-vs-risk-efpia-ifpma-compliance": fmv,
};

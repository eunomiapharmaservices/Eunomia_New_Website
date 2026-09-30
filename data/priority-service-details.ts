// Delivery descriptions drawn from the existing service pages and resources.
// FMV timing and clinical-trial exclusions were confirmed by the business.
type ServiceDetails = {
  deliverables: string[];
  planningTitle: string;
  planning: string;
  inputs: string;
  links: { label: string; href: string }[];
};

export const priorityServiceDetails: Record<string, ServiceDetails | undefined> = {
  "fmv-consulting": {
    deliverables: [
      "A documented FMV methodology with benchmark-source review and recorded assumptions.",
      "HCP tiering criteria and rate-card governance for the agreed markets and engagement types.",
      "Assessment templates, fee rationale and exception-approval responsibilities.",
      "An implementation plan connecting the framework to contracting, payment records and stakeholder training.",
    ],
    planningTitle: "Scope and turnaround",
    planning: "FMV projects typically take one to three months, depending on the number of countries covered. We agree the scope, required inputs and delivery timeline before work begins. Our focus is HCP compensation and engagement frameworks; we do not provide clinical-trial budget or pricing assessments.",
    inputs: "Start with the countries, stakeholder groups and engagement types you need to cover, your existing methodology and rate cards, and any known concerns. Benchmark availability and licensing are confirmed during scoping.",
    links: [
      { label: "Case study: FMV methodology across five countries", href: "/resources/fair-market-value-methodology" },
      { label: "Practical guide: HCP FMV assessment and worksheet", href: "/resources/hcp-fmv-assessment" },
      { label: "Related service: compliance workflow automation", href: "/services/automation-of-compliance-operations" },
    ],
  },
  "pharma-compliance-training": {
    deliverables: [
      "A training needs analysis mapped to roles, activities and markets.",
      "Tailored modules covering the agreed ABPI Code, ABAC, HCP engagement, materials review, disclosure or SOP topics.",
      "Practical scenarios and PMCPA case discussions delivered through classroom, virtual, e-learning or blended formats.",
      "Training records and agreed measures of effectiveness to inform future refreshes.",
    ],
    planningTitle: "Choose training around the team's work",
    planning: "Training is tailored for compliance, medical, commercial and market access teams in pharmaceutical and biotech companies. We agree the modules and delivery format around the decisions each role makes and the policies and systems it uses.",
    inputs: "Tell us which teams and markets are involved, the activities they carry out, and where current training leaves gaps. Your policies and SOPs help connect the sessions to everyday work.",
    links: [
      { label: "Planning tool: role-based compliance training matrix", href: "/resources/role-based-compliance-training-matrix" },
      { label: "Guide: what makes healthcare compliance training effective", href: "/resources/articles/what-makes-healthcare-compliance-training-effective" },
      { label: "Learning resources: PMCPA cases", href: "/resources/pmcpa-cases" },
    ],
  },
  "sop-policy-development": {
    deliverables: [
      "An as-is review and gap analysis of the agreed documents, workflows and governance.",
      "Draft policies and SOPs with purpose, scope, owners, process steps, records and review cycles.",
      "Workflow maps and supporting templates, including documented local variations where required.",
      "Support for process-owner review, approval, roll-out and training, with ongoing document ownership defined.",
    ],
    planningTitle: "Connect SOPs to controls and automation",
    planning: "Our scope covers commercial healthcare compliance processes such as promotional review, HCP engagements, events, grants and disclosure. Related risk-assessment support can identify control gaps and owned actions. Automation support can connect evidence collection, approval routing, escalation and reporting while retaining accountable human review.",
    inputs: "Bring the processes and countries in scope, your existing documents and templates, the systems teams use, and examples of gaps or workarounds. We agree whether the work is a new SOP set, an update or harmonisation across markets.",
    links: [
      { label: "Practical guide: promotional review workflow", href: "/resources/promotional-review-workflow" },
      { label: "Related service: compliance workflow automation", href: "/services/automation-of-compliance-operations" },
      { label: "Related service: pharmaceutical risk assessment", href: "/services/governance-assurance/pharma-risk-assessment" },
      { label: "Case study: materials-review operations", href: "/resources/materials-review-shared-service-case-study" },
    ],
  },
};

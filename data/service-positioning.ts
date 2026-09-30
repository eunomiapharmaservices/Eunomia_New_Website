import { ukServicePages, UK_SERVICE_BASE } from "./uk-service-pages";
export const servicePositioning: Record<string, {
  problemTitle: string; problem: string; audience: string; delivery: string;
  difference: string; evidenceLabel: string; evidenceTitle: string; evidence: string; href: string;
}> = {
  "/services/governance-assurance": {
    problemTitle: "Turn compliance policies into everyday practice",
    problem: "A growing portfolio, new markets and competing priorities can expose gaps between written policies and what teams actually do. Unclear approval routes, inconsistent records and reactive training make it harder to demonstrate that controls work. We help connect your framework to the activities, people and decisions it needs to govern.",
    audience: "For compliance and legal leaders, Medical Affairs teams and business owners in pharmaceutical and biotech companies. Support can begin with a first compliance programme, a specific control gap or the improvement of an established framework.",
    delivery: "We agree the scope around your activities and markets, review existing controls and prioritise the gaps. The work can combine policies and SOPs, responsibilities, risk assessments, training, monitoring and remediation. Implementation includes the approval routes and evidence requirements your teams need to use the programme in practice.",
    difference: "Eunomia combines pharmaceutical compliance expertise with operational delivery. Programme design can connect to local-market support, shared-service capacity and automation, so the framework has a practical route into day-to-day work. Scope, responsibilities and handover are agreed with your team.",
    evidenceLabel: "Related case study",
    evidenceTitle: "A consistent FMV framework across five markets",
    evidence: "Eunomia developed a documented compensation methodology, objective tiering and rate cards for six stakeholder categories across the UK, Germany, France, Italy and Spain. The case illustrates how a defined framework can make decisions easier to explain and review.",
    href: "/resources/fair-market-value-methodology",
  },
  "/services/automation-of-compliance-operations": {
    problemTitle: "Reduce fragmented compliance workflows",
    problem: "Email approvals, disconnected spreadsheets and repeated data entry can make it difficult to see who owns a decision or which evidence is complete. Adding technology without clear responsibilities can reproduce those problems in a new system. We start with the process and its controls before choosing what to automate.",
    audience: "For compliance operations, IT, transformation and shared-service teams that need better visibility and consistency across reviews, monitoring and reporting. We can support a defined workflow or a wider programme built around your existing technology.",
    delivery: "We map the current process, define decision points and agree requirements with compliance and technical stakeholders. Delivery can include SharePoint workflows, Power BI reporting, review platforms, connected data and controlled chatbot use cases. Human review, escalation routes and traceable records are built into the operating model.",
    difference: "Compliance expertise, project management and technical build work together. That combination helps connect system design to the people who use it and the evidence they need. Automation supports accountable judgement, with scope and controls agreed before deployment.",
    evidenceLabel: "Related operational case study",
    evidenceTitle: "The process behind a stronger materials-review service",
    evidence: "Our materials-review case study describes workflows, SOPs, templates, reporting and specialist reviewers working together. It provides an example of operational process design; the reported results are not presented as an automation-only outcome.",
    href: "/resources/materials-review-shared-service-case-study",
  },
  "/services/local-legal-mandates": {
    problemTitle: "Connect global standards to local responsibilities",
    problem: "A global policy does not resolve every country-level question. Market entry and cross-border activities can leave teams unsure which requirements apply, who should review an activity and where responsibility sits. We help define the local support and escalation routes needed for the planned activity.",
    audience: "For pharmaceutical and biotech teams entering a market, working across borders or operating with limited local compliance capacity. Support is scoped to the countries, activities and responsibilities involved, rather than assuming the same representation model fits every market.",
    delivery: "We assess the market-entry context, identify relevant local requirements and agree named contacts and decision rights. Support can include code interpretation, association liaison, HCP engagement review and transparency processes. Any representative role and its responsibilities are confirmed for the specific engagement.",
    difference: "Our local compliance partners connect country knowledge with your central team. Agreed reporting and escalation routes help local decisions fit the wider compliance programme. Country guides and team biographies provide a starting point for discussing the expertise your engagement needs.",
    evidenceLabel: "Related cross-market case study",
    evidenceTitle: "One FMV method, with country-specific inputs",
    evidence: "The five-market FMV project combined a common calculation framework with national data and stakeholder-specific rate cards. It illustrates a cross-market approach to compliance delivery, rather than a case study of a statutory representative appointment.",
    href: "/resources/fair-market-value-methodology",
  },
  "/services/shared-services": {
    problemTitle: "Add capacity when compliance work outgrows the team",
    problem: "Rising review volumes and new-market activity can put pressure on a lean compliance function. Backlogs, repeated review cycles and inconsistent records take time away from oversight. We provide operational support through agreed processes so your team can manage workload while retaining accountability.",
    audience: "For emerging biotechs building their operating model, pharmaceutical teams with limited review capacity and established organisations developing shared services, GBS or GCC functions. An engagement can start with one activity or market and expand as requirements change.",
    delivery: "We agree the activities, review responsibilities, service measures and escalation routes, then work within your SOPs and systems. Scope can include promotional and medical materials, HCP engagements, FMV assessment, transparency reporting and associated records. Reporting makes volumes, turnaround, exceptions and recurring issues visible to your team.",
    difference: "Specialist review capability is supported by workflow management and operational coordination. We connect local expertise when the agreed scope requires it and use regular governance to review performance. Your organisation retains oversight and the decision rights defined for the engagement.",
    evidenceLabel: "Service case study",
    evidenceTitle: "Materials-review turnaround reduced from five days to two",
    evidence: "A UK pharmaceutical company expanding across Europe received a structured review service with experienced reviewers, workflows, SOPs and reporting. The published case study reports review cycles falling from four to two. These results relate to that engagement and are not a promised outcome for every client.",
    href: "/resources/materials-review-shared-service-case-study",
  },
};

for (const page of ukServicePages) servicePositioning[`${UK_SERVICE_BASE}/${page.slug}`] = page.positioning;

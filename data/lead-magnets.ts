// Downloadable checklists. The EFPIA checklist follows the EFPIA Code of
// Practice (2026 edition, efpia.eu); each item cites its Article. The
// readiness checklist reflects the approach in Eunomia's published articles.
export type ChecklistSection = { heading: string; items: { text: string; ref?: string }[] };
export type LeadMagnet = {
  slug: string;
  kind?: "checklist" | "guide" | "pack";
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
  {
    slug: "pharma-compliance-case-studies-pack",
    kind: "pack",
    title: "Pharma Compliance Case Studies Pack",
    metaTitle: "Pharma Compliance Case Studies Pack (free download) | Eunomia",
    metaDescription:
      "Two Eunomia case studies in one download: a five-market HCP fair market value methodology and a shared-service materials review for a UK pharmaceutical company.",
    summary:
      "Two published Eunomia engagements in one document: how a five-market fair market value methodology was designed, and how a structured materials-review service supported a UK company expanding across Europe.",
    audience: "Compliance, Medical Affairs, Finance and leadership teams comparing approaches to HCP compensation and promotional review capacity.",
    file: "/downloads/eunomia-pharma-compliance-case-studies-pack.pdf",
    note: "Results are those reported for each engagement in the August 2026 case studies. They are not general benchmarks or promised outcomes.",
    sections: [
      { heading: "Case study 1: Fair market value methodology for HCP compensation", items: [
        { text: "Client and challenge: a multi-market pharmaceutical company needed a consistent FMV framework across the UK, Germany, France, Italy and Spain, covering general practitioners, specialists, nurses, pharmacists, payers and patient contributors. Fragmented benchmarks, inconsistent tiering and individually negotiated rates made decisions difficult to explain and audit." },
        { text: "Methodology: a five-step calculation framework covering base compensation, available hours, practice displacement adjustment, a composite adjustment factor and tiering premia, with each rate traceable to the methodology and its source data." },
        { text: "Benchmarking and tiering: independent compensation and working-hours sources, including NHS pay circulars, ONS ASHE, ERI, WTW and national sources, and a four-tier framework using documented criteria such as publications, trials, role and experience." },
        { text: "Validation and deliverables: Compliance, Medical Affairs, Finance and Legal reviewed the inputs in structured working sessions. Deliverables included rate cards for six stakeholder categories across all five countries, an audit trail and an approach to annual indexed recalibration." },
        { text: "Reported outcomes: payments within the defensible FMV range increased from 66% to 98%; the average hourly rate decreased from £520 to £385; time to contract fell from 14 days to 6 days." },
      ] },
      { heading: "Case study 2: Pharmaceutical materials review as a shared service", items: [
        { text: "Client and challenge: a mid-sized UK-headquartered pharmaceutical company was expanding across Europe with a lean compliance organisation and no dedicated promotional review function. Rising material volumes and complexity put pressure on its review process." },
        { text: "Service design: a review framework integrated into the client’s systems, with experienced reviewers and signatories, workflows, SOPs, review templates, governance, quality assurance and audit-ready documentation." },
        { text: "Capacity and local expertise: global and UK promotional and medical review support, with access to local expertise as the business entered additional markets, designed to scale without building equivalent permanent infrastructure." },
        { text: "Reporting: administrative support and reporting on review activity, turnaround, approval trends and recurring issues, used to monitor performance and improve material quality." },
        { text: "Reported outcomes: review turnaround reduced from five days to two, and review cycles from four to two, attributed to dedicated reviewers, actionable feedback and communication between reviewers and material owners." },
      ] },
      { heading: "What the two engagements have in common", items: [
        { text: "A documented method that makes each decision traceable to its inputs and approvals." },
        { text: "Cross-functional validation, so Compliance, Medical, Finance and Legal work from the same basis." },
        { text: "Reporting that shows how the process performs, so it can be improved over time." },
      ] },
    ],
  },
  {
    slug: "uk-eu-pharma-compliance-guide-2026",
    kind: "guide",
    title: "UK & EU Pharma Compliance Guide 2026",
    metaTitle: "UK & EU Pharma Compliance Guide 2026 (free download) | Eunomia",
    metaDescription:
      "Key UK and EU pharmaceutical compliance frameworks and dates for 2026 in one guide: ABPI and EFPIA Codes, anti-bribery, failure to prevent fraud, data protection and eight country summaries.",
    summary:
      "The frameworks, dates and disclosure deadlines that shape pharmaceutical compliance in the UK and Europe in 2026, with a one-line summary of each and a link to the official source.",
    audience: "Compliance, legal and leadership teams planning the year ahead across the UK and European markets.",
    file: "/downloads/eunomia-uk-eu-pharma-compliance-guide-2026.pdf",
    note: "Informational summary based on official sources checked in September 2026, not legal advice. Confirm current requirements for your organisation, markets and activities.",
    sections: [
      { heading: "United Kingdom", items: [
        { text: "The 2024 ABPI Code of Practice took effect on 1 October 2024, with a transition period to 31 December 2024. It is administered by the PMCPA independently of the ABPI.", ref: "PMCPA" },
        { text: "The PMCPA’s social media guidance was updated in February 2026.", ref: "PMCPA" },
        { text: "Industry payments to UK healthcare professionals and organisations are published on Disclosure UK, the ABPI’s database.", ref: "ABPI" },
        { text: "Part 14 of the Human Medicines Regulations 2012 sets the legal rules on advertising medicines; the MHRA Blue Guide explains how the MHRA applies them.", ref: "legislation.gov.uk; MHRA" },
        { text: "Section 7 of the Bribery Act 2010: a commercial organisation can be liable for failing to prevent bribery by associated persons, unless it had adequate procedures.", ref: "legislation.gov.uk" },
        { text: "The failure to prevent fraud offence under the Economic Crime and Corporate Transparency Act 2023 has applied since 1 September 2025.", ref: "GOV.UK" },
        { text: "The Data (Use and Access) Act 2025 amends, but does not replace, the UK GDPR, the Data Protection Act 2018 and PECR; its changes were phased in between June 2025 and June 2026.", ref: "ICO" },
      ] },
      { heading: "European Union", items: [
        { text: "The EFPIA Code of Practice (2026 edition) sets standards for interactions with HCPs, HCOs and patient organisations. Member associations transpose it into national codes and may adopt stricter standards.", ref: "EFPIA" },
        { text: "EFPIA disclosure: transfers of value are disclosed annually for each calendar year, within six months of the year end; disclosures stay public for at least three years and records are kept for at least five.", ref: "EFPIA Code" },
        { text: "Directive 2001/83/EC sets the EU framework for medicines advertising and inducements that national laws implement.", ref: "EUR-Lex" },
        { text: "The EU AI Act, Regulation (EU) 2024/1689, applies alongside the GDPR, the EU Data Act and, where AI forms part of a medical device or diagnostic, the MDR and IVDR.", ref: "EUR-Lex" },
        { text: "Named disclosure of HCPs needs a lawful basis under the GDPR: EFPIA’s training material identifies individual consent or legitimate interest, with a documented process.", ref: "EFPIA" },
      ] },
      { heading: "Country notes", items: [
        { text: "France: the anti-gift regime (Ordonnance 2017-49; decree 2020-730 applying since 1 October 2020), Loi Bertrand disclosure on Transparence Santé, prior ANSM advertising visas and Sapin II Article 17.", ref: "Légifrance; ANSM" },
        { text: "Germany: the FSA codes for member companies, HWG § 7 on gifts and promotional benefits, and the healthcare anti-corruption offences in §§ 299a–299b StGB.", ref: "FSA; gesetze-im-internet.de" },
        { text: "Spain: incentives prohibited under Article 4.6 of RDL 1/2015; RD 1416/1994 on HCP advertising and hospitality; Farmaindustria Code (2025 edition), with transfers of value published each June.", ref: "BOE; Farmaindustria" },
        { text: "Italy: D.Lgs. 219/2006 on gifts (Art. 123) and AIFA notification of congresses at least 60 days ahead (Art. 124); Farmindustria disclosure by 30 June; the Sunshine Act (Legge 62/2022) register, whose operational status should be checked.", ref: "AIFA; Farmindustria" },
        { text: "Netherlands: Geneesmiddelenwet Article 94 on inducements, IGJ low-value limits of €50 per gift and €150 a year, and Transparantieregister Zorg reporting before 1 June for relationships of at least €500 a year.", ref: "wetten.overheid.nl; IGJ; Transparantieregister" },
        { text: "Portugal: declarations of economic advantages under Article 159 of the Estatuto do Medicamento through INFARMED’s transparency platform.", ref: "INFARMED" },
        { text: "Ireland: HPRA supervision of medicines advertising and the IPHA Code of Practice, including disclosure of financial interactions.", ref: "HPRA; IPHA" },
        { text: "Sweden: Lif’s ethical rules (LER), English edition effective 1 February 2026; searchable, downloadable disclosure reports from the 2027 publication of 2026 transfers.", ref: "Lif" },
      ] },
      { heading: "Disclosure calendar", items: [
        { text: "Before 1 June: Netherlands, report to the Transparantieregister Zorg (published mid-July).", ref: "Transparantieregister" },
        { text: "June: Spain, Farmaindustria Code disclosures published on company websites.", ref: "Farmaindustria" },
        { text: "By 30 June: EFPIA Code disclosure deadline (six months after year end); Italy, Farmindustria disclosures.", ref: "EFPIA; Farmindustria" },
      ] },
    ],
  },
];

export function getLeadMagnet(slug: string) {
  return leadMagnets.find((m) => m.slug === slug);
}

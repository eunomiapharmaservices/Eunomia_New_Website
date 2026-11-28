export const europeanLaunchCaseStudy = {
  path: "/insights/us-biotech-european-launch-compliance",
  title: "How a US Biotech Can Prepare for a European Launch",
  metaTitle: "European Launch Compliance for US Biotech | Eunomia",
  description: "Launching US pharma products in Europe? See how Eunomia helps adapt promotion, materials review, HCP engagement, disclosure and monitoring.",
};

export const launchComparisons = [
  {
    area: "Public promotion",
    us: "The US permits direct-to-consumer advertising of prescription drugs under FDA rules, including on TV and radio. The biotech’s existing campaign includes branded consumer advertising.",
    europe: "EU rules generally prohibit advertising prescription-only medicines to the public. The UK also prohibits it. Hold the branded consumer campaign and update agency briefs and channel rules for websites, social media and paid ads. Route disease-awareness content for local classification and review.",
  },
  {
    area: "Promotional materials review",
    us: "The biotech’s Medical, Legal and Regulatory (MLR) committee reviews claims and materials. A coordinator records comments and decisions in the existing review platform.",
    europe: "Keep the MLR record and add the applicable local checks. A clinician deck could require UK final-form certification, an ANSM promotional visa in France, statutory content checks in Germany or filing with AIFA in Italy.",
  },
  {
    area: "Payments and disclosure",
    us: "CMS Open Payments implements the federal Sunshine Act nationwide for applicable companies and covered recipients. Separate state requirements can apply.",
    europe: "The European Federation of Pharmaceutical Industries and Associations (EFPIA) sets a self-regulatory framework. France and Belgium have statutory disclosure duties, and Latvia requires reporting of certain support. Map recipients, data, deadlines and submission routes by market.",
  },
];

export const launchMarkets = [
  {
    country: "United Kingdom",
    action: "Certify the final material",
    detail: "For materials requiring certification under the ABPI Code, send the final UK deck to the required signatory before release. For paid advice, record the legitimate need, selection criteria, fair market value and written agreement.",
    sources: [
      { label: "ABPI certification", href: "https://www.pmcpa.org.uk/the-code/2024-interactive-abpi-code-of-practice/clause-8-certification-and-examination" },
      { label: "ABPI contracted services", href: "https://www.pmcpa.org.uk/the-code/2024-interactive-abpi-code-of-practice/clause-24-contracted-services/" },
    ],
  },
  {
    country: "France",
    action: "Check two filing workflows",
    detail: "Paid advice may require an anti-gift declaration or prior authorisation. Use IDAHE for in-scope physicians. For other recipients, check the competent order or regional health agency (ARS). Track Transparence-Santé disclosure separately.",
    sources: [
      { label: "Anti-gift guidance", href: "https://sante.gouv.fr/professionnels/article/encadrement-des-avantages-tout-comprendre-du-dispositif" },
      { label: "Transparence-Santé", href: "https://sante.gouv.fr/ministere/base-transparence-sante/article/base-transparence-sante" },
    ],
  },
  {
    country: "Germany",
    action: "Verify required product information",
    detail: "Check the local deck against the statutory content rules in section 4 of the German medicines advertising law. For the full product deck, verify indications, contraindications and adverse reactions against local product information.",
    sources: [{ label: "German advertising law, § 4", href: "https://www.gesetze-im-internet.de/heilmwerbg/__4.html" }],
  },
  {
    country: "Italy",
    action: "Log the filing and release dates",
    detail: "For in-scope materials, file the Italian deck with AIFA before the campaign starts. Log the deposit date on the material and in the workflow. The team can provide the deck to physicians once the statutory ten-day period after filing has elapsed.",
    sources: [{ label: "AIFA promotional materials guidance", href: "https://www.aifa.gov.it/documents/20142/1094635/Report-2024_La_pubblicita_dei_medicinali_in_Italia.pdf" }],
  },
  {
    country: "Spain",
    action: "Justify advisory board selection",
    detail: "Where the Farmaindustria Code applies, document the unanswered question and why each adviser has the expertise to address it. Use this evidence to review the board before agreeing fees or confirming participation.",
    sources: [{ label: "Farmaindustria advisory board guidance", href: "https://www.codigofarmaindustria.org/sites/sarfi/codigo/codigo.html?idPag=47" }],
  },
  {
    country: "Belgium",
    action: "Check congress hospitality",
    detail: "For sponsored participation by healthcare professionals practising in Belgium at a qualifying multi-day scientific congress, check whether a prior Mdeon visa is required. Record it before proceeding where applicable and track separate Belgian disclosure obligations.",
    sources: [
      { label: "Mdeon visa guidance", href: "https://mdeon.be/wp-content/uploads/2025/01/250129-FAQ-EN.pdf" },
      { label: "Belgian Transparency Register", href: "https://betransparent.be/en/" },
    ],
  },
];

export const launchSteps = [
  {
    title: "Map local obligations",
    detail: "Create a country register for product status, audience, channel, sign-off, local filings and disclosure. Assign a named owner and link each control to its source.",
  },
  {
    title: "Build the workflows",
    detail: "Update policies, procedures, templates and agency briefs. Configure local approval steps in the client’s current system. Where approved, use SharePoint and Power Automate to route work and remind owners.",
  },
  {
    title: "Audit and monitor",
    detail: "Schedule periodic risk-based sampling of live materials and healthcare professional (HCP) files. Check sign-off, filing timing and payment reconciliation. Assign owners and deadlines for corrective actions, then retest.",
  },
];

export const launchSources = [
  { label: "FDA consumer advertising guidance", href: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/direct-consumer-prescription-drug-advertisements-presentation-major-statement-clear-conspicuous-and" },
  { label: "EU Directive 2001/83/EC, Article 88", href: "https://eur-lex.europa.eu/eli/dir/2001/83" },
  { label: "UK MHRA advertising guidance", href: "https://www.gov.uk/guidance/advertise-your-medicines" },
  { label: "French promotional visa, Article L5122-9", href: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000034079745" },
  { label: "US Sunshine Act", href: "https://www.govinfo.gov/content/pkg/USCODE-2024-title42/html/USCODE-2024-title42-chap7-subchapXI-partA-sec1320a-7h.htm" },
  { label: "EFPIA Code of Practice", href: "https://www.efpia.eu/relationships-code/the-efpia-code/" },
  { label: "Latvian Health Inspectorate reporting", href: "https://www.vi.gov.lv/en/services/statement-support-provided-associations-foundations-and-medical-treatment-institutions" },
];

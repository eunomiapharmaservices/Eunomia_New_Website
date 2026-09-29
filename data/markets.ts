// Country compliance guides. Every rule below is summarised from the linked
// primary or official source (checked September 2026). Keep summaries to what
// the source says; add new facts only with a source link.

export type MarketRule = { title: string; body: string };
export type MarketSource = { label: string; href: string };
export type Market = {
  slug: string;
  country: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  intro: string;
  lead?: { name: string; role: string; image: string; bio: string };
  approach?: { audience: string; challenge: string; delivery: string; priorities: string[] };
  rules: MarketRule[];
  sources: MarketSource[];
  faqs: { question: string; answer: string }[];
};

export const markets: Market[] = [
{
  "slug": "ireland",
  "country": "Ireland",
  "metaTitle": "Pharmaceutical Compliance Support in Ireland | Eunomia",
  "metaDescription": "Plan pharma compliance in Ireland: HPRA advertising requirements, IPHA Code considerations, HCP engagements and transfers of value, connected to your operating model.",
  "title": "Pharmaceutical compliance support in Ireland",
  "intro": "Eunomia helps pharmaceutical and biotech teams plan compliance support for activities in Ireland. We connect programme design, review workflows and disclosure readiness with the Irish market context, agreeing the expertise and scope needed before work begins.",
  "approach": {
    "audience": "For UK and international pharma teams entering Ireland, emerging biotechs preparing commercial activities and compliance leaders coordinating several European markets. Start with the activities you intend to undertake and the people who will approve them.",
    "challenge": "An English-language campaign is not automatically ready for Ireland. Product information, target audiences, applicable codes and approval responsibilities need an Irish-market assessment. A combined UK and Ireland team also needs to distinguish the two jurisdictions when reviewing materials, organising engagements and recording payments.",
    "delivery": "We can scope a gap assessment, map the applicable requirements into your SOPs and define review and escalation routes. The agreed output can include an activity register, a responsibility matrix and a prioritised action plan. Where Irish legal advice, specialist review or a formal appointment is required, we identify that need and confirm appropriate expertise before delivery.",
    "priorities": [
      "Inventory Irish-facing websites, social posts and materials; identify the audience, product status and approval owner for each.",
      "Prepare an engagement file for advisory boards and consultancy: purpose, selection rationale, agreement, fee rationale and evidence of the work delivered.",
      "Map payments from affiliates and agencies into the disclosure process, with clear recipient data and reconciliation ownership.",
      "Test one planned activity from request to approval, payment and retained evidence before extending the process."
    ]
  },
  "rules": [
    {
      "title": "HPRA oversight of medicines advertising",
      "body": "The HPRA supervises medicines advertising under S.I. No. 541/2007. It reviews advertisements, investigates complaints and inspects companies. Its guidance emphasises accurate, non-misleading information consistent with approved product information. Build the supporting evidence and approval trail into your review process."
    },
    {
      "title": "Public communications and social media",
      "body": "HPRA guidance prohibits promotion of prescription-only medicines to the public, including online. It also prohibits advertising unauthorised or unregistered human medicines. Review the purpose and audience of each communication; using a social platform or describing a service does not remove the advertising rules."
    },
    {
      "title": "The IPHA Code and disclosure",
      "body": "IPHA publishes its Code of Practice for the Pharmaceutical Industry alongside a separate Self-Care Advertising Code. Its code framework includes disclosure of financial interactions with healthcare professionals and organisations. Confirm which code commitments apply to your company and activity; statutory advertising obligations are a separate assessment."
    },
    {
      "title": "Turning requirements into an operating process",
      "body": "A useful implementation plan names the material owner, reviewer, approver and escalation contact. It connects engagement documentation to payment records and disclosure preparation. These are practical process recommendations: the exact controls should follow your activities, applicable requirements and internal governance."
    }
  ],
  "sources": [
    {
      "label": "HPRA: advertising oversight and guidance",
      "href": "https://www.hpra.ie/regulation/human-medicine/marketing-authorisation-holders/post-licensing/market-compliance-and-surveillance-of-medicines/advertising-human-medicines-in-ireland"
    },
    {
      "label": "HPRA: public advertising and social media",
      "href": "https://www.hpra.ie/regulation/human-medicine/patients-and-healthcare-professionals/promoting-medicines-to-the-public-on-social-media"
    },
    {
      "label": "IPHA: codes of practice",
      "href": "https://www.ipha.ie/codes-of-practice/"
    }
  ],
  "faqs": [
    {
      "question": "Can we reuse UK-approved promotional material in Ireland?",
      "answer": "Treat UK approval as an input, not Irish approval. Assess the Irish product information, intended audience, advertising requirements and applicable code before use. The review should record any local changes and the person authorised to approve them."
    },
    {
      "question": "Does the IPHA Code replace HPRA advertising requirements?",
      "answer": "No. HPRA supervises statutory advertising requirements. Assess the IPHA Code separately according to the commitments and activities of your organisation; a code assessment does not replace the legal review."
    },
    {
      "question": "How should we prepare Irish transfers-of-value data?",
      "answer": "First confirm the applicable disclosure framework and reporting scope. Then identify recipients and relevant payment sources, reconcile agency and affiliate records, and document review responsibilities and the reporting methodology."
    },
    {
      "question": "Does Eunomia have a named consultant based in Ireland?",
      "answer": "This page does not identify an Ireland-based consultant. Contact our UK-based team to agree the activities, expertise and delivery arrangements needed. Any local specialist or formal role must be confirmed as part of the engagement."
    }
  ]
},
{
  "slug": "sweden",
  "country": "Sweden",
  "metaTitle": "Pharmaceutical Compliance Support in Sweden | Eunomia",
  "metaDescription": "Plan pharma compliance in Sweden: Lif ethical rules (LER), medicines information, HCP collaboration and disclosure workflows with Eunomia.",
  "title": "Pharmaceutical compliance support in Sweden",
  "intro": "Eunomia helps pharmaceutical and biotech teams scope compliance support for Sweden, connecting medicines-information review, healthcare collaboration and transparency processes with global governance. We agree the expertise and delivery arrangements required for your activities.",
  "approach": {
    "audience": "For pharmaceutical companies planning Swedish activities, regional teams extending a Nordic operating model and biotech organisations building their first commercial compliance processes. The starting point is a defined activity scope, rather than assuming one Nordic approach fits every country.",
    "challenge": "A global policy may not explain how Swedish healthcare collaboration, local medicines information and disclosure processes work in practice. Teams need clear ownership across headquarters, affiliates and third parties, including responsibility for local-language material and changes after initial approval.",
    "delivery": "We can help structure a market-readiness review, identify gaps between global processes and Swedish activities, and build an action plan with accountable owners. Scope can include engagement workflows, material-review coordination, payment-data controls and monitoring. Swedish-language review, specialist advice and any designated role are confirmed before engagement, rather than assumed.",
    "priorities": [
      "Identify which Swedish rules and contractual code commitments apply to each activity and third party.",
      "Map local-language assets and digital channels to a review owner, version history and escalation process.",
      "Connect healthcare collaboration requests to documented purpose, agreements, compensation review and retained evidence.",
      "Prepare disclosure data and a methodology note early, with responsibility for Swedish publication requirements and reconciliation."
    ]
  },
  "rules": [
    {
      "title": "Medicines advertising and the national regulator",
      "body": "The Swedish Medical Products Agency supervises medicines advertising. Its published overview states that advertising must not mislead or encourage misuse, and that only authorised or registered medicines may be advertised. Check the relevant product and audience before adapting a campaign for Sweden."
    },
    {
      "title": "Lif ethical rules: LER",
      "body": "LER complements legislation and covers human medicines. Its scope identifies Lif, ASCRO and FGL member companies and includes responsibilities for activities conducted through intermediaries. It addresses medicines information and healthcare collaboration. Check the applicable version and commitments before translating these requirements into an operating procedure."
    },
    {
      "title": "Healthcare collaboration and transparency",
      "body": "Lif’s published rules cover healthcare collaboration and disclosure of transfers of value. The disclosure section includes annual reporting, a methodology note and Swedish-language publication. It also specifies searchable, downloadable reports from the 2027 publication of 2026 transfers. Plan the data and publication workflow together."
    },
    {
      "title": "Review and escalation",
      "body": "LER describes the roles of IGN and NBL in industry self-regulation. For operational readiness, define who reviews local materials, assesses questions and coordinates a response if an issue arises. Keep the final approved version, supporting evidence and subsequent changes accessible to that team."
    }
  ],
  "sources": [
    {
      "label": "Swedish Medical Products Agency: advertising",
      "href": "https://www.lakemedelsverket.se/en/trading-pharmaceuticals/advertising"
    },
    {
      "label": "Lif: ethical rules and current versions",
      "href": "https://www.lif.se/etik/etiska-regelverket/"
    },
    {
      "label": "LER: English edition, 1 February 2026",
      "href": "https://www.lif.se/globalassets/pdf/etik/final-version-ler-1-februari-2026-eng.pdf"
    },
    {
      "label": "Lif: healthcare collaboration and disclosure rules",
      "href": "https://www.lif.se/etik/etiska-regelverket/innehall/kapitel-2/"
    }
  ],
  "faqs": [
    {
      "question": "Is a global EFPIA process enough for Sweden?",
      "answer": "It is a starting point. Assess the Swedish legal requirements and applicable LER provisions, then identify local changes to your global process. Record ownership for local review, healthcare collaboration and disclosure."
    },
    {
      "question": "Who is covered by LER?",
      "answer": "The English LER edition effective 1 February 2026 identifies Lif, ASCRO and FGL member companies in its scope. It also addresses group-company activities and intermediaries. Confirm membership, contractual commitments and activity scope for your own organisation."
    },
    {
      "question": "What should we prepare for Swedish disclosure?",
      "answer": "Confirm reportable interactions, recipient information and reconciliation responsibilities. Lif’s disclosure rules address a methodology note and publication in Swedish; they also specify searchable and downloadable reports from the 2027 publication of 2026 transfers. Check the current rules when preparing the report."
    },
    {
      "question": "Can Eunomia provide a Swedish office or named local representative?",
      "answer": "This page does not claim a Swedish office or a named local representative. We agree support scope and confirm specialist expertise, language needs and any formal role before an engagement begins."
    }
  ]
},
  {
    slug: "germany",
    country: "Germany",
    metaTitle: "Pharmaceutical Compliance Support in Germany | Eunomia",
    metaDescription:
      "Pharma compliance support in Germany: FSA codes, the Heilmittelwerbegesetz (HWG), healthcare anti-corruption offences in §§ 299a–299b StGB and transparency.",
    title: "Pharmaceutical compliance support in Germany",
    intro:
      "Local compliance support for pharmaceutical and biotech companies working in Germany, connecting German law and the FSA's self-regulatory codes to your global governance, with a named DACH business partner.",
    lead: {
      name: "Dr. Hans Joachim Hutt",
      role: "Global Compliance Business Partner — DACH",
      image: "/consultants/dr-hans-joachim-hutt.svg",
      bio: "Hans provides compliance business-partner support across DACH, bringing local context into global governance and operating models.",
    },
    approach: {
      "audience": "For international pharmaceutical and biotech companies with German activities, DACH teams working within a global compliance model, and companies preparing their first German launch. Start from the activities you plan in Germany and whether your company is an FSA member.",
      "challenge": "German requirements come from two directions: statutory law, including the HWG and the healthcare anti-corruption offences in the Criminal Code, which applies to everyone, and the FSA codes, which bind member companies. A global policy often treats these as one layer. Teams also need to record why each HCP engagement is needed and how its compensation was set, so the same file supports an HWG review, an FSA code check and disclosure.",
      "delivery": "Working with our DACH business partner, we can map your German activities against the HWG, §§ 299a–299b StGB and the relevant FSA codes, then build the result into your SOPs, approval routes and disclosure process. Outputs can include an activity register, a responsibility matrix, review templates and a prioritised action plan. Where German legal advice is required, we identify that need before delivery.",
      "priorities": [
        "Confirm FSA membership and which FSA codes apply, alongside the statutory rules that apply regardless of membership.",
        "Review planned gifts, promotional items and hospitality against HWG § 7 and your global policy, and record the rationale.",
        "Document each HCP engagement: legitimate need, selection, written agreement, fee rationale and evidence of the service delivered.",
        "Connect German payments from affiliates and agencies to your transparency reporting under the FSA-Transparenzkodex and EFPIA framework."
      ]
    },
    rules: [
      {
        title: "FSA self-regulatory codes",
        body: "The FSA (Freiwillige Selbstkontrolle für die Arzneimittelindustrie e.V.) is the industry's self-regulatory body; its member companies account for around 75% of the German pharmaceutical market. Its codes cover collaboration with healthcare professionals and medical institutions (FSA-Kodex Fachkreise), cooperation with patient organisations (FSA-Kodex Patientenorganisationen) and transparency (FSA-Transparenzkodex). Breaches can lead to fines and, in serious cases, public reprimands.",
      },
      {
        title: "Advertising of medicines: the HWG",
        body: "The Heilmittelwerbegesetz (HWG) governs advertising in the healthcare sector. Section 7 prohibits offering, announcing or granting gifts and other promotional benefits, and prohibits healthcare professionals from accepting them, subject to narrow exceptions such as items of low value.",
      },
      {
        title: "Anti-corruption in healthcare: §§ 299a and 299b StGB",
        body: "The German Criminal Code makes it an offence for a healthcare professional to request or accept an advantage (§ 299a), and for anyone to offer or grant one (§ 299b), in return for unfairly favouring another party when prescribing medicines, medical aids or devices, purchasing them for direct use, or referring patients or examination material.",
      },
      {
        title: "Transparency and disclosure",
        body: "Under the FSA-Transparenzkodex, member companies commit to transparency about their collaboration with healthcare professionals and healthcare organisations, alongside the EFPIA Code disclosure framework that applies across Europe.",
      },
    ],
    sources: [
      { label: "FSA codes", href: "https://www.fsa-pharma.de/der-fsa/ueber-uns/kodizes-auf-einen-blick/" },
      { label: "HWG § 7", href: "https://www.gesetze-im-internet.de/heilmwerbg/__7.html" },
      { label: "§ 299a StGB", href: "https://www.gesetze-im-internet.de/stgb/__299a.html" },
      { label: "§ 299b StGB", href: "https://www.gesetze-im-internet.de/stgb/__299b.html" },
      { label: "EFPIA Code", href: "https://www.efpia.eu/relationships-code/the-efpia-code/" },
    ],
    faqs: [
      {
        question: "Do the FSA codes apply to our company?",
        answer:
          "The FSA codes bind FSA member companies. Whether and how they apply to you depends on membership and your activities in Germany, and we confirm this at the start of each engagement. German law, including the HWG and the StGB, applies regardless of membership.",
      },
      {
        question: "Can you review HCP engagements and gifts for Germany?",
        answer:
          "Yes. We review planned engagements, hospitality and promotional items against the HWG, the relevant FSA code and your global policy, and document the rationale and approvals.",
      },
      {
        question: "Do we need our own staff in Germany?",
        answer:
          "Not necessarily. Many compliance-support needs can be met through a named local business partner working within your global compliance model. The right set-up depends on your legal obligations and activities.",
      },
    ],
  },
  {
    slug: "france",
    country: "France",
    metaTitle: "Pharmaceutical Compliance Support in France | Eunomia",
    metaDescription:
      "Pharma compliance support in France: the anti-gift law (loi anti-cadeaux), Loi Bertrand transparency, ANSM advertising visas, Sapin II and LEEM rules.",
    title: "Pharmaceutical compliance support in France",
    intro:
      "Local compliance support for pharmaceutical and biotech companies working in France, from the anti-gift regime and Transparence Santé disclosure to Sapin II, led by a senior French ethics and compliance professional.",
    lead: {
      name: "Alexandre Guillaume",
      role: "Global Compliance Business Partner — Global & France",
      image: "/consultants/alexandre-guillaume.svg",
      bio: "Alexandre is a senior Ethics & Compliance professional with over 25 years of experience with pharmaceutical and life sciences companies, as well as leading audit and consulting firms. He previously served as Head of Global Compliance at Servier for nearly three years and was a member of key industry ethics committees at IFPMA and EFPIA.",
    },
    approach: {
      "audience": "For pharmaceutical and biotech companies with French activities, global compliance teams adding France to a European model, and companies preparing their first French launch. French requirements are largely statutory, so the starting point is the legal regime rather than a code-only assessment.",
      "challenge": "In France, many HCP interactions need action before they happen: some advantages must be declared in advance or authorised under the anti-gift regime, and advertising needs a prior ANSM visa. Agreements and benefits must then be disclosed on Transparence Santé. Global processes built around after-the-event review and annual EFPIA disclosure often miss these timelines.",
      "delivery": "Led by Alexandre Guillaume, we can map planned French engagements against the anti-gift regime, build declaration and authorisation timelines into your approval workflow, and set up the data and review controls behind Transparence Santé reporting. Where Sapin II applies, we can assess your anti-corruption programme against Article 17. Where French legal advice is required, we identify that need before delivery.",
      "priorities": [
        "List planned HCP engagements for the next two quarters and classify each: exception, declaration or authorisation under the anti-gift regime.",
        "Build declaration and authorisation lead times into your meeting and consultancy approval calendar.",
        "Align French agreement and payment data with Transparence Santé reporting and with EFPIA disclosure in other markets.",
        "Check whether the Sapin II Article 17 thresholds apply at company or group level, and plan the programme review accordingly."
      ]
    },
    rules: [
      {
        title: "The anti-gift regime (loi anti-cadeaux)",
        body: "Ordonnance n° 2017-49 of 19 January 2017 created Articles L.1453-3 and following of the Public Health Code (Code de la santé publique). It sets a general prohibition on healthcare companies offering, and healthcare professionals receiving, advantages in cash or in kind. Limited exceptions apply, and certain permitted advantages must be declared in advance or authorised by the relevant professional order or authority. The implementing decree (n° 2020-730) has applied since 1 October 2020.",
      },
      {
        title: "Transparency: the Loi Bertrand",
        body: "Loi n° 2011-2012 of 29 December 2011, known as the Loi Bertrand or French Sunshine Act, requires companies producing or marketing health products to publicly disclose agreements with, and benefits provided to, healthcare stakeholders. Disclosures are published on the public Transparence Santé database, managed by the Direction générale de la santé.",
      },
      {
        title: "Advertising of medicines: ANSM visas",
        body: "Advertising of medicines requires a prior visa from the ANSM (Agence nationale de sécurité du médicament et des produits de santé): a visa PM for advertising aimed at healthcare professionals and a visa GP for advertising aimed at the general public.",
      },
      {
        title: "Anti-corruption: Sapin II",
        body: "Article 17 of Loi n° 2016-1691 of 9 December 2016 (Sapin II) requires companies with at least 500 employees and turnover above €100 million, including at group level, to put an anti-corruption programme in place. The Agence française anticorruption (AFA) checks compliance.",
      },
      {
        title: "Industry ethics: LEEM",
        body: "LEEM, the French pharmaceutical industry association, sets professional ethics rules for its members (Dispositions Déontologiques Professionnelles), overseen by its ethics committee, the Codeem.",
      },
    ],
    sources: [
      { label: "Anti-gift regime (CNOP)", href: "https://www.ordre.pharmacien.fr/je-suis/pharmacien/pharmacien/mon-exercice-professionnel/le-dispositif-anti-cadeaux" },
      { label: "DGCCRF / DGOS FAQ", href: "https://www.economie.gouv.fr/dgccrf/reglementation-encadrement-des-avantages-la-foire-aux-questions-de-la-dgccrf-et-de-la-dgos" },
      { label: "Loi n° 2011-2012", href: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000025053440" },
      { label: "Transparence Santé", href: "https://www.transparence.sante.gouv.fr/" },
      { label: "ANSM advertising visas", href: "https://ansm.sante.fr/vos-demarches/industriel/effectuer-une-demande-de-visa-de-publicite-pour-les-medicaments-gp-pm" },
      { label: "Sapin II, Article 17", href: "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000051752923" },
      { label: "LEEM ethics rules", href: "https://www.leem.org/dispositions-deontologiques-professionnelles" },
    ],
    faqs: [
      {
        question: "Which HCP engagements need declaring or authorising in France?",
        answer:
          "It depends on the type and value of the advantage. We map each planned engagement against the anti-gift regime, identify whether it falls under an exception, a declaration or an authorisation request, and plan the timelines.",
      },
      {
        question: "Can you support Transparence Santé reporting?",
        answer:
          "Yes. We help build the data, process and review controls behind French transparency reporting, alongside EFPIA disclosure in other markets.",
      },
      {
        question: "Does Sapin II apply to us?",
        answer:
          "Article 17 applies above the employee and turnover thresholds, including at group level. Where it applies, we can help assess and strengthen the programme against it. Where it does not, its measures remain a useful benchmark for a proportionate programme.",
      },
    ],
  },
  {
    slug: "portugal",
    country: "Portugal",
    metaTitle: "Pharmaceutical Compliance Support in Portugal | Eunomia",
    metaDescription:
      "Pharma compliance support in Portugal: INFARMED transparency declarations under Article 159 of the Estatuto do Medicamento, advertising rules and the APIFARMA code.",
    title: "Pharmaceutical compliance support in Portugal",
    intro:
      "Local compliance support for pharmaceutical and biotech companies working in Portugal, covering INFARMED transparency declarations, advertising rules and the APIFARMA code, with a named Portuguese business partner.",
    lead: {
      name: "Jalmira Mulchande",
      role: "Global Compliance Business Partner",
      image: "/consultants/jalmira-mulchande.svg",
      bio: "Jalmira Mulchande is a healthcare consultant based in Portugal and the Co-founder and General Manager of Xtrategical Pharma Consulting. A pharmacist and global health advocate with a PhD, she brings over 15 years of experience spanning health policy, regulatory and medical affairs, ethical and legal compliance, health technology assessment, and patient access to innovative health technologies.",
    },
    approach: {
      "audience": "For pharmaceutical and biotech companies with Portuguese activities, regional teams covering Iberia or Lusophone markets, and companies setting up their first Portuguese operations. Start with the entities involved and the economic advantages they grant or receive.",
      "challenge": "Portugal's transparency obligation is statutory and applies to any entity working in the medicines circuit, with declarations made through INFARMED's platform. Companies used to annual code-based disclosure need a process that captures qualifying advantages and makes each declaration, with evidence, rather than one year-end report.",
      "delivery": "With local input from our Portugal-based partner, we can map your activities against Article 159 of the Estatuto do Medicamento, INFARMED advertising requirements and the APIFARMA code, and build the declaration process into your approval and payment workflows. Outputs can include an activity register, a responsibility matrix and a prioritised action plan. Where Portuguese legal advice is required, we identify that need before delivery.",
      "priorities": [
        "Identify which Portuguese interactions involve economic advantages in scope of Article 159.",
        "Assign responsibility for INFARMED platform declarations, with the evidence retained for each one.",
        "Review Portuguese promotional materials and HCP interactions against INFARMED requirements and the APIFARMA code.",
        "Map Portugal into your European process so disclosure, review and escalation work consistently across markets."
      ]
    },
    rules: [
      {
        title: "Transparency: Article 159 of the Estatuto do Medicamento",
        body: "Decreto-Lei n.º 176/2006 of 30 August (the Estatuto do Medicamento), as amended by Decreto-Lei n.º 20/2013 and Decreto-Lei n.º 128/2013, requires any entity working in the medicines circuit to declare any economic advantage granted or received.",
      },
      {
        title: "INFARMED's transparency platform",
        body: "Declarations are made through INFARMED's Plataforma de Comunicações – Transparência e Publicidade, which records sponsorships granted or received and produces a public listing from the declarations made.",
      },
      {
        title: "Advertising of medicines",
        body: "Advertising of medicines for human use is supervised by INFARMED, Portugal's national authority for medicines and health products.",
      },
      {
        title: "Industry code: APIFARMA",
        body: "APIFARMA, the Portuguese pharmaceutical industry association, publishes a Código Deontológico covering promotional practices and interactions with healthcare professionals, and has its own ethics council (Conselho Deontológico).",
      },
    ],
    sources: [
      { label: "INFARMED transparency platform", href: "https://www.infarmed.pt/web/infarmed/transparencia-e-publicidade-plataforma-de-comunicacoes" },
      { label: "INFARMED advertising", href: "https://www.infarmed.pt/web/infarmed/entidades/medicamentos-uso-humano/publicidade-de-medicamentos" },
      { label: "APIFARMA ethics", href: "https://apifarma.pt/deontologia-apifarma/" },
      { label: "EFPIA Code", href: "https://www.efpia.eu/relationships-code/the-efpia-code/" },
    ],
    faqs: [
      {
        question: "What has to be declared to INFARMED?",
        answer:
          "Article 159 of the Estatuto do Medicamento covers economic advantages granted or received by entities in the medicines circuit. We help identify which interactions are in scope and set up the process and evidence behind each declaration.",
      },
      {
        question: "Can you review promotional materials for Portugal?",
        answer:
          "Yes. We review materials and HCP interactions against Portuguese requirements, the APIFARMA code and your global standards, with local input from our Portugal-based partner.",
      },
      {
        question: "Can Portugal be covered as part of a wider European model?",
        answer:
          "Yes. Local requirements are mapped into your global processes so Portugal is handled consistently with your other European markets.",
      },
    ],
  },
{
  "slug": "spain",
  "country": "Spain",
  "metaTitle": "Pharmaceutical Compliance Support in Spain | Eunomia",
  "metaDescription": "Pharma compliance support in Spain: incentives and advertising rules under RDL 1/2015 and RD 1416/1994, the Farmaindustria Code and transfers-of-value disclosure.",
  "title": "Pharmaceutical compliance support in Spain",
  "intro": "Local compliance support for pharmaceutical and biotech companies working in Spain, connecting Spanish medicines law and the Farmaindustria Code of Good Practice to your global governance, with a named business partner for Spain.",
  "lead": {
    "name": "Maria Diaz",
    "role": "Global Compliance Business Partner — Spain",
    "image": "/consultants/maria-diaz.svg",
    "bio": "Maria is Eunomia’s Global Compliance Business Partner for Spain, providing local context for Spanish compliance questions within your global operating model."
  },
  "approach": {
    "audience": "For international pharmaceutical and biotech companies with Spanish activities, regional teams covering Iberia, and companies preparing a Spanish launch. Start from the activities you plan in Spain and whether your company has signed up to the Farmaindustria Code.",
    "challenge": "Spain combines statutory rules on incentives, advertising and hospitality with a detailed industry code and its own supervisory bodies. Regional health authorities also play a role: advertising material aimed at HCPs is notified to the relevant Autonomous Community. Global processes need to reflect both the national and the regional steps.",
    "delivery": "With local input from our Spain business partner, we can map your Spanish activities against RDL 1/2015, RD 1416/1994 and the Farmaindustria Code, then build the result into your SOPs, review routes and disclosure process. Outputs can include an activity register, a responsibility matrix and a prioritised action plan. Where Spanish legal advice is required, we identify that need before delivery.",
    "priorities": [
      "Confirm whether your company is bound by the Farmaindustria Code, alongside the statutory rules that apply to everyone.",
      "Review planned gifts, hospitality and sponsorship against the incentive and hospitality rules, and record the rationale.",
      "Set up notification of HCP advertising material to the relevant Autonomous Community within your review workflow.",
      "Prepare annual transfers-of-value data for individual publication each June, reconciled across affiliates and agencies."
    ]
  },
  "rules": [
    {
      "title": "Incentives to healthcare professionals",
      "body": "Article 4.6 of Real Decreto Legislativo 1/2015 (the Ley de garantías y uso racional de los medicamentos) prohibits anyone with an interest in producing or marketing medicines from directly or indirectly offering incentives, bonuses, discounts, premiums or gifts to healthcare professionals involved in prescribing, dispensing or administering medicines, or to their relatives and cohabitants. A narrow exception covers early-payment and volume discounts shown on the invoice."
    },
    {
      "title": "Advertising to healthcare professionals",
      "body": "Under Article 78 of RDL 1/2015, information and promotion aimed at healthcare professionals is subject to control by the health authorities and must match the information authorised by the AEMPS and the summary of product characteristics. Real Decreto 1416/1994 sets out the detail, including the content of HCP advertising (Article 10) and notification of HCP advertising material to the relevant Autonomous Community (Article 25)."
    },
    {
      "title": "Benefits and hospitality",
      "body": "RD 1416/1994 prohibits pecuniary or in-kind benefits to prescribers or dispensers, except those of insignificant value (Article 17). Hospitality at scientific events must be moderate, secondary to the main purpose of the meeting and not extended to people other than healthcare professionals (Article 18). Healthcare professionals may not request or accept prohibited incentives (Article 19)."
    },
    {
      "title": "Advertising to the public",
      "body": "Article 80 of RDL 1/2015 limits public advertising to medicines that are not publicly funded, not subject to prescription and not psychotropic or narcotic, and bans premiums, gifts and prizes linked to it. Such advertising does not need prior authorisation, but the health authorities check it."
    },
    {
      "title": "The Farmaindustria Code of Good Practice",
      "body": "Farmaindustria’s Código de Buenas Prácticas de la Industria Farmacéutica covers the promotion of prescription medicines and interactions with healthcare professionals, healthcare organisations and patient organisations. The current edition was ratified in June 2025. It is supervised by the Unidad de Supervisión Deontológica, the Comisión Deontológica and the AUTOCONTROL Jury."
    },
    {
      "title": "Transparency and disclosure",
      "body": "Companies that have signed up to the Farmaindustria Code publish, each June on their own websites, the transfers of value they made to healthcare professionals and organisations in the previous year. Since June 2018, all collaborations except R&D have been published individually. This is a voluntary industry commitment rather than a legal duty."
    }
  ],
  "sources": [
    {
      "label": "RDL 1/2015 (BOE)",
      "href": "https://www.boe.es/buscar/act.php?id=BOE-A-2015-8343"
    },
    {
      "label": "RD 1416/1994 (BOE)",
      "href": "https://www.boe.es/buscar/act.php?id=BOE-A-1994-17681"
    },
    {
      "label": "Farmaindustria self-regulation",
      "href": "https://www.farmaindustria.es/web/area/autorregulacion/"
    },
    {
      "label": "Farmaindustria Code 2025 (PDF)",
      "href": "https://www.farmaindustria.es/web/wp-content/uploads/sites/2/2026/06/Codigo-de-Buenas-Practicas-de-la-Industria-Farmaceutica-2025.pdf"
    },
    {
      "label": "Farmaindustria transparency initiative",
      "href": "https://www.farmaindustria.es/transparencia/la-iniciativa/"
    },
    {
      "label": "EFPIA Code",
      "href": "https://www.efpia.eu/relationships-code/the-efpia-code/"
    }
  ],
  "faqs": [
    {
      "question": "Does the Farmaindustria Code apply to our company?",
      "answer": "The Code binds companies that have signed up to it. Spanish medicines law, including RDL 1/2015 and RD 1416/1994, applies regardless. We confirm your position and activities at the start of each engagement."
    },
    {
      "question": "When are Spanish transfers of value published?",
      "answer": "Companies bound by the Farmaindustria Code publish each June, on their own websites, the transfers of value made in the previous year. All collaborations except R&D are published individually."
    },
    {
      "question": "Do regional authorities have a role in Spain?",
      "answer": "Yes. Under Article 25 of RD 1416/1994, advertising material aimed at healthcare professionals is notified to the relevant Autonomous Community. Build that step into your review and approval workflow."
    }
  ]
},
{
  "slug": "italy",
  "country": "Italy",
  "metaTitle": "Pharmaceutical Compliance Support in Italy | Eunomia",
  "metaDescription": "Pharma compliance support in Italy: advertising and gift rules under D.Lgs. 219/2006, AIFA notification of congresses, the Farmindustria Code, the Sunshine Act and D.Lgs. 231/2001.",
  "title": "Pharmaceutical compliance support in Italy",
  "intro": "Local compliance support for pharmaceutical and biotech companies working in Italy, connecting Italian medicines law, AIFA procedures and the Farmindustria Code to your global governance, with a named business partner for Italy.",
  "lead": {
    "name": "Ilaria Franchini",
    "role": "Global Compliance Business Partner — Italy",
    "image": "/consultants/ilaria-franchini.svg",
    "bio": "Ilaria is Eunomia’s Global Compliance Business Partner for Italy, providing local context for Italian compliance questions within your global operating model."
  },
  "approach": {
    "audience": "For international pharmaceutical and biotech companies with Italian activities, European teams adding Italy to a regional model, and companies preparing an Italian launch. Start from the events, materials and HCP engagements you plan in Italy.",
    "challenge": "Italy has several procedural steps with fixed lead times: HCP advertising material is filed with AIFA before use, and company-supported congresses and meetings are notified to AIFA in advance, with express authorisation needed in some cases. Global event and material processes often do not allow for these timelines.",
    "delivery": "With local input from our Italy business partner, we can map your Italian activities against D.Lgs. 219/2006 and the Farmindustria Code, build AIFA filing and notification timelines into your approval workflow, and prepare transparency data. Where relevant, we can connect this to your organisational model under D.Lgs. 231/2001. Where Italian legal advice is required, we identify that need before delivery.",
    "priorities": [
      "List planned Italian congresses and meetings and build the AIFA notification lead time into your event calendar.",
      "Add AIFA filing of HCP advertising material to your review workflow before first use.",
      "Review gifts and hospitality against Articles 123 and 124 of D.Lgs. 219/2006 and the Farmindustria Code.",
      "Prepare transfers-of-value data for individual publication by 30 June, and track the status of the Sanità trasparente register."
    ]
  },
  "rules": [
    {
      "title": "Gifts and advantages: Article 123 of D.Lgs. 219/2006",
      "body": "In promoting medicines to doctors and pharmacists, companies may not grant, offer or promise prizes or pecuniary or in-kind advantages unless they are of negligible value and relevant to the professional’s practice. Healthcare professionals may not solicit or accept any prohibited incentive."
    },
    {
      "title": "Congresses and meetings: Article 124",
      "body": "A company supporting a congress or meeting notifies AIFA at least 60 days beforehand; the event may go ahead if AIFA gives a favourable opinion within 45 days. Events abroad, or costing the company more than €25,822.85, need express AIFA authorisation. Hospitality is limited to qualified professionals, cannot extend to companions, and runs from 12 hours before to 12 hours after the event."
    },
    {
      "title": "Supervision of advertising",
      "body": "Advertising material aimed at healthcare professionals must be filed with AIFA and may be used ten days after filing (Article 120). Advertising to the public requires authorisation from the Ministry of Health (Article 118)."
    },
    {
      "title": "The Farmindustria Codice Deontologico",
      "body": "Farmindustria’s code of conduct binds its member companies and is updated regularly. Its control bodies include the Comitato di controllo and the Giurì, which hears appeals. Its transparency section requires member companies to publish transfers of value to HCPs, HCOs, patient associations and expert patients each year, individually and on the company website, by 30 June of the following year."
    },
    {
      "title": "The Italian Sunshine Act: Legge 62/2022",
      "body": "Law 62 of 31 May 2022 requires publication of transfers of value above set thresholds (for individual healthcare professionals, more than €100 per item or €1,000 a year) in a public register, Sanità trasparente, on the Ministry of Health website. The register’s start date is to be announced in the Gazzetta Ufficiale. We have not found an official notice that the register is operational, so check its status when planning reporting."
    },
    {
      "title": "Corporate liability: D.Lgs. 231/2001",
      "body": "A company can be liable for specified offences, including bribery, committed in its interest or to its benefit. It can avoid liability if it proves it adopted and effectively applied a suitable organisational and management model, overseen by a body with autonomous powers."
    }
  ],
  "sources": [
    {
      "label": "D.Lgs. 219/2006 (AIFA consolidated text)",
      "href": "https://www.aifa.gov.it/sites/default/files/d.lgs_.n._219_2006_e_s.m.i..pdf"
    },
    {
      "label": "Farmindustria Codice Deontologico",
      "href": "https://www.farmindustria.it/documenticategory/codice-deontologico/"
    },
    {
      "label": "Legge 62/2022 (Sunshine Act)",
      "href": "https://partecipa.gov.it/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaklCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--052c9cf38425a0b255b2076adde7ad75f0f530d0/legge%2031%20maggio%202022,%20n.%2062%20Sunschine%20act.pdf"
    },
    {
      "label": "Sanità trasparente consultation (ParteciPa)",
      "href": "https://partecipa.gov.it/processes/sanitatrasparente?locale=en"
    },
    {
      "label": "D.Lgs. 231/2001",
      "href": "https://leg13.camera.it/parlam/leggi/deleghe/testi/01231dl.htm"
    },
    {
      "label": "EFPIA Code",
      "href": "https://www.efpia.eu/relationships-code/the-efpia-code/"
    }
  ],
  "faqs": [
    {
      "question": "How far ahead must Italian congresses be notified to AIFA?",
      "answer": "Under Article 124 of D.Lgs. 219/2006, at least 60 days before the event. Events abroad, or costing the company more than €25,822.85, need express AIFA authorisation."
    },
    {
      "question": "Is the Sanità trasparente register live?",
      "answer": "Law 62/2022 provides for the register and says its start date will be announced in the Gazzetta Ufficiale. We have not found an official notice that it is operational, so we check its status at the start of each engagement. Farmindustria’s code-based disclosure continues to apply to member companies."
    },
    {
      "question": "Does a D.Lgs. 231/2001 model cover pharma compliance?",
      "answer": "A 231 model addresses the specified offences, including bribery. It should connect to your commercial compliance controls, such as HCP engagement approval and gift and hospitality rules, so the model is applied in practice."
    }
  ]
},
{
  "slug": "netherlands",
  "country": "Netherlands",
  "metaTitle": "Pharmaceutical Compliance Support in the Netherlands | Eunomia",
  "metaDescription": "Plan pharma compliance in the Netherlands: Geneesmiddelenwet inducement rules, IGJ policy, the CGR code, Transparantieregister Zorg and public advertising review.",
  "title": "Pharmaceutical compliance support in the Netherlands",
  "intro": "Eunomia helps pharmaceutical and biotech teams plan compliance support for activities in the Netherlands, connecting Dutch inducement and advertising rules, the CGR code and Transparantieregister Zorg reporting with your global governance. We agree the expertise and scope needed before work begins.",
  "approach": {
    "audience": "For international pharmaceutical and biotech companies with Dutch activities, Benelux or Northern European teams, and companies preparing a Dutch launch. Start with the HCP engagements, materials and payments you plan in the Netherlands.",
    "challenge": "Dutch inducement rules are statutory and apply to both the giver and the receiver. The IGJ policy rules set specific limits for low-value gifts, and financial relationships above a threshold are published in the Transparantieregister Zorg on a fixed annual timetable. Global processes need these limits and dates built in.",
    "delivery": "We can scope a gap assessment against the Geneesmiddelenwet, the IGJ policy rules and the CGR code, and build the result into your SOPs, review routes and reporting process. Outputs can include an activity register, a responsibility matrix and a prioritised action plan. Where Dutch legal advice, Dutch-language review or a formal role is required, we identify that need and confirm appropriate expertise before delivery.",
    "priorities": [
      "Check planned gifts and hospitality against Article 94 of the Geneesmiddelenwet and the IGJ value limits.",
      "Put written agreements and reasonable-fee rationale in place for every paid HCP service.",
      "Decide which planned materials or activities to submit to the CGR for preliminary advice.",
      "Prepare Transparantieregister Zorg data ahead of the 1 June reporting deadline, with a named owner."
    ]
  },
  "rules": [
    {
      "title": "Inducements: Article 94 of the Geneesmiddelenwet",
      "body": "Chapter 9 of the Medicines Act (Geneesmiddelenwet) governs medicines advertising. Article 94 prohibits inducements (gunstbetoon) aimed at promoting the prescribing, dispensing or use of a medicine, with four exceptions: services under a written agreement at a reasonable fee, hospitality at meetings limited to what is strictly necessary, low-value gifts relevant to practice, and purchase discounts and bonuses."
    },
    {
      "title": "IGJ policy rules and supervision",
      "body": "The Health and Youth Care Inspectorate (IGJ) supervises the advertising and inducement rules. Its Beleidsregels gunstbetoon Geneesmiddelenwet 2018, in force since 1 April 2018, set low value at €50 per gift with a maximum of €150 a year. The IGJ notes that what a giver may not give, a recipient may not accept."
    },
    {
      "title": "Advertising restrictions",
      "body": "Public advertising of prescription-only medicines is prohibited (Article 85). Free samples of prescription-only medicines are allowed only under strict conditions, including no more than two samples of the same medicine per healthcare professional per calendar year (Article 92)."
    },
    {
      "title": "Self-regulation: the CGR code",
      "body": "The Stichting Code Geneesmiddelenreclame (CGR) runs self-regulation of advertising aimed at healthcare professionals through the Gedragscode Geneesmiddelenreclame, under IGJ oversight. Oversight sits with the CGR’s Keuringsraad, Codecommissie and Commissie van Beroep. The Keuringsraad gives non-binding preliminary advice on planned activities within 30 working days; some activities require mandatory preventive review."
    },
    {
      "title": "Transparantieregister Zorg",
      "body": "The register publishes financial relationships of at least €500 per calendar year between companies and healthcare professionals, institutions and patient organisations, including service fees, sponsorship and individual hospitality. Companies report before 1 June of the following year, recipients can check the data, and it is published in mid-July."
    },
    {
      "title": "Public advertising review: KOAG/KAG",
      "body": "The Keuringsraad KOAG/KAG supervises public advertising for medicines on behalf of the industry, under IGJ oversight. It reviews self-care medicine advertising in advance against the Code voor de Publieksreclame voor Geneesmiddelen, and approved advertising receives an approval number, normally valid for one year."
    }
  ],
  "sources": [
    {
      "label": "Geneesmiddelenwet, Chapter 9",
      "href": "https://wetten.overheid.nl/jci1.3:c:BWBR0021505&hoofdstuk=9&paragraaf=4&artikel=94"
    },
    {
      "label": "IGJ Beleidsregels gunstbetoon 2018",
      "href": "https://wetten.overheid.nl/BWBR0040672/"
    },
    {
      "label": "IGJ: gunstbetoon",
      "href": "https://www.igj.nl/onderwerpen/themas-in-het-toezicht/gunstbetoon"
    },
    {
      "label": "CGR Gedragscode: oversight",
      "href": "https://cgr.nl/gedragscode/2-toezicht/"
    },
    {
      "label": "CGR services and preliminary advice",
      "href": "https://cgr.nl/diensten/"
    },
    {
      "label": "Transparantieregister Zorg",
      "href": "https://www.transparantieregister.nl/wat-staat-er-wel-en-niet-in-het-register/"
    },
    {
      "label": "Keuringsraad KOAG/KAG",
      "href": "https://keuringsraad.nl/over-de-keuringsraad/koag-kag/"
    }
  ],
  "faqs": [
    {
      "question": "What counts as a low-value gift in the Netherlands?",
      "answer": "The IGJ policy rules set low value at €50 per gift, with a maximum of €150 per year. Gifts must also be relevant to the professional’s practice under Article 94 of the Geneesmiddelenwet."
    },
    {
      "question": "What must be reported to the Transparantieregister Zorg?",
      "answer": "Financial relationships of at least €500 per calendar year with healthcare professionals, institutions or patient organisations, such as service fees, sponsorship and individual hospitality. Companies report before 1 June of the following year and the data is published in mid-July. Clinical trials under the WMO are excluded."
    },
    {
      "question": "Can the CGR check our plans in advance?",
      "answer": "Yes. The CGR Keuringsraad gives non-binding preliminary advice on planned materials and activities, within 30 working days. Some activities require mandatory preventive review."
    },
    {
      "question": "Does Eunomia have a named consultant based in the Netherlands?",
      "answer": "This page does not identify a Netherlands-based consultant. Contact our UK-based team to agree the activities, expertise and delivery arrangements needed. Any local specialist, Dutch-language review or formal role must be confirmed as part of the engagement."
    }
  ]
},
];

export function getMarket(slug: string) {
  return markets.find((m) => m.slug === slug);
}

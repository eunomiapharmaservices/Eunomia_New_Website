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
];

export function getMarket(slug: string) {
  return markets.find((m) => m.slug === slug);
}

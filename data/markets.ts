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
  lead: { name: string; role: string; image: string; bio: string };
  rules: MarketRule[];
  sources: MarketSource[];
  faqs: { question: string; answer: string }[];
};

export const markets: Market[] = [
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

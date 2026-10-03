import type { Locale } from "./locales";

type TeamTerms = { roles: Record<string, string>; countries: Record<string, string> };
const terms: Partial<Record<Locale, TeamTerms>> = {
  es: { roles: {
    "United Kingdom Compliance Lead": "Responsable de cumplimiento en el Reino Unido",
    "Global Compliance Business Partner — DACH": "Socio global de cumplimiento — DACH",
    "Global Compliance Business Partner — Global & France": "Socio global de cumplimiento — Global y Francia",
    "Global Compliance Business Partner": "Socio global de cumplimiento",
    "Healthcare Compliance Operations Lead": "Responsable de operaciones de cumplimiento sanitario",
    "IT & Systems Lead": "Responsable de TI y sistemas",
    "Compliance Operations Manager & Analyst": "Responsable y analista de operaciones de cumplimiento",
    "SSC Compliance Support": "Apoyo de cumplimiento para servicios compartidos",
  }, countries: { "United Kingdom": "Reino Unido", Germany: "Alemania", France: "Francia", Portugal: "Portugal", "United States & Canada": "Estados Unidos y Canadá", Italy: "Italia", Austria: "Austria", APAC: "Asia-Pacífico", "Poland, Ukraine & Russia": "Polonia, Ucrania y Rusia", Spain: "España", MENA: "Oriente Medio y Norte de África" } },
  fr: { roles: {
    "United Kingdom Compliance Lead": "Responsable conformité au Royaume-Uni",
    "Global Compliance Business Partner — DACH": "Partenaire mondial conformité — DACH",
    "Global Compliance Business Partner — Global & France": "Partenaire mondial conformité — international et France",
    "Global Compliance Business Partner": "Partenaire mondial conformité",
    "Healthcare Compliance Operations Lead": "Responsable des opérations de conformité en santé",
    "IT & Systems Lead": "Responsable informatique et systèmes",
    "Compliance Operations Manager & Analyst": "Responsable et analyste des opérations conformité",
    "SSC Compliance Support": "Support conformité des services partagés",
  }, countries: { "United Kingdom": "Royaume-Uni", Germany: "Allemagne", France: "France", Portugal: "Portugal", "United States & Canada": "États-Unis et Canada", Italy: "Italie", Austria: "Autriche", APAC: "Asie-Pacifique", "Poland, Ukraine & Russia": "Pologne, Ukraine et Russie", Spain: "Espagne", MENA: "Moyen-Orient et Afrique du Nord" } },
  de: { roles: {
    "United Kingdom Compliance Lead": "Leitung Compliance Vereinigtes Königreich",
    "Global Compliance Business Partner — DACH": "Globaler Compliance-Partner — DACH",
    "Global Compliance Business Partner — Global & France": "Globaler Compliance-Partner — global und Frankreich",
    "Global Compliance Business Partner": "Globaler Compliance-Partner",
    "Healthcare Compliance Operations Lead": "Leitung Healthcare-Compliance-Operations",
    "IT & Systems Lead": "Leitung IT und Systeme",
    "Compliance Operations Manager & Analyst": "Manager und Analyst für Compliance-Operations",
    "SSC Compliance Support": "Compliance-Unterstützung für Shared Services",
  }, countries: { "United Kingdom": "Vereinigtes Königreich", Germany: "Deutschland", France: "Frankreich", Portugal: "Portugal", "United States & Canada": "USA und Kanada", Italy: "Italien", Austria: "Österreich", APAC: "Asien-Pazifik", "Poland, Ukraine & Russia": "Polen, Ukraine und Russland", Spain: "Spanien", MENA: "Naher Osten und Nordafrika" } },
  it: { roles: {
    "United Kingdom Compliance Lead": "Responsabile compliance nel Regno Unito",
    "Global Compliance Business Partner — DACH": "Partner globale per la compliance — DACH",
    "Global Compliance Business Partner — Global & France": "Partner globale per la compliance — globale e Francia",
    "Global Compliance Business Partner": "Partner globale per la compliance",
    "Healthcare Compliance Operations Lead": "Responsabile delle operazioni di compliance sanitaria",
    "IT & Systems Lead": "Responsabile IT e sistemi",
    "Compliance Operations Manager & Analyst": "Responsabile e analista delle operazioni di compliance",
    "SSC Compliance Support": "Supporto compliance per i servizi condivisi",
  }, countries: { "United Kingdom": "Regno Unito", Germany: "Germania", France: "Francia", Portugal: "Portogallo", "United States & Canada": "Stati Uniti e Canada", Italy: "Italia", Austria: "Austria", APAC: "Asia-Pacifico", "Poland, Ukraine & Russia": "Polonia, Ucraina e Russia", Spain: "Spagna", MENA: "Medio Oriente e Nord Africa" } },
  pt: { roles: {
    "United Kingdom Compliance Lead": "Responsável de conformidade no Reino Unido",
    "Global Compliance Business Partner — DACH": "Parceiro global de conformidade — DACH",
    "Global Compliance Business Partner — Global & France": "Parceiro global de conformidade — global e França",
    "Global Compliance Business Partner": "Parceiro global de conformidade",
    "Healthcare Compliance Operations Lead": "Responsável pelas operações de conformidade na saúde",
    "IT & Systems Lead": "Responsável de TI e sistemas",
    "Compliance Operations Manager & Analyst": "Responsável e analista de operações de conformidade",
    "SSC Compliance Support": "Apoio à conformidade em serviços partilhados",
  }, countries: { "United Kingdom": "Reino Unido", Germany: "Alemanha", France: "França", Portugal: "Portugal", "United States & Canada": "Estados Unidos e Canadá", Italy: "Itália", Austria: "Áustria", APAC: "Ásia-Pacífico", "Poland, Ukraine & Russia": "Polónia, Ucrânia e Rússia", Spain: "Espanha", MENA: "Médio Oriente e Norte de África" } },
  nl: { roles: {
    "United Kingdom Compliance Lead": "Complianceverantwoordelijke Verenigd Koninkrijk",
    "Global Compliance Business Partner — DACH": "Global compliancepartner — DACH",
    "Global Compliance Business Partner — Global & France": "Global compliancepartner — wereldwijd en Frankrijk",
    "Global Compliance Business Partner": "Global compliancepartner",
    "Healthcare Compliance Operations Lead": "Lead zorgcomplianceprocessen",
    "IT & Systems Lead": "Lead IT en systemen",
    "Compliance Operations Manager & Analyst": "Manager en analist complianceprocessen",
    "SSC Compliance Support": "Complianceondersteuning voor shared services",
  }, countries: { "United Kingdom": "Verenigd Koninkrijk", Germany: "Duitsland", France: "Frankrijk", Portugal: "Portugal", "United States & Canada": "Verenigde Staten en Canada", Italy: "Italië", Austria: "Oostenrijk", APAC: "Azië-Pacific", "Poland, Ukraine & Russia": "Polen, Oekraïne en Rusland", Spain: "Spanje", MENA: "Midden-Oosten en Noord-Afrika" } },
  ja: { roles: {
    "United Kingdom Compliance Lead": "英国コンプライアンス責任者",
    "Global Compliance Business Partner — DACH": "グローバル・コンプライアンス・ビジネスパートナー（DACH）",
    "Global Compliance Business Partner — Global & France": "グローバル・コンプライアンス・ビジネスパートナー（グローバル・フランス）",
    "Global Compliance Business Partner": "グローバル・コンプライアンス・ビジネスパートナー",
    "Healthcare Compliance Operations Lead": "ヘルスケア・コンプライアンス業務責任者",
    "IT & Systems Lead": "IT・システム責任者",
    "Compliance Operations Manager & Analyst": "コンプライアンス業務マネージャー兼アナリスト",
    "SSC Compliance Support": "シェアードサービス・コンプライアンス支援",
  }, countries: { "United Kingdom": "英国", Germany: "ドイツ", France: "フランス", Portugal: "ポルトガル", "United States & Canada": "米国・カナダ", Italy: "イタリア", Austria: "オーストリア", APAC: "アジア太平洋", "Poland, Ukraine & Russia": "ポーランド・ウクライナ・ロシア", Spain: "スペイン", MENA: "中東・北アフリカ" } },
  "zh-CN": { roles: {
    "United Kingdom Compliance Lead": "英国合规负责人",
    "Global Compliance Business Partner — DACH": "全球合规业务合作伙伴 — DACH",
    "Global Compliance Business Partner — Global & France": "全球合规业务合作伙伴 — 全球及法国",
    "Global Compliance Business Partner": "全球合规业务合作伙伴",
    "Healthcare Compliance Operations Lead": "医疗健康合规运营负责人",
    "IT & Systems Lead": "IT 与系统负责人",
    "Compliance Operations Manager & Analyst": "合规运营经理兼分析师",
    "SSC Compliance Support": "共享服务合规支持",
  }, countries: { "United Kingdom": "英国", Germany: "德国", France: "法国", Portugal: "葡萄牙", "United States & Canada": "美国和加拿大", Italy: "意大利", Austria: "奥地利", APAC: "亚太地区", "Poland, Ukraine & Russia": "波兰、乌克兰和俄罗斯", Spain: "西班牙", MENA: "中东和北非" } },
  ar: { roles: {
    "United Kingdom Compliance Lead": "مسؤول الامتثال في المملكة المتحدة",
    "Global Compliance Business Partner — DACH": "شريك أعمال عالمي للامتثال — DACH",
    "Global Compliance Business Partner — Global & France": "شريك أعمال عالمي للامتثال — عالمي وفرنسا",
    "Global Compliance Business Partner": "شريك أعمال عالمي للامتثال",
    "Healthcare Compliance Operations Lead": "مسؤول عمليات الامتثال في الرعاية الصحية",
    "IT & Systems Lead": "مسؤول تقنية المعلومات والأنظمة",
    "Compliance Operations Manager & Analyst": "مدير ومحلل عمليات الامتثال",
    "SSC Compliance Support": "دعم الامتثال للخدمات المشتركة",
  }, countries: { "United Kingdom": "المملكة المتحدة", Germany: "ألمانيا", France: "فرنسا", Portugal: "البرتغال", "United States & Canada": "الولايات المتحدة وكندا", Italy: "إيطاليا", Austria: "النمسا", APAC: "آسيا والمحيط الهادئ", "Poland, Ukraine & Russia": "بولندا وأوكرانيا وروسيا", Spain: "إسبانيا", MENA: "الشرق الأوسط وشمال أفريقيا" } },
};

export function localizeTeamPerson<T extends { role: string; country?: string }>(person: T, locale: Locale): T {
  const dictionary = terms[locale];
  if (!dictionary) return person;
  return {
    ...person,
    role: dictionary.roles[person.role] ?? person.role,
    country: person.country ? dictionary.countries[person.country] ?? person.country : person.country,
  };
}

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

export const founderBio: Record<Exclude<Locale, "en">, [string, string]> = {
  es: [
    "Rashmi Papneja es la fundadora y directora general de Eunomia Pharma Services y una referente en cumplimiento sanitario con más de quince años de experiencia en la industria farmacéutica. Ha ocupado puestos de máxima responsabilidad en las funciones de cumplimiento de empresas farmacéuticas pequeñas y medianas, y ha dirigido la creación de funciones de cumplimiento para biotecnológicas emergentes.",
    "Como directora de proyectos cualificada por PRINCE2, ha dirigido programas de transformación sobre diligencia debida, transparencia, investigaciones, seguimiento, interacción con profesionales sanitarios y operaciones de cumplimiento con IA. Tiene un máster en Gestión Internacional de la Salud y cuenta con formación de INSEAD.",
  ],
  fr: [
    "Rashmi Papneja est la fondatrice et directrice générale d’Eunomia Pharma Services et une spécialiste de la conformité en santé comptant plus de quinze ans d’expérience dans l’industrie pharmaceutique. Elle a occupé des fonctions de conformité parmi les plus élevées dans des entreprises pharmaceutiques de petite et moyenne taille et a dirigé la mise en place de fonctions conformité pour des biotechs émergentes.",
    "Cheffe de projet certifiée PRINCE2, elle a mené des programmes de transformation portant sur la diligence raisonnable, la transparence, les enquêtes, le suivi, les interactions avec les professionnels de santé et les opérations de conformité assistées par l’IA. Elle est titulaire d’un master en gestion internationale de la santé et a suivi une formation à l’INSEAD.",
  ],
  de: [
    "Rashmi Papneja ist Gründerin und Geschäftsführerin von Eunomia Pharma Services sowie eine Führungskraft im Bereich Healthcare Compliance mit mehr als fünfzehn Jahren Erfahrung in der Pharmaindustrie. Sie war in kleinen und mittelgroßen Pharmaunternehmen auf höchster Ebene für Compliance verantwortlich und hat Compliance-Funktionen für aufstrebende Biotechunternehmen aufgebaut.",
    "Als PRINCE2-zertifizierte Projektmanagerin hat sie Transformationsprogramme zu Due Diligence, Transparenz, Untersuchungen, Monitoring, Interaktionen mit medizinischen Fachkreisen und KI-gestützten Compliance-Abläufen geleitet. Sie hat einen Masterabschluss in International Healthcare Management und eine Qualifikation von INSEAD.",
  ],
  it: [
    "Rashmi Papneja è la fondatrice e amministratrice delegata di Eunomia Pharma Services ed è una professionista di riferimento nella compliance sanitaria con oltre quindici anni di esperienza nell’industria farmaceutica. Ha ricoperto ruoli di massimo livello nelle funzioni di compliance di aziende farmaceutiche piccole e medie e ha guidato la creazione di funzioni di compliance per biotecnologiche emergenti.",
    "Project manager qualificata PRINCE2, ha guidato programmi di trasformazione su due diligence, trasparenza, indagini, monitoraggio, interazioni con professionisti sanitari e operazioni di compliance abilitate dall’IA. Ha un master in International Healthcare Management e una qualifica INSEAD.",
  ],
  pt: [
    "Rashmi Papneja é fundadora e diretora-geral da Eunomia Pharma Services e uma líder em conformidade na área da saúde, com mais de quinze anos de experiência na indústria farmacêutica. Desempenhou funções de elevada responsabilidade nas áreas de conformidade de empresas farmacêuticas de pequena e média dimensão e liderou a criação dessas funções em empresas emergentes de biotecnologia.",
    "Gestora de projetos qualificada em PRINCE2, liderou programas de transformação em diligência devida, transparência, investigações, monitorização, interação com profissionais de saúde e operações de conformidade apoiadas por IA. Tem um mestrado em Gestão Internacional da Saúde e uma qualificação da INSEAD.",
  ],
  nl: [
    "Rashmi Papneja is de oprichter en Managing Director van Eunomia Pharma Services en een leider op het gebied van zorgcompliance met meer dan vijftien jaar ervaring in de farmaceutische sector. Ze werkte op het hoogste niveau binnen compliancefuncties van kleine en middelgrote farmaceutische bedrijven en leidde de opzet van compliancefuncties voor opkomende biotechbedrijven.",
    "Als PRINCE2-gekwalificeerd projectmanager leidde ze transformatieprogramma’s voor due diligence, transparantie, onderzoeken, monitoring, interacties met zorgprofessionals en AI-ondersteunde complianceprocessen. Ze heeft een master in International Healthcare Management en een kwalificatie van INSEAD.",
  ],
  ja: [
    "Rashmi PapnejaはEunomia Pharma Servicesの創設者兼Managing Directorであり、製薬業界で15年以上の経験を持つヘルスケア・コンプライアンスのリーダーです。中小規模の製薬会社でコンプライアンス機能の上級職を務め、新興バイオテクノロジー企業のコンプライアンス機能立ち上げを主導してきました。",
    "PRINCE2資格を持つプロジェクトマネージャーとして、デューデリジェンス、透明性、調査、モニタリング、医療従事者との関わり、AIを活用したコンプライアンス業務に関する変革プログラムを推進しました。国際ヘルスケアマネジメントの修士号を取得し、INSEADの資格も有しています。",
  ],
  "zh-CN": [
    "Rashmi Papneja 是 Eunomia Pharma Services 的创始人兼董事总经理，也是医疗健康合规领域的负责人，在制药行业拥有 15 年以上经验。她曾在中小型制药企业担任合规部门的高级管理职务，并领导新兴生物技术企业建立合规职能。",
    "她持有 PRINCE2 项目管理资格，曾负责尽职调查、透明度、调查、监控、医疗卫生专业人士互动及 AI 赋能合规运营等转型项目。她拥有国际医疗健康管理硕士学位，并取得 INSEAD 资格。",
  ],
  ar: [
    "راشمي بابنيجا هي مؤسسة Eunomia Pharma Services ومديرتها العامة، وهي خبيرة قيادية في الامتثال بقطاع الرعاية الصحية تتمتع بأكثر من خمسة عشر عاماً من الخبرة في صناعة الأدوية. شغلت مناصب رفيعة في وظائف الامتثال لدى شركات أدوية صغيرة ومتوسطة، وقادت إنشاء وظائف امتثال لشركات تقنية حيوية ناشئة.",
    "وبصفتها مديرة مشاريع مؤهلة وفق PRINCE2، قادت برامج تحول شملت العناية الواجبة والشفافية والتحقيقات والمراقبة والتعامل مع المهنيين الصحيين وعمليات الامتثال المدعومة بالذكاء الاصطناعي. تحمل درجة ماجستير في الإدارة الدولية للرعاية الصحية ومؤهلاً من INSEAD.",
  ],
};

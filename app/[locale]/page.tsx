import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader, SiteFooter } from "../../components/SiteChrome";
import { SiteImage } from "../../components/SiteImage";
import chromeDraft from "../../data/i18n/site-chrome.draft.json";
import { languageAlternates, locales, type Locale } from "../../data/i18n/locales";

export const dynamicParams = false;
type DraftLocale = Exclude<Locale, "en">;
type HomeCopy = { title: string; powered: string; location: string; promise: string; body: string; contact: string; serviceLink: string; section: string; sectionTitle: string; learn: string; metaTitle: string; metaDescription: string };
const copy: Record<DraftLocale, HomeCopy> = {
  es: { title: "Cumplimiento sanitario global", powered: "impulsado por automatización", location: "Con sede en el Reino Unido y cobertura global", promise: "No solo creamos el marco de cumplimiento comercial: lo ponemos en práctica para usted.", body: "Apoyamos a empresas farmacéuticas y biotecnológicas con el diseño de programas, las operaciones diarias de cumplimiento, la experiencia en mercados locales y la automatización. Combinamos conocimiento de los códigos ABPI y EFPIA con procesos prácticos, responsabilidades claras y criterio humano experto.", contact: "Hable con nuestro equipo", serviceLink: "Explore nuestros servicios", section: "Servicios globales de cumplimiento de principio a fin", sectionTitle: "Cómo podemos ayudarle", learn: "Más información", metaTitle: "Servicios globales de cumplimiento sanitario", metaDescription: "Apoyo en cumplimiento para empresas farmacéuticas y biotecnológicas: diseño de programas, operaciones, experiencia local y automatización." },
  fr: { title: "Conformité mondiale dans le secteur de la santé", powered: "optimisée par l’automatisation", location: "Basée au Royaume-Uni, avec une couverture mondiale", promise: "Nous ne nous contentons pas de concevoir votre cadre de conformité commerciale : nous le mettons en œuvre à vos côtés.", body: "Nous accompagnons les entreprises pharmaceutiques et biotechnologiques dans la conception de programmes, les opérations quotidiennes, l’expertise des marchés locaux et l’automatisation. Nous associons la connaissance des codes ABPI et EFPIA à des processus concrets, des responsabilités claires et un jugement humain expérimenté.", contact: "Parler à notre équipe", serviceLink: "Découvrir nos services", section: "Des services de conformité mondiaux, de bout en bout", sectionTitle: "Comment nous pouvons vous aider", learn: "En savoir plus", metaTitle: "Services mondiaux de conformité en santé", metaDescription: "Accompagnement en conformité pour les entreprises pharmaceutiques et biotechnologiques : programmes, opérations, expertise locale et automatisation." },
  de: { title: "Globale Healthcare-Compliance", powered: "durch Automatisierung unterstützt", location: "Mit Hauptsitz im Vereinigten Königreich und globaler Präsenz", promise: "Wir entwickeln nicht nur Ihren kommerziellen Compliance-Rahmen, sondern setzen ihn gemeinsam mit Ihnen um.", body: "Wir unterstützen Pharma- und Biotech-Unternehmen bei der Programmgestaltung, im täglichen Compliance-Betrieb, mit lokaler Marktexpertise und durch Automatisierung. Wir verbinden Kenntnisse der ABPI- und EFPIA-Kodizes mit praktischen Abläufen, klaren Zuständigkeiten und erfahrenem menschlichem Urteilsvermögen.", contact: "Sprechen Sie mit unserem Team", serviceLink: "Unsere Leistungen ansehen", section: "Globale Compliance-Leistungen aus einer Hand", sectionTitle: "So können wir Sie unterstützen", learn: "Mehr erfahren", metaTitle: "Globale Healthcare-Compliance-Services", metaDescription: "Compliance-Unterstützung für Pharma- und Biotech-Unternehmen: Programmgestaltung, Betrieb, lokale Expertise und Automatisierung." },
  it: { title: "Compliance sanitaria globale", powered: "supportata dall’automazione", location: "Con sede nel Regno Unito e presenza globale", promise: "Non ci limitiamo a progettare il vostro framework di compliance commerciale: lo rendiamo operativo insieme a voi.", body: "Supportiamo le aziende farmaceutiche e biotecnologiche nella progettazione dei programmi, nelle attività quotidiane di compliance, con competenze sui mercati locali e con l’automazione. Uniamo la conoscenza dei codici ABPI ed EFPIA a processi pratici, responsabilità chiare e giudizio umano esperto.", contact: "Parlate con il nostro team", serviceLink: "Scoprite i nostri servizi", section: "Servizi globali di compliance end-to-end", sectionTitle: "Come possiamo aiutarvi", learn: "Scoprite di più", metaTitle: "Servizi globali di compliance sanitaria", metaDescription: "Supporto alla compliance per aziende farmaceutiche e biotecnologiche: programmi, operatività, competenze locali e automazione." },
  pt: { title: "Conformidade global no setor da saúde", powered: "impulsionada pela automatização", location: "Com sede no Reino Unido e cobertura global", promise: "Não nos limitamos a criar o seu enquadramento de conformidade comercial: ajudamos a pô-lo em prática.", body: "Apoiamos empresas farmacêuticas e de biotecnologia na conceção de programas, nas operações diárias de conformidade, com conhecimento dos mercados locais e através da automatização. Aliamos o conhecimento dos códigos ABPI e EFPIA a processos práticos, responsabilidades claras e julgamento humano experiente.", contact: "Fale com a nossa equipa", serviceLink: "Explore os nossos serviços", section: "Serviços globais de conformidade de ponta a ponta", sectionTitle: "Como podemos ajudar", learn: "Saiba mais", metaTitle: "Serviços globais de conformidade na saúde", metaDescription: "Apoio à conformidade para empresas farmacêuticas e de biotecnologia: programas, operações, conhecimento local e automatização." },
  nl: { title: "Wereldwijde compliance in de gezondheidszorg", powered: "ondersteund door automatisering", location: "Hoofdkantoor in het Verenigd Koninkrijk, met wereldwijde dekking", promise: "We ontwerpen niet alleen uw commerciële compliancestructuur, we helpen deze ook in de praktijk te brengen.", body: "We ondersteunen farmaceutische en biotechbedrijven met programmaontwerp, dagelijkse complianceprocessen, lokale marktkennis en automatisering. We combineren kennis van de ABPI- en EFPIA-codes met praktische processen, duidelijke verantwoordelijkheden en ervaren menselijk oordeel.", contact: "Praat met ons team", serviceLink: "Bekijk onze diensten", section: "Wereldwijde compliance, van begin tot eind", sectionTitle: "Zo kunnen we u helpen", learn: "Lees meer", metaTitle: "Wereldwijde compliance-diensten voor de gezondheidszorg", metaDescription: "Ondersteuning bij compliance voor farmaceutische en biotechbedrijven: programmaontwerp, bedrijfsvoering, lokale expertise en automatisering." },
  ja: { title: "グローバルなヘルスケア・コンプライアンス", powered: "自動化で支援", location: "英国を拠点に、世界各地を支援", promise: "商業コンプライアンスの枠組みを構築するだけでなく、実際の運用まで支援します。", body: "製薬企業やバイオテクノロジー企業に対し、プログラム設計、日々のコンプライアンス業務、各国市場の知見、自動化を通じて支援します。ABPIおよびEFPIAコードの知見を、実務的なプロセス、明確な責任体制、経験に基づく人の判断と結び付けます。", contact: "チームに相談する", serviceLink: "サービスを見る", section: "グローバルなコンプライアンスを一貫して支援", sectionTitle: "ご支援できること", learn: "詳しく見る", metaTitle: "グローバル・ヘルスケアコンプライアンスサービス", metaDescription: "製薬・バイオテクノロジー企業向けのコンプライアンス支援。プログラム設計、業務運用、各国市場の知見、自動化を提供します。" },
  "zh-CN": { title: "全球医疗健康合规服务", powered: "由自动化赋能", location: "总部位于英国，服务覆盖全球", promise: "我们不仅帮助您建立商业合规框架，也协助您将其落实到日常运营中。", body: "我们为制药和生物技术企业提供合规体系设计、日常合规运营、本地市场专业知识和自动化支持。我们将对 ABPI 和 EFPIA 行业准则的理解，与切实可行的流程、明确的职责和经验丰富的人工判断相结合。", contact: "联系我们的团队", serviceLink: "了解我们的服务", section: "端到端全球合规服务", sectionTitle: "我们可以如何支持您", learn: "了解更多", metaTitle: "全球医疗健康合规服务", metaDescription: "为制药和生物技术企业提供合规支持，包括合规体系设计、运营、本地专业知识和自动化。" },
  ar: { title: "خدمات الامتثال الصحي العالمية", powered: "بدعم من الأتمتة", location: "مقرنا في المملكة المتحدة ونغطي الأسواق العالمية", promise: "لا نكتفي بوضع إطار الامتثال التجاري، بل نساعدكم على تطبيقه عملياً.", body: "ندعم شركات الأدوية والتقنية الحيوية في تصميم البرامج وعمليات الامتثال اليومية والخبرة بالأسواق المحلية والأتمتة. ونربط معرفتنا بمدونتي ABPI وEFPIA بإجراءات عملية ومسؤوليات واضحة وحكم مهني بشري ذي خبرة.", contact: "تواصلوا مع فريقنا", serviceLink: "استكشفوا خدماتنا", section: "خدمات امتثال عالمية متكاملة", sectionTitle: "كيف يمكننا دعمكم", learn: "معرفة المزيد", metaTitle: "خدمات الامتثال الصحي العالمية", metaDescription: "دعم الامتثال لشركات الأدوية والتقنية الحيوية: تصميم البرامج والعمليات والخبرة المحلية والأتمتة." },
};

const metricCopy: Record<DraftLocale, string> = {
  es: "Más de 30 países · Más de 20 clientes · Valoración de 4,9 en Clutch",
  fr: "Plus de 30 pays · Plus de 20 clients · Note de 4,9 sur Clutch",
  de: "Mehr als 30 Länder · Mehr als 20 Kunden · Bewertung von 4,9 auf Clutch",
  it: "Oltre 30 Paesi · Oltre 20 clienti · Valutazione 4,9 su Clutch",
  pt: "Mais de 30 países · Mais de 20 clientes · Classificação de 4,9 na Clutch",
  nl: "Meer dan 30 landen · Meer dan 20 klanten · Beoordeling 4,9 op Clutch",
  ja: "30か国以上 · 20社以上のクライアント · Clutch評価4.9",
  "zh-CN": "覆盖 30 多个国家 · 服务 20 多家客户 · Clutch 评分 4.9",
  ar: "أكثر من 30 دولة · أكثر من 20 عميلاً · تقييم 4.9 على Clutch",
};

type ChromeCopy = Record<string, string>;
const chrome = chromeDraft as unknown as Record<DraftLocale, ChromeCopy>;

export function generateStaticParams() {
  return (Object.keys(locales) as Locale[]).filter((locale) => locale !== "en").map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!Object.prototype.hasOwnProperty.call(copy, locale)) return {};
  const text = copy[locale as DraftLocale];
  const languages = languageAlternates("");
  return {
    title: `${text.metaTitle} | Eunomia`,
    description: text.metaDescription,
    alternates: { canonical: `https://www.eunomiapharmaservices.com/${locale}`, languages },
  };
}

export default async function LocalizedHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!Object.hasOwn(copy, locale)) notFound();
  const selected = locale as DraftLocale;
  const text = copy[selected];
  const nav = chrome[selected];
  const services = [
    { title: nav.governanceService, description: nav.governanceSummary, href: "/services/governance-assurance" },
    { title: nav.automationService, description: nav.automationSummary, href: "/services/automation-of-compliance-operations" },
    { title: nav.localMandatesService, description: nav.localMandatesSummary, href: "/services/local-legal-mandates" },
    { title: nav.sharedServices, description: nav.sharedServicesSummary, href: "/services/shared-services" },
  ];

  return (
    <main lang={selected} dir={locales[selected].dir}>
      <SiteHeader locale={selected} />
      <section className="hero" id="top">
        <div className="hero-media"><SiteImage src="/home-compliance-team.jpeg" alt={nav.heroAlt} fill preload fetchPriority="high" sizes="(max-width: 900px) 100vw, 38vw" /></div>
        <div className="hero-copy">
          <p className="home-location-line">{text.location}</p>
          <h1><span className="hero-title-green">{text.title}</span>{" "}<span className="hero-title-orange">{text.powered}</span></h1>
          <p className="hero-lede">{text.promise}</p>
          <p className="home-hero-description">{text.body}</p>
          <div className="hero-actions"><a className="primary-button" href={`/${selected}/contact`}>{text.contact}</a><a className="secondary-button" href={`/${selected}/services`}>{text.serviceLink}</a></div>
          <p className="home-location-line">{metricCopy[selected]}</p>
        </div>
      </section>
      <section aria-labelledby="localized-services-title" style={{ maxWidth: 1180, margin: "0 auto", padding: "4rem 1.5rem" }}>
        <p className="home-location-line">{text.section}</p><h2 id="localized-services-title">{text.sectionTitle}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "1rem" }}>
          {services.map((service) => <article key={service.href} style={{ border: "1px solid #d9e3dc", borderRadius: 12, padding: "1.25rem" }}><h3>{service.title}</h3><p>{service.description}</p><a href={`/${selected}${service.href}`}>{text.learn} →</a></article>)}
        </div>
      </section>
      <SiteFooter locale={selected} />
    </main>
  );
}

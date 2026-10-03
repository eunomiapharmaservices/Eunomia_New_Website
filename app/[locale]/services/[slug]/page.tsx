import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader, SiteFooter } from "../../../../components/SiteChrome";
import { SiteImage } from "../../../../components/SiteImage";
import chromeDraft from "../../../../data/i18n/site-chrome.draft.json";
import { locales, type Locale } from "../../../../data/i18n/locales";

export const dynamicParams = false;
type DraftLocale = Exclude<Locale, "en">;
const slugs = ["governance-assurance", "automation-of-compliance-operations", "local-legal-mandates", "shared-services"] as const;
type ServiceSlug = typeof slugs[number];
type ChromeCopy = Record<string, string>;
const chrome = chromeDraft as unknown as Record<DraftLocale, ChromeCopy>;
const services: Record<ServiceSlug, { title: string; summary: string; image: string; alt: string; key: string }> = {
  "governance-assurance": { title: "governanceService", summary: "governanceSummary", image: "/home-compliance-team.jpeg", alt: "Compliance programme design" },
  "automation-of-compliance-operations": { title: "automationService", summary: "automationSummary", image: "/eunomia-workflow.png", alt: "Digital compliance workflows" },
  "local-legal-mandates": { title: "localMandatesService", summary: "localMandatesSummary", image: "/market-representation.png", alt: "Local market compliance support" },
  "shared-services": { title: "sharedServices", summary: "sharedServicesSummary", image: "/compliance-collaboration.png", alt: "Compliance team collaboration" },
};

type Copy = { scope: string; outcomes: string; contact: string; services: Record<ServiceSlug, string[]>; benefits: string[] };
const text: Record<DraftLocale, Copy> = {
  es: { scope: "Áreas de apoyo", outcomes: "Qué aporta este servicio", contact: "Hable con nuestro equipo", services: {
    "governance-assurance": ["Diseño e implementación de programas", "Políticas y procedimientos normalizados", "Evaluaciones de riesgos, auditorías y CAPA", "Formación, seguimiento y diligencia debida de terceros"],
    "automation-of-compliance-operations": ["Evaluación de preparación para IA", "Flujos de trabajo de SharePoint y paneles de Power BI", "Automatización de procesos y plataformas de revisión", "Seguimiento, integración de datos y evidencias"],
    "local-legal-mandates": ["Apoyo de personas responsables y representantes locales", "Interpretación de códigos locales y consultas", "Revisión de interacciones transfronterizas con profesionales sanitarios", "Evaluación de entrada en mercados y requisitos de transparencia"],
    "shared-services": ["Revisión de materiales promocionales y médicos", "Revisión de actividades, eventos y congresos", "Interacciones con profesionales sanitarios y valor razonable de mercado", "Divulgación de información y apoyo operativo en distintos mercados"],
  }, benefits: ["Responsabilidades y vías de escalado claras", "Procesos prácticos adaptados a su organización", "Supervisión y evidencias documentadas"] },
  fr: { scope: "Domaines d’accompagnement", outcomes: "Ce que ce service vous apporte", contact: "Parler à notre équipe", services: {
    "governance-assurance": ["Conception et mise en œuvre de programmes", "Politiques et procédures opérationnelles", "Évaluations des risques, audits et CAPA", "Formation, suivi et diligence raisonnable des tiers"],
    "automation-of-compliance-operations": ["Évaluation de la préparation à l’IA", "Flux de travail SharePoint et tableaux de bord Power BI", "Automatisation des processus et plateformes de revue", "Suivi, intégration des données et éléments de preuve"],
    "local-legal-mandates": ["Accompagnement des personnes responsables et représentants locaux", "Interprétation des codes locaux et traitement des questions", "Revue des interactions transfrontalières avec les professionnels de santé", "Évaluation de l’accès au marché et exigences de transparence"],
    "shared-services": ["Revue des supports promotionnels et médicaux", "Revue des activités, événements et congrès", "Interactions avec les professionnels de santé et juste valeur marchande", "Déclarations et soutien opérationnel dans plusieurs marchés"],
  }, benefits: ["Responsabilités et voies d’escalade claires", "Processus pratiques adaptés à votre organisation", "Supervision et éléments de preuve documentés"] },
  de: { scope: "Leistungsumfang", outcomes: "Ihr Nutzen", contact: "Sprechen Sie mit unserem Team", services: {
    "governance-assurance": ["Gestaltung und Umsetzung von Compliance-Programmen", "Richtlinien und Standardarbeitsanweisungen", "Risikobewertungen, Audits und CAPA", "Schulungen, Monitoring und Third-Party-Due-Diligence"],
    "automation-of-compliance-operations": ["Bewertung der KI-Bereitschaft", "SharePoint-Workflows und Power-BI-Dashboards", "Prozessautomatisierung und Review-Plattformen", "Monitoring, Datenintegration und Nachweise"],
    "local-legal-mandates": ["Unterstützung verantwortlicher Personen und lokaler Vertretungen", "Auslegung lokaler Kodizes und Beantwortung von Anfragen", "Prüfung grenzüberschreitender Interaktionen mit Angehörigen der Gesundheitsberufe", "Markteintrittsbewertung und Transparenzanforderungen"],
    "shared-services": ["Prüfung von Werbe- und medizinischen Materialien", "Prüfung von Aktivitäten, Veranstaltungen und Kongressen", "HCP-Interaktionen und Fair-Market-Value-Bewertung", "Offenlegung und operativer Support in mehreren Märkten"],
  }, benefits: ["Klare Zuständigkeiten und Eskalationswege", "Praktische Abläufe, abgestimmt auf Ihr Unternehmen", "Dokumentierte Aufsicht und Nachweise"] },
  it: { scope: "Ambiti di supporto", outcomes: "I vantaggi per voi", contact: "Parlate con il nostro team", services: {
    "governance-assurance": ["Progettazione e attuazione di programmi", "Policy e procedure operative standard", "Valutazioni dei rischi, audit e CAPA", "Formazione, monitoraggio e due diligence di terze parti"],
    "automation-of-compliance-operations": ["Valutazione della preparazione all’IA", "Flussi di lavoro SharePoint e dashboard Power BI", "Automazione dei processi e piattaforme di revisione", "Monitoraggio, integrazione dei dati ed evidenze"],
    "local-legal-mandates": ["Supporto a persone responsabili e rappresentanti locali", "Interpretazione dei codici locali e gestione delle richieste", "Revisione di interazioni transfrontaliere con operatori sanitari", "Valutazione dell’ingresso nei mercati e requisiti di trasparenza"],
    "shared-services": ["Revisione di materiali promozionali e medici", "Revisione di attività, eventi e congressi", "Interazioni con operatori sanitari e valutazione del fair market value", "Disclosure e supporto operativo nei diversi mercati"],
  }, benefits: ["Responsabilità e percorsi di escalation chiari", "Processi pratici, adattati alla vostra organizzazione", "Supervisione ed evidenze documentate"] },
  pt: { scope: "Áreas de apoio", outcomes: "O que este serviço lhe proporciona", contact: "Fale com a nossa equipa", services: {
    "governance-assurance": ["Conceção e implementação de programas", "Políticas e procedimentos operacionais", "Avaliações de risco, auditorias e CAPA", "Formação, monitorização e due diligence de terceiros"],
    "automation-of-compliance-operations": ["Avaliação da preparação para IA", "Fluxos de trabalho SharePoint e painéis Power BI", "Automatização de processos e plataformas de revisão", "Monitorização, integração de dados e evidências"],
    "local-legal-mandates": ["Apoio a pessoas responsáveis e representantes locais", "Interpretação de códigos locais e resposta a questões", "Revisão de interações transfronteiriças com profissionais de saúde", "Avaliação de entrada no mercado e requisitos de transparência"],
    "shared-services": ["Revisão de materiais promocionais e médicos", "Revisão de atividades, eventos e congressos", "Interações com profissionais de saúde e valor justo de mercado", "Divulgação e apoio operacional em vários mercados"],
  }, benefits: ["Responsabilidades e vias de escalonamento claras", "Processos práticos adaptados à sua organização", "Supervisão e evidências documentadas"] },
  nl: { scope: "Ondersteuningsgebieden", outcomes: "Wat deze dienst oplevert", contact: "Praat met ons team", services: {
    "governance-assurance": ["Ontwerp en implementatie van programma’s", "Beleid en standaardprocedures", "Risicobeoordelingen, audits en CAPA", "Training, monitoring en due diligence van derden"],
    "automation-of-compliance-operations": ["Beoordeling van AI-gereedheid", "SharePoint-workflows en Power BI-dashboards", "Procesautomatisering en reviewplatforms", "Monitoring, gegevensintegratie en bewijsvoering"],
    "local-legal-mandates": ["Ondersteuning van verantwoordelijke personen en lokale vertegenwoordigers", "Interpretatie van lokale codes en beantwoording van vragen", "Beoordeling van grensoverschrijdende contacten met zorgprofessionals", "Markttoetredingsbeoordeling en transparantievereisten"],
    "shared-services": ["Beoordeling van promotionele en medische materialen", "Beoordeling van activiteiten, evenementen en congressen", "Contacten met zorgprofessionals en fair-market-value-beoordeling", "Openbaarmaking en operationele ondersteuning in meerdere markten"],
  }, benefits: ["Duidelijke verantwoordelijkheden en escalatieroutes", "Praktische processen afgestemd op uw organisatie", "Vastgelegde controle en onderbouwing"] },
  ja: { scope: "支援内容", outcomes: "このサービスで得られること", contact: "チームに相談する", services: {
    "governance-assurance": ["コンプライアンスプログラムの設計と導入", "方針および標準業務手順書の整備", "リスク評価、監査、CAPA", "研修、モニタリング、第三者デューデリジェンス"],
    "automation-of-compliance-operations": ["AI導入準備状況の評価", "SharePointワークフローとPower BIダッシュボード", "プロセス自動化とレビュー基盤", "モニタリング、データ連携、証跡管理"],
    "local-legal-mandates": ["責任者および現地代表者の支援", "各国コードの解釈と問い合わせ対応", "国境を越える医療従事者との関わりのレビュー", "市場参入評価と透明性要件の確認"],
    "shared-services": ["プロモーション・メディカル資材のレビュー", "活動、イベント、学会のレビュー", "医療従事者との関わりと公正市場価値の評価", "複数市場の開示と業務支援"],
  }, benefits: ["明確な責任分担とエスカレーション経路", "組織に合わせた実務的なプロセス", "記録に基づく監督と証跡"] },
  "zh-CN": { scope: "支持范围", outcomes: "服务带来的价值", contact: "联系团队", services: {
    "governance-assurance": ["合规项目设计与实施", "政策和标准操作规程制定", "风险评估、审计和 CAPA", "培训、监控和第三方尽职调查"],
    "automation-of-compliance-operations": ["AI 合规准备度评估", "SharePoint 工作流和 Power BI 仪表板", "流程自动化和审查平台", "监控、数据集成和证据记录"],
    "local-legal-mandates": ["责任人员和本地代表支持", "本地行业准则解读与问题处理", "跨境医务人员互动审查", "市场准入评估和透明度要求"],
    "shared-services": ["促销和医学材料审查", "活动、会议和学术大会审查", "医务人员互动和公平市场价值评估", "多市场披露和运营支持"],
  }, benefits: ["明确的职责和升级路径", "根据组织情况设计的实用流程", "有记录的监督和证据"] },
  ar: { scope: "نطاق الدعم", outcomes: "ما الذي يقدمه لكم هذا العمل", contact: "تواصلوا مع فريقنا", services: {
    "governance-assurance": ["تصميم برامج الامتثال وتنفيذها", "السياسات وإجراءات التشغيل القياسية", "تقييم المخاطر والتدقيق والإجراءات التصحيحية والوقائية", "التدريب والمراقبة والعناية الواجبة بالأطراف الثالثة"],
    "automation-of-compliance-operations": ["تقييم الجاهزية للذكاء الاصطناعي", "مسارات عمل SharePoint ولوحات Power BI", "أتمتة العمليات ومنصات المراجعة", "المراقبة وتكامل البيانات وتوثيق الأدلة"],
    "local-legal-mandates": ["دعم الأشخاص المسؤولين والممثلين المحليين", "تفسير المدونات المحلية والرد على الاستفسارات", "مراجعة التفاعلات العابرة للحدود مع المهنيين الصحيين", "تقييم دخول الأسواق ومتطلبات الشفافية"],
    "shared-services": ["مراجعة المواد الترويجية والطبية", "مراجعة الأنشطة والفعاليات والمؤتمرات", "التعامل مع المهنيين الصحيين وتقييم القيمة السوقية العادلة", "الإفصاح والدعم التشغيلي في أسواق متعددة"],
  }, benefits: ["مسؤوليات ومسارات تصعيد واضحة", "عمليات عملية مصممة وفق احتياجات مؤسستكم", "إشراف وأدلة موثقة"] },
};

function isServiceSlug(value: string): value is ServiceSlug {
  return (slugs as readonly string[]).includes(value);
}

export function generateStaticParams() {
  return (Object.keys(locales) as Locale[])
    .filter((locale) => locale !== "en")
    .flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!Object.prototype.hasOwnProperty.call(text, locale) || !isServiceSlug(slug)) return {};
  const service = services[slug];
  const languages = Object.fromEntries((Object.keys(locales) as Locale[]).map((code) => [code, `https://www.eunomiapharmaservices.com/${code === "en" ? "" : `${code}/`}services/${slug}`]));
  return {
    title: `${chrome[locale as DraftLocale][service.title]} | Eunomia`,
    description: chrome[locale as DraftLocale][service.summary],
    alternates: { canonical: `https://www.eunomiapharmaservices.com/${locale}/services/${slug}`, languages },
  };
}

export default async function LocalizedServicePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!Object.prototype.hasOwnProperty.call(text, locale) || !isServiceSlug(slug)) notFound();
  const selected = locale as DraftLocale;
  const copy = text[selected];
  const service = services[slug];
  const localized = chrome[selected];
  return (
    <main lang={selected} dir={locales[selected].dir} className={slug === "governance-assurance" ? "service-subpage orange" : "service-subpage green"}>
      <SiteHeader locale={selected} />
      <section className="subservice-hero section-pad">
        <a href={`/${selected}/services`} className="back-link">← {localized.services}</a>
        <p className="section-kicker">{localized.services}</p>
        <h1 className="subservice-primary-title">{localized[service.title]}</h1>
        <h2 className="subservice-tagline">{localized[service.summary]}</h2>
        <p>{localized[service.summary]}</p>
        <a className="primary-button" href={`/contact?service=${encodeURIComponent(localized[service.title])}`}>{copy.contact}</a>
      </section>
      <section className="service-video section-pad">
        <SiteImage src={service.image} sizes="(max-width: 1000px) 90vw, 960px" alt={localized[service.title]} style={{ display: "block", width: "100%", maxWidth: 960, height: "auto", margin: "0 auto", borderRadius: 16 }} />
      </section>
      <section id="scope-of-support" className="subservice-scope section-pad">
        <div><p className="section-kicker">{copy.scope}</p><h2>{localized[service.title]}: {copy.scope}</h2></div>
        <div className="scope-list">{copy.services[slug].map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item}</h3></article>)}</div>
      </section>
      <section className="subservice-outcomes section-pad">
        <p className="section-kicker">{copy.outcomes}</p>
        <div>{copy.benefits.map((benefit) => <p key={benefit}>✓ {benefit}</p>)}</div>
      </section>
      <section className="subservice-cta section-pad">
        <h2>{copy.contact}</h2>
        <a className="primary-button" href={`/contact?service=${encodeURIComponent(localized[service.title])}`}>{copy.contact} →</a>
      </section>
      <SiteFooter locale={selected} />
    </main>
  );
}

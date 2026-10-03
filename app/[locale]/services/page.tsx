import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader, SiteFooter } from "../../../components/SiteChrome";
import chromeDraft from "../../../data/i18n/site-chrome.draft.json";
import { locales, type Locale } from "../../../data/i18n/locales";

export const dynamicParams = false;
type DraftLocale = Exclude<Locale, "en">;
type ServicePageCopy = { title: string; intro: string; metaTitle: string; metaDescription: string };
const copy: Record<DraftLocale, ServicePageCopy> = {
  es: { title: "Servicios", intro: "Apoyamos a empresas farmacéuticas y biotecnológicas con diseño de programas, operaciones de cumplimiento, conocimiento de los mercados locales y automatización.", metaTitle: "Servicios de cumplimiento farmacéutico", metaDescription: "Servicios globales de cumplimiento para empresas farmacéuticas y biotecnológicas." },
  fr: { title: "Nos services", intro: "Nous accompagnons les entreprises pharmaceutiques et biotechnologiques dans la conception de programmes, les opérations de conformité, l’expertise des marchés locaux et l’automatisation.", metaTitle: "Services de conformité pharmaceutique", metaDescription: "Services mondiaux de conformité pour les entreprises pharmaceutiques et biotechnologiques." },
  de: { title: "Unsere Leistungen", intro: "Wir unterstützen Pharma- und Biotech-Unternehmen mit Programmgestaltung, Compliance-Abläufen, lokaler Marktexpertise und Automatisierung.", metaTitle: "Pharma-Compliance-Services", metaDescription: "Globale Compliance-Services für Pharma- und Biotech-Unternehmen." },
  it: { title: "I nostri servizi", intro: "Supportiamo le aziende farmaceutiche e biotecnologiche nella progettazione dei programmi, nelle operations di compliance, con competenze locali e con l’automazione.", metaTitle: "Servizi di compliance farmaceutica", metaDescription: "Servizi globali di compliance per aziende farmaceutiche e biotecnologiche." },
  pt: { title: "Os nossos serviços", intro: "Apoiamos empresas farmacêuticas e de biotecnologia na conceção de programas, nas operações de conformidade, com conhecimento dos mercados locais e através da automatização.", metaTitle: "Serviços de conformidade farmacêutica", metaDescription: "Serviços globais de conformidade para empresas farmacêuticas e de biotecnologia." },
  nl: { title: "Onze diensten", intro: "We ondersteunen farmaceutische en biotechbedrijven met programmaontwerp, complianceprocessen, lokale marktkennis en automatisering.", metaTitle: "Compliance-diensten voor de farmaceutische sector", metaDescription: "Wereldwijde compliancediensten voor farmaceutische en biotechbedrijven." },
  ja: { title: "サービス", intro: "製薬企業やバイオテクノロジー企業に、プログラム設計、コンプライアンス業務、各国市場の知見、自動化を提供します。", metaTitle: "製薬コンプライアンスサービス", metaDescription: "製薬・バイオテクノロジー企業向けのグローバルなコンプライアンスサービスです。" },
  "zh-CN": { title: "服务", intro: "我们通过项目设计、合规运营、本地市场专业知识和自动化，为制药和生物技术企业提供支持。", metaTitle: "制药合规服务", metaDescription: "为制药和生物技术企业提供全球合规服务。" },
  ar: { title: "خدماتنا", intro: "ندعم شركات الأدوية والتقنية الحيوية من خلال تصميم البرامج وعمليات الامتثال والخبرة بالأسواق المحلية والأتمتة.", metaTitle: "خدمات الامتثال لشركات الأدوية", metaDescription: "خدمات امتثال عالمية لشركات الأدوية والتقنية الحيوية." },
};
const serviceLinks = [
  "/services/governance-assurance",
  "/services/automation-of-compliance-operations",
  "/services/local-legal-mandates",
  "/services/shared-services",
];
type ChromeCopy = Record<string, string>;
const chrome = chromeDraft as unknown as Record<DraftLocale, ChromeCopy>;

export function generateStaticParams() {
  return (Object.keys(locales) as Locale[]).filter((locale) => locale !== "en").map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!Object.prototype.hasOwnProperty.call(copy, locale)) return {};
  const text = copy[locale as DraftLocale];
  return {
    title: `${text.metaTitle} | Eunomia`,
    description: text.metaDescription,
    alternates: { canonical: `https://www.eunomiapharmaservices.com/${locale}/services` },
  };
}

export default async function LocalizedServices({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!Object.prototype.hasOwnProperty.call(copy, locale)) notFound();
  const selected = locale as DraftLocale;
  const nav = chrome[selected];
  const text = copy[selected];
  const services = [
    { number: "01", title: nav.governanceService, line: nav.governanceSummary, body: nav.governanceSummary, href: serviceLinks[0] },
    { number: "02", title: nav.automationService, line: nav.automationSummary, body: nav.automationSummary, href: serviceLinks[1] },
    { number: "03", title: nav.localMandatesService, line: nav.localMandatesSummary, body: nav.localMandatesSummary, href: serviceLinks[2] },
    { number: "04", title: nav.sharedServices, line: nav.sharedServicesSummary, body: nav.sharedServicesSummary, href: serviceLinks[3] },
  ];
  return (
    <main lang={selected} dir={locales[selected].dir}>
      <SiteHeader locale={selected} />
      <section className="section-pad">
        <p className="section-kicker">{nav.services}</p>
        <h1>{text.title}</h1>
        <p>{text.intro}</p>
      </section>
      <section className="section-pad" aria-label={nav.services}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
          {services.map((service) => (
            <article key={service.number} style={{ border: "1px solid #d9e3dc", borderRadius: 12, padding: "1.5rem" }}>
              <p className="section-kicker">{service.number}</p>
              <h2>{service.title}</h2>
              <p><strong>{service.line}</strong></p>
              <p>{service.body}</p>
              <a href={`/${selected}${service.href}`}>{nav.exploreEveryService} →</a>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter locale={selected} />
    </main>
  );
}

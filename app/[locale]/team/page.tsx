import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { SiteImage } from "../../../components/SiteImage";
import { SiteHeader, SiteFooter } from "../../../components/SiteChrome";
import { TeamProfile, type TeamPerson } from "../../../components/TeamProfiles";
import { compliancePartners, partnerId } from "../../../data/compliancePartners";
import { StructuredData } from "../../../components/StructuredData";
import { languageAlternates, locales, type Locale } from "../../../data/i18n/locales";
import { founderBio, localizeTeamPerson } from "../../../data/i18n/team-content";

type TeamCopy = {
  kicker: string; title: string; intro: string; founderRole: string; operationsTitle: string;
  operations: string; partnersTitle: string; partnersIntro: string; ctaKicker: string;
  ctaTitle: string; ctaButton: string; read: string; viewBio: string;
};
const copy: Record<Exclude<Locale, "en">, TeamCopy> = {
  es: { kicker: "Las personas detrás de Eunomia", title: "Especialistas que conocen el trabajo de cerca.", intro: "Nuestros expertos en cumplimiento ofrecen asesoramiento estratégico y apoyo operativo en Europa, a escala global y en cada país. Trabajará con personas que conocen tanto las normas como las decisiones cotidianas.", founderRole: "Fundadora y directora general", operationsTitle: "Operaciones de cumplimiento sanitario y automatización", operations: "Equipo de operaciones", partnersTitle: "Socios globales de cumplimiento", partnersIntro: "Contexto local. Criterio conectado.", ctaKicker: "Trabaje con nosotros", ctaTitle: "Un equipo sénior, adaptado a sus necesidades.", ctaButton: "Iniciar una conversación", read: "Leer", viewBio: "Ver biografía" },
  fr: { kicker: "Les personnes derrière Eunomia", title: "Des spécialistes proches du terrain.", intro: "Nos experts en conformité apportent des conseils stratégiques et un soutien opérationnel en Europe, à l’échelle mondiale et au niveau local. Vous échangez avec des personnes qui connaissent les règles et les décisions du quotidien.", founderRole: "Fondatrice et directrice générale", operationsTitle: "Opérations de conformité en santé et automatisation", operations: "Équipe des opérations", partnersTitle: "Partenaires mondiaux en conformité", partnersIntro: "Contexte local. Regard coordonné.", ctaKicker: "Travailler avec nous", ctaTitle: "Une équipe expérimentée, adaptée à vos besoins.", ctaButton: "Entamer une conversation", read: "Lire", viewBio: "Voir la biographie" },
  de: { kicker: "Die Menschen hinter Eunomia", title: "Spezialisten mit Nähe zur praktischen Arbeit.", intro: "Unsere Compliance-Experten bieten strategische Beratung und operative Unterstützung in Europa, weltweit und auf lokaler Ebene. Sie arbeiten mit festen Ansprechpartnern, die sowohl die Regeln als auch die Entscheidungen im Alltag kennen.", founderRole: "Gründerin und Geschäftsführerin", operationsTitle: "Healthcare-Compliance-Operations und Automatisierung", operations: "Operations-Team", partnersTitle: "Globale Compliance-Partner", partnersIntro: "Lokaler Kontext. Gemeinsame Perspektive.", ctaKicker: "Zusammenarbeit", ctaTitle: "Ein erfahrenes Team, abgestimmt auf Ihren Bedarf.", ctaButton: "Gespräch beginnen", read: "Lesen", viewBio: "Biografie ansehen" },
  it: { kicker: "Le persone dietro Eunomia", title: "Specialisti vicini al lavoro quotidiano.", intro: "I nostri esperti di compliance offrono orientamento strategico e supporto operativo in Europa, a livello globale e nei singoli Paesi. Lavorerete con referenti che conoscono sia le regole sia le decisioni di ogni giorno.", founderRole: "Fondatrice e amministratrice delegata", operationsTitle: "Operazioni di compliance sanitaria e automazione", operations: "Team operativo", partnersTitle: "Partner globali per la compliance", partnersIntro: "Contesto locale. Visione condivisa.", ctaKicker: "Lavorare con noi", ctaTitle: "Un team senior, costruito sulle vostre esigenze.", ctaButton: "Avviate una conversazione", read: "Leggi", viewBio: "Vedi biografia" },
  pt: { kicker: "As pessoas por trás da Eunomia", title: "Especialistas próximos do trabalho.", intro: "Os nossos especialistas em conformidade prestam orientação estratégica e apoio operacional na Europa, a nível global e local. Trabalhará com pessoas que conhecem tanto as regras como as decisões do dia a dia.", founderRole: "Fundadora e diretora-geral", operationsTitle: "Operações de conformidade na saúde e automatização", operations: "Equipa de operações", partnersTitle: "Parceiros globais de conformidade", partnersIntro: "Contexto local. Perspetiva integrada.", ctaKicker: "Trabalhe connosco", ctaTitle: "Uma equipa experiente, ajustada às suas necessidades.", ctaButton: "Iniciar uma conversa", read: "Ler", viewBio: "Ver biografia" },
  nl: { kicker: "De mensen achter Eunomia", title: "Specialisten die dicht bij het werk staan.", intro: "Onze compliance-experts bieden strategisch advies en operationele ondersteuning in Europa, wereldwijd en op landenniveau. U werkt met vaste contactpersonen die zowel de regels als de dagelijkse beslissingen begrijpen.", founderRole: "Oprichter en algemeen directeur", operationsTitle: "Compliance-activiteiten in de gezondheidszorg en automatisering", operations: "Operationeel team", partnersTitle: "Wereldwijde compliancepartners", partnersIntro: "Lokale context. Verbonden inzicht.", ctaKicker: "Werk met ons samen", ctaTitle: "Een ervaren team, afgestemd op uw behoeften.", ctaButton: "Start een gesprek", read: "Lezen", viewBio: "Bekijk biografie" },
  ja: { kicker: "Eunomiaを支えるメンバー", title: "現場に寄り添う専門家チーム。", intro: "コンプライアンスの専門家が、欧州、グローバル、各国レベルで戦略的な助言と実務支援を提供します。規則と日々の判断の両方を理解する担当者と一緒に進められます。", founderRole: "創業者兼マネージングディレクター", operationsTitle: "ヘルスケアコンプライアンス業務と自動化支援", operations: "オペレーションチーム", partnersTitle: "グローバルコンプライアンスパートナー", partnersIntro: "現地の知見を、つながる判断に。", ctaKicker: "ご相談ください", ctaTitle: "ご要望に合わせた経験豊富なチームです。", ctaButton: "相談を始める", read: "読む", viewBio: "経歴を見る" },
  "zh-CN": { kicker: "Eunomia 团队", title: "深入了解实际工作的专家。", intro: "我们的合规专家在欧洲、全球及本地层面提供战略建议和运营支持。您将与熟悉法规要求和日常决策的固定联系人合作。", founderRole: "创始人兼董事总经理", operationsTitle: "医疗健康合规运营与自动化支持", operations: "运营团队", partnersTitle: "全球合规业务伙伴", partnersIntro: "本地经验，协同判断。", ctaKicker: "与我们合作", ctaTitle: "根据您的需求组建资深团队。", ctaButton: "开始沟通", read: "阅读", viewBio: "查看简介" },
  ar: { kicker: "الأشخاص وراء Eunomia", title: "خبراء قريبون من واقع العمل.", intro: "يقدم خبراؤنا في الامتثال التوجيه الاستراتيجي والدعم التشغيلي في أوروبا وعلى المستوى العالمي والمحلي. ستعملون مع أشخاص يفهمون القواعد والقرارات اليومية.", founderRole: "مؤسِّسة الشركة ومديرتها العامة", operationsTitle: "عمليات الامتثال الصحي ودعم الأتمتة", operations: "فريق العمليات", partnersTitle: "شركاء الامتثال العالميون", partnersIntro: "سياق محلي. رؤية مترابطة.", ctaKicker: "اعملوا معنا", ctaTitle: "فريق خبير مصمم وفق احتياجاتكم.", ctaButton: "ابدؤوا الحوار", read: "اقرأ المزيد", viewBio: "عرض السيرة" },
};

const agyat: TeamPerson = {
  name: "Agyat Suri", role: "Healthcare Compliance Operations Lead", image: "/team-agyat.jpeg",
  bio: "Agyat Suri is a healthcare compliance professional with global experience supporting pharmaceutical and biotech companies, with expertise in the EFPIA/ABPI Code of Practice, anti-bribery and anti-corruption (ABAC), compliance governance, policy and process development. He leads complex compliance projects and global shared services supporting material review, HCP/HCO activity and engagement review, and transparency disclosure across multiple markets. Agyat develops practical compliance guidance and training, working closely with compliance business partners and stakeholders globally to deliver consistent, scalable and locally appropriate solutions.\n\nHe has a particular interest in using technology to make compliance more efficient and accessible, with expertise in SharePoint and the development of simple, practical compliance tools and workflows. He also supports the adoption of AI and other emerging technologies to enhance compliance operations, streamline processes and improve the user experience, while maintaining appropriate governance and oversight."
};
const operations: TeamPerson[] = [
  { name: "Sulabh Mahant", role: "IT & Systems Lead", image: "/team-sulabh.jpg", bio: "Sulabh leads IT and systems, supporting the technology, automation and operational infrastructure behind Eunomia's services." },
  { name: "Kaveri Thukral", role: "Compliance Operations Manager & Analyst", image: "/team-kaveri.jpeg", bio: "Kaveri coordinates compliance operations and analysis, helping turn requirements into organised workflows, records and reporting." },
  { name: "Kaja Lubińska", role: "SSC Compliance Support", image: "/team-kaja.jpg", bio: "Kaja provides shared-service compliance support across recurring operational activities and documented review processes." },
  { name: "Himani Bhagwati", role: "SSC Compliance Support", image: "/team-himani.jpg", bio: "Himani supports shared-service compliance delivery, helping teams maintain consistent processes, records and follow-through." },
];
const localeKeys = Object.keys(locales).filter((locale) => locale !== "en");
export function generateStaticParams() { return localeKeys.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!Object.prototype.hasOwnProperty.call(copy, locale)) return {};
  const langs = languageAlternates("/team");
  return { title: `${copy[locale as Exclude<Locale, "en">].title} | Eunomia Pharma Services`, description: copy[locale as Exclude<Locale, "en">].intro, alternates: { canonical: `https://www.eunomiapharmaservices.com/${locale}/team`, languages: langs } };
}

export default async function LocalizedTeamPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!Object.prototype.hasOwnProperty.call(copy, locale)) notFound();
  const selected = locale as Exclude<Locale, "en">;
  const text = copy[selected];
  const direction = locales[selected].dir;
  const people = [...compliancePartners, agyat, ...operations].map((person) => localizeTeamPerson(person, selected));
  return (
    <main className="team-page" lang={selected} dir={direction}>
      <StructuredData data={{ "@context": "https://schema.org", "@graph": people.map((person) => ({ "@type": "Person", "@id": `https://www.eunomiapharmaservices.com/${selected}/team#${partnerId(person.name)}`, name: person.name, jobTitle: person.role, image: person.image ? `https://www.eunomiapharmaservices.com${person.image}` : undefined, affiliation: { "@id": "https://www.eunomiapharmaservices.com/#organization" }, url: `https://www.eunomiapharmaservices.com/${selected}/team` })) }} />
      <SiteHeader locale={selected} />
      <section className="team-hero section-pad">
        <div><p className="section-kicker">{text.kicker}</p><h1>{text.title}</h1></div>
        <p>{text.intro}</p>
      </section>
      <section className="team-leadership section-pad" aria-label="Rashmi Papneja">
        <article className="founder-profile founder-profile-static">
          <SiteImage src="/team-rashmi.jpeg" sizes="(max-width: 600px) 90vw, 400px" alt="Rashmi Papneja" />
          <div><h3>Rashmi Papneja</h3><p className="founder-role">{text.founderRole}</p>
            <p>{founderBio[selected][0]}</p>
            <p>{founderBio[selected][1]}</p>
          </div>
        </article>
      </section>
      <section className="team-group team-operations-lead section-pad">
        <div className="team-section-heading operations-section-heading"><h2>{text.operationsTitle}</h2></div>
        <div className="operations-lead-profile"><TeamProfile person={localizeTeamPerson(agyat, selected)} featured readLabel={text.read} viewBioLabel={text.viewBio} /></div>
        <div className="operations-team-heading"><span>{text.operations}</span></div>
        <div className="team-profile-grid operations-team-grid">{operations.map((person) => <TeamProfile key={person.name} person={localizeTeamPerson(person, selected)} bioEnabled={false} readLabel={text.read} viewBioLabel={text.viewBio} />)}</div>
      </section>
      <section className="team-group section-pad">
        <div className="team-section-heading business-partners-heading"><h2>{text.partnersTitle}</h2><p>{text.partnersIntro}</p></div>
        <div className="team-profile-grid team-profile-grid-partners" id="global-compliance-business-partners">{compliancePartners.map((person) => <TeamProfile key={person.name} person={localizeTeamPerson(person, selected)} readLabel={text.read} viewBioLabel={text.viewBio} />)}</div>
      </section>
      <section className="team-cta section-pad">
        <p className="section-kicker">{text.ctaKicker}</p><h2>{text.ctaTitle}</h2>
        <a className="primary-button" href={`/${selected}/contact`}>{text.ctaButton} <ArrowUpRight /></a>
      </section>
      <SiteFooter locale={selected} />
    </main>
  );
}

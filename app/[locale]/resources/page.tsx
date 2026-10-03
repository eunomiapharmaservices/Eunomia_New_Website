import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader, SiteFooter } from "../../../components/SiteChrome";
import { ResourceSearch } from "../../../components/ResourceSearch";
import resourceArticles from "../../../data/resource-articles.json";
import { locales, type Locale } from "../../../data/i18n/locales";

type ResourcesCopy = { title: string; intro: string; alert: string; english: string; kicker: string; count: string };
const copy: Record<Exclude<Locale, "en">, ResourcesCopy> = {
  es: { title: "Ideas prácticas para un cumplimiento normativo en evolución.", intro: "Explore artículos, seminarios web, casos prácticos y materiales de trabajo de Eunomia.", alert: "Muchos recursos están disponibles solo en inglés por ahora. Estamos preparando versiones traducidas.", english: "Ver recurso en inglés", kicker: "Perspectivas de Eunomia", count: "artículos" },
  fr: { title: "Des idées concrètes pour une conformité en mouvement.", intro: "Découvrez les articles, webinaires, études de cas et ressources pratiques d’Eunomia.", alert: "De nombreuses ressources sont disponibles uniquement en anglais pour le moment. Nous préparons des versions traduites.", english: "Voir la ressource en anglais", kicker: "Perspectives Eunomia", count: "articles" },
  de: { title: "Praxisnahe Einblicke für eine Compliance im Wandel.", intro: "Entdecken Sie Artikel, Webinare, Fallstudien und praktische Materialien von Eunomia.", alert: "Viele Ressourcen sind derzeit nur auf Englisch verfügbar. Übersetzungen sind in Vorbereitung.", english: "Ressource auf Englisch ansehen", kicker: "Eunomia-Einblicke", count: "Artikel" },
  it: { title: "Approfondimenti pratici per una compliance in evoluzione.", intro: "Scoprite articoli, webinar, casi di studio e risorse operative di Eunomia.", alert: "Molte risorse sono attualmente disponibili solo in inglese. Stiamo preparando le versioni tradotte.", english: "Aprite la risorsa in inglese", kicker: "Approfondimenti Eunomia", count: "articoli" },
  pt: { title: "Ideias práticas para uma conformidade em evolução.", intro: "Explore artigos, webinars, estudos de caso e materiais de trabalho da Eunomia.", alert: "Muitos recursos estão disponíveis apenas em inglês neste momento. Estamos a preparar versões traduzidas.", english: "Ver recurso em inglês", kicker: "Perspetivas Eunomia", count: "artigos" },
  nl: { title: "Praktische inzichten voor compliance in beweging.", intro: "Ontdek artikelen, webinars, casestudy’s en praktische hulpmiddelen van Eunomia.", alert: "Veel bronnen zijn momenteel alleen beschikbaar in het Engels. We bereiden vertalingen voor.", english: "Bekijk de Engelse bron", kicker: "Inzichten van Eunomia", count: "artikelen" },
  ja: { title: "変化するコンプライアンスに役立つ実務的な知見。", intro: "Eunomia の記事、ウェビナー、事例、実務資料をご覧ください。", alert: "現在、多くのリソースは英語のみです。翻訳版を準備しています。", english: "英語の資料を見る", kicker: "Eunomia の知見", count: "件の記事" },
  "zh-CN": { title: "为不断变化的合规工作提供实用见解。", intro: "浏览 Eunomia 的文章、网络研讨会、案例研究和实用资料。", alert: "目前许多资源仅提供英文版本。我们正在准备翻译版本。", english: "查看英文资源", kicker: "Eunomia 观点", count: "篇文章" },
  ar: { title: "رؤى عملية لمتطلبات امتثال متغيرة.", intro: "استكشفوا مقالات Eunomia وندواتها عبر الإنترنت ودراسات الحالة والمواد العملية.", alert: "تتوفر موارد كثيرة باللغة الإنجليزية فقط حالياً. نعمل على إعداد نسخ مترجمة.", english: "عرض المورد باللغة الإنجليزية", kicker: "رؤى Eunomia", count: "مقالاً" },
};
const localeKeys = Object.keys(locales).filter((locale) => locale !== "en");
export function generateStaticParams() { return localeKeys.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!Object.prototype.hasOwnProperty.call(copy, locale)) return {};
  const text = copy[locale as Exclude<Locale, "en">];
  const languages = Object.fromEntries(Object.keys(locales).map((code) => [code, `https://www.eunomiapharmaservices.com/${code === "en" ? "" : `${code}/`}resources`]));
  return { title: `${text.kicker} | Eunomia Pharma Services`, description: text.intro, alternates: { canonical: `https://www.eunomiapharmaservices.com/${locale}/resources`, languages } };
}

export default async function LocalizedResourcesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!Object.prototype.hasOwnProperty.call(copy, locale)) notFound();
  const selected = locale as Exclude<Locale, "en">;
  const text = copy[selected];
  const articles = [...resourceArticles].sort((a, b) => b.date.localeCompare(a.date));
  const dateLocale = selected === "pt" ? "pt-PT" : selected;
  const dateFormat = new Intl.DateTimeFormat(dateLocale, { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" });
  return (
    <main lang={selected} dir={locales[selected].dir}>
      <SiteHeader locale={selected} />
      <section className="inner-hero resource-hero section-pad">
        <p className="section-kicker">{text.kicker}</p>
        <h1>{text.title}</h1>
        <p>{text.intro}</p>
      </section>
      <p className="form-note section-pad">{text.alert}</p>
      <ResourceSearch locale={selected} />
      <section className="article-library section-pad" id="articles">
        <div className="resource-heading">
          <p className="section-kicker">{text.kicker}</p>
          <h2>{articles.length} {text.count}</h2>
        </div>
        <div className="article-grid">
          {articles.map(({ date, title, slug }, i) => (
            <a className="article-card" href={`/resources/articles/${slug}`} key={slug} lang="en" data-resource-search={`article ${date} ${title}`}>
              <div><span className="article-number">{String(i + 1).padStart(2, "0")}</span><span className="article-date">{dateFormat.format(new Date(date))}</span></div>
              <h3>{title}</h3><span className="resource-card-link">{text.english} <ArrowUpRight /></span>
            </a>
          ))}
        </div>
      </section>
      <SiteFooter locale={selected} />
    </main>
  );
}

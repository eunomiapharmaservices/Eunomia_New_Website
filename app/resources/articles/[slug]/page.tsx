import { editorialEntry, EditorialSummary, EditorialSources } from "../../../../components/EditorialEnhancement";
import type { Metadata } from "next";
import articleSeo from "../../../../data/article-seo.json";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../../../components/SiteChrome";
import resourceArticles from "../../../../data/resource-articles.json";
import { StructuredData } from "../../../../components/StructuredData";
import { DEFAULT_OG_IMAGE } from "../../../../lib/seo";
import articleServices from "../../../../data/article-services.json";
import relatedGroups from "../../../../data/article-related.json";
import { categoriesFor } from "../../../../data/article-categories";

const SERVICES: Record<string, { name: string; summary: string }> = {
  "governance-assurance": { name: "Healthcare Compliance Programme Design and Implementation", summary: "Frameworks, controls, audit readiness and implementation" },
  "automation-of-compliance-operations": { name: "Automation of Compliance Operations", summary: "SharePoint, Power BI and AI automation" },
  "local-legal-mandates": { name: "Local Legal Mandates and Representation", summary: "In-market presence and local-code support" },
  "shared-services": { name: "Shared Services / GBS / GCC", summary: "A named compliance function, shaped around the work" },
};

// Section headings in the imported articles are mostly <h3>. Promote them to
// <h2> when an article has none, so each section is a top-level heading under
// the <h1>; data-level keeps the original size in CSS.
function promoteSectionHeadings(html: string) {
  if (/<h2\b/i.test(html)) return html;
  return html.replace(/<h3\b/gi, '<h2 data-level="3"').replace(/<\/h3>/gi, "</h2>");
}

const SITE = "https://www.eunomiapharmaservices.com";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articleSeo.find((item) => item.slug === slug);
  if (!article) return {};
  const url = "https://www.eunomiapharmaservices.com/resources/articles/" + slug;
  return {
    title: article.title + " | Eunomia",
    description: article.description,
    alternates: { canonical: url },
    openGraph: { type: "article", title: article.title, description: article.description, url, siteName: "Eunomia Pharma Services", locale: "en_GB", images: [DEFAULT_OG_IMAGE] },
    twitter: { card: "summary_large_image", title: article.title, description: article.description, images: [DEFAULT_OG_IMAGE.url] },
  };
}

type Article = (typeof resourceArticles)[number];

export function generateStaticParams() {
  return resourceArticles.map(({ slug }) => ({ slug }));
}

const legacyDestinations: Record<string, string> = {
  "healthcare-compliance-services": "/services",
  "compliancetraining": "/services/governance-assurance",
  "sop": "/services/governance-assurance",
  "monitoring-and-auditing": "/services/governance-assurance",
  "audits": "/services/governance-assurance",
  "risk-assessment-framework-and-internal-controls": "/services/governance-assurance",
  "fmv": "/resources/fair-market-value-methodology",
  "material": "/services/shared-services",
  "transparency": "/services/shared-services",
  "contact": "/contact"
};
const articleSlugs = new Set(resourceArticles.map(({ slug }) => slug));

function localiseArticleLinks(html: string) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/href=(["'])([^"']+)\1/gi, (match, quote: string, href: string) => {
      // Rewrite only known destinations on our own site. Preserve other URLs.
      if (!href.startsWith("/") && !/^https?:\/\//i.test(href)) return match;
      const url = new URL(href, SITE);
      if (!/^(www\.)?eunomiapharmaservices\.com$/i.test(url.hostname)) return match;
      const path = url.pathname.replace(/\/+$/, "") || "/";
      const key = path.replace(/^\/resources\/articles\//, "").replace(/^\//, "");
      const destination = legacyDestinations[key.toLowerCase()]
        ?? (articleSlugs.has(key) ? `/resources/articles/${key}` : path);
      return `href=${quote}${destination}${url.search}${url.hash}${quote}`;
    });
}

export default async function ResourceArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = resourceArticles.find((item) => item.slug === slug) as
    | Article
    | undefined;

  if (!article) notFound();

  const relatedServiceSlug = (articleServices as Record<string, string>)[slug];
  const relatedService = relatedServiceSlug ? SERVICES[relatedServiceSlug] : undefined;

  const cats = categoriesFor(slug);
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Resources", item: `${SITE}/resources` },
      ...(cats[0] ? [{ "@type": "ListItem", position: 2, name: cats[0].name, item: `${SITE}/resources/category/${cats[0].slug}` }] : []),
      { "@type": "ListItem", position: cats[0] ? 3 : 2, name: article.title.replace(/<[^>]+>/g, ""), item: `${SITE}/resources/articles/${slug}` },
    ],
  };
  const relatedSlugs = Array.from(
    new Set((relatedGroups as string[][]).filter((g) => g.includes(slug)).flat()),
  ).filter((s) => s !== slug);
  const relatedArticles = relatedSlugs
    .map((s) => resourceArticles.find((a) => a.slug === s))
    .filter((a): a is Article => Boolean(a))
    .slice(0, 3);

  const enhancement = editorialEntry(slug);
  const seo = articleSeo.find((item) => item.slug === slug);
  const url = `${SITE}/resources/articles/${slug}`;
  // Dates come from the article record; author and publisher resolve to the
  // site-wide Organization entity already published in the layout.
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: seo?.title ?? article.title,
    ...(seo?.description ? { description: seo.description } : {}),
    datePublished: article.date,
    dateModified: enhancement?.updated ?? article.date,
    ...(enhancement ? { citation: enhancement.sources.map(source => source.url) } : {}),
    inLanguage: "en-GB",
    author: { "@id": `${SITE}/#organization` },
    publisher: { "@id": `${SITE}/#organization` },
    isPartOf: { "@id": `${SITE}/#website` },
  };

  return (
    <main>
      <StructuredData data={articleSchema} />
      <StructuredData data={breadcrumb} />
      <SiteHeader />
      <article className="standalone-resource">
        <header className="standalone-resource-header section-pad">
          <a href="/resources#articles" className="back-link">
            <ArrowLeft /> All resources
          </a>
          <p className="section-kicker">
            Eunomia perspective · {article.date.slice(0, 10)}
            {cats.length > 0 && <> · {cats.map((c, i) => <span key={c.slug}>{i > 0 && ", "}<a href={`/resources/category/${c.slug}`}>{c.name}</a></span>)}</>}
          </p>
          <h1 dangerouslySetInnerHTML={{ __html: article.title }} />
        </header>
        {enhancement && <div className="standalone-resource-body"><EditorialSummary entry={enhancement} /></div>}
        <div
          className="standalone-resource-body"
          dangerouslySetInnerHTML={{
            __html: promoteSectionHeadings(localiseArticleLinks(article.content)),
          }}
        />
        {enhancement && <div className="standalone-resource-body"><EditorialSources entry={enhancement} /></div>}
        {relatedArticles.length > 0 && (
          <aside className="article-related-reading">
            <p className="section-kicker">Related reading</p>
            <ul>
              {relatedArticles.map((a) => (
                <li key={a.slug}>
                  <a href={`/resources/articles/${a.slug}`} dangerouslySetInnerHTML={{ __html: a.title }} />
                </li>
              ))}
            </ul>
          </aside>
        )}
        {relatedService && (
          <aside className="article-related-service">
            <p className="section-kicker">Related service</p>
            <a href={`/services/${relatedServiceSlug}`}>
              <strong>{relatedService.name}</strong>
              <span>{relatedService.summary}</span>
            </a>
          </aside>
        )}
      </article>
      <SiteFooter />
    </main>
  );
}

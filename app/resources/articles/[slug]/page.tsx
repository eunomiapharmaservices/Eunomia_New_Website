import type { Metadata } from "next";
import articleSeo from "../../../../data/article-seo.json";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../../../components/SiteChrome";
import resourceArticles from "../../../../data/resource-articles.json";
import { StructuredData } from "../../../../components/StructuredData";
import { partnerId } from "../../../../data/compliancePartners";

const base = "https://www.eunomiapharmaservices.com";
const duplicateSlug = "ai-in-healthcare-compliance-navigating-opportunities-risks-regulatory-landscapes";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articleSeo.find((item) => item.slug === slug);
  if (!article) return {};
  const url = "https://www.eunomiapharmaservices.com/resources/articles/" + slug;
  return {
    title: article.title + " | Eunomia",
    description: article.description,
    authors: [{ name: article.author, url: `${base}/team#${partnerId(article.author)}` }],
    alternates: { canonical: url },
    openGraph: { type: "article", title: article.title, description: article.description, url, siteName: "Eunomia Pharma Services", publishedTime: article.datePublished, modifiedTime: article.dateModified, authors: [`${base}/team#${partnerId(article.author)}`] },
  };
}

type Article = (typeof resourceArticles)[number];

export function generateStaticParams() {
  return resourceArticles.map(({ slug }) => ({ slug }));
}

function localiseArticleLinks(html: string) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(
      /href="https?:\/\/(?:www\.)?eunomiapharmaservices\.com\/([^"?#]+)\/?"/gi,
      (_match, path: string) => {
        const slug = path.split("/").filter(Boolean).at(-1);
        if (slug === duplicateSlug) return 'href="/resources/articles/ai-in-healthcare-compliance"';
        return resourceArticles.some((article) => article.slug === slug)
          ? `href="/resources/articles/${slug}"`
          : `href="/${path.replace(/\/$/, "")}"`;
      },
    );
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
  const seo = articleSeo.find((item) => item.slug === slug);
  if (!seo) notFound();
  const url = `${base}/resources/articles/${slug}`;
  const authorUrl = `${base}/team#${partnerId(seo.author)}`;
  const displayDate = (date: string) => new Intl.DateTimeFormat("en-GB", {
    day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
  }).format(new Date(date));

  return (
    <main>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `${url}#article`,
        url,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        headline: seo.title,
        description: seo.description,
        datePublished: seo.datePublished,
        dateModified: seo.dateModified,
        author: { "@type": "Person", "@id": authorUrl, name: seo.author, url: authorUrl },
        publisher: { "@id": `${base}/#organization` },
        inLanguage: "en-GB",
      }} />
      <SiteHeader />
      <article className="standalone-resource">
        <header className="standalone-resource-header section-pad">
          <a href="/resources#articles" className="back-link">
            <ArrowLeft /> All resources
          </a>
          <p className="section-kicker">
            Eunomia perspective
          </p>
          <h1 dangerouslySetInnerHTML={{ __html: article.title }} />
          <p className="article-byline">
            By <a href={`/team#${partnerId(seo.author)}`}>{seo.author}</a>
            {" · Published "}<time dateTime={seo.datePublished}>{displayDate(seo.datePublished)}</time>
            {seo.dateModified !== seo.datePublished && <>
              {" · Updated "}<time dateTime={seo.dateModified}>{displayDate(seo.dateModified)}</time>
            </>}
          </p>
        </header>
        <div
          className="standalone-resource-body"
          dangerouslySetInnerHTML={{
            __html: localiseArticleLinks(article.content),
          }}
        />
      </article>
      <SiteFooter />
    </main>
  );
}

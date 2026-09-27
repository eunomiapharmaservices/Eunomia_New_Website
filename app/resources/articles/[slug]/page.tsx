import type { Metadata } from "next";
import articleSeo from "../../../../data/article-seo.json";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../../../components/SiteChrome";
import resourceArticles from "../../../../data/resource-articles.json";
import { StructuredData } from "../../../../components/StructuredData";

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
    openGraph: { type: "article", title: article.title, description: article.description, url, siteName: "Eunomia Pharma Services" },
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
        return slug
          ? `href="/resources/articles/${slug}"`
          : 'href="/resources"';
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
    dateModified: article.date,
    inLanguage: "en-GB",
    author: { "@id": `${SITE}/#organization` },
    publisher: { "@id": `${SITE}/#organization` },
    isPartOf: { "@id": `${SITE}/#website` },
  };

  return (
    <main>
      <StructuredData data={articleSchema} />
      <SiteHeader />
      <article className="standalone-resource">
        <header className="standalone-resource-header section-pad">
          <a href="/resources#articles" className="back-link">
            <ArrowLeft /> All resources
          </a>
          <p className="section-kicker">
            Eunomia perspective · {article.date.slice(0, 10)}
          </p>
          <h1 dangerouslySetInnerHTML={{ __html: article.title }} />
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

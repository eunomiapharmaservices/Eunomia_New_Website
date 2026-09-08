import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../../../components/SiteChrome";
import resourceArticles from "../../../../data/resource-articles.json";

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

  return (
    <main>
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

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteHeader, SiteFooter } from "../../../../components/SiteChrome";
import { StructuredData } from "../../../../components/StructuredData";
import { withSocial } from "../../../../lib/seo";
import resourceArticles from "../../../../data/resource-articles.json";
import articleSeo from "../../../../data/article-seo.json";
import { articlesIn, populatedCategories } from "../../../../data/article-categories";

const SITE = "https://www.eunomiapharmaservices.com";

export function generateStaticParams() {
  return populatedCategories.map(({ slug }) => ({ category: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const c = populatedCategories.find((x) => x.slug === category);
  if (!c) return {};
  const path = `/resources/category/${c.slug}`;
  return withSocial(path, {
    title: `${c.name} | Pharmaceutical Compliance Insights | Eunomia`,
    description: c.description,
    alternates: { canonical: SITE + path },
  });
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const c = populatedCategories.find((x) => x.slug === category);
  if (!c) notFound();
  const slugs = articlesIn(c.slug);
  const items = resourceArticles
    .filter((a) => slugs.includes(a.slug))
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((a) => ({ ...a, description: articleSeo.find((s) => s.slug === a.slug)?.description ?? "" }));
  const url = `${SITE}/resources/category/${c.slug}`;

  return (
    <main>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "@id": `${url}#page`,
              url,
              name: c.name,
              description: c.description,
              isPartOf: { "@id": `${SITE}/#website` },
              mainEntity: {
                "@type": "ItemList",
                itemListElement: items.map((a, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE}/resources/articles/${a.slug}` })),
              },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Resources", item: `${SITE}/resources` },
                { "@type": "ListItem", position: 2, name: c.name, item: url },
              ],
            },
          ],
        }}
      />
      <SiteHeader />
      <section className="category-hero section-pad">
        <a href="/resources#articles" className="back-link"><ArrowLeft /> All resources</a>
        <p className="section-kicker">Articles &amp; insights</p>
        <h1>{c.name}</h1>
        <p>{c.description}</p>
        <nav className="category-chips" aria-label="Article categories">
          {populatedCategories.map((x) => (
            <a key={x.slug} href={`/resources/category/${x.slug}`} aria-current={x.slug === c.slug ? "page" : undefined}>{x.name}</a>
          ))}
        </nav>
      </section>
      <section className="category-list section-pad">
        {items.map((a) => (
          <a key={a.slug} href={`/resources/articles/${a.slug}`} className="category-item">
            <span>{a.date.slice(0, 10)}</span>
            <h2 dangerouslySetInnerHTML={{ __html: a.title }} />
            <p>{a.description}</p>
            <b>Read the article <ArrowUpRight aria-hidden="true" /></b>
          </a>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}

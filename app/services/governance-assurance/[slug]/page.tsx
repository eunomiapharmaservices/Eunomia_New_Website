import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { withSocial } from "../../../../lib/seo";
import { ServiceSubpage } from "../../../../components/ServiceSubpage";
import { StructuredData } from "../../../../components/StructuredData";
import { ukServicePages, getUkServicePage, UK_SERVICE_BASE } from "../../../../data/uk-service-pages";

const SITE = "https://www.eunomiapharmaservices.com";

export const dynamicParams = false;

export function generateStaticParams() {
  return ukServicePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getUkServicePage(slug);
  if (!page) return {};
  const path = `${UK_SERVICE_BASE}/${slug}`;
  return withSocial(path, { title: page.metaTitle, description: page.metaDescription, alternates: { canonical: SITE + path } });
}

export default async function UkServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getUkServicePage(slug);
  if (!page) notFound();
  const path = `${UK_SERVICE_BASE}/${slug}`;
  const others = ukServicePages.filter((p) => p.slug !== slug);
  return (
    <>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Services", item: `${SITE}/services` },
          { "@type": "ListItem", position: 2, name: "Programme Design and Implementation", item: `${SITE}${UK_SERVICE_BASE}` },
          { "@type": "ListItem", position: 3, name: page.heading, item: `${SITE}${path}` },
        ],
      }} />
      <ServiceSubpage
        servicePath={path}
        heading={page.heading}
        serviceTitleFirst
        accent="orange"
        kicker={page.kicker}
        title={page.title}
        intro={page.intro}
        serviceImage={page.image}
        services={page.services}
        outcomes={page.outcomes}
        faqs={page.faqs}
        detailSection={
          <section className="section-pad uk-related" aria-labelledby="uk-related-title">
            <p className="section-kicker">Related UK services</p>
            <h2 id="uk-related-title">Part of Programme Design and Implementation</h2>
            <ul>
              {others.map((p) => <li key={p.slug}><a href={`${UK_SERVICE_BASE}/${p.slug}`}>{p.heading}</a></li>)}
              <li><a href={UK_SERVICE_BASE}>Healthcare Compliance Programme Design and Implementation</a></li>
            </ul>
          </section>
        }
      />
    </>
  );
}

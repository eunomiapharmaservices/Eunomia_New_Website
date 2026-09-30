import { ResourceActionLink } from "../../../components/ResourceActionLink";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader, SiteFooter } from "../../../components/SiteChrome";
import { PageFaqs } from "../../../components/PageFaqs";
import { StructuredData } from "../../../components/StructuredData";
import { practicalResources } from "../../../data/practical-resources";
import { withSocial } from "../../../lib/seo";
import styles from "./resource.module.css";

export const dynamicParams = false;
export function generateStaticParams() { return practicalResources.map(({ slug }) => ({ slug })); }
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resource = practicalResources.find(item => item.slug === slug);
  if (!resource) return {};
  return withSocial(`/resources/${slug}`, {
    title: resource.metaTitle, description: resource.description,
    alternates: { canonical: `https://www.eunomiapharmaservices.com/resources/${slug}` },
  });
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const resource = practicalResources.find(item => item.slug === slug);
  if (!resource) notFound();
  const url = `https://www.eunomiapharmaservices.com/resources/${slug}`;
  return <main>
    <SiteHeader />
    <StructuredData data={{ "@context": "https://schema.org", "@type": "Article", "@id": `${url}#article`, mainEntityOfPage: url, headline: resource.title, description: resource.description, datePublished: "2026-09-30", dateModified: "2026-09-30", author: { "@id": "https://www.eunomiapharmaservices.com/#organization" }, publisher: { "@id": "https://www.eunomiapharmaservices.com/#organization" }, citation: resource.sources.map(source => source.href), inLanguage: "en-GB" }} />
    <article className={styles.article}>
      <header className={styles.hero}>
        <a href="/resources">All resources</a>
        <p className="section-kicker">Practical guide and editable template</p>
        <h1>{resource.title}</h1>
        <p className={styles.intro}>{resource.intro}</p>
        <ResourceActionLink action="download" resourceSlug={slug} className={styles.button} href={`/downloads/${resource.download}`} download>{resource.downloadLabel}</ResourceActionLink>
        <p className={styles.meta}>Eunomia Pharma Services · 30 September 2026</p>
      </header>
      <div className={styles.layout}>
        <nav className={styles.contents} aria-label="On this page"><h2>In this guide</h2><ol>{resource.sections.map(section => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}</ol><a href="#sources">Sources and scope</a></nav>
        <div className={styles.body}>
          <aside className={styles.scope}>{resource.scope}</aside>
          {resource.sections.map(section => <section id={section.id} key={section.id}>
            <h2>{section.title}</h2>
            {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            {section.bullets && <ul>{section.bullets.map(item => <li key={item}>{item}</li>)}</ul>}
            {section.table && <div className={styles.tableWrap} tabIndex={0} role="region" aria-label={section.title}><table><caption>{section.title}</caption><thead><tr>{section.table.headings.map(heading => <th key={heading} scope="col">{heading}</th>)}</tr></thead><tbody>{section.table.rows.map(row => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th scope="row" key={index}>{cell}</th> : <td key={index}>{cell}</td>)}</tr>)}</tbody></table></div>}
          </section>)}
          <section className={styles.download}><h2>Put the guide into practice</h2><p>Complete the editable fields and save your own copy. Your entries are not submitted to Eunomia.</p><ResourceActionLink action="download" resourceSlug={slug} className={styles.button} href={`/downloads/${resource.download}`} download>{resource.downloadLabel}</ResourceActionLink></section>
          <section id="sources" className={styles.sources}><h2>Sources and scope</h2><p>Official sources checked on 30 September 2026. The workflow suggestions and templates are practical aids to adapt to your company and markets.</p><ul>{resource.sources.map(source => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label}</a></li>)}</ul></section>
          {slug === "promotional-review-workflow" && <section><h2>Evidence from a materials review engagement</h2><p>Eunomia’s published shared-service case study reports review turnaround falling from 5 days to 2 days and review cycles from 4 to 2. These engagement-specific results illustrate the operating model; they are not a guaranteed outcome.</p><p><a href="/resources/materials-review-shared-service-case-study">Read the case study and original evidence</a>.</p></section>}
          <section><h2>The people behind the support</h2><p>Explore the roles and experience of <a href="/team">Eunomia’s compliance team</a> and identify the expertise relevant to your markets and operating model.</p></section>
          <section className={styles.support}><h2>{resource.cta}</h2><p>Connect the guidance to your procedures, people and systems.</p><ResourceActionLink action="consultation" resourceSlug={slug} className={styles.button} href={`/contact?service=${encodeURIComponent(resource.enquiry)}&resource=${slug}`}>Discuss your requirements</ResourceActionLink><ul>{resource.related.map(link => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}</ul></section>
        </div>
      </div>
    </article>
    <PageFaqs faqs={resource.faqs} />
    <SiteFooter />
  </main>;
}

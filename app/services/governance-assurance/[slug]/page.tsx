import styles from "../../../markets/[slug]/market.module.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FileCheck2, Globe2, Scale, ShieldCheck } from "lucide-react";
import { withSocial } from "../../../../lib/seo";
import { ServiceSubpage } from "../../../../components/ServiceSubpage";
import { StructuredData } from "../../../../components/StructuredData";
import { TrainingLearningExamples } from "../../../../components/TrainingLearningExamples";
import { compliancePartners } from "../../../../data/compliancePartners";
import { priorityServiceDetails } from "../../../../data/priority-service-details";
import { ukServicePages, getUkServicePage, UK_SERVICE_BASE } from "../../../../data/uk-service-pages";

const SITE = "https://www.eunomiapharmaservices.com";
const ICONS = [<ShieldCheck key="a" />, <Scale key="b" />, <Globe2 key="c" />, <FileCheck2 key="d" />];
const rashmi = compliancePartners.find((p) => p.name === "Rashmi Papneja");

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

// Same layout as the country guides (/markets/[slug]): approach block under
// the hero, then the rules with official sources, a named lead and FAQs.
export default async function UkServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getUkServicePage(slug);
  if (!page) notFound();
  const path = `${UK_SERVICE_BASE}/${slug}`;
  const others = ukServicePages.filter((p) => p.slug !== slug);
  const { positioning: pos, frameworks: fw } = page;
  const details = priorityServiceDetails[slug];
  const sources = fw.frameworks.filter((f, i, all) => all.findIndex((x) => x.href === f.href) === i);
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
        kicker={page.kicker}
        title={page.title}
        serviceTitleFirst
        accent="green"
        intro={page.intro}
        serviceImage={page.image}
        services={page.services}
        outcomes={page.outcomes}
        lead={rashmi ? { name: rashmi.name, role: "Founder, Managing Director and UK Compliance Lead", image: rashmi.image ?? "/consultants/rashmi-papneja.svg" } : undefined}
        heroDetail={
          <section className={styles.approach} aria-label={`${page.kicker} in the UK`}>
            <div className={styles.overview}>
              <article>
                <p className={styles.eyebrow}>UK expertise · Practical delivery</p>
                <h2>Who this support is for</h2>
                <p>{pos.audience}</p>
              </article>
              <article className={styles.challenge}>
                <h2>{pos.problemTitle}</h2>
                <p>{pos.problem}</p>
              </article>
            </div>
            <div className={styles.delivery}>
              <article>
                <p className={styles.eyebrow}>From requirements to action</p>
                {details ? (
                  <>
                    <h2>What you receive</h2>
                    <p>Depending on the agreed scope, deliverables can include:</p>
                    <ul>{details.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
                    <h3>{details.planningTitle}</h3>
                    <p>{details.planning}</p>
                  </>
                ) : (
                  <>
                    <h2>How Eunomia can help</h2>
                    <p>{pos.delivery}</p>
                    <p style={{ marginTop: 16 }}>{pos.difference}</p>
                  </>
                )}
              </article>
              <aside className={styles.priorities}>
                <h3>How an engagement runs</h3>
                <ul>{fw.steps.map((s) => <li key={s.title}><b>{s.title}.</b> {s.body}</li>)}</ul>
              </aside>
            </div>
            {slug === "pharma-compliance-training" && <TrainingLearningExamples />}
            {details && (
              <>
                <div className={styles.delivery}>
                  <article>
                    <h2>What to bring to the first conversation</h2>
                    <p>{details.inputs}</p>
                    <a className={styles.checklist} href={`/contact?service=${encodeURIComponent(page.kicker)}`}>Discuss your requirements <span aria-hidden="true">→</span></a>
                  </article>
                  <aside className={styles.priorities}>
                    <h3>Meet your UK compliance lead</h3>
                    <p>Rashmi Papneja is Eunomia’s founder, Managing Director and UK Compliance Lead. Her published profile describes her work in pharmaceutical compliance, transformation and HCP engagement.</p>
                    <a className={styles.checklist} href="/team#rashmi-papneja">Read Rashmi’s profile <span aria-hidden="true">→</span></a>
                  </aside>
                </div>
                <nav className={styles.related} aria-label="Service resources and related support">
                  <h3>Tools, examples and related support</h3>
                  <div>{details.links.map((link) => <a key={link.href} href={link.href}>{link.label} <span aria-hidden="true">↗</span></a>)}</div>
                </nav>
              </>
            )}
            <nav className={styles.related} aria-label="Related UK compliance services">
              <h3>Explore the support you need</h3>
              <div>
                {others.map((p) => <a key={p.slug} href={`${UK_SERVICE_BASE}/${p.slug}`}>{p.heading} <span aria-hidden="true">↗</span></a>)}
              </div>
            </nav>
            <a className={styles.checklist} href="/resources/checklists/pharma-compliance-readiness-checklist">Use the Pharma Compliance Readiness Checklist <span aria-hidden="true">→</span></a>
          </section>
        }
        detailSection={
          <section className="mandates section-pad" id="rules">
            <div className="mandate-intro">
              <p className="section-kicker">The rules in the UK</p>
              <h2>
                What shapes {page.topic} in the <em>UK</em>…
              </h2>
              <p>{fw.intro} Each summary links to its official source below.</p>
            </div>
            <div className="mandate-list">
              {fw.frameworks.map((f, i) => (
                <article key={f.title}>
                  <span>{ICONS[i % ICONS.length]}</span>
                  <div>
                    <h3>{f.title}</h3>
                    <p>{f.body}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mandate-sources">
              <h3>Primary references</h3>
              <div className="source-links">
                {sources.map((s) => <a key={s.href} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>)}
              </div>
            </div>
            <div className="market-lead-bio">
              <p className="section-kicker">{pos.evidenceLabel}</p>
              <p><a href={pos.href}>{pos.evidenceTitle}</a>. {pos.evidence}</p>
              <p>More reading: {fw.resources.filter((r) => r.href !== UK_SERVICE_BASE).map((r, i, a) => <span key={r.href}><a href={r.href}>{r.label}</a>{i < a.length - 1 ? " · " : ""}</span>)}</p>
            </div>
            <p className="legal-note">
              This overview is informational and does not constitute legal advice.
              Scope and application should be confirmed for the organisation,
              activity and counterparty in question. Sources checked September 2026.
            </p>
          </section>
        }
        faqs={page.faqs}
      />
    </>
  );
}

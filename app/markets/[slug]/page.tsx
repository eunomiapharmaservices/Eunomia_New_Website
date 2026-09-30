import styles from "./market.module.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FileCheck2, Globe2, Scale, ShieldCheck } from "lucide-react";
import { ServiceSubpage } from "../../../components/ServiceSubpage";
import { markets, getMarket } from "../../../data/markets";
import { withSocial } from "../../../lib/seo";

const ICONS = [<ShieldCheck key="a" />, <Scale key="b" />, <Globe2 key="c" />, <FileCheck2 key="d" />];

export function generateStaticParams() {
  return markets.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const market = getMarket(slug);
  if (!market) return {};
  const path = `/markets/${slug}`;
  return withSocial(path, {
    title: market.metaTitle,
    description: market.metaDescription,
    alternates: { canonical: `https://www.eunomiapharmaservices.com${path}` },
  });
}

export default async function MarketPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const market = getMarket(slug);
  if (!market) notFound();

  return (
    <ServiceSubpage
      servicePath={`/markets/${market.slug}`}
      heading={market.title}
      kicker={`Pharmaceutical compliance in ${market.country}`}
      title="Local rules, connected to your global model."
      serviceTitleFirst
      accent="green"
      intro={market.intro}
      serviceImage={{ src: "/market-representation.png", alt: `Compliance specialists discussing ${market.country} market requirements` }}
      services={[
        "Local code interpretation and queries",
        "HCP and patient organisation engagement review",
        "Local transparency and disclosure requirements",
        "Promotional and non-promotional material review",
        "Market-entry compliance assessment",
        ...(market.lead ? ["Responsible person and local representative support"] : ["Specialist and language requirements assessment"]),
      ]}
      outcomes={[
        `${market.country} requirements built into your global processes`,
        market.lead ? "A named local partner for questions and escalation" : "Clear responsibilities for review and escalation",
        "Local support without unnecessary fixed headcount",
      ]}
      lead={market.lead ? { name: market.lead.name, role: market.lead.role, image: market.lead.image } : undefined}
      heroDetail={market.approach && (
        <section className={styles.approach} aria-label={`${market.country} compliance support`}>
          <div className={styles.overview}>
            <article className={styles.audience}>
              <p className={styles.eyebrow}>Local expertise · Global delivery</p>
              <h2>Who this support is for</h2>
              <p>{market.approach.audience}</p>
            </article>
            <article className={styles.challenge}>
              <h2>The practical challenge in {market.country}</h2>
              <p>{market.approach.challenge}</p>
            </article>
          </div>
          <div className={styles.delivery}>
            <article>
              <p className={styles.eyebrow}>From requirements to action</p>
              <h2>How Eunomia can help</h2>
              <p>{market.approach.delivery}</p>
            </article>
            <aside className={styles.priorities}>
              <h3>Your first working priorities</h3>
              <ul>{market.approach.priorities.map(item => <li key={item}>{item}</li>)}</ul>
            </aside>
          </div>
          <nav className={styles.related} aria-label="Related compliance services">
            <h3>Explore the support you need</h3>
            <div>
              <a href="/services/governance-assurance">Programme design and implementation <span aria-hidden="true">↗</span></a>
              <a href="/services/shared-services">Operational shared services <span aria-hidden="true">↗</span></a>
              <a href="/services/automation-of-compliance-operations">Compliance automation <span aria-hidden="true">↗</span></a>
            </div>
          </nav>
          <a className={styles.checklist} href="/resources/checklists/pharma-compliance-readiness-checklist">Use the Pharma Compliance Readiness Checklist <span aria-hidden="true">→</span></a>
        </section>
      )}
      detailSection={
        <section className="mandates section-pad" id="rules">
          <div className="mandate-intro">
            <p className="section-kicker">The rules in {market.country}</p>
            <h2>
              What shapes compliance in <em>{market.country}</em>…
            </h2>
            <p>
              A short guide to the main legal and self-regulatory frameworks.
              Each summary links to its official source below.
            </p>
          </div>
          <div className="mandate-list">
            {market.rules.map((rule, i) => (
              <article key={rule.title}>
                <span>{ICONS[i % ICONS.length]}</span>
                <div>
                  <h3>{rule.title}</h3>
                  <p>{rule.body}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mandate-sources">
            <h3>Primary references</h3>
            <div className="source-links">
              {market.sources.map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
          {market.lead && <div className="market-lead-bio">
            <p className="section-kicker">Your local partner</p>
            <p>{market.lead.bio}</p>
          </div>}
          <p className="legal-note">
            This overview is informational and does not constitute legal advice.
            Scope and application should be confirmed for the organisation,
            market, activity and counterparty in question. Sources checked
            September 2026.
          </p>
        </section>
      }
      faqs={market.faqs}
    />
  );
}

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
      accent="teal"
      intro={market.intro}
      serviceImage={{ src: "/market-representation.png", alt: `Compliance specialists discussing ${market.country} market requirements` }}
      services={[
        "Local code interpretation and queries",
        "HCP and patient organisation engagement review",
        "Local transparency and disclosure requirements",
        "Promotional and non-promotional material review",
        "Market-entry compliance assessment",
        "Responsible person and local representative support",
      ]}
      outcomes={[
        `${market.country} requirements built into your global processes`,
        "A named local partner for questions and escalation",
        "Local support without unnecessary fixed headcount",
      ]}
      lead={{ name: market.lead.name, role: market.lead.role, image: market.lead.image }}
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
          <div className="market-lead-bio">
            <p className="section-kicker">Your local partner</p>
            <p>{market.lead.bio}</p>
          </div>
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

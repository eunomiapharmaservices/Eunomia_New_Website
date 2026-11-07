import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { markets } from "../../data/markets";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { StructuredData } from "../../components/StructuredData";
import { withSocial } from "../../lib/seo";

const base = "https://www.eunomiapharmaservices.com";

export const metadata: Metadata = withSocial("/markets", {
  title: "Pharma Compliance Market Guides | Eunomia",
  description: "Explore country-specific pharmaceutical and biotech compliance guides, including the US, Canada, India and European markets.",
  alternates: { canonical: base + "/markets" },
});

export default function MarketsPage() {
  const items = markets.map((market, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: market.country,
    url: base + "/markets/" + market.slug,
  }));

  return (
    <main className="market-hub">
      <StructuredData data={{ "@context": "https://schema.org", "@type": "ItemList", name: "Pharmaceutical compliance market guides", itemListElement: items }} />
      <SiteHeader />
      <section className="category-hero section-pad">
        <p className="section-kicker">Market guides</p>
        <h1>Pharmaceutical compliance by market</h1>
        <p>Explore practical country guides for pharma and biotech teams. Each guide highlights selected requirements and industry commitments, with links to primary sources and ways to operationalise compliance processes.</p>
        <div className="market-hub-entry">
          <div>
            <strong>Planning to establish or expand in Europe?</strong>
            <span>Explore how Eunomia can help you plan and implement the compliance operating model for your target markets.</span>
          </div>
          <a className="primary-button" href="/entering-europe">Entering the European market <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </section>
      <section className="section-pad market-hub-list" aria-labelledby="market-hub-heading">
        <div className="market-hub-intro">
          <p className="section-kicker">Country-specific information</p>
          <h2 id="market-hub-heading">Choose a market</h2>
          <p>Requirements depend on the products, audiences, activities and commitments involved. Use each guide as a starting point for scoping your own needs.</p>
        </div>
        <div className="market-hub-grid">
          {markets.map((market) => (
            <a className="category-item" key={market.slug} href={"/markets/" + market.slug}>
              <span>Market guide</span>
              <h3>{market.country}</h3>
              <p>{market.intro}</p>
              <b>Explore guide <span aria-hidden="true">→</span></b>
            </a>
          ))}
        </div>
      </section>
      <section className="contact section-pad">
        <p className="section-kicker">Talk to Eunomia</p>
        <h2>Need help translating requirements into day-to-day operations?</h2>
        <p>Discuss your markets, activities and existing processes with our team. We can agree a practical scope and identify where country-specific expertise is needed.</p>
        <a className="primary-button" href="/contact?service=Market%20compliance%20support">Discuss your compliance needs <ArrowUpRight aria-hidden="true" /></a>
      </section>
      <SiteFooter />
    </main>
  );
}

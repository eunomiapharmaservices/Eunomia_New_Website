import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { FAQSchema } from "../../components/FAQSchema";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { StructuredData } from "../../components/StructuredData";
import { markets } from "../../data/markets";
import { withSocial } from "../../lib/seo";

const base = "https://www.eunomiapharmaservices.com";
const pageUrl = base + "/entering-europe";
const faqs = [
  {
    question: "Can Eunomia help us prepare to launch in several European countries?",
    answer: "Yes. Eunomia can help scope target markets and activities, map compliance requirements into an operating plan, and support implementation across review workflows, engagement processes, monitoring and compliance operations. The scope and any local specialist input are agreed for each engagement.",
  },
  {
    question: "Does Eunomia provide legal advice in every European country?",
    answer: "This page does not claim that Eunomia provides legal advice in every country. Where local legal advice, specialist language review or a formal local appointment is required, we identify the need and confirm suitable expertise and scope before delivery.",
  },
  {
    question: "Can one European compliance process cover every country?",
    answer: "A common global framework can provide consistency, but national laws, industry-code commitments, languages and operating requirements vary. Your processes should include country-specific assessments, owners and approval routes.",
  },
  {
    question: "What can Eunomia support after the framework is designed?",
    answer: "Depending on the agreed scope, support can include programme implementation, promotional materials review workflows, outsourced compliance operations, monitoring, reporting processes and automation with appropriate human oversight.",
  },
];

export const metadata: Metadata = withSocial("/entering-europe", {
  title: "European Pharma Compliance Support | Eunomia",
  description: "Entering or expanding in Europe? Eunomia helps pharma and biotech teams plan and implement country-aware compliance programmes and operations.",
  alternates: { canonical: pageUrl },
});

export default function EnteringEuropePage() {
  return (
    <main className="europe-entry-page">
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": pageUrl + "#service",
        name: "European market entry compliance support",
        description: "Compliance programme planning and operational support for pharmaceutical and biotechnology companies entering or expanding in European markets.",
        url: pageUrl,
        provider: { "@id": base + "/#organization" },
      }} />
      <FAQSchema faqs={faqs} />
      <SiteHeader />
      <section className="europe-entry-hero section-pad">
        <p className="section-kicker">For pharma and biotech teams outside Europe</p>
        <h1>Entering Europe? Build your healthcare compliance model before launch.</h1>
        <p className="europe-entry-lede">A European launch can involve several national laws, industry codes, languages and operating expectations. Eunomia helps teams plan the framework and put practical compliance processes into operation across their selected markets.</p>
        <a className="primary-button" href="/contact?service=European%20market%20entry%20compliance%20support">Discuss your European expansion <ArrowUpRight aria-hidden="true" /></a>
        <p className="europe-entry-note">Eunomia is headquartered in the UK and supports international pharma and biotech teams. Local representation, legal advice and other formal country roles are scoped and confirmed separately where applicable.</p>
      </section>

      <section className="section-pad europe-entry-offer" aria-labelledby="europe-support-heading">
        <div className="europe-entry-heading">
          <p className="section-kicker">From plans to operating processes</p>
          <h2 id="europe-support-heading">Support for the work behind a compliant launch</h2>
          <p>Start with your target countries, products, planned activities and current compliance set-up. Then agree the priorities and delivery model that fit your organisation.</p>
        </div>
        <div className="europe-entry-cards">
          <article><span>01</span><h3>Map markets and responsibilities</h3><p>Structure a market-readiness assessment, identify where country requirements differ, and clarify owners across global, regional and local teams.</p></article>
          <article><span>02</span><h3>Implement the programme</h3><p>Translate policies and commitments into practical SOPs, training, approval routes, escalation responsibilities and retained evidence.</p></article>
          <article><span>03</span><h3>Review promotional materials</h3><p>Set up a workable review and approval process for the materials, channels and languages in scope, with clear hand-offs and version control.</p></article>
          <article><span>04</span><h3>Run and improve operations</h3><p>Add agreed compliance capacity for operational activities, monitoring and reporting, and use automation where appropriate with human oversight.</p></article>
        </div>
      </section>

      <section className="section-pad europe-entry-steps">
        <div>
          <p className="section-kicker">A practical starting point</p>
          <h2>Agree the work around your launch plan</h2>
          <p>We can begin with a defined set of target countries and planned activities, then agree whether you need a focused assessment, implementation support or ongoing operational capacity.</p>
        </div>
        <ol>
          <li><b>Define the launch scope</b><span>Countries, products, audiences, channels, partners and planned HCP or organisation interactions.</span></li>
          <li><b>Identify requirements and gaps</b><span>Separate shared global controls from national legal requirements and relevant industry-code commitments.</span></li>
          <li><b>Build the operating model</b><span>Set owners, review routes, documentation, monitoring and escalation into the relevant workflows.</span></li>
          <li><b>Confirm country-specific expertise</b><span>Where local legal advice, language support or formal roles are required, confirm qualified resources and scope before they are undertaken.</span></li>
        </ol>
      </section>

      <section className="section-pad europe-entry-markets" aria-labelledby="europe-markets-heading">
        <div>
          <p className="section-kicker">Start with your priority countries</p>
          <h2 id="europe-markets-heading">Explore selected European market guides</h2>
          <p>These guides are a starting point for market scoping. They do not replace advice on your products or planned activities.</p>
        </div>
        <ul>
          {markets.filter((market) => ["ireland", "sweden", "germany", "france", "portugal", "spain", "italy", "netherlands"].includes(market.slug)).map((market) => (
            <li key={market.slug}><a href={"/markets/" + market.slug}>{market.country} <ArrowRight aria-hidden="true" /></a></li>
          ))}
        </ul>
      </section>

      <section className="section-pad europe-entry-faq">
        <div><p className="section-kicker">Frequently asked questions</p><h2>European market entry support</h2></div>
        <div className="faq-list">
          {faqs.map(({ question, answer }) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
        </div>
      </section>

      <section className="contact section-pad">
        <p className="section-kicker">Plan your European expansion</p>
        <h2>Build a compliance operating model that fits your launch.</h2>
        <p>Tell us which countries you are considering and what activities you expect to run. We can discuss a practical starting scope with you.</p>
        <a className="primary-button" href="/contact?service=European%20market%20entry%20compliance%20support">Start a conversation <ArrowUpRight aria-hidden="true" /></a>
      </section>
      <SiteFooter />
    </main>
  );
}

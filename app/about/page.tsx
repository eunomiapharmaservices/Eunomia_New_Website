import { PageFaqs } from "../../components/PageFaqs";
import { aboutFaqs } from "../../data/page-faqs";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { withSocial } from "../../lib/seo";
import { SiteHeader, SiteFooter } from "../../components/SiteChrome";
import { compliancePartners } from "../../data/compliancePartners";

export const metadata: Metadata = withSocial("/about", {
  title: "About Eunomia | Global Healthcare Compliance Experts",
  description:
    "Meet Eunomia Pharma Services, a boutique team supporting pharmaceutical and biotech companies with global healthcare compliance and automation.",
  alternates: { canonical: "https://www.eunomiapharmaservices.com/about" },
});

const founder = compliancePartners.find((p) => p.name === "Rashmi Papneja");

const values = [
  ["Global reach, local expertise", "Healthcare compliance services across borders, built for the complexities of international pharma."],
  ["Deep pharma industry knowledge", "Compliance officers with significant, hands-on pharmaceutical experience — not generalists."],
  ["Tech-native compliance", "AI and automation fluency that turns frameworks into operational reality, fast."],
  ["Delivery you can depend on", "Proven project management across Agile, PRINCE2 and leading PM tools — because compliance without execution is just paperwork."],
];

const services = [
  ["/services/governance-assurance", "Healthcare Compliance Programme Design and Implementation", "Frameworks, controls, audit readiness and implementation"],
  ["/services/automation-of-compliance-operations", "Automation of Compliance Operations", "SharePoint, Power BI and AI automation"],
  ["/services/local-legal-mandates", "Local Legal Mandates and Representation", "In-market presence and local-code support"],
  ["/services/shared-services", "Shared Services / GBS / GCC", "A named compliance function, shaped around the work"],
];

export default function About() {
  return (
    <main>
      <SiteHeader />
      <section className="inner-hero about-hero">
        <div>
          <p className="section-kicker">About Eunomia</p>
          <h1>A small team.<br /><em>Close to the work…</em></h1>
          <p>Healthcare compliance practitioners working with the judgement behind the process.</p>
        </div>
      </section>

      <section className="about-story section-pad">
        <div>
          <p className="section-kicker">A word about trust</p>
          <h2>The judgement call and the <em>evidence trail</em>…</h2>
        </div>
        <div>
          <p>Eunomia works with pharmaceutical and biotech companies through a small, accountable team. Industry experience, local market context and technology sit within the same delivery model.</p>
          <p>We don&apos;t just build the commercial compliance framework, we operationalise it for you. We use automation to strengthen consistency, visibility and evidence, not to replace the experienced judgement your business depends on.</p>
        </div>
      </section>

      <section className="about-proof section-pad" aria-label="Eunomia in numbers">
        <div><b>20+</b><span>companies we work with</span></div>
        <div><b>30</b><span>countries covered globally</span></div>
        <div><b>4.9</b><span><a href="https://clutch.co/profile/eunomia-pharma-services#reviews" target="_blank" rel="noreferrer">verified review rating on Clutch</a></span></div>
      </section>

      {founder && (
        <section className="about-founder section-pad">
          <img src="/team-rashmi.jpeg" alt="Rashmi Papneja, founder and Managing Director of Eunomia Pharma Services" />
          <div>
            <p className="section-kicker">Our founder</p>
            <h2>{founder.name}</h2>
            {founder.bio.split("\n\n").map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>
        </section>
      )}

      <section className="about-values section-pad">
        <div>
          <p className="section-kicker">Why Eunomia</p>
          <h2>How we <em>work</em>…</h2>
        </div>
        <div className="about-values-list">
          {values.map(([title, body]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <figure className="wide-photo">
        <img src="/compliance-collaboration.png" alt="Eunomia compliance team collaborating in an office" />
        <figcaption>The people introduced to the work remain close to it.</figcaption>
      </figure>

      <section className="about-services section-pad">
        <div>
          <p className="section-kicker">What we do</p>
          <h2>Four services. One connected <em>compliance model</em>…</h2>
        </div>
        <div className="about-services-list">
          {services.map(([href, name, summary]) => (
            <a key={href} href={href}>
              <strong>{name}</strong>
              <span>{summary}</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      <section className="people section-pad">
        <div>
          <p className="section-kicker">The team</p>
          <h2>The people behind the <em>work</em>…</h2>
        </div>
        <div className="people-list">
          <span><b>Rashmi Papneja</b>Founder &amp; governance lead</span>
          <span><b>Agyat Suri</b>Healthcare compliance operations</span>
          <span><b>Sulabh Mahant</b>IT &amp; systems lead</span>
          <span><b>Market leads</b>UK · France · DACH · other markets</span>
        </div>
        <p className="about-team-link"><a href="/team">Meet the full team <ArrowUpRight aria-hidden="true" /></a></p>
      </section>
      <PageFaqs faqs={aboutFaqs} title="About Eunomia: your questions answered" />
      <SiteFooter />
    </main>
  );
}

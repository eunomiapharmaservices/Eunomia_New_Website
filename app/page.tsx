import { headers } from "next/headers";
import { LanguageSuggestion } from "../components/LanguageSuggestion";
import { isLocale, type Locale } from "../data/i18n/locales";
import { CompanyBrief, HomeCaseStudies, HomeAudience, HomeFAQs } from "../components/HomeContent";
import { markets } from "../data/markets";
import { SiteImage } from "../components/SiteImage";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { PrimaryNav } from "../components/SiteChrome";
import type { Metadata } from "next";
import { withSocial } from "../lib/seo";
import { SiteFooter } from "../components/SiteChrome";
import { CoverageMap } from "../components/CoverageMap";

export const metadata: Metadata = withSocial("/", {
  alternates: { canonical: "https://www.eunomiapharmaservices.com/" },
  title: "UK & Global Pharmaceutical Compliance Services | Eunomia",
  description: "UK-based pharmaceutical compliance support with global reach. Programme design, operational automation, local representation and outsourced compliance services.",
});

const services = [
  {
    title: "Healthcare Compliance Programme Design and Implementation",
    href: "/services/governance-assurance",
    outcome: "Build practical policies, clear ownership and controls your teams can use.",
  },
  {
    title: "Automation of Compliance Operations",
    href: "/services/automation-of-compliance-operations",
    outcome: "Connect workflows, reporting and evidence with accountable human oversight.",
  },
  {
    title: "Local Legal Mandates and Representation",
    href: "/services/local-legal-mandates",
    outcome: "Connect country-level requirements with your global operating model.",
  },
  {
    title: "Shared Services / GBS / GCC",
    href: "/services/shared-services",
    outcome: "Add specialist capacity for reviews, HCP engagements and disclosures.",
  },
];

const clientCompanies = [
  { name: "JCR Pharmaceuticals", logo: "/client-logos/jcr-provided.png" },
  { name: "ROVI", logo: "/client-logos/rovi-provided.png" },
  { name: "HIPRA", logo: "/client-logos/hipra-provided.png" },
  { name: "Essential Pharma", logo: "/client-logos/essential-pharma-provided.png" },
  { name: "axunio", logo: "/client-logos/axunio-provided.png" },
  { name: "Mereo BioPharma", logo: "/client-logos/mereo-biopharma-provided.png" },
  { name: "Prime Global", logo: "/client-logos/prime-global-provided.png" },
  { name: "Roche", logo: "/client-logos/roche-provided.png" },
  { name: "Biophytis", logo: "/client-logos/biophytis-provided.png" },
  { name: "Khondrion", logo: "/client-logos/khondrion-provided.png" },
  { name: "myTomorrows", logo: "/client-logos/mytomorrows-provided.png" },
];

const ClutchBrand = () => (
  <span className="clutch-brand" aria-label="Clutch">
    <span className="clutch-symbol" aria-hidden="true">
      C
    </span>
    <b>Clutch</b>
  </span>
);

export default async function Home() {
  const requestHeaders = await headers();
  const suggestionCandidate = requestHeaders.get("x-eps-locale-suggestion");
  const suggestion =
    suggestionCandidate && isLocale(suggestionCandidate) && suggestionCandidate !== "en"
      ? (suggestionCandidate as Exclude<Locale, "en">)
      : null;
  return (
    <main>
      <LanguageSuggestion locale={suggestion} />
      <header className="site-header">
        <a
          className="wordmark"
          href="#top"
          aria-label="Eunomia Pharma Services home"
        >
          <SiteImage src="/eunomia-logo.webp" sizes="(max-width: 650px) 183px, (max-width: 1050px) 230px, 260px" loading="eager" alt="Eunomia Pharma Services" />
        </a>
        <PrimaryNav />
      </header>

      <section className="hero" id="top">
        <div className="hero-media"><SiteImage src="/home-compliance-team.jpeg" alt="Compliance specialists reviewing documents together" fill preload fetchPriority="high" sizes="(max-width: 900px) 100vw, 38vw" /></div>
        <div className="hero-copy">
          <p className="home-location-line">Headquartered in the UK with global coverage</p>
          <h1>
            <span className="hero-title-green">Global Healthcare Compliance Services</span>{" "}<span className="hero-title-orange">powered by Automation</span>
          </h1>
          <p className="hero-lede">We don’t just build the commercial compliance framework, <strong>we operationalise it for you.</strong></p>
          <p className="home-hero-description">We support pharma and biotech teams with programme design, daily compliance operations, local-market expertise and automation. Our work connects ABPI and EFPIA Code support with practical processes, clear responsibilities and experienced human judgement.</p>
          <div className="hero-actions"><a className="primary-button" href="/contact">Discuss your compliance needs <ArrowUpRight aria-hidden="true" /></a><a className="home-secondary-cta" href="#services">Explore our services →</a></div>
        </div>
        <div className="hero-signal" aria-label="Eunomia delivery model">
          <span>Expert-led</span>
          <span>Tech-enabled</span>
          <span>Globally connected</span>
        </div>
      </section>

      <section className="impact-metrics" aria-label="Eunomia at a glance">
        <div className="impact-grid">
          <article>
            <strong>20+</strong>
            <span>companies we work with</span>
          </article>
          <article>
            <strong>30</strong>
            <span>countries covered globally</span>
          </article>
          <article>
            <strong>12</strong>
            <span>named local compliance partners</span>
          </article>
          <a
            className="clutch-metric"
            href="https://clutch.co/profile/eunomia-pharma-services#reviews"
            target="_blank"
            rel="noreferrer"
          >
            <ClutchBrand />
            <strong>4.9</strong>
            <span>verified review rating</span>
          </a>
        </div>
      </section>

      <CompanyBrief />

      <section className="home-service-summary section-pad" id="services" aria-labelledby="home-services-title">
        <h2 id="home-services-title"><span>End-to-end</span> Compliance Solutions</h2>
        <ul className="home-service-summary-row">
          {services.map((service) => (
            <li key={service.title}>
              <a href={service.href}><strong>{service.title}</strong><span className="home-service-outcome">{service.outcome}</span><span className="home-service-cta">Explore this service <ArrowUpRight aria-hidden="true" /></span></a>
            </li>
          ))}
        </ul>
      </section>

      <section className="trust section-pad">
        <p className="section-kicker">Why Eunomia</p>
        <div className="value-register">
          {[
            [
              "Global reach, local expertise",
              "Healthcare compliance services across borders, built for the complexities of international pharma.",
            ],
            [
              "Deep pharma industry knowledge",
              "Compliance officers with significant, hands-on pharmaceutical experience — not generalists.",
            ],
            [
              "Tech-native compliance",
              "AI and automation fluency that turns frameworks into operational reality, fast.",
            ],
            [
              "Delivery you can depend on",
              "Proven project management across Agile, PRINCE2 and leading PM tools — because compliance without execution is just paperwork.",
            ],
            [
              "Shared Services / GBS / GCC",
              "Structures designed to grow with you — cost-efficient, compliance-ready and built to flex.",
            ],
          ].map(([title, body]) => (
            <article className="value-row" key={title}>
              <span aria-hidden="true">
                <Check />
              </span>
              <h2>{title}</h2>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="client-logos section-pad"
        aria-labelledby="client-logos-title"
      >
        <div className="client-logos-heading">
          <p className="section-kicker">Trusted relationships</p>
          <h2 id="client-logos-title">
            Supporting pharmaceutical industry across the globe
          </h2>
        </div>
        <div className="client-logo-marquee" aria-label="Client companies">
          <div className="client-logo-track">
            {[false, true].map((duplicate) => (
              <div
                className="client-logo-group"
                aria-hidden={duplicate || undefined}
                key={duplicate ? "duplicate" : "primary"}
              >
                {clientCompanies.map((company) => (
                  <article
                    className="client-logo-card"
                    key={`${duplicate ? "duplicate-" : ""}${company.name}`}
                  >
                    <SiteImage
                      src={company.logo}
                      sizes="(max-width: 600px) 212px, 306px"
                      alt={duplicate ? "" : `${company.name} logo`}
                      loading="lazy"
                    />
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reviews section-pad home-client-reviews">
        <div className="review-heading">
          <p className="section-kicker">Verified client feedback</p>
          <h2>
            Responsive, strategic and <em>pragmatic</em>…
          </h2>
          <p>
            Independent reviews from pharmaceutical leaders on <ClutchBrand />.
          </p>
        </div>
        <div className="review-grid">
          <blockquote>
            <span>“</span>
            <p>Rashmi and the team are very attentive and strategic.</p>
            <footer>
              <b>Global Head of Medical Affairs</b>Pharmaceutical company · Anonymous on Clutch
            </footer>
          </blockquote>
          <blockquote>
            <span>“</span>
            <p>
              Eunomia’s project management is extremely responsive,
              collaborative, and pragmatic.
            </p>
            <footer>
              <b>Senior Director of Compliance</b>Pharmaceutical company · Anonymous on Clutch
            </footer>
          </blockquote>
          <blockquote>
            <span>“</span>
            <p>The deliverables exceeded expectations.</p>
            <footer>
              <b>R Garella · Co-Founder</b>Pharmaceutical company · Verified on Clutch
            </footer>
          </blockquote>
        </div>
        <a
          className="review-link clutch-link"
          href="https://clutch.co/profile/eunomia-pharma-services#reviews"
          target="_blank"
          rel="noreferrer"
        >
          <ClutchBrand /> <span>Read the independent reviews</span>{" "}
          <ArrowUpRight />
        </a>
      </section>

      <HomeCaseStudies />
      <HomeAudience />

      <section className="start section-pad">
        <p className="section-kicker">Start here</p>
        <h2>
          Which of these is <em>you</em>?
        </h2>
        <div className="start-grid">
          <div className="start-card"><a className="start-card-primary" href="/services/shared-services">
            <span>01</span>
            <h3>We don’t have a compliance function yet</h3>
            <p>
              You’re commercialising, and the first inspection question would be
              hard to answer.
            </p>
            <b>
              Explore shared services <ArrowRight />
            </b>
          </a><a className="start-card-email" href="mailto:hello@eunomiapharmaservices.com?subject=Building%20our%20first%20compliance%20function">Email us about this →</a></div>
          <div className="start-card"><a className="start-card-primary" href="/services/shared-services">
            <span>02</span>
            <h3>We have one compliance manager, and they’re at capacity</h3>
            <p>The work exists. The hours don’t.</p>
            <b>
              Add operational capacity <ArrowRight />
            </b>
          </a><a className="start-card-email" href="mailto:hello@eunomiapharmaservices.com?subject=Compliance%20capacity%20support">Email us about this →</a></div>
          <div className="start-card"><a className="start-card-primary" href="/services/local-legal-mandates">
            <span>03</span>
            <h3>We’re entering a market we don’t have people in</h3>
            <p>Someone local has to be answerable to the code.</p>
            <b>
              Explore local representation <ArrowRight />
            </b>
          </a><a className="start-card-email" href="mailto:hello@eunomiapharmaservices.com?subject=Local%20representation">Email us about this →</a></div>
          <div className="start-card"><a className="start-card-primary" href="/services/governance-assurance">
            <span>04</span>
            <h3>We are building our compliance framework from scratch</h3>
            <p>
              We need a practical framework, clear ownership and an evidence
              trail that will stand up to scrutiny.
            </p>
            <b>
              Explore program design &amp; audit readiness <ArrowRight />
            </b>
          </a></div>
        </div>
      </section>

      <section className="image-story">
        <SiteImage
          src="/home-hero-consultation.jpeg"
          sizes="(max-width: 900px) 100vw, 60vw"
          alt="Eunomia specialists collaborating on a compliance project"
        />
        <div>
          <p className="section-kicker">Judgement, enabled by technology</p>
          <h2>Human expertise stays at the centre.</h2>
          <p>
            We use automation to strengthen consistency, visibility and
            evidence—not to replace the experienced judgement your business
            depends on.
          </p>
        </div>
      </section>

      <section
        className="coverage section-pad"
        aria-labelledby="coverage-title"
      >
        <div className="coverage-copy">
          <p className="section-kicker">Coverage</p>
          <h2 id="coverage-title">
            Global reach.
            <br />
            <em>Local context.</em>
          </h2>
          <p>
            A connected network of compliance expertise across established and
            emerging life-sciences markets.
          </p>
        </div>
        <CoverageMap />
        <div className="home-market-links" aria-label="Country compliance guides"><h3>Explore our country guides</h3>{markets.map((market) => <a key={market.slug} href={`/markets/${market.slug}`}>{market.country} compliance support →</a>)}</div>
      </section>

      <section className="people section-pad">
        <div>
          <p className="section-kicker">
            The people you would actually work with
          </p>
          <h2>No resourcing pool. No rotating analyst.</h2>
        </div>
        <div className="people-list people-list-cta">
          <a className="people-all" href="/team">
            <b>Click here to meet the Team</b>
            Meet the specialists behind Eunomia’s work <ArrowUpRight />
          </a>
        </div>
      </section>

      <HomeFAQs />
      <SiteFooter />
    </main>
  );
}

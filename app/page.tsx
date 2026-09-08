import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  MapPinned,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { PrimaryNav } from "../components/SiteChrome";
import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteChrome";
import { CoverageMap } from "../components/CoverageMap";

export const metadata: Metadata = {
  title: "Eunomia Pharma Services | Healthcare compliance, globally",
  description:
    "Healthcare compliance programme design and implementation, automation of compliance operations, local legal representation and shared services for pharmaceutical and biotech companies.",
};

const services = [
  {
    number: "01",
    title: "Healthcare Compliance Programme Design and Implementation",
    line: "A practical programme, built to work day to day.",
    body: "Frameworks, policies, controls, training, audit readiness and implementation connected through one evidence trail.",
    href: "/services/governance-assurance",
    icon: <ShieldCheck aria-hidden="true" />,
  },
  {
    number: "02",
    title: "Automation of Compliance Operations",
    line: "Technical build, project delivery and compliance expertise.",
    body: "SharePoint, Power BI and AI automation designed around compliant workflows, accountable review and practical deployment.",
    href: "/services/automation-of-compliance-operations",
    icon: <Bot aria-hidden="true" />,
  },
  {
    number: "03",
    title: "Local Legal Mandates and Representation",
    line: "In-market presence without unnecessary headcount.",
    body: "Named local support, code interpretation, association liaison and cross-border compliance review.",
    href: "/services/local-legal-mandates",
    icon: <MapPinned aria-hidden="true" />,
  },
  {
    number: "04",
    title: "Shared Services / GBS / GCC",
    line: "A named compliance team, shaped around the work.",
    body: "Operational capacity across materials, activities, HCP engagement, fair market value and transparency reporting.",
    href: "/services/shared-services",
    icon: <UsersRound aria-hidden="true" />,
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

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a
          className="wordmark"
          href="#top"
          aria-label="Eunomia Pharma Services home"
        >
          <img src="/eunomia-logo.webp" alt="Eunomia Pharma Services" />
        </a>
        <PrimaryNav />
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <h1>
            Global Healthcare Compliance for the Pharmaceutical and Biotech Industry
          </h1>
          <ul className="hero-points" aria-label="Our approach">
            <li>Powered by life sciences compliance expertise</li>
            <li>No bloated retainers</li>
            <li>No one size fits all</li>
          </ul>
          <div className="hero-actions">
            <a className="primary-button" href="/contact">
              Let’s talk… <ArrowUpRight />
            </a>
            <a className="text-link" href="/services">
              What we do… <ArrowDownRight />
            </a>
          </div>
          <p className="hero-reassurance">
            No obligation and no pressure. Tell us what’s on your desk and we’ll
            say whether we can help.
          </p>
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
                    <img
                      src={company.logo}
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
              <b>Global Head of Medical Affairs</b>Pharmaceutical company ·
              Verified review
            </footer>
          </blockquote>
          <blockquote>
            <span>“</span>
            <p>
              Eunomia’s project management is extremely responsive,
              collaborative, and pragmatic.
            </p>
            <footer>
              <b>Senior Director of Compliance</b>Pharmaceutical company ·
              Verified review
            </footer>
          </blockquote>
          <blockquote>
            <span>“</span>
            <p>The deliverables exceeded expectations.</p>
            <footer>
              <b>Co-Founder</b>Pharmaceutical company · Verified review
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

      <section className="services section-pad" id="services">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Integrated compliance services</p>
            <h2>
              From one decision to a complete <em>operating model.</em>
            </h2>
          </div>
          <p>
            Engage Eunomia for a defined question, a fixed project, a
            centralised process or a full shared service—without losing
            ownership or visibility.
          </p>
        </div>
        <div className="service-hub-grid home-service-hub">
          {services.map((service) => (
            <a
              href={service.href}
              className="service-hub-card"
              key={service.title}
            >
              <span>{service.number}</span>
              <span className="service-hub-icon">{service.icon}</span>
              <div>
                <p className="section-kicker">{service.title}</p>
                <h2>{service.line}</h2>
                <p>{service.body}</p>
              </div>
              <b>
                Explore service <ArrowUpRight />
              </b>
            </a>
          ))}
        </div>
      </section>

      <section className="start section-pad">
        <p className="section-kicker">Start here</p>
        <h2>
          Which of these is <em>you</em>?
        </h2>
        <div className="start-grid">
          <a href="mailto:hello@eunomiapharmaservices.com?subject=Building%20our%20first%20compliance%20function">
            <span>01</span>
            <h3>We don’t have a compliance function yet</h3>
            <p>
              You’re commercialising, and the first inspection question would be
              hard to answer.
            </p>
            <b>
              Explore shared services <ArrowRight />
            </b>
          </a>
          <a href="mailto:hello@eunomiapharmaservices.com?subject=Compliance%20capacity%20support">
            <span>02</span>
            <h3>We have one compliance manager, and they’re at capacity</h3>
            <p>The work exists. The hours don’t.</p>
            <b>
              Add operational capacity <ArrowRight />
            </b>
          </a>
          <a href="mailto:hello@eunomiapharmaservices.com?subject=Local%20representation">
            <span>03</span>
            <h3>We’re entering a market we don’t have people in</h3>
            <p>Someone local has to be answerable to the code.</p>
            <b>
              Explore local representation <ArrowRight />
            </b>
          </a>
          <a href="/services/governance-assurance">
            <span>04</span>
            <h3>We are building our compliance framework from scratch</h3>
            <p>
              We need a practical framework, clear ownership and an evidence
              trail that will stand up to scrutiny.
            </p>
            <b>
              Explore program design &amp; audit readiness <ArrowRight />
            </b>
          </a>
        </div>
      </section>

      <section className="image-story">
        <img
          src="/home-hero-consultation.jpeg"
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

      <SiteFooter />
    </main>
  );
}

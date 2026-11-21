import { ServicesOverviewVideo } from "../../../components/ServicesOverviewVideo";
import { StructuredData } from "../../../components/StructuredData";
import styles from "./ServicesHero.module.css";
import { ComplianceDecisionGuide } from "../../../components/ComplianceDecisionGuide";
import { PageFaqs } from "../../../components/PageFaqs";
import { servicesFaqs } from "../../../data/page-faqs";
import type { Metadata } from "next";
import { languageAlternates } from "../../../data/i18n/locales";
import { withSocial } from "../../../lib/seo";
import { ArrowUpRight, Bot, MapPinned, ShieldCheck, UsersRound } from "lucide-react";
import { SiteHeader, SiteFooter } from "../../../components/SiteChrome";
export const metadata: Metadata = withSocial("/services", {
  alternates: { canonical: "https://www.eunomiapharmaservices.com/services", languages: languageAlternates("/services") },
  title: "Pharma Compliance Services UK & Europe | Eunomia",
  description: "Pharma and biotech compliance support in the UK and Europe: programme design, automation, local legal representation and outsourced operations.",
});
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
export default function Services() {
  return (
    <main>
      <SiteHeader />
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: "Eunomia healthcare compliance services overview",
        description: "An introduction to Eunomia Pharma Services and its healthcare compliance support for pharmaceutical and biotechnology companies.",
        thumbnailUrl: "https://www.eunomiapharmaservices.com/videos/eunomia-services-overview-closeup-poster.jpg",
        contentUrl: "https://www.eunomiapharmaservices.com/videos/eunomia-services-overview-closeup.mp4",
        uploadDate: "2026-11-21T11:00:00Z",
        duration: "PT44.2S",
        inLanguage: "en",
      }} />
      <section className={`services-overview section-pad ${styles.hero}`}>
        <div className={`services-overview-copy ${styles.copy}`}>
          <p className="breadcrumb">
            <a href="/">Home</a> / Services
          </p>
          <p className="section-kicker">Our services</p>
          <h1>Four services. One connected compliance model.</h1>
          <p className={styles.intro}>
            Pharma compliance services and healthcare compliance consulting for
            pharmaceutical and biotech companies in the UK and Europe. Each
            service has its own scope, delivery team and guidance. Use one
            independently or connect them as your organisation grows across
            markets.
          </p>
          <div className={styles.actions}>
            <a className="primary-button" href="#service-options">Explore our services <ArrowUpRight aria-hidden="true" /></a>
            <a className={styles.secondary} href="/contact">Talk to our team</a>
          </div>
        </div>
        <ServicesOverviewVideo />
      </section>
        <nav className={styles.index} aria-label="Services">
          {services.map((service) => (
            <a href={service.href} key={service.title}>
              {service.title}
            </a>
          ))}
          <a href="/services/promotional-materials-review">Outsourced promotional review and copy approval</a>
          <a href="#approach">How we deliver</a>
        </nav>
      <section className="service-hub-grid section-pad" id="service-options">
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
      </section>
      <section className="approach" id="approach">
        <div className="approach-image">
          <img
            src="/eunomia-team.webp"
            alt="Eunomia compliance specialists working together"
          />
        </div>
        <div className="approach-copy">
          <p className="section-kicker">How we deliver</p>
          <h2>The commercial model is your choice.</h2>
          <ol>
            <li>
              <b>Advisory</b>
              <span>
                You keep the function. We advise on defined questions and
                decisions.
              </span>
            </li>
            <li>
              <b>Project</b>
              <span>A fixed scope with a clear start, end and outcome.</span>
            </li>
            <li>
              <b>Centralised function</b>
              <span>One process, run consistently across your markets.</span>
            </li>
            <li>
              <b>Full shared service</b>
              <span>
                A named team operating to your SOPs, systems and timelines.
              </span>
            </li>
          </ol>
        </div>
      </section>
      <section className="section-pad uk-related" aria-labelledby="promotional-review-service">
        <p className="section-kicker">Specialist shared-service support</p>
        <h2 id="promotional-review-service">Outsourced promotional materials review and copy approval</h2>
        <p>Specialist review capacity, approval workflows, SOPs and reporting for UK and European pharmaceutical teams, with clear reviewer and signatory responsibilities.</p>
        <p><a href="/services/promotional-materials-review">Explore promotional review support →</a></p>
      </section>
      <ComplianceDecisionGuide page="services" />
      <PageFaqs faqs={servicesFaqs} title="Choosing the right service" />
      <SiteFooter />
    </main>
  );
}

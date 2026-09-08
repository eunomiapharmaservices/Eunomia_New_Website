import type { Metadata } from "next";
import { ArrowUpRight, Bot, MapPinned, ShieldCheck, UsersRound } from "lucide-react";
import { SiteHeader, SiteFooter } from "../../components/SiteChrome";
export const metadata: Metadata = {
  title:
    "Compliance services for pharma — programme design, automation, local representation and shared services | Eunomia",
  description:
    "Four healthcare compliance services for pharmaceutical and biotech companies: healthcare compliance programme design and implementation, automation of compliance operations, local legal mandates and representation, and Shared Services / GBS / GCC.",
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
export default function Services() {
  return (
    <main>
      <SiteHeader />
      <section className="services-overview section-pad">
        <div className="services-overview-copy">
          <p className="breadcrumb">
            <a href="/">Home</a> / Services
          </p>
          <p className="section-kicker">Our services</p>
          <h1>Four services. One connected compliance model.</h1>
          <p>
            Each service has its own scope, delivery team and guidance. Use one
            independently or connect them as your organisation grows across
            markets.
          </p>
        </div>
        <nav className="page-index" aria-label="Services">
          {services.map((service) => (
            <a href={service.href} key={service.title}>
              {service.title}
            </a>
          ))}
          <a href="#approach">How we deliver</a>
        </nav>
      </section>
      <section className="service-hub-grid section-pad">
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
            src="/eunomia-team.png"
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
      <SiteFooter />
    </main>
  );
}

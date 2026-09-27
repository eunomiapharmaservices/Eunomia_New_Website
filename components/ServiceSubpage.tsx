import { StructuredData } from "./StructuredData";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { SiteHeader, SiteFooter } from "./SiteChrome";
type FAQ = { question: string; answer: string };
type Props = {
  servicePath: string;
  heading?: string;
  kicker: string;
  title: string;
  subtitle?: string;
  intro: string;
  services: string[];
  outcomes: string[];
  faqs: FAQ[];
  accent?: string;
  lead?: { name: string; role: string; image: string };
  serviceImage?: { src: string; alt: string };
  video?: { src: string; poster: string; captions?: string };
  heroDetail?: ReactNode;
  detailSection?: ReactNode;
  hideScope?: boolean;
  serviceTitleFirst?: boolean;
};
export function ServiceSubpage({
  servicePath,
  heading,
  kicker,
  title,
  subtitle,
  intro,
  services,
  outcomes,
  faqs,
  accent = "green",
  lead,
  video,
  serviceImage = { src: "/compliance-collaboration.png", alt: "Compliance specialists reviewing documents together" },
  heroDetail,
  detailSection,
  hideScope = false,
  serviceTitleFirst = false,
}: Props) {
  return (
    <main className={`service-subpage ${accent}`}>
      <StructuredData data={{ "@context": "https://schema.org", "@type": "Service", "@id": `https://www.eunomiapharmaservices.com${servicePath}#service`, name: kicker, description: intro, url: `https://www.eunomiapharmaservices.com${servicePath}`, provider: { "@id": "https://www.eunomiapharmaservices.com/#organization" } }} />
      <SiteHeader />
      <section className="subservice-hero section-pad">
        <a href="/services" className="back-link">
          <ArrowLeft />
          All services
        </a>
        {serviceTitleFirst ? (
          <>
            <h1 className="subservice-primary-title">{heading || kicker}</h1>
            <h2 className="subservice-tagline">{title}</h2>
          </>
        ) : (
          <>
            <p className="section-kicker">{kicker}</p>
            <h1>{title}</h1>
          </>
        )}
        {subtitle && <h2 className="subservice-hero-subtitle">{subtitle}</h2>}
        <p>{intro}</p>
        <a
          className="primary-button"
          href={`/contact?service=${encodeURIComponent(kicker)}`}
        >
          Discuss this service <ArrowUpRight />
        </a>
      </section>
      <section className="service-video section-pad" aria-label={`${kicker} ${video ? "video" : "overview"}`}>
        {video ? (
          <video
            controls
            playsInline
            preload="metadata"
            poster={video.poster}
            aria-label={kicker}
            style={{ display: "block", width: "100%", maxWidth: 960, margin: "0 auto", borderRadius: 16 }}
          >
            <source src={video.src} type="video/mp4" />
            {video.captions ? <track kind="captions" src={video.captions} srcLang="en" label="English" /> : null}
            Your browser does not support video. <a href={video.src}>Download the video</a>.
          </video>
        ) : (
          <img
            src={serviceImage.src}
            alt={serviceImage.alt}
            style={{ display: "block", width: "100%", maxWidth: 960, height: "auto", margin: "0 auto", borderRadius: 16 }}
          />
        )}
      </section>
      {heroDetail}
      {!hideScope && (
        <section className="subservice-scope section-pad">
          <div>
            <p className="section-kicker">What we can take on</p>
            <h2>{kicker}: scope of support</h2>
          </div>
          <div className="scope-list">
            {services.map((service, i) => (
              <article key={service}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{service}</h3>
              </article>
            ))}
          </div>
        </section>
      )}
      <section className="subservice-outcomes section-pad">
        <p className="section-kicker">What this gives you</p>
        <div>
          {outcomes.map((outcome) => (
            <p key={outcome}>
              <Check />
              {outcome}
            </p>
          ))}
        </div>
      </section>
      {detailSection}
      {lead && (
        <section className="service-lead section-pad">
          <img src={lead.image} alt={lead.name} />
          <div>
            <p className="section-kicker">Your named lead</p>
            <h2>{lead.name}</h2>
            <p>{lead.role}</p>
            <a href="/team">Meet the wider team <ArrowUpRight /></a>
          </div>
        </section>
      )}
      <section className="subservice-faq section-pad">
        <div>
          <p className="section-kicker">Questions, answered</p>
          <h2>{kicker} FAQs</h2>
        </div>
        <div className="faq-list">
          {faqs.map(({ question, answer }) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="subservice-cta section-pad">
        <h2>Tell us what is on your desk.</h2>
        <p>
          We will listen, ask a few questions and recommend the right
          scope—without obligation or pressure.
        </p>
        <a
          className="primary-button"
          href={`/contact?service=${encodeURIComponent(kicker)}`}
        >
          Start a conversation <ArrowUpRight />
        </a>
      </section>
      <SiteFooter />
    </main>
  );
}

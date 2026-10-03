import { FAQSchema } from "./FAQSchema";
import { ServiceContext, ServiceEvidence, ServiceFrameworksSection } from "./ServicePositioning";
import { SiteImage } from "./SiteImage";
import { StructuredData } from "./StructuredData";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { SiteHeader, SiteFooter } from "./SiteChrome";
import { getUi, localHref } from "../lib/i18n";
import type { Locale } from "../data/i18n/locales";
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
  locale?: Locale;
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
  locale,
}: Props) {
  const t = getUi(locale);
  const pageUrl = `https://www.eunomiapharmaservices.com${locale && locale !== "en" ? `/${locale}` : ""}${servicePath}`;
  return (
    <main className={`service-subpage ${accent}`} lang={locale && locale !== "en" ? locale : undefined} dir={locale === "ar" ? "rtl" : undefined}>
      <StructuredData data={{ "@context": "https://schema.org", "@type": "Service", "@id": `${pageUrl}#service`, name: kicker, description: intro, url: pageUrl, provider: { "@id": "https://www.eunomiapharmaservices.com/#organization" } }} />
      <FAQSchema faqs={faqs} />
      <SiteHeader locale={locale} />
      <section className="subservice-hero section-pad">
        <a href={localHref(locale, "/services")} className="back-link">
          <ArrowLeft />
          {t("allServices")}
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
          href={`${localHref(locale, "/contact")}?service=${encodeURIComponent(kicker)}`}
        >
          {t("discussService")} <ArrowUpRight />
        </a>
      </section>
      <section className="service-video section-pad" aria-label={t(video ? "ariaVideo" : "ariaOverview", { kicker })}>
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
            {t("noVideo")} <a href={video.src}>{t("downloadVideo")}</a>.
          </video>
        ) : (
          <SiteImage
            src={serviceImage.src}
            sizes="(max-width: 1000px) 90vw, 960px"
            alt={serviceImage.alt}
            style={{ display: "block", width: "100%", maxWidth: 960, height: "auto", margin: "0 auto", borderRadius: 16 }}
          />
        )}
      </section>
      <ServiceContext path={servicePath} locale={locale} />
      {heroDetail}
      {!hideScope && (
        <section id="scope-of-support" className="subservice-scope section-pad">
          <div>
            <p className="section-kicker">{t("scopeKicker")}</p>
            <h2>{t("scopeTitle", { kicker })}</h2>
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
        <p className="section-kicker">{t("outcomesKicker")}</p>
        <div>
          {outcomes.map((outcome) => (
            <p key={outcome}>
              <Check />
              {outcome}
            </p>
          ))}
        </div>
      </section>
      <ServiceEvidence path={servicePath} locale={locale} />
      <ServiceFrameworksSection path={servicePath} locale={locale} />
      {detailSection}
      {lead && (
        <section className="service-lead section-pad">
          <SiteImage src={lead.image} sizes="(max-width: 950px) 90vw, 40vw" alt={lead.name} />
          <div>
            <p className="section-kicker">{t("leadKicker")}</p>
            <h2>{lead.name}</h2>
            <p>{lead.role}</p>
            <a href={localHref(locale, "/team")}>{t("meetTeam")} <ArrowUpRight /></a>
          </div>
        </section>
      )}
      <section className="subservice-faq section-pad">
        <div>
          <p className="section-kicker">{t("faqKicker")}</p>
          <h2>{t("faqTitle", { kicker })}</h2>
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
        <h2>{t("ctaTitle")}</h2>
        <p>
          {t("ctaBody")}
        </p>
        <a
          className="primary-button"
          href={`${localHref(locale, "/contact")}?service=${encodeURIComponent(kicker)}`}
        >
          {t("startConversation")} <ArrowUpRight />
        </a>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}

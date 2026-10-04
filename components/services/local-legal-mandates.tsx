import { homeTranslator } from "../../data/i18n/home-copy";
import { serviceTranslator } from "../../data/i18n/full-service-copy";
import { localHref } from "../../lib/i18n";
import type { Locale } from "../../data/i18n/locales";
import { Bot, FileCheck2, Globe2, Scale, ShieldCheck, Sparkles } from "lucide-react";
import { ServiceSubpage } from "../../components/ServiceSubpage";
import { LocalizedCoverageMap } from "../LocalizedCoverageMap";
import { markets } from "../../data/markets";

const mandates = [
  {
    icon: <ShieldCheck />,
    title: "Anti-bribery and corruption",
    body: "UK Bribery Act 2010—including section 7 failure to prevent and its broad territorial reach—plus the FCPA and OECD Anti-Bribery Convention.",
  },
  {
    icon: <Scale />,
    title: "Promotion of medicines",
    body: "EU Directive 2001/83/EC, including the advertising and inducement framework for medicinal products.",
  },
  {
    icon: <Globe2 />,
    title: "National anti-gift and benefit rules",
    body: "Country-specific requirements including French DMOS as amended by Ordonnance 2017-49, Portuguese INFARMED rules, and relevant Greek, Turkish and Polish regimes.",
  },
  {
    icon: <Sparkles />,
    title: "Failure to prevent fraud",
    body: "The ECCTA 2023 offence, in force since 1 September 2025—a live control gap in many pharmaceutical third-party frameworks.",
  },
  {
    icon: <FileCheck2 />,
    title: "Transparency and disclosure",
    body: "US Sunshine Act / Open Payments, France’s Loi Bertrand, Danish and Portuguese registers, plus the code-based EFPIA disclosure layer—translated into data, process and reporting controls.",
  },
  {
    icon: <Bot />,
    title: "EU AI Act and related regulation",
    body: "Regulation (EU) 2024/1689, read alongside the GDPR, EU Data Act and, where AI forms part of a medical device or diagnostic, the MDR and IVDR—covering risk classification, data governance, transparency, human oversight, technical documentation, post-market monitoring and accountability.",
  },
];
export function ServicePage({locale = "en"}: {locale?: Locale}) {
const t = serviceTranslator(locale);
const homeT = homeTranslator(locale);
const href = (path: string) => localHref(locale, path);
  return (
    <ServiceSubpage locale={locale}
      servicePath="/services/local-legal-mandates"
      heading={t("Local Legal Representative and Compliance Support for Pharma across Europe")}
      accent="green"
      serviceImage={{ src: "/market-representation.png", alt: t("Local compliance representatives discussing market requirements") }}
      serviceTitleFirst
      kicker={t("Local Legal Mandates and Representation")}
      title={t("In-market presence without in-country headcount.")}
      intro={t("Local legal representative support for pharma must reflect each country’s requirements and the activities being undertaken. Eunomia provides named in-market compliance support, local-code interpretation and market-entry assessments, with the required mandate and responsibilities agreed for each engagement.")}
      services={[
        t("Responsible person and local representative support"),
        t("Local code interpretation and queries"),
        t("Association liaison and self-regulatory filings"),
        t("Cross-border HCP engagement review"),
        t("Market-entry compliance assessment"),
        t("Local transparency and disclosure requirements"),
      ]}
      outcomes={[
        t("Local context brought into global processes"),
        t("Clear ownership and escalation by market"),
        t("Faster market entry without unnecessary fixed overhead"),
      ]}
      detailSection={
        <>
        <section className="local-coverage section-pad" aria-labelledby="local-coverage-title">
          <div className="local-coverage-heading">
            <p className="section-kicker">{t("Named local expertise")}</p>
            <h2 id="local-coverage-title">{t("Local context, connected globally.")}</h2>
            <p>{t("Explore our coverage. Select a red partner marker to open that compliance officer's biography on the Team page.")}</p>
          </div>
          <LocalizedCoverageMap locale={locale} />
        </section>
        <section className="mandates section-pad" id="mandates">
          <div className="mandate-intro">
            <p className="section-kicker">{t("Legal mandates")}</p>
            <h2>{t("Designed around the rules that sit behind the")}{" "}<em>{t("process")}</em>…
            </h2>
            <p>{t("We map legal and self-regulatory requirements into practical controls, review routes, evidence and ownership.")}</p>
          </div>
          <div className="mandate-list">
            {mandates.map((mandate) => (
              <article key={mandate.title}>
                <span>{mandate.icon}</span>
                <div>
                  <h3>{t(mandate.title)}</h3>
                  <p>{t(mandate.body)}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mandate-sources">
            <h3>{t("Primary references")}</h3>
            <div className="source-links">
              <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32001L0083" target="_blank" rel="noreferrer">{t("EU Directive")}</a>
              <a href="https://www.legislation.gov.uk/ukpga/2010/23/section/7" target="_blank" rel="noreferrer">{t("UK Bribery Act")}</a>
              <a href="https://www.gov.uk/government/publications/offence-of-failure-to-prevent-fraud-introduced-by-eccta" target="_blank" rel="noreferrer">{t("ECCTA guidance")}</a>
              <a href="https://www.cms.gov/priorities/key-initiatives/open-payments/law-policy" target="_blank" rel="noreferrer">{t("Open Payments")}</a>
              <a href="https://www.efpia.eu/relationships-code/the-efpia-code/" target="_blank" rel="noreferrer">{t("EFPIA Code")}</a>
              <a href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj" target="_blank" rel="noreferrer">{t("EU AI Act")}</a>
              <a href="https://eur-lex.europa.eu/eli/reg/2016/679/oj" target="_blank" rel="noreferrer">{t("GDPR")}</a>
              <a href="https://eur-lex.europa.eu/eli/reg/2023/2854/oj" target="_blank" rel="noreferrer">{t("EU Data Act")}</a>
              <a href="https://eur-lex.europa.eu/eli/reg/2017/745/oj" target="_blank" rel="noreferrer">{t("MDR")}</a>
              <a href="https://eur-lex.europa.eu/eli/reg/2017/746/oj" target="_blank" rel="noreferrer">{t("IVDR")}</a>
            </div>
          </div>
          <div className="mandate-sources market-guides">
            <h3>{t("Country guides")}</h3>
            <div className="source-links">
              {markets.map((m) => (
                <a key={m.slug} href={href(`/markets/${m.slug}`)}>{homeT(m.country)}</a>
              ))}
            </div>
          </div>
          <p className="legal-note">{t("This overview is informational and does not constitute legal advice. Scope and application should be confirmed for the organisation, market, activity and counterparty in question.")}</p>
        </section>
        </>
      }
      faqs={[
        {
          question: t("What does local compliance representation mean?"),
          answer:
            t("It means providing a named, market-aware compliance contact who can interpret local requirements, support queries and connect local obligations to your global governance model."),
        },
        {
          question: t("Which markets can Eunomia support?"),
          answer:
            t("Coverage includes EU5, more than 20 European markets, MENA, the United States, South America and Asia. Exact scope is confirmed for each engagement."),
        },
        {
          question: t("Can you interpret country-specific industry codes?"),
          answer:
            t("Yes. Support can cover local legal requirements, industry codes, association expectations and the practical implications for activities and documentation."),
        },
        {
          question: t("Do we need to open a local office?"),
          answer:
            t("Not necessarily. The appropriate model depends on the legal obligation and activity, but many compliance-support and representation needs can be met without permanent local headcount."),
        },
        {
          question: t("Can you support cross-border HCP engagements?"),
          answer:
            t("Yes. We can identify relevant home- and host-country requirements, establish the review route and document the rationale and approvals."),
        },
        {
          question: t("How does local support connect to our global team?"),
          answer:
            t("Named contacts, decision rights, escalation paths and reporting are agreed so local advice feeds into a consistent global operating model."),
        },
      ]}
    />
  );
}

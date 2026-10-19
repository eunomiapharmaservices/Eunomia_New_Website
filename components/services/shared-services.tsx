import { serviceTranslator } from "../../data/i18n/full-service-copy";
import { localHref } from "../../lib/i18n";
import type { Locale } from "../../data/i18n/locales";
import { ServiceSubpage } from "../../components/ServiceSubpage";
export function ServicePage({locale = "en"}: {locale?: Locale}) {
const t = serviceTranslator(locale);
const href = (path: string) => localHref(locale, path);
const isEnglish = !locale || locale === "en";
  return (
    <ServiceSubpage locale={locale}
      servicePath="/services/shared-services"
      heading={t("Outsourced Pharma Compliance and Shared Services for the UK and Europe")}
      kicker={t("Shared Services / GBS / GCC")}
      title={t("Your compliance function, run with you.")}
      serviceTitleFirst
      serviceImage={{ src: "/compliance-collaboration.png", alt: t("Compliance specialists reviewing documents together") }}
      intro={t("Our outsourced pharma compliance team works within your SOPs and systems to review materials, support HCP engagements and manage transparency reporting, including EFPIA disclosure processes. Shared services, GBS and GCC support adds operational capacity while you retain accountability and oversight.")}
      services={[
        t("Promotional and medical materials review"),
        t("Activity, event and congress review"),
        t("HCP engagement and fair market value assessment"),
        t("Transparency reporting and disclosure"),
        t("Operational compliance support across markets"),
        t("Centralised workflow and evidence management"),
      ]}
      outcomes={[
        t("Dependable capacity without building a full in-house team"),
        t("Consistent decisions, records and turnaround times"),
        t("A service that can scale by market, activity or workload"),
      ]}
      detailSection={isEnglish ? (
        <>
        <section className="section-pad uk-related" aria-labelledby="outsourced-materials-review">
          <p className="section-kicker">Materials review operations</p>
          <h2 id="outsourced-materials-review">Outsourced promotional review and copy approval support</h2>
          <p>Combine specialist reviewers, SOPs, approval workflows and reporting within your existing systems. Scope the UK and European markets, capacity and any nominated signatory arrangements before delivery begins.</p>
          <p><a href="/services/promotional-materials-review">Explore our promotional materials review service →</a></p>
        </section>
        <section className="section-pad uk-related" aria-labelledby="pharma-transparency-guide">
          <p className="section-kicker">Transparency reporting</p>
          <h2 id="pharma-transparency-guide">How to assess transparency reporting by pharmaceutical companies</h2>
          <p>There is no single cross-market league table that establishes which pharmaceutical companies are “most transparent.” A more useful assessment checks what a company reports in each market, how complete and timely the information is, and whether its methods are explained.</p>
          <ul>
            <li>Use public, market-specific sources such as <a href="https://www.abpi.org.uk/reputation/disclosure-uk/" target="_blank" rel="noreferrer">Disclosure UK</a> and France’s <a href="https://www.transparence.sante.gouv.fr/pages/accueil/" target="_blank" rel="noreferrer">Transparence Santé</a>.</li>
            <li>Compare the same reporting year and the same types of transfers of value, taking account of local rules and publication methods.</li>
            <li>Review the company’s methodology, data correction process and explanation of any aggregate reporting or privacy constraints.</li>
          </ul>
          <p>Public disclosure records show reported relationships. They do not, by themselves, establish a company’s overall ethical conduct or prove that every compliance control is effective. For context, see the <a href="https://www.efpia.eu/relationships-code/the-efpia-code/" target="_blank" rel="noreferrer">EFPIA Code</a> and Eunomia’s <a href={href("/resources/articles/transparency-reporting-in-pharmaceutical-industry")}>guide to pharma transparency reporting</a>.</p>
        </section>
        </>
      ) : undefined}
      faqs={[
        {
          question: t("What is a healthcare compliance shared service?"),
          answer:
            t("A dedicated team performs defined compliance activities through agreed processes, systems, service levels and escalation routes while your organisation retains oversight and accountability."),
        },
        {
          question:
            t("Can the service work within our existing SOPs and systems?"),
          answer:
            t("Yes. The operating model is designed around your approved procedures, technology, decision rights and documentation requirements."),
        },
        {
          question: t("Which activities can be included?"),
          answer:
            t("Typical scope includes materials and activity review, events and HCP engagements, fair market value, disclosures, transparency reporting and associated records."),
        },
        {
          question: t("Can we start with one process or market?"),
          answer:
            t("Yes. A shared service can begin with a defined activity, team or market and expand after the workflow and service levels are proven."),
        },
        {
          question: t("Who remains accountable for compliance decisions?"),
          answer:
            t("Your organisation retains ultimate accountability. Roles, delegated authority, review routes and escalations are defined clearly at the outset."),
        },
        {
          question: t("How is performance managed?"),
          answer:
            t("The service can use agreed measures for volume, turnaround, quality, exceptions, escalation and stakeholder experience, supported by regular governance reviews."),
        },
        ...(isEnglish ? [{
          question: "Which pharma companies are known for transparency?",
          answer: "There is no single cross-market ranking that identifies the pharmaceutical companies that are “most transparent.” Check the relevant public disclosure sources for each country, compare the same reporting year and categories, and review each company’s methodology and correction process. Public disclosures are useful evidence about reported relationships, but are not a complete measure of a company’s overall ethics or compliance effectiveness.",
        }] : []),
      ]}
    />
  );
}

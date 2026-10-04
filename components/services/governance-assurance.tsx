import { serviceTranslator } from "../../data/i18n/full-service-copy";
import { localHref } from "../../lib/i18n";
import type { Locale } from "../../data/i18n/locales";
import { ServiceSubpage } from "../../components/ServiceSubpage";
import { ukServicePages, UK_SERVICE_BASE } from "../../data/uk-service-pages";
export function ServicePage({locale = "en"}: {locale?: Locale}) {
const t = serviceTranslator(locale);
const href = (path: string) => localHref(locale, path);
  return (
    <ServiceSubpage locale={locale}
      servicePath="/services/governance-assurance"
      heading={t("Pharmaceutical Compliance Consultancy UK")}
      accent="orange"
      serviceImage={{ src: "/home-compliance-team.jpeg", alt: t("Compliance specialists discussing programme design and implementation") }}
      serviceTitleFirst
      detailSection={
        <section className="section-pad uk-related" aria-labelledby="uk-specialist-title">
          <p className="section-kicker">{t("Specialist services in the UK")}</p>
          <h2 id="uk-specialist-title">{t("Training, risk assessment, SOPs, audits and FMV")}</h2>
          <ul>
            {ukServicePages.map((p) => <li key={p.slug}><a href={href(`${UK_SERVICE_BASE}/${p.slug}`)}>{t(p.heading)}</a></li>)}
          </ul>
        </section>
      }
      kicker={t("Healthcare Compliance Programme Design and Implementation")}
      title={t("A practical programme, built to work day to day.")}
      intro={t("Our UK pharmaceutical compliance consultancy helps pharma and biotech companies design and implement practical healthcare compliance programmes. We support ABPI Code compliance and anti-bribery and anti-corruption (ABAC) controls through policies, risk assessments, training and monitoring tailored to your activities and markets.")}
      services={[
        t("Compliance programme design and implementation"),
        t("Policy and SOP development"),
        t("Data Protection"),
        t("Risk assessment and monitoring"),
        t("Gap analysis, audits and inspections"),
        t("CAPA and remediation support"),
        t("Compliance training"),
        t("Third-party due diligence"),
        t("Whistle-blowing"),
        t("Grants and Funding Management"),
        t("Conflict of Interest"),
        t("Legal mandate mapping including ABAC and FCPA"),
      ]}
      outcomes={[
        t("A practical framework with clear ownership"),
        t("Inspection-ready records and evidence"),
        t("Training, monitoring and remediation connected to real risks"),
      ]}
      faqs={[
        {
          question: t("How do I set up a pharmaceutical compliance programme?"),
          answer:
            t("Establish governance, roles, practical policies and SOPs, approval and monitoring processes, evidence requirements and role-based training aligned to applicable obligations."),
        },
        {
          question: t("What is audit readiness?"),
          answer:
            t("A continuous state in which documentation, controls, evidence and governance are embedded in routine operations rather than assembled immediately before an audit."),
        },
        {
          question: t("What is included in a compliance audit?"),
          answer:
            t("Scope may include document review, operational testing, interviews, system walkthroughs, risk-rated findings and a practical remediation roadmap."),
        },
        {
          question: t("Can you support PMCPA readiness and remediation?"),
          answer:
            t("Yes. Support can assess governance, procedures, approvals, training, HCP engagement, FMV, transparency, monitoring and certification against relevant expectations."),
        },
        {
          question: t("How is an effective CAPA plan structured?"),
          answer:
            t("It identifies root causes, actions, accountable owners, due dates, dependencies and effectiveness checks, with progress tracked through governance."),
        },
        {
          question: t("Can compliance training be tailored?"),
          answer:
            t("Yes. Training can be adapted by role, market, process and system using classroom, virtual, e-learning or blended delivery with effectiveness measures."),
        },
      ]}
    />
  );
}

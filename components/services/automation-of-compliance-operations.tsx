import { serviceTranslator } from "../../data/i18n/full-service-copy";
import { localHref } from "../../lib/i18n";
import type { Locale } from "../../data/i18n/locales";
import {
  Braces,
  ClipboardCheck,
  Globe2,
  ShieldCheck,
} from "lucide-react";
import { ServiceSubpage } from "../../components/ServiceSubpage";
export function ServicePage({locale = "en"}: {locale?: Locale}) {
const t = serviceTranslator(locale);
const href = (path: string) => localHref(locale, path);
  return (
    <ServiceSubpage locale={locale}
      servicePath="/services/automation-of-compliance-operations"
      heading={t("Pharma Automation Compliance Consulting, UK and Europe")}
      accent="green"
      serviceImage={{ src: "/eunomia-workflow.png", alt: t("Planning digital compliance workflows and automated processes") }}
      serviceTitleFirst
      hideScope
      kicker={t("Automation of Compliance Operations")}
      title={t("Compliant automation deployment, from build to business-as-usual.")}
      intro={t("Our pharma automation compliance consultants streamline review workflows, monitoring and EFPIA disclosure data processes. Eunomia combines compliance expertise with SharePoint, Power BI and controlled AI to support traceable decisions, human oversight and business-as-usual operations.")}
      services={[
        t("AI compliance readiness assessment"),
        t("SharePoint workflow design and implementation"),
        t("Power BI compliance dashboards and reporting"),
        t("Automation of Processes"),
        t("Chatbot"),
        t("Review Platforms"),
        t("Monitoring in a box"),
        t("EU AI Act governance"),
        t("Workflow automation and data integration"),
        t("Analytics, dashboards and evidence trails"),
      ]}
      outcomes={[
        t("A compliant route from use-case design through deployment"),
        t("Complete risk evaluation and assessment by the appropriate compliance officers"),
        t("Automation that strengthens operations without replacing accountable human judgement"),
      ]}
      heroDetail={
        <section className="ai-delivery-model section-pad" aria-labelledby="ai-delivery-title">
          <div className="ai-delivery-heading">
            <h2 id="ai-delivery-title">{t("How we deliver pharma compliance automation")}</h2>
            <p className="ai-delivery-subtitle">{t("Three disciplines. One accountable deployment.")}</p>
          </div>

          <div className="ai-expertise-model" aria-label={t("Technical build, project management and compliance expertise combine to deliver compliant automation deployment")}>
            <article>
              <span><Braces aria-hidden="true" /></span>
              <b>{t("Technical build")}</b>
              <p>{t("Architecture, integrations, workflows, data controls, testing and deployment.")}</p>
            </article>
            <article>
              <span><ClipboardCheck aria-hidden="true" /></span>
              <b>{t("Project management")}</b>
              <p>{t("Defined scope, accountable owners, delivery governance, validation and adoption.")}</p>
            </article>
            <article>
              <span><Globe2 aria-hidden="true" /></span>
              <b>{t("Compliance expertise")}</b>
              <p>{t("Global standards, local requirements, risk evaluation and officer-led assessment.")}</p>
            </article>
            <div className="ai-model-result">
              <ShieldCheck aria-hidden="true" />
              <div><small>{t("Integrated outcome")}</small><strong>{t("Compliant Automation Deployment")}</strong></div>
            </div>
          </div>

          <div className="ai-operational-chain" aria-label={t("Compliance automation tools and platforms")}>
            <p className="section-kicker">{t("Tools and platforms across the complete operational chain")}</p>
            <div>
              <article><small>01</small><b>{t("AI readiness assessment")}</b><span>{t("Use-case classification, governance, controls and accountable approvals.")}</span></article>
              <article><small>02</small><b>{t("SharePoint workflows")}</b><span>{t("Structured routing, collaboration, records and approval pathways.")}</span></article>
              <article><small>03</small><b>{t("Power BI dashboards")}</b><span>{t("Compliance reporting, operational insight and visible evidence.")}</span></article>
              <article><small>04</small><b>{t("Automation of Processes")}</b><span>{t("Controlled process automation, routing, escalation, human review and evidence.")}</span></article>
              <article><small>05</small><b>{t("Chatbot")}</b><span>{t("Controlled answers, appropriate escalation, human oversight and traceable evidence.")}</span></article>
              <article><small>06</small><b>{t("Review Platforms")}</b><span>{t("Materials; activities and engagements; grants and donations; and FMV.")}</span></article>
              <article><small>07</small><b>{t("Monitoring in a box")}</b><span>{t("Risk-based testing, findings, remediation and oversight.")}</span></article>
              <article><small>08</small><b>{t("EU AI Act governance")}</b><span>{t("Classification, documentation, risk controls and human oversight.")}</span></article>
              <article><small>09</small><b>{t("Workflow & data integration")}</b><span>{t("Connected systems, automated hand-offs and controlled data flows.")}</span></article>
              <article><small>10</small><b>{t("Analytics & evidence trails")}</b><span>{t("Dashboards, traceable decisions, reporting and audit-ready records.")}</span></article>
            </div>
          </div>
        </section>
      }
      faqs={[
        {
          question: t("What is an AI compliance readiness assessment?"),
          answer:
            t("It reviews proposed use cases, data, governance, controls, accountability and regulatory exposure to identify what must be in place before deployment."),
        },
        {
          question: t("Do you sell a software licence?"),
          answer:
            t("The focus is on designing and implementing the right operational solution. Technology may be configured around your existing stack or selected for the defined process."),
        },
        {
          question: t("Can automation replace compliance reviewers?"),
          answer:
            t("No. Automation can improve routing, consistency, monitoring and evidence, while experienced people remain responsible for contextual judgement and accountable decisions."),
        },
        {
          question: t("Can you support both a chatbot and wider operational AI enablement?"),
          answer:
            t("Yes. The same integrated model can support a defined chatbot use case or a connected programme spanning risk assessment, monitoring, review workflows, transparency and reporting."),
        },
        {
          question: t("Can you improve an existing materials-review process?"),
          answer:
            t("Yes. We can assess the workflow, roles, metadata, rules, integrations and reporting before configuring improvements around the process."),
        },
        {
          question: t("How do you address the EU AI Act?"),
          answer:
            t("Support can include use-case classification, governance, accountability, risk controls, documentation, human oversight and implementation planning."),
        },
        {
          question: t("What is “monitoring in a box”?"),
          answer:
            t("A repeatable monitoring model combining risk-based tests, data inputs, review workflows, findings, evidence and reporting so monitoring can be deployed consistently."),
        },
      ]}
    />
  );
}

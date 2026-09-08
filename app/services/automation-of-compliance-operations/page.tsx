import type { Metadata } from "next";
import {
  Braces,
  ClipboardCheck,
  Globe2,
  ShieldCheck,
} from "lucide-react";
import { ServiceSubpage } from "../../../components/ServiceSubpage";
export const metadata: Metadata = {
  title: "Automation of healthcare compliance operations | Eunomia",
  description:
    "Compliance expertise with automation built into existing pharmaceutical review, monitoring and governance processes.",
};
export default function Page() {
  return (
    <ServiceSubpage
      accent="blue"
      serviceTitleFirst
      hideScope
      kicker="Automation of Compliance Operations"
      title="Compliant automation deployment, from build to business-as-usual."
      intro="Eunomia combines technical build, disciplined project management and global and local compliance expertise in one delivery model. From a focused chatbot to AI enablement across an operational chain, we design the technology around the process, evaluate the risks and keep the appropriate compliance officers accountable for review and approval."
      services={[
        "AI compliance readiness assessment",
        "SharePoint workflow design and implementation",
        "Power BI compliance dashboards and reporting",
        "Automation of Processes",
        "Chatbot",
        "Review Platforms",
        "Monitoring in a box",
        "EU AI Act governance",
        "Workflow automation and data integration",
        "Analytics, dashboards and evidence trails",
      ]}
      outcomes={[
        "A compliant route from use-case design through deployment",
        "Complete risk evaluation and assessment by the appropriate compliance officers",
        "Automation that strengthens operations without replacing accountable human judgement",
      ]}
      heroDetail={
        <section className="ai-delivery-model section-pad" aria-labelledby="ai-delivery-title">
          <div className="ai-delivery-heading">
            <h2 id="ai-delivery-title">Our unique delivery model</h2>
            <p className="ai-delivery-subtitle">Three disciplines. One accountable deployment.</p>
          </div>

          <div className="ai-expertise-model" aria-label="Technical build, project management and compliance expertise combine to deliver compliant automation deployment">
            <article>
              <span><Braces aria-hidden="true" /></span>
              <b>Technical build</b>
              <p>Architecture, integrations, workflows, data controls, testing and deployment.</p>
            </article>
            <article>
              <span><ClipboardCheck aria-hidden="true" /></span>
              <b>Project management</b>
              <p>Defined scope, accountable owners, delivery governance, validation and adoption.</p>
            </article>
            <article>
              <span><Globe2 aria-hidden="true" /></span>
              <b>Compliance expertise</b>
              <p>Global standards, local requirements, risk evaluation and officer-led assessment.</p>
            </article>
            <div className="ai-model-result">
              <ShieldCheck aria-hidden="true" />
              <div><small>Integrated outcome</small><strong>Compliant Automation Deployment</strong></div>
            </div>
          </div>

          <div className="ai-operational-chain" aria-label="Compliance automation tools and platforms">
            <p className="section-kicker">Tools and platforms across the complete operational chain</p>
            <div>
              <article><small>01</small><b>AI readiness assessment</b><span>Use-case classification, governance, controls and accountable approvals.</span></article>
              <article><small>02</small><b>SharePoint workflows</b><span>Structured routing, collaboration, records and approval pathways.</span></article>
              <article><small>03</small><b>Power BI dashboards</b><span>Compliance reporting, operational insight and visible evidence.</span></article>
              <article><small>04</small><b>Automation of Processes</b><span>Controlled process automation, routing, escalation, human review and evidence.</span></article>
              <article><small>05</small><b>Chatbot</b><span>Controlled answers, appropriate escalation, human oversight and traceable evidence.</span></article>
              <article><small>06</small><b>Review Platforms</b><span>Materials; activities and engagements; grants and donations; and FMV.</span></article>
              <article><small>07</small><b>Monitoring in a box</b><span>Risk-based testing, findings, remediation and oversight.</span></article>
              <article><small>08</small><b>EU AI Act governance</b><span>Classification, documentation, risk controls and human oversight.</span></article>
              <article><small>09</small><b>Workflow &amp; data integration</b><span>Connected systems, automated hand-offs and controlled data flows.</span></article>
              <article><small>10</small><b>Analytics &amp; evidence trails</b><span>Dashboards, traceable decisions, reporting and audit-ready records.</span></article>
            </div>
          </div>
        </section>
      }
      faqs={[
        {
          question: "What is an AI compliance readiness assessment?",
          answer:
            "It reviews proposed use cases, data, governance, controls, accountability and regulatory exposure to identify what must be in place before deployment.",
        },
        {
          question: "Do you sell a software licence?",
          answer:
            "The focus is on designing and implementing the right operational solution. Technology may be configured around your existing stack or selected for the defined process.",
        },
        {
          question: "Can automation replace compliance reviewers?",
          answer:
            "No. Automation can improve routing, consistency, monitoring and evidence, while experienced people remain responsible for contextual judgement and accountable decisions.",
        },
        {
          question: "Can you support both a chatbot and wider operational AI enablement?",
          answer:
            "Yes. The same integrated model can support a defined chatbot use case or a connected programme spanning risk assessment, monitoring, review workflows, transparency and reporting.",
        },
        {
          question: "Can you improve an existing materials-review process?",
          answer:
            "Yes. We can assess the workflow, roles, metadata, rules, integrations and reporting before configuring improvements around the process.",
        },
        {
          question: "How do you address the EU AI Act?",
          answer:
            "Support can include use-case classification, governance, accountability, risk controls, documentation, human oversight and implementation planning.",
        },
        {
          question: "What is “monitoring in a box”?",
          answer:
            "A repeatable monitoring model combining risk-based tests, data inputs, review workflows, findings, evidence and reporting so monitoring can be deployed consistently.",
        },
      ]}
    />
  );
}

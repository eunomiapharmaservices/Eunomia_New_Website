import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../../../components/SiteChrome";
import { StructuredData } from "../../../../components/StructuredData";
import { SITE_NAME, SITE_URL, withSocial } from "../../../../lib/seo";
import styles from "./MonitoringCaseStudy.module.css";

const path = "/resources/pharma-compliance-monitoring-ai-case-study";
const title = "Pharma Compliance Monitoring with Automation and AI";
const description = "An illustrative case study on risk-based pharma compliance monitoring, from test planning and AI-assisted evidence review to corrective action and retesting.";
const published = "2026-11-27";
const stages = [
  [
    "Risk assessment",
    "Keep a versioned risk and control register, with activity volumes, prior findings and control changes by market.",
    "Summarise trends and suggest topics for review with links to the source data.",
    "Approve inherent and residual risk ratings and record the rationale."
  ],
  [
    "Monitoring plan",
    "Define and assign tests, populations, sampling methods, owners, frequency and evidence requirements.",
    "Draft test instructions from approved documents and highlight gaps in planned coverage.",
    "Approve priorities, sample design and test criteria."
  ],
  [
    "Monitoring execution",
    "Create test cases and check dates, versions and completeness in structured records. Route exceptions for review.",
    "Extract relevant dates and passages from evidence, and link to the source and document version.",
    "Verify context and record a pass, a finding or insufficient evidence."
  ],
  [
    "Analytics and reporting",
    "Show coverage, confirmed findings and action ageing in Power BI, with links to the underlying tests.",
    "Summarise recurring themes and draft commentary for verification.",
    "Confirm denominators, interpret trends and agree what to escalate."
  ],
  [
    "Findings and CAPA",
    "Assign owners and due dates, escalate overdue actions, retain closure evidence and schedule retesting.",
    "Suggest follow-up questions and draft a remediation summary from the evidence.",
    "Confirm root cause and severity, approve corrective and preventive actions (CAPA) and sign off after retesting."
  ]
];
const findings = [
  { area: "HCP contracting", confirmed: 4, reviewed: 24 },
  { area: "Meetings and hospitality", confirmed: 3, reviewed: 16 },
  { area: "Promotional approvals", confirmed: 1, reviewed: 8 },
];

export const metadata: Metadata = withSocial(path, {
  title: `${title} | Eunomia`,
  description,
  alternates: { canonical: SITE_URL + path },
  openGraph: { publishedTime: published },
}, "article");

export default function MonitoringCaseStudy() {
  return (
    <main>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `${SITE_URL}${path}#article`,
        headline: title,
        description,
        mainEntityOfPage: SITE_URL + path,
        datePublished: published,
        inLanguage: "en-GB",
        author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
        publisher: { "@id": `${SITE_URL}/#organization` },
      }} />
      <SiteHeader />
      <article className="standalone-resource">
        <header className="standalone-resource-header section-pad">
          <a className="back-link" href="/resources">← All resources</a>
          <p className="section-kicker">Illustrative case study · <time dateTime={published}>27 November 2026</time></p>
          <h1>{title}</h1>
          <p>How a pharma team can link risk assessment, monitoring evidence, findings and corrective action across its existing systems.</p>
          <a className={styles.download} href="/resources/documents/pharma-compliance-monitoring-ai-case-study.pdf" download>Download the case study (PDF)</a>
        </header>
        <div className={`standalone-resource-body ${styles.body}`}>
          <section>
            <h2>The operational challenge</h2>
            <p>A UK pharma company monitors healthcare professional (HCP) engagements, hospitality and promotional materials across Europe. Risk registers, test evidence and action logs sit in separate systems, making it hard to trace findings and verify fixes.</p>
            <ul>
              <li><strong>Risk and coverage.</strong> Affiliates use different scoring and testing criteria. Teams struggle to see which high-risk activities are untested or why samples were selected.</li>
              <li><strong>Testing and evidence.</strong> Teams manually join event, approval, contract and finance extracts. An incomplete record might reflect a failed control or a missing data feed.</li>
              <li><strong>Reporting and remediation.</strong> Potential exceptions and confirmed findings get mixed together. Owners, deadlines and evidence of corrective action are hard to track.</li>
            </ul>
          </section>
          <section>
            <h2>From risk assessment to corrective action</h2>
            <p>One linked record connects each risk to its controls, tests, evidence, findings and follow-up.</p>
            <ol className={styles.stages}>
              {stages.map(([stage, automation, ai, decision]) => (
                <li key={stage}>
                  <h3>{stage}</h3>
                  <dl>
                    <div><dt>Automation</dt><dd>{automation}</dd></div>
                    <div><dt>AI assistance</dt><dd>{ai}</dd></div>
                    <div><dt>Human decision</dt><dd>{decision}</dd></div>
                  </dl>
                </li>
              ))}
            </ol>
          </section>
          <section>
            <h2>Built around the client’s systems</h2>
            <p>Eunomia’s Monitoring in a Box approach pairs compliance expertise with the client’s approved workflow, reporting and AI tools. The client’s CRM, contracting, approvals and finance systems remain the authoritative sources.</p>
            <ul>
              <li><strong>Risk register and evidence.</strong> Use SharePoint and Microsoft Lists or the client’s governance, risk and compliance tool.</li>
              <li><strong>Work queue and routing.</strong> Configure Power Apps or the existing case-management form, with Power Automate for sample assignment and reminders.</li>
              <li><strong>Data and dashboards.</strong> Connect approved extracts or integrations, then track coverage, findings and action ageing in Power BI.</li>
              <li><strong>Document review and follow-up.</strong> Use an approved AI service to extract evidence for review. Assign owners, deadlines and retests in the client’s issue tracker or a SharePoint-based workflow.</li>
            </ul>
          </section>
          <section>
            <h2>From a monitoring flag to corrective action</h2>
            <figure className={styles.dashboard}>
              <figcaption>Compliance monitoring dashboard · Illustrative sample data</figcaption>
              <p><strong>60</strong> sampled records · <strong>48</strong> completed reviews · <strong>8</strong> confirmed findings · <strong>3</strong> overdue CAPA actions</p>
              <table className={styles.findings}>
                <caption>Confirmed findings by monitoring area</caption>
                <thead><tr><th scope="col">Monitoring area</th><th scope="col">Findings</th><th scope="col">Reviewed</th></tr></thead>
                <tbody>
                  {findings.map(({ area, confirmed, reviewed }) => (
                    <tr key={area}><th scope="row">{area}</th><td>{confirmed}</td><td>{reviewed}</td></tr>
                  ))}
                </tbody>
              </table>
            </figure>
            <p><strong>What gets flagged.</strong> AI extracts a service start date of 14 October and a signature date of 16 October, with links to the evidence. The workflow flags the date sequence.</p>
            <p><strong>What Compliance checks.</strong> The reviewer verifies both dates and checks for an earlier written agreement. In this scenario, none is found and the reviewer records a confirmed finding.</p>
            <p><strong>How the team follows up.</strong> Medical Operations owns the new pre-service evidence check. Compliance retests the next 10 eligible engagements before deciding whether to close the action.</p>
            <p><a href="https://pmcpa.org.uk/the-code/2024-interactive-abpi-code-of-practice/clause-24-contracted-services/">ABPI Code Clause 24 on contracted services</a></p>
          </section>
          <section>
            <h2>Pilot one control and measure the results</h2>
            <p>Start with HCP contracting. Compare review time, evidence completeness, incorrect or missed flags and the share of actions closed after a successful retest.</p>
            <p><a href="/services/governance-assurance/pharma-compliance-monitoring">Explore Eunomia’s monitoring services</a> · <a href="/services/automation-of-compliance-operations">See compliance automation support</a> · <a href="/contact?service=Pharma%20Compliance%20Monitoring">Discuss your monitoring workflow</a></p>
          </section>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}

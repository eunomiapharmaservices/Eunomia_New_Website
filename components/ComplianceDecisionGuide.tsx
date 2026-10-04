import { ContactSupport } from "./ContactSupport";
import styles from './ComplianceDecisionGuide.module.css';

export function ComplianceDecisionGuide({ page }: { page: 'contact' | 'resources' | 'services' }) {
  if (page === 'contact') return <ContactSupport />;
  if (page === 'resources') return <section className={`${styles.section} section-pad`} aria-labelledby="resource-guide-title">
    <p className="section-kicker">Find the right starting point</p>
    <h2 id="resource-guide-title">Which pharma compliance resource do you need?</h2>
    <p>Use the articles to understand a topic, the worksheets to organise a task and the case studies to see how a defined engagement was delivered. Each serves a different purpose. Adapt working templates to your organisation’s markets, responsibilities and approved procedures.</p>
    <div className={styles.tableWrap}><table><caption>Choose a resource by the task on your desk</caption><thead><tr><th scope="col">Your task</th><th scope="col">Start here</th><th scope="col">Practical output</th></tr></thead><tbody>
      <tr><th scope="row">Plan role-based learning</th><td><a href="/resources/role-based-compliance-training-matrix">Training matrix</a></td><td>Topic assignments, learning depth and evidence of application.</td></tr>
      <tr><th scope="row">Assess an HCP fee</th><td><a href="/resources/hcp-fmv-assessment">FMV assessment worksheet</a></td><td>A record of service need, assumptions and rate rationale.</td></tr>
      <tr><th scope="row">Prepare disclosure data</th><td><a href="/resources/disclosure-preparation-checklist">Disclosure preparation guide</a></td><td>Ownership, reconciliation checks and methodological-note prompts.</td></tr>
      <tr><th scope="row">Improve material review</th><td><a href="/resources/promotional-review-workflow">Promotional review workflow</a></td><td>Submission steps, responsibilities and release controls.</td></tr>
    </tbody></table></div>
    <h3>How should you use the sources?</h3><p>Read the scope notes alongside each article’s references. An official code or law establishes its own requirements; a worksheet provides a suggested way to organise the work. Check the current source and the relevant national rules before applying guidance to an activity. Case-study outcomes describe specific engagements, rather than results every organisation should expect.</p>
    <p>For implementation support, explore <a href="/services/governance-assurance">programme design and implementation</a> or <a href="/services/shared-services">outsourced compliance operations</a>.</p>
  </section>;
  return <section className={`${styles.section} section-pad`} aria-labelledby="service-guide-title">
    <p className="section-kicker">Choose your scope</p>
    <h2 id="service-guide-title">Which pharmaceutical compliance service fits your needs?</h2>
    <p>Eunomia is a UK-based pharmaceutical compliance consultancy combining programme design, operational delivery, local support and automation. The starting point is the work your organisation needs to perform: the markets involved, decisions to make, evidence to retain and capacity available. A defined project can address one gap; ongoing support can cover recurring activities.</p>
    <div className={styles.tableWrap}><table><caption>Match the business need to the service</caption><thead><tr><th scope="col">Your situation</th><th scope="col">Relevant service</th><th scope="col">Potential deliverables</th></tr></thead><tbody>
      <tr><th scope="row">Controls need building or reviewing</th><td><a href="/services/governance-assurance">Programme design and implementation</a></td><td>Risk assessment, policies, training and monitoring plans.</td></tr>
      <tr><th scope="row">Manual workflows create rework</th><td><a href="/services/automation-of-compliance-operations">Compliance automation</a></td><td>Mapped workflows, approval routing, dashboards and controlled handover.</td></tr>
      <tr><th scope="row">A market needs local expertise</th><td><a href="/services/local-legal-mandates">Local mandates and representation</a></td><td>Country-specific support and agreed local responsibilities.</td></tr>
      <tr><th scope="row">Recurring work exceeds capacity</th><td><a href="/services/shared-services">Shared services</a></td><td>Materials review, HCP engagement, FMV and disclosure operations.</td></tr>
    </tbody></table></div>
    <h3>What should you look for in a UK pharma compliance consultancy?</h3><p>Ask who will deliver the work, how relevant market expertise is provided and how recommendations become day-to-day processes. Agree decision authority, escalation routes, acceptance criteria and evidence of delivery. Where specialist statutory or certification roles are involved, confirm eligibility and appointment requirements for the specific market.</p>
    <p>Review our <a href="/team">team’s experience</a>, the <a href="/resources/fair-market-value-methodology">five-market FMV methodology case study</a> and the <a href="/resources/materials-review-shared-service-case-study">materials review case study</a>. Then <a href="/contact">discuss the scope you need</a>.</p>
  </section>;
}

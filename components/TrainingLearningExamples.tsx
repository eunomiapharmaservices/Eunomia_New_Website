import styles from "./MarketView.module.css";

const pathways = [
  { title: "Commercial teams: HCP interactions and meetings", body: "Practise a customer interaction or event-planning decision. Identify the approved material, missing engagement evidence and the point at which to escalate.", outcome: "Explain the decision, locate the relevant procedure and identify the records to retain." },
  { title: "Marketing, agencies and reviewers: materials review", body: "Work through a submission, its claims and references, then compare review comments. Adapt the exercise to the learner’s channel and review responsibilities.", outcome: "Prepare a complete submission or explain a review decision and resolve conflicting comments." },
  { title: "Compliance and business owners: risk and exceptions", body: "Evaluate an exception, consider the control gap and identify who owns the decision and follow-up. Connect the discussion to governance and ABAC responsibilities.", outcome: "Document the rationale, conditions, owner and escalation route." },
  { title: "Finance and operational teams: records and hand-offs", body: "Trace a payment towards disclosure, or route an incomplete workflow request. Focus on recipient data, reconciliation, responsibilities and preserving the history.", outcome: "Identify missing evidence and make the next hand-off traceable." },
];

export function TrainingLearningExamples() {
  return (
    <section style={{ marginTop: 48 }} aria-labelledby="training-pathways">
      <p className={styles.eyebrow}>Learning built around the work</p>
      <h2 id="training-pathways">Role-based training pathways and practical outcomes</h2>
      <p>These examples draw on our <a href="/resources/role-based-compliance-training-matrix">role-based compliance training matrix</a>. They are starting points for a tailored programme; we agree the learning depth, delivery format and scope around your teams’ responsibilities.</p>
      <div className={styles.delivery}>
        {pathways.map((pathway) => (
          <article key={pathway.title}>
            <h3>{pathway.title}</h3>
            <p>{pathway.body}</p>
            <p><strong>Practice outcome:</strong> {pathway.outcome}</p>
          </article>
        ))}
      </div>
      <div className={styles.delivery}>
        <article>
          <h3>A sample scenario workshop</h3>
          <p>Our <a href="/resources/articles/what-makes-healthcare-compliance-training-effective">effective training guide</a> focuses on applying knowledge to real decisions. A suggested session sequence is:</p>
          <ol>
            <li>Identify the decision and the company procedure that applies.</li>
            <li>Work through a realistic example and compare the team’s reasoning.</li>
            <li>Agree the evidence, escalation route and follow-up learning needed.</li>
          </ol>
          <p>Use our <a href="/resources/pmcpa-cases">PMCPA case library</a> to explore topics such as social media, certification and prescribing information. Read the linked official case report before drawing conclusions; each ruling depends on its facts and applicable Code.</p>
        </article>
        <aside className={styles.priorities}>
          <h3>Plan, assess and refresh</h3>
          <p>Start with the <a href="/resources/checklists/pharma-compliance-readiness-checklist">Pharma Compliance Readiness Checklist</a>, then use the training matrix to assign topics, learning depth, owners and assessment methods.</p>
          <p>Record module versions, completion, assessment outcomes and follow-up actions. Review recurring errors, submission quality and escalation routes. Refresh learning when roles, procedures or monitoring findings change; attendance alone does not demonstrate practical competence.</p>
          <p>Connect learning to <a href="/services/governance-assurance/fmv-consulting">FMV decisions</a>, <a href="/services/governance-assurance/sop-policy-development">SOP roll-out</a> and <a href="/services/governance-assurance/pharma-risk-assessment">risk assessment</a>. Use findings from <a href="/services/governance-assurance/pharma-compliance-audits">audits</a> and <a href="/services/governance-assurance/pharma-compliance-monitoring">monitoring</a> to identify where further practice is needed.</p>
        </aside>
      </div>
    </section>
  );
}

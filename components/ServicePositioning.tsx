import { servicePositioning } from "../data/service-positioning";
import { serviceFrameworks } from "../data/service-frameworks";
import styles from "./ServicePositioning.module.css";

export function ServiceContext({ path }: { path: string }) {
  const entry = servicePositioning[path];
  if (!entry) return null;
  return <section className={`${styles.section} section-pad`} aria-label="Service approach and audience">
    <div className={styles.grid}>
      <div><p className="section-kicker">The challenge</p><h2>{entry.problemTitle}</h2><p>{entry.problem}</p></div>
      <div><h3>Who this service is for</h3><p>{entry.audience}</p><h3>How delivery works</h3><p>{entry.delivery}</p></div>
    </div>
  </section>;
}

export function ServiceEvidence({ path }: { path: string }) {
  const entry = servicePositioning[path];
  if (!entry) return null;
  return <section className={`${styles.section} section-pad`} aria-label="Eunomia expertise and related work">
    <div className={styles.grid}>
      <div><p className="section-kicker">Why Eunomia</p><h2>Expertise connected to delivery</h2><p>{entry.difference}</p><a className={styles.link} href="/team">Meet your compliance specialists →</a></div>
      <article className={styles.evidence}><p className="section-kicker">{entry.evidenceLabel}</p><h3>{entry.evidenceTitle}</h3><p>{entry.evidence}</p><a className={styles.link} href={entry.href}>Read the case study →</a></article>
    </div>
  </section>;
}

export function ServiceFrameworksSection({ path }: { path: string }) {
  const entry = serviceFrameworks[path];
  if (!entry) return null;
  return <>
    <section className={`${styles.section} ${styles.alt} section-pad`} aria-labelledby="engagement-steps-title">
      <p className="section-kicker">How an engagement runs</p>
      <h2 id="engagement-steps-title">From scope to working process</h2>
      <ol className={styles.steps}>{entry.steps.map((s, i) => <li key={s.title}><span>{String(i + 1).padStart(2, "0")}</span><h3>{s.title}</h3><p>{s.body}</p></li>)}</ol>
    </section>
    <section className={`${styles.section} section-pad`} aria-labelledby="frameworks-title">
      <div className={styles.grid}>
        <div>
          <p className="section-kicker">The rules behind this service</p>
          <h2 id="frameworks-title">Frameworks we work to</h2>
          <p>{entry.intro}</p>
          <h3>Start here</h3>
          <ul className={styles.resources}>{entry.resources.map(r => <li key={r.href}><a className={styles.link} href={r.href}>{r.label} →</a></li>)}</ul>
        </div>
        <div className={styles.frameworks}>
          {entry.frameworks.map(f => <article key={f.href}><h3>{f.title}</h3><p>{f.body}</p><a className={styles.link} href={f.href} target="_blank" rel="noreferrer">Official source: {f.label}</a></article>)}
          <p className={styles.note}>Informational summary, not legal advice. Sources checked September 2026.</p>
        </div>
      </div>
    </section>
  </>;
}

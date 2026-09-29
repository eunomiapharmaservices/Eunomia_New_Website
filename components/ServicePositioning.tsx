import { servicePositioning } from "../data/service-positioning";
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

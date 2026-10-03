import { servicePositioning } from "../data/service-positioning";
import { serviceFrameworks } from "../data/service-frameworks";
import { getUi, localHref } from "../lib/i18n";
import { localized } from "../lib/content";
import type { Locale } from "../data/i18n/locales";
import styles from "./ServicePositioning.module.css";

export function ServiceContext({ path, locale }: { path: string; locale?: Locale }) {
  const t = getUi(locale);
  const entry = localized("service-positioning", locale, servicePositioning)[path];
  if (!entry) return null;
  return <section className={`${styles.section} section-pad`} aria-label={t("ariaContext")}>
    <div className={styles.grid}>
      <div><p className="section-kicker">{t("challengeKicker")}</p><h2>{entry.problemTitle}</h2><p>{entry.problem}</p></div>
      <div><h3>{t("whoFor")}</h3><p>{entry.audience}</p><h3>{t("howDelivery")}</h3><p>{entry.delivery}</p></div>
    </div>
  </section>;
}

export function ServiceEvidence({ path, locale }: { path: string; locale?: Locale }) {
  const t = getUi(locale);
  const entry = localized("service-positioning", locale, servicePositioning)[path];
  if (!entry) return null;
  return <section className={`${styles.section} section-pad`} aria-label={t("ariaEvidence")}>
    <div className={styles.grid}>
      <div><p className="section-kicker">{t("whyKicker")}</p><h2>{t("expertiseTitle")}</h2><p>{entry.difference}</p><a className={styles.link} href={localHref(locale, "/team")}>{t("meetSpecialists")}</a></div>
      <article className={styles.evidence}><p className="section-kicker">{entry.evidenceLabel}</p><h3>{entry.evidenceTitle}</h3><p>{entry.evidence}</p><a className={styles.link} href={localHref(locale, entry.href)}>{t("readCase")}</a></article>
    </div>
  </section>;
}

export function ServiceFrameworksSection({ path, locale }: { path: string; locale?: Locale }) {
  const t = getUi(locale);
  const entry = localized("service-frameworks", locale, serviceFrameworks)[path];
  if (!entry) return null;
  return <>
    <section className={`${styles.section} ${styles.alt} section-pad`} aria-labelledby="engagement-steps-title">
      <p className="section-kicker">{t("stepsKicker")}</p>
      <h2 id="engagement-steps-title">{t("stepsTitle")}</h2>
      <ol className={styles.steps}>{entry.steps.map((s, i) => <li key={s.title}><span>{String(i + 1).padStart(2, "0")}</span><h3>{s.title}</h3><p>{s.body}</p></li>)}</ol>
    </section>
    <section className={`${styles.section} section-pad`} aria-labelledby="frameworks-title">
      <div className={styles.grid}>
        <div>
          <p className="section-kicker">{t("rulesKicker")}</p>
          <h2 id="frameworks-title">{t("frameworksTitle")}</h2>
          <p>{entry.intro}</p>
          <h3>{t("startHere")}</h3>
          <ul className={styles.resources}>{entry.resources.map(r => <li key={r.href}><a className={styles.link} href={localHref(locale, r.href)}>{r.label} →</a></li>)}</ul>
        </div>
        <div className={styles.frameworks}>
          {entry.frameworks.map(f => <article key={f.href}><h3>{f.title}</h3><p>{f.body}</p><a className={styles.link} href={f.href} target="_blank" rel="noreferrer">{t("officialSource", { label: f.label })}</a></article>)}
          <p className={styles.note}>{t("infoNote")}</p>
        </div>
      </div>
    </section>
  </>;
}

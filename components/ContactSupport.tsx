import copy from "../data/i18n/contact-support.json";
import type { Locale } from "../data/i18n/locales";
import { localHref } from "../lib/i18n";
import styles from "./ComplianceDecisionGuide.module.css";
export function ContactSupport({locale = "en"}: {locale?: Locale}) {
  const c=copy[locale];
  const href=(path:string)=>localHref(locale,path);
  return <section className={`${styles.section} section-pad`} aria-labelledby="contact-support-title">
    <p className="section-kicker">{c[0]}</p><h2 id="contact-support-title">{c[1]}</h2><p>{c[2]}</p>
    <div className={styles.grid}><div><h3>{c[3]}</h3><p>{c[4]}</p></div><div><h3>{c[5]}</h3><p>{c[6]} <a href={href("/team")}>{c[7]}</a> {c[8]} <a href={href("/services")}>{c[9]}</a> {c[10]}</p></div></div>
    <p>{c[11]} <a href={href("/resources/checklists/pharma-compliance-readiness-checklist")}>{c[12]}</a> {c[13]} <a href={href("/resources")}>{c[14]}</a>{locale === "ja" ? "をご覧ください。" : locale === "zh-CN" ? "。" : "."}</p>
  </section>;
}

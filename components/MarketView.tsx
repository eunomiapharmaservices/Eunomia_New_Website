import styles from "./MarketView.module.css";
import { FileCheck2, Globe2, Scale, ShieldCheck } from "lucide-react";
import { ServiceSubpage } from "./ServiceSubpage";
import type { Market } from "../data/markets";
import type { Locale } from "../data/i18n/locales";
import { getUi, localHref } from "../lib/i18n";

const ICONS = [<ShieldCheck key="a" />, <Scale key="b" />, <Globe2 key="c" />, <FileCheck2 key="d" />];

export function MarketView({ market, locale }: { market: Market; locale?: Locale }) {
  const t = getUi(locale);
  const country = market.country;
  const [rulesBefore, rulesAfter] = t("mRulesTitle", { country: "\u0000" }).split("\u0000");

  return (
    <ServiceSubpage
      locale={locale}
      servicePath={`/markets/${market.slug}`}
      heading={market.title}
      kicker={t("marketKicker", { country })}
      title={t("marketTagline")}
      serviceTitleFirst
      accent="green"
      intro={market.intro}
      serviceImage={{ src: "/market-representation.png", alt: t("marketImgAlt", { country }) }}
      services={[
        t("mScope1"),
        t("mScope2"),
        t("mScope3"),
        t("mScope4"),
        t("mScope5"),
        ...(market.lead ? [t("mScopeLead")] : [t("mScopeNoLead")]),
      ]}
      outcomes={[
        t("mOutcome1", { country }),
        market.lead ? t("mOutcomeLead") : t("mOutcomeNoLead"),
        t("mOutcome3"),
      ]}
      lead={market.lead ? { name: market.lead.name, role: market.lead.role, image: market.lead.image } : undefined}
      heroDetail={market.approach && (
        <section className={styles.approach} aria-label={t("mAria", { country })}>
          <div className={styles.overview}>
            <article className={styles.audience}>
              <p className={styles.eyebrow}>{t("mEyebrow1")}</p>
              <h2>{t("mWhoFor")}</h2>
              <p>{market.approach.audience}</p>
            </article>
            <article className={styles.challenge}>
              <h2>{t("mChallenge", { country })}</h2>
              <p>{market.approach.challenge}</p>
            </article>
          </div>
          <div className={styles.delivery}>
            <article>
              <p className={styles.eyebrow}>{t("mEyebrow2")}</p>
              <h2>{t("mHowHelp")}</h2>
              <p>{market.approach.delivery}</p>
            </article>
            <aside className={styles.priorities}>
              <h3>{t("mPriorities")}</h3>
              <ul>{market.approach.priorities.map(item => <li key={item}>{item}</li>)}</ul>
            </aside>
          </div>
          <nav className={styles.related} aria-label={t("mRelatedAria")}>
            <h3>{t("mExplore")}</h3>
            <div>
              <a href={localHref(locale, "/services/governance-assurance")}>{t("mProgDesign")} <span aria-hidden="true">↗</span></a>
              <a href={localHref(locale, "/services/shared-services")}>{t("mShared")} <span aria-hidden="true">↗</span></a>
              <a href={localHref(locale, "/services/automation-of-compliance-operations")}>{t("mAutomation")} <span aria-hidden="true">↗</span></a>
            </div>
          </nav>
          <a className={styles.checklist} href={localHref(locale, "/resources/checklists/pharma-compliance-readiness-checklist")}>{t("mChecklist")} <span aria-hidden="true">→</span></a>
        </section>
      )}
      detailSection={
        <section className="mandates section-pad" id="rules">
          <div className="mandate-intro">
            <p className="section-kicker">{t("mRulesKicker", { country })}</p>
            <h2>
              {rulesBefore}<em>{country}</em>{rulesAfter}
            </h2>
            <p>
              {t("mRulesIntro")}
            </p>
          </div>
          <div className="mandate-list">
            {market.rules.map((rule, i) => (
              <article key={rule.title}>
                <span>{ICONS[i % ICONS.length]}</span>
                <div>
                  <h3>{rule.title}</h3>
                  <p>{rule.body}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mandate-sources">
            <h3>{t("mPrimaryRefs")}</h3>
            <div className="source-links">
              {market.sources.map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
          {market.lead && <div className="market-lead-bio">
            <p className="section-kicker">{t("mLocalPartner")}</p>
            <p>{market.lead.bio}</p>
          </div>}
          <p className="legal-note">
            {t("mLegalNote")}
          </p>
        </section>
      }
      faqs={market.faqs}
    />
  );
}

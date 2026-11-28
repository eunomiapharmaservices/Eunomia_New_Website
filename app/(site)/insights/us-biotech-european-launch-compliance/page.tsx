import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../../../components/SiteChrome";
import { StructuredData } from "../../../../components/StructuredData";
import {
  europeanLaunchCaseStudy,
  launchComparisons,
  launchMarkets,
  launchSources,
  launchSteps,
} from "../../../../data/european-launch-case-study";
import { SITE_NAME, SITE_URL, withSocial } from "../../../../lib/seo";
import styles from "./LaunchCaseStudy.module.css";

const { path, title, metaTitle, description } = europeanLaunchCaseStudy;
const url = SITE_URL + path;
const published = "2026-11-28";
const contact = "/contact?service=European%20market%20entry%20compliance%20support";

export const metadata: Metadata = withSocial(path, {
  title: metaTitle,
  description,
  alternates: { canonical: url },
  openGraph: { type: "article", publishedTime: published },
}, "article");

export default function EuropeanLaunchCaseStudy() {
  return (
    <main>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": url + "#article",
        headline: title,
        description,
        url,
        mainEntityOfPage: url,
        datePublished: published,
        inLanguage: "en-GB",
        author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
        publisher: { "@id": SITE_URL + "/#organization" },
      }} />
      <SiteHeader />
      <article className="standalone-resource">
        <header className="standalone-resource-header section-pad">
          <a className="back-link" href="/entering-europe">European market entry</a>
          <p className="section-kicker">Illustrative case study · <time dateTime={published}>28 November 2026</time></p>
          <h1>{title}</h1>
          <p className={styles.lede}>A US biotech is preparing its first European launch across the UK, France, Germany, Italy, Spain and Belgium. Eunomia would help adapt its US playbook for promotion, materials review and transparency to each market before launch.</p>
        </header>

        <div className={styles.body}>
          <section aria-labelledby="launch-changes">
            <h2 id="launch-changes">What changes when a US biotech launches in Europe?</h2>
            <p>Hold branded consumer advertising for prescription medicines, add market-specific approvals to the existing materials review process, and set up payment reporting for each country. Test those controls on the first planned activities before releasing assets or confirming engagements.</p>
            <div className={styles.comparisons}>
              {launchComparisons.map(({ area, us, europe }) => (
                <div className={styles.comparison} key={area}>
                  <h3>{area}</h3>
                  <dl>
                    <div><dt>How the US team works</dt><dd>{us}</dd></div>
                    <div><dt>What the European launch needs</dt><dd>{europe}</dd></div>
                  </dl>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="launch-markets">
            <h2 id="launch-markets">Six markets, different release checks</h2>
            <p>The team plans a clinician-facing launch deck, paid advisory boards and congress sponsorship. Each market changes the review checklist, the approval route or when the team can proceed.</p>
            <div className={styles.markets}>
              {launchMarkets.map(({ country, action, detail, sources }) => (
                <section className={styles.market} key={country}>
                  <h3>{country}</h3>
                  <p className={styles.action}>{action}</p>
                  <p>{detail}</p>
                  <ul className={styles.marketSources} aria-label={`${country} sources`}>
                    {sources.map(({ label, href }) => <li key={href}><a href={href}>{label}</a></li>)}
                  </ul>
                </section>
              ))}
            </div>
            <aside className={styles.callout}>
              <h3>Use one launch calendar with a separate release decision for each market</h3>
              <p>Link the asset or activity ID to its market, local owner and required evidence. Record any certification, filing, authorisation or waiting period before release. Use the same activity ID to reconcile payments and local disclosure after the event.</p>
            </aside>
          </section>

          <section aria-labelledby="launch-controls">
            <h2 id="launch-controls">How Eunomia would make the controls work</h2>
            <p>Pilot one clinician deck and one paid HCP advisory board across the launch markets. Add congress sponsorship where planned. Build local rules into existing systems and test whether staff and agencies can follow them.</p>
            <ol className={styles.steps}>
              {launchSteps.map(({ title: step, detail }) => (
                <li key={step}><h3>{step}</h3><p>{detail}</p></li>
              ))}
            </ol>
            <aside className={styles.callout}>
              <h3>What the pilot would measure</h3>
              <p>Track whether campaigns received local clearance before release, whether HCP commitments cleared the required steps, and whether Finance can trace reportable payments from the ledger to the correct disclosure record.</p>
            </aside>
          </section>

          <section aria-labelledby="launch-sources">
            <h2 id="launch-sources">Sources</h2>
            <ul className={styles.sources}>
              {launchSources.map(({ label, href }) => <li key={href}><a href={href}>{label}</a></li>)}
            </ul>
            <p>Related services · <a href="/entering-europe">European market entry</a> · <a href="/services/automation-of-compliance-operations">Compliance automation</a> · <a href="/services/governance-assurance/pharma-compliance-monitoring">Compliance monitoring</a></p>
          </section>
        </div>

        <section className="contact section-pad">
          <h2>Planning your first European launch?</h2>
          <p>Tell us which markets you’re entering and what you plan to run first. We can scope the local reviews, workflows and monitoring your launch needs.</p>
          <a className="primary-button" href={contact}>Discuss your launch with Eunomia</a>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}

import type { Locale } from "../data/i18n/locales";
import { homeTranslator } from "../data/i18n/home-copy";
import { localHref } from "../lib/i18n";
import { FAQSchema } from "./FAQSchema";
import styles from "./HomeContent.module.css";

const homeFaqs = [
  { question: "What does Eunomia Pharma Services do?", answer: "Eunomia helps pharmaceutical and biotech organisations design and operate healthcare compliance programmes. Our four areas of support are programme design and implementation, compliance automation, local legal mandates and representation, and shared services for daily compliance operations." },
  { question: "Is Eunomia based in the UK or an international provider?", answer: "Eunomia is based in Woking, UK, and works with a network of compliance specialists across international markets. The countries, activities and local expertise required are agreed for each engagement." },
  { question: "Can we work with Eunomia without an established compliance team?", answer: "Yes. We can help define a first compliance framework and agree the operational support needed to use it. For an existing team, support can focus on a specific project, a capacity gap or a new market." },
  { question: "Do we need to buy all four services?", answer: "No. An engagement can focus on a single activity, market or workstream. Programme design, local support, shared services and automation can also be combined where the work requires them." },
  { question: "Does automation replace the people making compliance decisions?", answer: "No. Our approach uses technology to support workflows, consistency, visibility and records. Experienced people remain responsible for contextual judgement, escalation and accountable decisions." },
  { question: "How do we start working together?", answer: "Contact us with the activities, markets and challenges you want to address. We discuss your existing team and systems, agree the scope and responsibilities, and propose a delivery approach around those requirements." },
];

export function CompanyBrief({ locale = "en" }: { locale?: Locale }) {
const t = homeTranslator(locale);
const href = (path: string) => localHref(locale, path);
  return <section className={`${styles.section} section-pad`} aria-labelledby="company-brief-title">
    <div className={styles.split}>
      <div><p className="section-kicker">{t("Who we are")}</p><h2 id="company-brief-title">{t("Pharmaceutical compliance expertise. Practical operational support.")}</h2></div>
      <div><p>{t("Eunomia Pharma Services is a UK-based healthcare compliance provider supporting pharmaceutical and biotech organisations across international markets. We bring compliance specialists, operational teams and technical expertise together around the work your organisation needs to deliver.")}</p><p>{t("We can help build the framework, put it into practice and provide capacity to run it. Whether you are preparing for commercialisation, expanding into a new market or improving an established function, we agree the scope around your activities, people and systems.")}</p><a className={styles.link} href={href("/team")}>{t("Get to know Eunomia →")}</a></div>
    </div>
  </section>;
}

export function HomeCaseStudies({ locale = "en" }: { locale?: Locale }) {
const t = homeTranslator(locale);
const href = (path: string) => localHref(locale, path);
  return <section className={`${styles.section} section-pad`} aria-labelledby="home-case-studies-title">
    <p className="section-kicker">{t("Evidence from our work")}</p><h2 id="home-case-studies-title">{t("From compliance design to measurable outcomes")}</h2>
    <div className={styles.cards}>
      <article><p className="section-kicker">{t("Fair market value")}</p><h3>{t("A documented FMV framework across five markets")}</h3><p>{t("One methodology, objective tiering and rate cards for six stakeholder categories. The published engagement reports payments within the defensible FMV range increasing from 66% to 98%.")}</p><a className={styles.link} href={href("/resources/fair-market-value-methodology")}>{t("Explore the FMV case study →")}</a></article>
      <article><p className="section-kicker">{t("Shared services")}</p><h3>{t("Materials-review turnaround: five days to two")}</h3><p>{t("Specialist reviewers, defined workflows and operational support helped a UK pharmaceutical company strengthen its review service as it expanded across Europe.")}</p><a className={styles.link} href={href("/resources/materials-review-shared-service-case-study")}>{t("Explore the materials-review case study →")}</a></article>
    </div><p className={styles.note}>{t("Results reported in Eunomia’s published case studies relate to individual engagements, not guaranteed outcomes. Each case study explains its scope and evidence limitations.")}</p>
  </section>;
}

export function HomeAudience({ locale = "en" }: { locale?: Locale }) {
const t = homeTranslator(locale);
const href = (path: string) => localHref(locale, path);
  return <section className={`${styles.section} ${styles.audience} section-pad`} aria-labelledby="home-audience-title">
    <p className="section-kicker">{t("Who we support")}</p><h2 id="home-audience-title">{t("Built around the pharmaceutical and biotech industry")}</h2>
    <div className={styles.cards}>
      <article><h3>{t("Emerging biotechs and growing pharma")}</h3><p>{t("Establish responsibilities, practical controls and operational capacity as your business prepares for commercialisation or enters new markets.")}</p></article>
      <article><h3>{t("Established pharmaceutical organisations")}</h3><p>{t("Strengthen existing programmes, add specialist capacity and connect compliance operations across teams, systems and countries.")}</p></article>
    </div><p>{t("We work with compliance, legal, ethics and governance leaders, Medical Affairs teams, COOs and business operations.")}</p>
  </section>;
}

export function HomeFAQs({ locale = "en" }: { locale?: Locale }) {
const t = homeTranslator(locale);
const href = (path: string) => localHref(locale, path);
  return <section className={`${styles.section} section-pad`} aria-labelledby="home-faq-title">
    <FAQSchema faqs={homeFaqs.map(({question,answer}) => ({question: t(question), answer: t(answer)}))} /><p className="section-kicker">{t("Before we begin")}</p><h2 id="home-faq-title">{t("Working with Eunomia: your questions answered")}</h2>
    <div className="faq-list">{homeFaqs.map(({question, answer}) => <details key={question}><summary>{t(question)}</summary><p>{t(answer)}</p></details>)}</div>
    <a className={`primary-button ${styles.cta}`} href={href("/contact")}>{t("Discuss your compliance needs →")}</a>
  </section>;
}

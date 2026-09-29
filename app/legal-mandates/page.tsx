import { PageFaqs } from "../../components/PageFaqs";
import { legalFaqs } from "../../data/page-faqs";
import type { Metadata } from "next";
import { withSocial } from "../../lib/seo";
import { Bot, FileCheck2, Globe2, Scale, ShieldCheck, Sparkles, BookOpen, Landmark } from "lucide-react";
import { SiteHeader, SiteFooter } from "../../components/SiteChrome";
import { markets } from "../../data/markets";

export const metadata: Metadata = withSocial("/legal-mandates", {
  title: "Pharmaceutical Compliance Rules & Legal Mandates | Eunomia",
  description:
    "A guide to the laws and industry codes behind pharmaceutical compliance: medicines advertising, the EFPIA and ABPI Codes, anti-bribery, transparency and the EU AI Act.",
  alternates: { canonical: "https://www.eunomiapharmaservices.com/legal-mandates" },
});

// Each summary is drawn from the official source linked below it.
const rules = [
  {
    icon: <Scale />,
    title: "Promotion of medicines in the EU",
    body: "EU Directive 2001/83/EC, including the advertising and inducement framework for medicinal products.",
  },
  {
    icon: <Landmark />,
    title: "Promotion of medicines in the UK",
    body: "Part 14 of the Human Medicines Regulations 2012 sets the legal rules on advertising medicines in the UK. The MHRA's Blue Guide explains how it applies them.",
  },
  {
    icon: <BookOpen />,
    title: "Industry codes of practice",
    body: "The EFPIA Code sets European standards for relationships with healthcare professionals and patient organisations and for disclosure of payments, and national industry codes build on it. In the UK, the 2024 ABPI Code of Practice took effect on 1 October 2024 and is administered by the PMCPA, independently of the ABPI.",
  },
  {
    icon: <ShieldCheck />,
    title: "Anti-bribery and corruption",
    body: "UK Bribery Act 2010, including section 7 failure to prevent and its extraterritorial reach, plus the FCPA and OECD Anti-Bribery Convention.",
  },
  {
    icon: <Sparkles />,
    title: "Failure to prevent fraud",
    body: "The ECCTA 2023 offence has applied since 1 September 2025. It belongs in the assessment of pharmaceutical third-party controls.",
  },
  {
    icon: <Globe2 />,
    title: "National anti-gift and benefit laws",
    body: "Country-specific requirements, including the French anti-gift regime under Ordonnance 2017-49, Portuguese INFARMED rules, and relevant Greek, Turkish and Polish requirements.",
  },
  {
    icon: <FileCheck2 />,
    title: "Transparency and disclosure",
    body: "US Sunshine Act / Open Payments, France's Loi Bertrand, Danish and Portuguese registers, and the code-based EFPIA disclosure layer, published in the UK through the ABPI's Disclosure UK database.",
  },
  {
    icon: <Bot />,
    title: "EU AI Act and related regulation",
    body: "Regulation (EU) 2024/1689, read alongside the GDPR, the EU Data Act and, where AI forms part of a medical device or diagnostic, the MDR and IVDR.",
  },
];

const sources = [
  ["EU Directive 2001/83/EC", "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32001L0083"],
  ["Human Medicines Regulations, Part 14", "https://www.legislation.gov.uk/uksi/2012/1916/part/14"],
  ["MHRA Blue Guide", "https://www.gov.uk/government/publications/blue-guide-advertising-and-promoting-medicines"],
  ["EFPIA Code", "https://www.efpia.eu/relationships-code/the-efpia-code/"],
  ["2024 ABPI Code (PMCPA)", "https://www.pmcpa.org.uk/the-code/2024-abpi-code-of-practice-launched-with-a-new-constitution-and-procedure-for-the-pmcpa/"],
  ["UK Bribery Act, s.7", "https://www.legislation.gov.uk/ukpga/2010/23/section/7"],
  ["ECCTA guidance", "https://www.gov.uk/government/publications/offence-of-failure-to-prevent-fraud-introduced-by-eccta"],
  ["Disclosure UK", "https://www.abpi.org.uk/reputation/disclosure-uk/"],
  ["Open Payments", "https://www.cms.gov/priorities/key-initiatives/open-payments/law-policy"],
  ["EU AI Act", "https://eur-lex.europa.eu/eli/reg/2024/1689/oj"],
  ["GDPR", "https://eur-lex.europa.eu/eli/reg/2016/679/oj"],
];

export default function Legal() {
  return (
    <main>
      <SiteHeader />
      <section className="inner-hero legal-hero">
        <p className="section-kicker">Legal mandates</p>
        <h1>The rule behind<br /><em>the process…</em></h1>
        <p>Legal and self-regulatory requirements translated into ownership, review routes, evidence and reporting.</p>
      </section>
      <section className="legal-page section-pad">
        <p className="legal-intro">
          Pharmaceutical compliance rests on two layers: laws that apply to every
          company, and industry codes of practice set by trade associations.
          This page summarises the main frameworks we work with, with links to
          the official sources. Our country guides go into local detail.
        </p>
        {rules.map((rule) => (
          <article key={rule.title}>
            <span>{rule.icon}</span>
            <div>
              <h2>{rule.title}</h2>
              <p>{rule.body}</p>
            </div>
          </article>
        ))}
        <div className="legal-links">
          <h2>Country guides</h2>
          <div className="source-links">
            {markets.map((m) => (
              <a key={m.slug} href={`/markets/${m.slug}`}>{m.country}</a>
            ))}
          </div>
        </div>
        <div className="legal-links">
          <h2>Primary references</h2>
          <div className="source-links">
            {sources.map(([label, href]) => (
              <a key={href} href={href} target="_blank" rel="noreferrer">{label}</a>
            ))}
          </div>
        </div>
        <p className="legal-note">
          This overview is informational and does not constitute legal advice.
          Scope and application should be confirmed for the organisation, market,
          activity and counterparty concerned. Sources checked September 2026.
        </p>
        <p className="legal-cta">
          Need these rules turned into working controls? See{" "}
          <a href="/services/local-legal-mandates">Local Legal Mandates and Representation</a>{" "}
          or{" "}
          <a href="/services/governance-assurance">Healthcare Compliance Programme Design and Implementation</a>.
        </p>
      </section>
      <PageFaqs faqs={legalFaqs} title="Pharmaceutical compliance rules: common questions" />
      <SiteFooter />
    </main>
  );
}

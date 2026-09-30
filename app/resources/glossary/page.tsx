import type { Metadata } from "next";
import { withSocial } from "../../../lib/seo";
import { ReferencePage } from "../../../components/ReferencePage";
import { glossary } from "../../../data/reference-pages";

const PATH = "/resources/glossary";
const SITE = "https://www.eunomiapharmaservices.com";
const slug = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const terms = [...glossary].sort((a, b) => a.term.localeCompare(b.term));

export const metadata: Metadata = withSocial(PATH, {
  title: "Pharma Compliance Glossary: Key Terms Explained | Eunomia",
  description: "Plain-English definitions of pharmaceutical compliance terms: transfers of value, HCO, certification, signatory, Disclosure UK, methodology note, FMV, adequate procedures and more.",
  alternates: { canonical: `${SITE}${PATH}` },
});

export default function Page() {
  return (
    <ReferencePage
      path={PATH}
      kicker="Reference"
      updated="30 September 2026"
      title="Pharmaceutical compliance glossary"
      lead="Plain-English definitions of the terms that come up most in UK and European pharmaceutical compliance, each linked to a fuller guide or the official source."
      schema={{
        "@context": "https://schema.org",
        "@type": "DefinedTermSet",
        "@id": `${SITE}${PATH}#glossary`,
        name: "Pharmaceutical compliance glossary",
        url: `${SITE}${PATH}`,
        hasDefinedTerm: terms.map((t) => ({ "@type": "DefinedTerm", name: t.term, description: t.definition, url: `${SITE}${PATH}#${slug(t.term)}` })),
      }}
    >
      <nav className="glossary-index" aria-label="Glossary terms">
        {terms.map((t) => <a key={t.term} href={`#${slug(t.term)}`}>{t.term}</a>)}
      </nav>
      <dl className="glossary-list">
        {terms.map((t) => (
          <div key={t.term} id={slug(t.term)}>
            <dt>{t.term}</dt>
            <dd>{t.definition}{t.link && <> <a href={t.link.href} {...(t.link.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}>{t.link.label}</a></>}</dd>
          </div>
        ))}
      </dl>
      <p className="ref-note">Informational definitions, not legal advice. Sources checked 30 September 2026.</p>
    </ReferencePage>
  );
}

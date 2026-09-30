import type { Metadata } from "next";
import { withSocial } from "../../../lib/seo";
import { ReferencePage } from "../../../components/ReferencePage";
import { disclosureDeadlines } from "../../../data/reference-pages";

const PATH = "/resources/disclosure-deadlines";
export const metadata: Metadata = withSocial(PATH, {
  title: "Pharma Transparency Disclosure Deadlines by Country | Eunomia",
  description: "Transfer of value disclosure deadlines and platforms by country: EFPIA, UK Disclosure UK, Germany, Ireland, Spain, Italy, the Netherlands, Portugal, Sweden and France.",
  alternates: { canonical: `https://www.eunomiapharmaservices.com${PATH}` },
});

export default function Page() {
  return (
    <ReferencePage
      path={PATH}
      kicker="Reference"
      updated="30 September 2026"
      title="Transparency disclosure deadlines by country"
      lead="When and where pharmaceutical companies disclose transfers of value to healthcare professionals and organisations in the UK and Europe. Each row links to the official source; national rules can change, so check the source before each reporting cycle."
      faqs={[
        { question: "When must EFPIA disclosures be published?", answer: "Annually, within six months after the end of each calendar year. The EFPIA Code of Practice 2026 sets a common publication window of 20 to 30 June." },
        { question: "When is Disclosure UK published?", answer: "At the end of June. For 2026 data, companies submit by 31 March 2027 and publication is on 30 June 2027." },
        { question: "Which deadlines come earliest?", answer: "Portugal requires each benefit to be declared within 30 days of granting it. For annual reporting, UK companies submit data to Disclosure UK by 31 March and Dutch companies report to the Transparantieregister Zorg before 1 June." },
      ]}
    >
      <div className="ref-table-wrap">
        <table className="ref-table">
          <thead><tr><th>Market</th><th>Framework</th><th>Where</th><th>When</th><th>Source</th></tr></thead>
          <tbody>
            {disclosureDeadlines.map((d) => (
              <tr key={d.market}>
                <td><b>{d.market}</b>{d.guide && <><br /><a href={d.guide}>Country guide</a></>}</td>
                <td>{d.framework}</td>
                <td>{d.platform}</td>
                <td>{d.timing}</td>
                <td><a href={d.source.href} target="_blank" rel="noreferrer">{d.source.label}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="ref-note">Sources checked 30 September 2026. Informational summary, not legal advice. See also: <a href="/resources/articles/efpia-disclosure-requirements-template">EFPIA disclosure requirements</a> · <a href="/resources/articles/disclosure-uk-guide">Disclosure UK guide</a> · <a href="/resources/checklists/uk-eu-pharma-compliance-guide-2026">UK &amp; EU Pharma Compliance Guide 2026</a></p>
    </ReferencePage>
  );
}

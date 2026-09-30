import type { Metadata } from "next";
import { withSocial } from "../../../lib/seo";
import { ReferencePage } from "../../../components/ReferencePage";
import { pmcpaCases } from "../../../data/reference-pages";

const PATH = "/resources/pmcpa-cases";
const cases = [...pmcpaCases].sort((a, b) => Date.parse(b.completed) - Date.parse(a.completed));

export const metadata: Metadata = withSocial(PATH, {
  title: "PMCPA Case Library: Recent Completed Cases Summarised | Eunomia",
  description: "Short summaries of recent completed PMCPA cases under the ABPI Code: topic, company and clauses ruled in breach, each linked to the official case report.",
  alternates: { canonical: `https://www.eunomiapharmaservices.com${PATH}` },
});

export default function Page() {
  return (
    <ReferencePage
      path={PATH}
      kicker="Reference"
      updated="30 September 2026"
      title="PMCPA case library"
      lead={`One-line summaries of ${cases.length} recent completed PMCPA cases, with the clauses ruled in breach. Each links to the full case report on the PMCPA website, which is the authoritative record.`}
      faqs={[
        { question: "Where are PMCPA cases published?", answer: "On the PMCPA website, which publishes completed cases under the ABPI Code of Practice with the rulings and any sanctions." },
        { question: "What themes appear in recent cases?", answer: "In our sample, social media (including employees’ own posts), press releases, certification, prescribing information and whether company involvement was made clear. Our article on lessons from recent PMCPA cases covers them in detail." },
      ]}
    >
      <div className="ref-table-wrap">
        <table className="ref-table">
          <thead><tr><th>Case</th><th>Company</th><th>Completed</th><th>Topic</th><th>Clauses in breach</th></tr></thead>
          <tbody>
            {cases.map((c) => (
              <tr key={c.id}>
                <td><a href={c.href} target="_blank" rel="noreferrer">{c.id}</a><br /><small>{c.code} Code</small></td>
                <td>{c.company}</td>
                <td>{c.completed}</td>
                <td>{c.topic}</td>
                <td>{c.breach}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="ref-note">Summaries of published PMCPA case reports, checked 30 September 2026. Read the full report for each case; this is not legal advice. See <a href="/resources/articles/pmcpa-case-lessons-2026">lessons from recent PMCPA cases</a>.</p>
    </ReferencePage>
  );
}

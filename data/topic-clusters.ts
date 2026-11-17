// Pages that cover the same topic from different angles. Each states its own
// purpose and links to the others and to the service page, so search engines
// (and readers) can tell them apart instead of treating them as competitors.

export type ClusterPage = { href: string; label: string; purpose: string };
export type TopicCluster = {
  kicker: string;
  pages: ClusterPage[];
  service: { href: string; label: string; summary: string };
};

export const topicClusters: TopicCluster[] = [
  {
    kicker: "More on fair market value",
    pages: [
      { href: "/resources/articles/fair-market-value-fmv-in-healthcare-compliance", label: "Fair market value for HCP compensation", purpose: "The principles: why HCP fees face scrutiny and what makes them defensible." },
      { href: "/resources/fair-market-value-methodology", label: "FMV methodology case study", purpose: "How Eunomia built tiering and rate cards across five European markets." },
      { href: "/resources/hcp-fmv-assessment", label: "HCP FMV assessment guide and worksheet", purpose: "A practical guide and Excel worksheet for documenting a single assessment." },
    ],
    service: { href: "/services/governance-assurance/fmv-consulting", label: "FMV consulting services", summary: "Design, benchmark and document a defensible FMV framework with Eunomia." },
  },
  {
    kicker: "More on the EU AI Act",
    pages: [
      { href: "/resources/articles/eu-ai-act-pharma", label: "EU AI Act for pharma: what applies and when", purpose: "The overview: scope, timeline, AI literacy, prohibited practices and high-risk uses." },
      { href: "/insights/eu-ai-act-article-50-pharma-compliance", label: "EU AI Act Article 50 compliance guide", purpose: "The transparency duties in detail: AI disclosures, content marking and a governance action plan." },
    ],
    service: { href: "/services/automation-of-compliance-operations", label: "Automation of Compliance Operations", summary: "Govern AI and automation in compliance workflows with accountable human oversight." },
  },
];

export function clusterFor(href: string) {
  return topicClusters.find((cluster) => cluster.pages.some((page) => page.href === href));
}

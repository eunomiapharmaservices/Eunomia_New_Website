import { clusterFor } from "../data/topic-clusters";

// Links a page to the other pages in its topic cluster and to the service page.
export function TopicClusterLinks({ href }: { href: string }) {
  const cluster = clusterFor(href);
  if (!cluster) return null;
  const others = cluster.pages.filter((page) => page.href !== href);
  return (
    <>
      <aside className="article-related-reading">
        <p className="section-kicker">{cluster.kicker}</p>
        <ul>
          {others.map((page) => (
            <li key={page.href}>
              <a href={page.href}>{page.label}</a>
              <p>{page.purpose}</p>
            </li>
          ))}
        </ul>
      </aside>
      <aside className="article-related-service">
        <p className="section-kicker">Related service</p>
        <a href={cluster.service.href}>
          <strong>{cluster.service.label}</strong>
          <span>{cluster.service.summary}</span>
        </a>
      </aside>
    </>
  );
}

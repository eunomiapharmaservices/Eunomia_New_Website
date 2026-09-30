import styles from './EditorialEnhancement.module.css';
import entries from '../data/editorial-enhancements.json';

export function editorialEntry(slug: string) {
  return entries[slug as keyof typeof entries];
}

type Entry = NonNullable<ReturnType<typeof editorialEntry>>;

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
function formatDate(iso: string) {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

export function EditorialSummary({ entry }: { entry: Entry }) {
  return <section className={styles.summary} aria-label="Article overview">
    <p className={styles.credit}>Published by <a href="/team">Eunomia Pharma Services</a> · Updated <time dateTime={entry.updated}>{formatDate(entry.updated)}</time></p>
    <h2>{entry.question}</h2>
    <p>{entry.answer}</p>
    <h3>{entry.stepsHeading}</h3>
    <ol>{entry.steps.map(step => <li key={step}>{step}</li>)}</ol>
    <p className={styles.scope}>The practical steps above are Eunomia’s operational guidance. See the source notes below for the scope of the external references.</p>
  </section>;
}

export function EditorialSources({ entry }: { entry: Entry }) {
  return <section className={styles.sources} aria-label="Sources and further reading">
    <h2>Sources and scope</h2>
    <ul>{entry.sources.map(source => <li key={source.url}>
      <a href={source.url}>{source.title}</a><p>{source.context}</p>
    </li>)}</ul>
    <p>External sources accessed {formatDate(entry.updated)}. Check the applicable country rules and current source text for a specific engagement.</p>
    <h3>Put this into practice</h3>
    <ul>{entry.links.map(link => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}</ul>
  </section>;
}

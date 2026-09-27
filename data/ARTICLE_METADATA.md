# Article metadata

`article-seo.json` supplies search descriptions, Article structured data, Open Graph dates and the visible author/date line. Keep it in sync with `resource-articles.json` when adding articles.

- Publication dates preserve the imported WordPress `date` as a calendar date; no timezone is inferred from the original offset-free timestamps.
- The import contains no revision history. For those articles, `dateModified` starts at the publication date (the last known content date), not the migration or build date. Set it to the actual revision date when substantive content changes are made.
- The canonical AI article retains its 4 September 2025 publication date and uses the content of the 30 April 2026 republication, with that date as its modification date.
- Rashmi Papneja is the default author requested for this migration. Change an article's `author` to the actual expert's exact team name where appropriate; its Person ID and byline link are derived from that name. Do not infer authorship from a topic or an administrative WordPress account.
- The first ten rewritten descriptions cover AI, PMCPA guidance, audit readiness, risk assessment, transparency reporting mistakes, right-sized support, FMV, third-party risk, country accountability and effective training. These were selected for topic and service relevance, without Search Console traffic data. Each is 140–155 characters.
- Both the legacy root URL and the resource URL for the duplicate AI article return 301 to the short resource URL. Only the canonical article belongs in the data, resource listing and sitemap.

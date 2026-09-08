"use client";

import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";

export function ResourceSearch() {
  const [query, setQuery] = useState("");
  const [matches, setMatches] = useState<number | null>(null);

  useEffect(() => {
    const term = query.trim().toLowerCase();
    const cards = Array.from(
      document.querySelectorAll<HTMLElement>("[data-resource-search]"),
    );
    let visible = 0;

    cards.forEach((card) => {
      const isMatch =
        !term || (card.dataset.resourceSearch ?? "").toLowerCase().includes(term);
      card.hidden = !isMatch;
      if (isMatch) visible += 1;
    });

    setMatches(visible);
  }, [query]);

  return (
    <section className="resource-search section-pad" aria-label="Search resources">
      <div>
        <label htmlFor="resource-search">Search resources</label>
        <p>Search articles, webinars, case studies and working resources.</p>
      </div>
      <div className="resource-search-field">
        <Search aria-hidden="true" />
        <input
          id="resource-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by topic or title"
        />
        {query && (
          <button type="button" onClick={() => setQuery("")} aria-label="Clear search">
            <X aria-hidden="true" />
          </button>
        )}
      </div>
      {query && (
        <p className="resource-search-count" aria-live="polite">
          {matches === 1 ? "1 matching resource" : `${matches ?? 0} matching resources`}
        </p>
      )}
    </section>
  );
}

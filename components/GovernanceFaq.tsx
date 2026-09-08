"use client";
import { useState } from "react";
export function GovernanceFaq({ items }: { items: string[][] }) {
  const filters = [
    "All",
    "Programme design",
    "Audits & inspections",
    "Compliance training",
  ];
  const [active, setActive] = useState("All");
  const visible =
    active === "All" ? items : items.filter((x) => x[0] === active);
  return (
    <>
      <div className="faq-filters" aria-label="Filter governance FAQs">
        {filters.map((filter) => (
          <button
            type="button"
            className={active === filter ? "active" : ""}
            onClick={() => setActive(filter)}
            key={filter}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="faq-list">
        {visible.map(([group, question, answer]) => (
          <details key={question}>
            <summary>
              <span>{group}</span>
              {question}
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </>
  );
}

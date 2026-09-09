"use client";

import { useEffect, useId, useRef, useState } from "react";
import { compliancePartners, partnerId } from "../data/compliancePartners";

const partnerMarkers = [
  ["Rashmi Papneja", 49.1, 21.8],
  ["Xavier Lopez", 48.2, 28.7], ["Maria Diaz", 48.9, 29.5],
  ["Dr. Hans Joachim Hutt", 52.2, 24.2], ["Alexandre Guillaume", 50.2, 26.2],
  ["Jalmira Mulchande", 47.2, 29.6], ["Ilaria Franchini", 52.2, 29.8],
  ["Dunja Hu", 52.5, 26.7], ["Miroslaw Zapala", 54.1, 23.9],
  ["Karen Glade", 23, 29], ["Eduordo Nogueira", 34.8, 60.5],
  ["Mohamed Afir", 60, 35], ["Nishant Chaturvedi", 76.5, 38.5],
  ["Rohit Kumar", 80, 48.5],
] as const;

const partnerByName = new Map(compliancePartners.map((partner) => [partner.name, partner]));

export function CoverageMap({ showOfficers = true }: { showOfficers?: boolean }) {
  const [active, setActive] = useState<string | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const cardId = useId();
  const selected = active ? partnerByName.get(active) : undefined;

  useEffect(() => {
    if (!active) return;
    const dismiss = (event: PointerEvent) => {
      if (event.target instanceof Node && !root.current?.contains(event.target)) setActive(null);
    };
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, [active]);
  return (
    <div
      ref={root}
      onKeyDown={(event) => { if (event.key === "Escape") setActive(null); }}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setActive(null); }}
      onPointerLeave={(event) => { if (event.pointerType === "mouse" && !event.currentTarget.contains(document.activeElement)) setActive(null); }}
      className={`coverage-map${showOfficers ? " coverage-map-officers" : ""}`}
      aria-label="World map showing Eunomia team member locations"
      role={showOfficers ? undefined : "img"}
    >
      <div className="map-instructions">
        <strong>Hover over Europe to zoom in. Hover over a red dot to meet the team.</strong>
        <span>On mobile, tap “Zoom Europe”, then tap a red dot. Red dots show team member locations.</span>
        <div className="map-zoom-controls">
          <button type="button" aria-pressed={!zoomed} onClick={() => { setZoomed(false); setActive(null); }}>World view</button>
          <button type="button" aria-pressed={zoomed} onClick={() => { setZoomed(true); setActive(null); }}>Zoom Europe</button>
        </div>
      </div>
      <div className="map-stage" onPointerMove={(event) => {
          if (event.pointerType !== "mouse" || zoomed) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          const x = (event.clientX - bounds.left) / bounds.width;
          const y = (event.clientY - bounds.top) / bounds.height;
          if (x > .43 && x < .59 && y > .12 && y < .35) { setActive(null); setZoomed(true); }
        }}
        onPointerLeave={(event) => { if (event.pointerType === "mouse") setZoomed(false); }}>
        <div className="map-viewport"><div className={`map-geography${zoomed ? " is-zoomed" : ""}`}>

        <img className="world-map-base" src="/world-map.svg" alt="" aria-hidden="true" />
        {showOfficers && partnerMarkers.map(([name, left, top]) => {
          const partner = partnerByName.get(name);
          if (!partner) return null;
          return (
            <button
              type="button"
              className={`market-marker partner-dot${active === name ? " is-active" : ""}`}
              style={{ left: `${left}%`, top: `${top}%` }}
              aria-label={`${partner.name} — ${partner.country}. Show team member`}
              aria-expanded={active === name}
              aria-controls={active === name ? cardId : undefined}
              onPointerEnter={(event) => { if (event.pointerType === "mouse") setActive(name); }}
              onFocus={() => { setActive(name); setZoomed(left > 43 && left < 59 && top < 35); }}
              onClick={() => setActive(name)}
              key={partner.name}
            >
              <i aria-hidden="true"></i>
            </button>
          );
        })}
        </div></div>
      </div>
        {showOfficers && selected && (
          <aside id={cardId} className="map-partner-card" aria-label={`${selected.name}, team member`}>
            <button type="button" className="map-card-close" aria-label="Close team member card" onClick={() => setActive(null)}>×</button>
            {selected.image
              ? <img className="map-partner-photo" src={selected.image} alt={selected.name} />
              : <span className="map-partner-initials" aria-hidden="true">{selected.name.split(" ").filter((part) => !part.endsWith(".")).map((part) => part[0]).slice(0, 2).join("")}</span>}
            <div className="map-partner-copy">
              <span className="map-partner-country">{selected.country}</span>
              <h3>{selected.name}</h3>
              <p>{selected.role}</p>
              <a href={`/team#${partnerId(selected.name)}`}>View team profile →</a>
            </div>
          </aside>
        )}
      {showOfficers && <label className="map-partner-picker">
        <span>Explore our team</span>
        <select value={active || ""} onChange={(event) => { const marker = partnerMarkers.find(([name]) => name === event.target.value); setActive(event.target.value || null); setZoomed(Boolean(marker && marker[1] > 43 && marker[1] < 59 && marker[2] < 35)); }}>
          <option value="">Choose a team member</option>
          {partnerMarkers.map(([name]) => <option value={name} key={name}>{partnerByName.get(name)?.country} — {name}</option>)}
        </select>
      </label>}
      <div className="map-caption">
        <strong>Service coverage</strong>
        {showOfficers && <span>Hover or tap a team marker to meet your compliance partner.</span>}
        <span>Europe · MENA · US · Brazil &amp; South America · India · Southeast Asia · Japan</span>
      </div>
    </div>
  );
}

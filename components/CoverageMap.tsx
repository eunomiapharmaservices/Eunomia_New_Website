"use client";

import { useEffect, useId, useRef, useState } from "react";
import { compliancePartners, partnerId } from "../data/compliancePartners";

const europeanMarkets = [
  ["Ireland", 47.7, 22.6], ["United Kingdom", 49.1, 21.8],
  ["Portugal", 47.2, 29.6], ["Spain", 48.5, 29.1],
  ["France", 50.2, 26.2], ["Belgium", 50.9, 23.9],
  ["Netherlands", 51.2, 22.8], ["Luxembourg", 51.2, 24.8],
  ["Germany", 52.2, 24.2], ["Denmark", 52.1, 20.9],
  ["Norway", 51.5, 16.8], ["Sweden", 53.1, 17.3],
  ["Finland", 54.8, 17.2], ["Switzerland", 51.2, 27.1],
  ["Austria", 52.5, 26.7], ["Italy", 52.2, 29.8],
  ["Poland", 54.1, 23.9], ["Czechia", 53.2, 25.3],
  ["Hungary", 53.7, 27.2], ["Romania", 55.3, 28.1],
  ["Greece", 54.1, 32.1], ["Croatia", 53.1, 28.6],
  ["Slovenia", 52.6, 27.8], ["Bulgaria", 55.2, 30.4],
] as const;

const regionalMarkets = [
  ["United States", 23, 29, "label-right"],
  ["Brazil & South America", 34.8, 60.5, "label-right"],
  ["MENA", 60, 35, "label-right"],
  ["India & South Asia", 72, 38, "label-right"],
  ["Singapore & SE Asia", 79, 49, "label-left"],
  ["Japan", 86.1, 29.8, "label-left"],
] as const;

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
  const root = useRef<HTMLDivElement>(null);
  const cardId = useId();
  const selected = active ? partnerByName.get(active) : undefined;
  const coordinates = partnerMarkers.find(([name]) => name === active);
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
      aria-label="World map showing Eunomia service coverage across Europe, MENA, the United States, Brazil and South America, India, Southeast Asia and Japan"
      role={showOfficers ? undefined : "img"}
    >
      <div className="map-stage">
        <img className="world-map-base" src="/world-map.svg" alt="" aria-hidden="true" />
        {europeanMarkets.map(([label, left, top]) => {
          return (
            <span className="market-marker is-country" style={{ left: `${left}%`, top: `${top}%` }} aria-label={label} key={label}>
              <i></i>
            </span>
          );
        })}
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
              onFocus={() => setActive(name)}
              onClick={() => setActive(name)}
              key={partner.name}
            >
              <i aria-hidden="true"></i>
            </button>
          );
        })}
        {regionalMarkets.map(([label, left, top, side]) => (
          <div className={`market-marker coverage-region ${side}`} style={{ left: `${left}%`, top: `${top}%` }} key={label}>
            <i></i><b>{label}</b>
          </div>
        ))}
        {showOfficers && selected && coordinates && (
          <aside id={cardId} className="map-partner-card" aria-label={`${selected.name}, team member`}
            style={{ left: `clamp(8px, calc(${coordinates[1]}% - 164px), calc(100% - 336px))`, top: `calc(${coordinates[2]}% + 20px)` }}>
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
      </div>
      {showOfficers && <label className="map-partner-picker">
        <span>Explore our team</span>
        <select value={active || ""} onChange={(event) => setActive(event.target.value || null)}>
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

"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

// Desktop-only, once per session, only when the pointer leaves through the
// top of the window. Never shown on touch devices (Google's intrusive
// interstitial guidance applies to mobile).
export function ExitIntentOffer({ href, title }: { href: string; title: string }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine) and (min-width: 1024px)").matches) return;
    let seen = false;
    try { seen = sessionStorage.getItem("eunomia-exit-offer") === "1"; } catch {}
    if (seen) return;
    const armedAt = Date.now();
    const onLeave = (e: MouseEvent) => {
      if (e.clientY > 0 || Date.now() - armedAt < 15000) return;
      setOpen(true);
      try { sessionStorage.setItem("eunomia-exit-offer", "1"); } catch {}
      document.removeEventListener("mouseout", onLeave);
    };
    document.addEventListener("mouseout", onLeave);
    return () => document.removeEventListener("mouseout", onLeave);
  }, []);
  if (!open) return null;
  return (
    <div className="exit-offer" role="dialog" aria-modal="false" aria-labelledby="exit-offer-title">
      <button type="button" className="exit-offer-close" onClick={() => setOpen(false)} aria-label="Close"><X /></button>
      <p className="section-kicker">Before you go</p>
      <h2 id="exit-offer-title">{title}</h2>
      <p>A free, practical checklist you can use with your team.</p>
      <a className="primary-button" href={href}>Get the checklist</a>
    </div>
  );
}

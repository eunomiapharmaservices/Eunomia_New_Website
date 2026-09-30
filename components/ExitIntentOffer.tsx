"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

// Once per session. Desktop: when the pointer leaves through the top of the
// window. Mobile and tablet: a small bottom banner (not a full-screen
// interstitial, per Google's mobile guidance) after 60% of the page is read.
export function ExitIntentOffer({ href, title }: { href: string; title: string }) {
  const [open, setOpen] = useState(false);
  const [banner, setBanner] = useState(false);
  useEffect(() => {
    let seen = false;
    try { seen = sessionStorage.getItem("eunomia-exit-offer") === "1"; } catch {}
    if (seen) return;
    if (!window.matchMedia("(pointer: fine) and (min-width: 1024px)").matches) {
      const onScroll = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (max <= 0 || window.scrollY / max < 0.6) return;
        setBanner(true);
        try { sessionStorage.setItem("eunomia-exit-offer", "1"); } catch {}
        window.removeEventListener("scroll", onScroll);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
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
  if (banner) return (
    <div className="scroll-offer" role="region" aria-label="Free resource">
      <a href={href}><span>Free download</span><b>{title}</b></a>
      <button type="button" onClick={() => setBanner(false)} aria-label="Dismiss"><X /></button>
    </div>
  );
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

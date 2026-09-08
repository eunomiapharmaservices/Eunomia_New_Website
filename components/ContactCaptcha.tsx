"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

type Turnstile = {
  render: (element: HTMLElement, options: Record<string, unknown>) => string;
  remove: (id: string) => void;
};
declare global { interface Window { turnstile?: Turnstile } }

export function ContactCaptcha({ onToken }: { onToken: (token: string) => void }) {
  const container = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState("");
  const sitekey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    if (!ready || !sitekey || !container.current || !window.turnstile) return;
    const api = window.turnstile;
    const id = api.render(container.current, {
      sitekey, action: "contact", theme: "light", size: "flexible",
      callback: (token: string) => { setError(""); onToken(token); },
      "expired-callback": () => onToken(""),
      "error-callback": () => { onToken(""); setError("Security check unavailable. Please reload the page to try again."); },
    });
    return () => { api.remove(id); onToken(""); };
  }, [ready, sitekey, onToken]);

  if (!sitekey) return <p role="alert">Online enquiries are temporarily unavailable. Please use the contact details alongside.</p>;
  return <div aria-label="Security check">
    <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
      strategy="afterInteractive" onReady={() => setReady(true)}
      onError={() => { onToken(""); setError("Security check could not load. Please reload the page to try again."); }} />
    <div ref={container} style={{ minHeight: 65 }} />
    {error && <p role="alert">{error}</p>}
    <p className="form-note">Security check provided by Cloudflare. <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noreferrer">Privacy</a> · <a href="https://www.cloudflare.com/website-terms/" target="_blank" rel="noreferrer">Terms</a></p>
  </div>;
}

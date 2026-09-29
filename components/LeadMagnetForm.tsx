"use client";
import { FormEvent, useRef, useState } from "react";
import { Download } from "lucide-react";
import { trackConversion } from "../lib/conversion-tracking";
import { ContactCaptcha } from "./ContactCaptcha";

// Sends the request through the existing enquiry pipeline (/api/contact),
// so each download reaches hello@eunomiapharmaservices.com as a lead.
export function LeadMagnetForm({ title, file, resourceSlug, noun = "checklist" }: { title: string; file: string; resourceSlug: string; noun?: string }) {
  const [token, setToken] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [attempt, setAttempt] = useState(0);
  const [done, setDone] = useState(false);
  const requestId = useRef("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    if (!token) { setError("Please complete the security check."); return; }
    const data = new FormData(event.currentTarget);
    if (!requestId.current) requestId.current = crypto.randomUUID();
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") || ""),
          company: String(data.get("company") || ""),
          email: String(data.get("email") || ""),
          phone: "",
          question: `Resource download: ${title}\nRole: ${String(data.get("role") || "Not given")}`,
          consent: data.get("consent") === "on",
          token,
          requestId: requestId.current,
        }),
        signal: AbortSignal.timeout(30000),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error(result.error || "Something went wrong. Please try again.");
      setDone(true);
      trackConversion("resource_requested", resourceSlug);
    } catch (failure) {
      setError(failure instanceof Error && failure.name !== "TimeoutError" && failure.name !== "TypeError"
        ? failure.message
        : "We could not confirm your request. Please complete the security check and try again.");
    } finally {
      setToken("");
      setAttempt((n) => n + 1);
      setBusy(false);
    }
  }

  if (done) {
    return (
      <div className="lead-form lead-form-done" role="status">
        <h2>Your {noun} is ready</h2>
        <p>Thank you. Download it below. We may follow up once to ask whether it was useful.</p>
        <a className="primary-button" href={file} download onClick={() => trackConversion("resource_download_clicked", resourceSlug)}>
          <Download aria-hidden="true" /> Download the PDF
        </a>
      </div>
    );
  }

  return (
    <form className="lead-form enquiry-form" onSubmit={submit}>
      <h2>Get the free {noun}</h2>
      <label><span className="field-label">Your name <b aria-hidden="true">*</b></span><input disabled={busy} name="name" required maxLength={120} autoComplete="name" /></label>
      <label><span className="field-label">Work email <b aria-hidden="true">*</b></span><input disabled={busy} name="email" type="email" required maxLength={254} autoComplete="email" /></label>
      <label><span className="field-label">Company <b aria-hidden="true">*</b></span><input disabled={busy} name="company" required maxLength={160} autoComplete="organization" /></label>
      <label><span className="field-label">Role (optional)</span><input disabled={busy} name="role" maxLength={120} autoComplete="organization-title" /></label>
      <label className="consent">
        <input disabled={busy} type="checkbox" name="consent" required />
        <span>I agree that Eunomia may use these details to send me the {noun} and follow up about it, as set out in the <a href="/privacy">privacy notice</a>.</span>
      </label>
      <ContactCaptcha key={attempt} onToken={setToken} />
      {error && <p role="alert" className="form-error">{error}</p>}
      <button className="primary-button" type="submit" disabled={busy}>{busy ? "Sending…" : `Get the ${noun}`}</button>
    </form>
  );
}

"use client";
import { FormEvent, useRef, useState } from "react";
import { ContactCaptcha } from "./ContactCaptcha";
export function ContactForm() {
  const [token, setToken] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [attempt, setAttempt] = useState(0);
  const submitting = useRef(false);
  const requestIdentity = useRef({ fingerprint: "", id: "" });
  const [sent, setSent] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    if (!token) { setError("Please complete the security check."); return; }
    const form = event.currentTarget;
    const data = new FormData(form);
    const fields = {
      name: String(data.get("name") || ""), company: String(data.get("company") || ""),
      email: String(data.get("email") || ""), phone: String(data.get("phone") || ""),
      question: String(data.get("question") || ""), consent: data.get("consent") === "on",
    };
    const fingerprint = JSON.stringify(fields);
    if (requestIdentity.current.fingerprint !== fingerprint) {
      requestIdentity.current = { fingerprint, id: crypto.randomUUID() };
    }
    setSent(false);
    submitting.current = true;
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, token, requestId: requestIdentity.current.id }),
        signal: AbortSignal.timeout(30000),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) {
        throw new Error(result.error || "We could not send your enquiry. Please try again or email hello@eunomiapharmaservices.com.");
      }
      form.reset();
      requestIdentity.current = { fingerprint: "", id: "" };
      setSent(true);
    } catch (failure) {
      setError(failure instanceof Error && failure.name !== "TimeoutError" && failure.name !== "TypeError"
        ? failure.message
        : "We could not confirm whether your enquiry was sent. Please complete the security check and retry without changing your message.");
    } finally {
      setToken("");
      setAttempt((value) => value + 1);
      submitting.current = false;
      setBusy(false);
    }
  }
  return (
    <form className="enquiry-form" onSubmit={submit}>
      <div className="form-row">
        <label>
          <span className="field-label">Your name <b aria-hidden="true">*</b></span>
          <input disabled={busy} name="name" required maxLength={120} autoComplete="name" />
        </label>
        <label>
          <span className="field-label">Company <b aria-hidden="true">*</b></span>
          <input disabled={busy} name="company" required maxLength={160} autoComplete="organization" />
        </label>
      </div>
      <div className="form-row">
        <label>
          <span className="field-label">Work email <b aria-hidden="true">*</b></span>
          <input disabled={busy} name="email" type="email" required maxLength={254} autoComplete="email" />
        </label>
        <label>
          <span className="field-label">Phone number</span>
          <input disabled={busy} name="phone" type="tel" maxLength={60} autoComplete="tel" />
        </label>
      </div>
      <label>
        <span className="field-label">The compliance question, and what exists today <b aria-hidden="true">*</b></span>
        <textarea disabled={busy} name="question" rows={7} required maxLength={5000} />
      </label>
      <label className="consent">
        <input disabled={busy} type="checkbox" name="consent" required />
        <span>
          I am happy for Eunomia to use these details to respond to my enquiry,
          as set out in the <a href="/privacy">privacy notice</a>.
        </span>
      </label>
      <ContactCaptcha key={attempt} onToken={setToken} />
      {error && <p role="alert">{error}</p>}
      {sent && <p role="status">Thank you—your enquiry has been submitted. We’ll respond using the email address you provided.</p>}
      <button className="primary-button" type="submit" disabled={!token || busy} aria-busy={busy}>
        {busy ? "Sending…" : "Send your note"}
      </button>
      <p className="form-note">
        We use your details to respond to your enquiry, as explained in our privacy notice. We will not add you to a mailing list from this form.
      </p>
    </form>
  );
}

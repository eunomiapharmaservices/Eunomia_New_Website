"use client";
import { FormEvent, useRef, useState } from "react";
import { ContactCaptcha } from "./ContactCaptcha";
export function ContactForm() {
  const [token, setToken] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [attempt, setAttempt] = useState(0);
  const submitting = useRef(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    if (!token) { setError("Please complete the security check."); return; }
    const data = new FormData(event.currentTarget);
    submitting.current = true;
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/contact/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
        signal: AbortSignal.timeout(15000),
      });
      if (!response.ok) throw new Error("verification");
      const result = await response.json();
      if (result.success !== true) throw new Error("verification");
    const body = [
      `Name: ${data.get("name")}`,
      `Company: ${data.get("company")}`,
      `Work email: ${data.get("email")}`,
      `Phone number: ${data.get("phone") || "Not provided"}`,
      "",
      String(data.get("question")),
    ].join("\n");
    window.location.href = `mailto:hello@eunomiapharmaservices.com?subject=${encodeURIComponent(`Website enquiry — ${data.get("company")}`)}&body=${encodeURIComponent(body)}`;
    } catch {
      setError("The security check could not be completed. Please try again.");
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
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          <span className="field-label">Company <b aria-hidden="true">*</b></span>
          <input name="company" required autoComplete="organization" />
        </label>
      </div>
      <div className="form-row">
        <label>
          <span className="field-label">Work email <b aria-hidden="true">*</b></span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label>
          <span className="field-label">Phone number</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
      </div>
      <label>
        <span className="field-label">The compliance question, and what exists today <b aria-hidden="true">*</b></span>
        <textarea name="question" rows={7} required />
      </label>
      <label className="consent">
        <input type="checkbox" required />
        <span>
          I am happy for Eunomia to use these details to respond to my enquiry,
          as set out in the <a href="/privacy">privacy notice</a>.
        </span>
      </label>
      <ContactCaptcha key={attempt} onToken={setToken} />
      {error && <p role="alert">{error}</p>}
      <button className="primary-button" type="submit" disabled={!token || busy} aria-busy={busy}>
        {busy ? "Checking…" : "Send your note"}
      </button>
      <p className="form-note">
        We will not add you to a mailing list from this form, and we will not
        share your details with anyone outside Eunomia.
      </p>
    </form>
  );
}

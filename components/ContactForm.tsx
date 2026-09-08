"use client";
import { FormEvent } from "react";
export function ContactForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Company: ${data.get("company")}`,
      `Work email: ${data.get("email")}`,
      `Phone number: ${data.get("phone") || "Not provided"}`,
      "",
      String(data.get("question")),
    ].join("\n");
    window.location.href = `mailto:hello@eunomiapharmaservices.com?subject=${encodeURIComponent(`Website enquiry — ${data.get("company")}`)}&body=${encodeURIComponent(body)}`;
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
      <button className="primary-button" type="submit">
        Send your note
      </button>
      <p className="form-note">
        We will not add you to a mailing list from this form, and we will not
        share your details with anyone outside Eunomia.
      </p>
    </form>
  );
}

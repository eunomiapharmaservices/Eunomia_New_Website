import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiteHeader, SiteFooter } from "../../components/SiteChrome";
import { ContactForm } from "../../components/ContactForm";
export const metadata: Metadata = {
  title: "Contact Eunomia Pharma Services — start a compliance conversation",
  description:
    "Tell us about your company, markets and the compliance question on your desk. No obligation and no pressure — we will listen and say how we see it.",
};
export default function Contact() {
  return (
    <main>
      <SiteHeader />
      <section className="contact-intro section-pad">
        <p className="section-kicker">Start a conversation</p>
        <h1>
          Tell us what is
          <br />
          <em>on your desk.</em>
        </h1>
        <p>
          We will listen, ask a few questions and say how we see it. No
          obligation and no pressure.
        </p>
      </section>
      <section className="contact-form-layout section-pad">
        <ContactForm />
        <aside className="contact-side">
          <p className="section-kicker">Get in touch with us</p>
          <p className="contact-response-note">Give us a call or drop us a line. We endeavour to answer all enquiries within 24 hours on business days and will be happy to answer your questions.</p>
          <div className="contact-lines">
            <a href="tel:+447584567018">
              <Phone />
              +44 7584 567018
            </a>
            <a href="mailto:hello@eunomiapharmaservices.com">
              <Mail />
              hello@eunomiapharmaservices.com
            </a>
            <span><MapPin /> United Kingdom</span>
            <a href="https://uk.linkedin.com/company/eunomia-pharma-services" target="_blank" rel="noreferrer">
              <b className="linkedin-mark" aria-hidden="true">in</b> LinkedIn
            </a>
          </div>
          <div className="registered-details">
            <b>Registered details</b>
            <p>
              Eunomia Pharma Services is a trading name of Mivigilance Limited.
            </p>
            <p>
              Company number 12912269
              <br />
              Rough Way, Heath House Road
              <br />
              Woking, GU22 0QU
            </p>
          </div>
        </aside>
      </section>
      <SiteFooter />
    </main>
  );
}

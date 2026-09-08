import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "../../components/SiteChrome";
export const metadata: Metadata = {
  title: "Privacy notice and cookies | Eunomia Pharma Services",
  description:
    "How Eunomia Pharma Services collects, uses and protects personal data submitted through this website, and what cookies the site sets.",
};
const sections = [
  [
    "Who we are",
    <>
      Eunomia Pharma Services is a trading name of Mivigilance Limited, the data
      controller for personal data collected through this website. Mivigilance
      Limited is registered in England and Wales, company number 12912269, with
      its registered office at Rough Way, Heath House Road, Woking, GU22 0QU.
      Contact us at{" "}
      <a href="mailto:hello@eunomiapharmaservices.com">
        hello@eunomiapharmaservices.com
      </a>{" "}
      or <a href="tel:+447584567018">+44 7584 567018</a>.
    </>,
  ],
  [
    "What we collect",
    <>
      If you complete the enquiry form or email us, we collect the details you
      choose to give us: your name and company, work email, markets, service
      area, preferred form of support and message. Please do not send
      special-category data, patient information or adverse-event reports
      through this website. To report an adverse event, contact the marketing
      authorisation holder or your national regulator directly.
    </>,
  ],
  [
    "Why we hold it, and on what basis",
    <>
      We use these details to answer your enquiry, assess whether we can help
      and continue the conversation. If an engagement follows, we use your
      contact details to deliver and administer the work. Our lawful basis is
      our legitimate interests in responding to business enquiries and running
      our consultancy and, where an engagement follows, performance of a
      contract.
    </>,
  ],
  [
    "What we do not do",
    <>
      We do not add you to a marketing list because you used the contact form.
      We do not sell personal data or share it outside Eunomia for another
      organisation’s marketing. If you separately opt in to updates, you can
      withdraw that consent at any time.
    </>,
  ],
  [
    "Who else sees it",
    <>
      Personal data is accessible to Eunomia colleagues who need it to respond.
      Service providers may process data on our behalf under written terms,
      including our email and document-hosting provider, website host and, where
      you opt in, email-marketing platform. They act on our instructions. We may
      disclose information where legally required or needed to establish or
      defend a legal claim.
    </>,
  ],
  [
    "International transfers",
    <>
      Some providers may process data outside the UK. Where this happens, we
      rely on UK adequacy regulations or the International Data Transfer
      Agreement or Addendum, together with any necessary additional safeguards.
    </>,
  ],
  [
    "How long we keep it",
    <>
      Enquiries that do not lead to an engagement are kept for up to two years
      and then deleted. Engagement records are kept for the engagement and six
      years afterwards, in line with contractual, tax and professional
      record-keeping obligations.
    </>,
  ],
  [
    "Your rights",
    <>
      Under UK data-protection law, you can ask for a copy of your data,
      correction, deletion, restriction, portability, or object to
      legitimate-interest processing. Email{" "}
      <a href="mailto:hello@eunomiapharmaservices.com">
        hello@eunomiapharmaservices.com
      </a>
      ; we will respond within one month. You may complain to the{" "}
      <a
        href="https://ico.org.uk/make-a-complaint/"
        target="_blank"
        rel="noreferrer"
      >
        Information Commissioner’s Office
      </a>{" "}
      or call 0303 123 1113. We would appreciate the opportunity to put matters
      right first.
    </>,
  ],
  [
    "Cookies",
    <>
      This website does not set analytics, advertising or tracking cookies.
      Fonts loaded from Google Fonts cause your browser to request files from
      Google’s servers, which receives your IP address. Some resources and
      reviews are hosted by third parties; after following those links, their
      privacy notices apply. If analytics are added later, we will request
      consent and update this notice.
    </>,
  ],
  [
    "Changes to this notice",
    <>
      We update this notice when our practices change. The date above shows when
      it was last revised.
    </>,
  ],
];
export default function Privacy() {
  return (
    <main>
      <SiteHeader />
      <section className="privacy-hero section-pad">
        <p className="section-kicker">Privacy &amp; cookies</p>
        <h1>
          How we handle
          <br />
          <em>your information.</em>
        </h1>
        <p>
          This notice explains what we collect when you contact us through this
          website, why we hold it, and what you can ask us to do with it.
        </p>
        <small>Last updated: 29 August 2026</small>
      </section>
      <section className="privacy-content section-pad">
        {sections.map(([title, body]) => (
          <section key={String(title)}>
            <h2>{title}</h2>
            <p>{body}</p>
          </section>
        ))}
        <p className="legal-note">
          This notice describes how we handle information collected through this
          website. It is not legal advice and does not form part of any
          contract.
        </p>
      </section>
      <SiteFooter />
    </main>
  );
}

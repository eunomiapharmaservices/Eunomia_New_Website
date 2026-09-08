# Direct website enquiry delivery

Prepared for Resend. Destination is fixed server-side to `hello@eunomiapharmaservices.com`; Reply-To is the visitor's validated email. No automatic email is sent to visitors. The form reports success only after Resend accepts the email, not confirmed inbox delivery.

## Activate

1. Create a Resend account at https://resend.com/ or install its Vercel integration at https://vercel.com/marketplace/resend.
2. Add and verify a sending domain in Resend. A dedicated subdomain such as `mail.eunomiapharmaservices.com` separates website sending from the existing mailbox. Add only the DNS records Resend provides for that sending subdomain; preserve the existing mailbox MX records. Wait until Resend shows Verified.
3. Create a sending-only API key restricted to the verified domain. Add `RESEND_API_KEY` directly to Vercel Environment Variables for Production and Preview. Never share or commit the key.
4. Add `CONTACT_FROM_EMAIL` as a plain sender address on that verified domain, for example `enquiries@mail.eunomiapharmaservices.com`. This example only works after its domain is verified. Keep the existing Turnstile variables.
5. Redeploy the draft preview so the variables apply. Add that exact preview hostname in the existing Turnstile widget. Complete a real challenge and send a clearly labelled test enquiry; confirm arrival in the destination inbox and that Reply addresses the visitor. Then merge.

Do not merge before sender configuration and delivery testing: missing configuration rejects sending and leaves entered details in place. Production retains the existing mailto form until activation.

CAPTCHA is validated inside the sending request. Invalid requests, missing consent, failed CAPTCHA and missing configuration do not call the email provider. Payload size is bounded, recipients cannot be supplied by the browser, text email avoids HTML injection, and Resend idempotency keys reduce duplicate sends on unchanged retries within its retention window. Provider errors and form contents are not logged or exposed in API responses. Check Resend's delivery dashboard for bounces and final inbox-delivery status.

Validation: `node --experimental-strip-types --test tests/*.test.mjs` and `npm run build`. Unit tests mock the providers and send no real messages.

References: https://resend.com/docs/api-reference/emails/send-email and https://resend.com/docs/dashboard/domains/introduction

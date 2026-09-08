# Contact form CAPTCHA activation

Create a Cloudflare Turnstile Managed widget for `eunomia-pharma-services.vercel.app`. Add any custom production domain separately when it is connected.

In the Vercel project's Environment Variables, set these for Production and the CAPTCHA preview branch:

- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`: the widget's public site key.
- `TURNSTILE_SECRET_KEY`: its secret key. Enter this directly in Vercel; never commit or send it in chat.

Add the exact preview hostname to the widget's allowed hostnames to test the preview. Redeploy after setting the public site key because Next.js embeds it at build time. Use real production keys for production, never Cloudflare's test keys.

Before merging, confirm the widget loads, complete a challenge, submit the form, and confirm an email draft opens. Expired or invalid challenges must not open the draft. The original form fields remain in the browser; only the challenge token is posted to our verification endpoint. Turnstile's widget communicates with Cloudflare; the form displays its privacy and terms links.

The existing form opens a mailto draft. CAPTCHA gates that form action; it does not prevent email sent directly to the public address. A future server-delivered enquiry form must validate CAPTCHA within the same server operation that sends the message; do not rely on this standalone verification endpoint as authorization to send.

This branch fails closed if keys are absent and must not be merged until configured and verified. The current production branch remains available during setup.

Validation: `node --experimental-strip-types --test tests/turnstile.test.mjs` and `npm run build`.

References: https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/ and https://developers.cloudflare.com/turnstile/get-started/server-side-validation/

## Direct enquiry delivery update

The direct-email branch submits to `/api/contact`, where CAPTCHA verification and email sending happen in the same server request. See EMAIL_SETUP.md for sender configuration and activation. The standalone verification endpoint remains for compatibility and is not an authorization mechanism for sending.

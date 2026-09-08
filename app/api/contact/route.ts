import { handleContact } from "@/lib/contact-email";
import { verifyTurnstile } from "@/lib/verify-turnstile";

export const runtime = "nodejs";
export const maxDuration = 30;

export async function POST(request: Request) {
  return handleContact(request, {
    apiKey: process.env.RESEND_API_KEY,
    from: process.env.CONTACT_FROM_EMAIL,
    captchaSecret: process.env.TURNSTILE_SECRET_KEY,
  }, verifyTurnstile);
}

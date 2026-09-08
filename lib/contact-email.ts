import { createHash } from "node:crypto";

type Settings = { apiKey?: string; from?: string; captchaSecret?: string };
type Verify = (token: unknown, secret: string | undefined, hostname: string) => Promise<boolean>;
const recipient = "hello@eunomiapharmaservices.com";
const emailPattern = /^[^\s<>@,;]+@[^\s<>@,;]+\.[^\s<>@,;]+$/;

export async function handleContact(request: Request, settings: Settings, verify: Verify, send: typeof fetch = fetch) {
  const reply = (status: number, error?: string) => Response.json({ success: status === 200, ...(error ? { error } : {}) }, { status, headers: { "Cache-Control": "no-store" } });
  const url = new URL(request.url);
  if (request.headers.get("origin") !== url.origin) return reply(403, "Please submit your enquiry through our contact page.");
  if (!request.headers.get("content-type")?.startsWith("application/json")) return reply(415, "Invalid request format.");
  if (!settings.apiKey || !settings.captchaSecret || !settings.from || !emailPattern.test(settings.from)) {
    return reply(503, "Online sending is temporarily unavailable. Please email hello@eunomiapharmaservices.com.");
  }
  let body: Record<string, unknown>;
  try {
    const reader = request.body?.getReader();
    if (!reader) return reply(400, "Please complete the enquiry form.");
    const chunks: Uint8Array[] = [];
    let bytes = 0;
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > 32768) { await reader.cancel(); return reply(413, "Your enquiry is too long. Please shorten it and try again."); }
      chunks.push(value);
    }
    body = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    if (!body || Array.isArray(body) || typeof body !== "object") throw new Error("invalid");
  } catch { return reply(400, "Please complete the enquiry form."); }
  const field = (name: string, max: number, required = true, multiline = false) => {
    const value = body[name];
    if (typeof value !== "string" || value.length > max || (required && !value.trim()) || /\u0000/.test(value) || (!multiline && /[\r\n]/.test(value))) return null;
    return value.trim();
  };
  const name = field("name", 120), company = field("company", 160), email = field("email", 254);
  const phone = field("phone", 60, false), question = field("question", 5000, true, true);
  if (!name || !company || !email || !emailPattern.test(email) || phone === null || !question || body.consent !== true ||
      typeof body.requestId !== "string" || !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(body.requestId)) {
    return reply(400, "Please check your contact details, enquiry and consent checkbox.");
  }
  try {
    if (!await verify(body.token, settings.captchaSecret, url.hostname)) return reply(400, "Please complete the security check again.");
    const payload = {
      from: `Eunomia website <${settings.from}>`, to: [recipient], reply_to: email,
      subject: `Website enquiry — ${company}`,
      text: [`Name: ${name}`, `Company: ${company}`, `Work email: ${email}`, `Phone: ${phone || "Not provided"}`, "Consent to respond: Yes", "", "Enquiry:", question].join("\n"),
    };
    // Retain the same key on an uncertain retry with unchanged content, even after CAPTCHA refresh.
    const key = createHash("sha256").update(JSON.stringify([body.requestId, payload])).digest("hex");
    const response = await send("https://api.resend.com/emails", {
      method: "POST", cache: "no-store", signal: AbortSignal.timeout(15000),
      headers: { Authorization: `Bearer ${settings.apiKey}`, "Content-Type": "application/json", "Idempotency-Key": `contact-${key}` },
      body: JSON.stringify(payload),
    });
    if (!response.ok) return reply(502, "We could not send your enquiry. Please retry or email hello@eunomiapharmaservices.com.");
    const result = await response.json();
    if (typeof result.id !== "string" || !result.id) throw new Error("missing receipt");
    return reply(200);
  } catch {
    return reply(502, "We could not confirm whether your enquiry was sent. Please complete the security check and retry without changing your message.");
  }
}

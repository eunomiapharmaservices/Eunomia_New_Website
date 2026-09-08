import { verifyTurnstile } from "@/lib/verify-turnstile";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const reply = (success: boolean, status: number) => Response.json({ success }, {
    status, headers: { "Cache-Control": "no-store" },
  });
  const url = new URL(request.url);
  if (request.headers.get("origin") !== url.origin) return reply(false, 403);
  if (!request.headers.get("content-type")?.startsWith("application/json")) return reply(false, 415);
  if (!process.env.TURNSTILE_SECRET_KEY) return reply(false, 503);
  try {
    // Bound the body while streaming; do not trust the supplied Content-Length.
    const reader = request.body?.getReader();
    if (!reader) return reply(false, 400);
    const chunks: Uint8Array[] = [];
    let bytes = 0;
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > 4096) { await reader.cancel(); return reply(false, 413); }
      chunks.push(value);
    }
    const body = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    const success = await verifyTurnstile(body?.token, process.env.TURNSTILE_SECRET_KEY, url.hostname);
    return reply(success, success ? 200 : 400);
  } catch { return reply(false, 400); }
}

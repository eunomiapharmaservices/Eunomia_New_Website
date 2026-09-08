export async function verifyTurnstile(
  token: unknown,
  secret: string | undefined,
  hostname: string,
  request: typeof fetch = fetch,
): Promise<boolean> {
  if (!secret || typeof token !== "string" || !token.trim() || token.length > 2048) return false;
  try {
    const response = await request("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, response: token }),
      signal: AbortSignal.timeout(10000),
      cache: "no-store",
    });
    if (!response.ok) return false;
    const result = await response.json();
    return result.success === true && result.action === "contact" && result.hostname === hostname;
  } catch { return false; }
}

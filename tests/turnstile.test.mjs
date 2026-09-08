import test from "node:test";
import assert from "node:assert/strict";
import { verifyTurnstile } from "../lib/verify-turnstile.ts";

const host = "eunomia-pharma-services.vercel.app";
const verify = (result) => async () => Response.json(result);
test("accepts only valid contact challenges for this hostname", async () => {
  assert.equal(await verifyTurnstile("token", "secret", host, verify({success:true, action:"contact", hostname:host})), true);
  for (const result of [
    {success:false, action:"contact", hostname:host},
    {success:true, action:"login", hostname:host},
    {success:true, action:"contact", hostname:"other.example"},
  ]) assert.equal(await verifyTurnstile("token", "secret", host, verify(result)), false);
});
test("rejects missing configuration and malformed tokens before external calls", async () => {
  const unexpected = async () => { assert.fail("must not call provider"); };
  for (const token of [null, "", " ", {}, "x".repeat(2049)]) {
    assert.equal(await verifyTurnstile(token, "secret", host, unexpected), false);
  }
  assert.equal(await verifyTurnstile("token", undefined, host, unexpected), false);
});
test("fails closed on upstream failures", async () => {
  assert.equal(await verifyTurnstile("token", "secret", host, async () => {throw new Error("timeout");}), false);
  assert.equal(await verifyTurnstile("token", "secret", host, async () => new Response("unavailable", {status:503})), false);
});

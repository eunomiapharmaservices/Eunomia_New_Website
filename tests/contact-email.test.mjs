import test from "node:test";
import assert from "node:assert/strict";
import { handleContact } from "../lib/contact-email.ts";

const origin = "https://eunomia-pharma-services.vercel.app";
const settings = { apiKey: "mock-key", from: "enquiries@mail.example.com", captchaSecret: "mock-secret" };
const data = { name: "Test Visitor", company: "Example", email: "visitor@example.com", phone: "", question: "A test enquiry", consent: true, token: "mock-token", requestId: "d9b32773-7289-4c6a-a1a0-0dd5d23762b6" };
const req = (body = data, overrides = {}) => new Request(`${origin}/api/contact`, {method:"POST", headers:{origin,"content-type":"application/json",...overrides},body:JSON.stringify(body)});
const fail = async () => { assert.fail("email provider must not be called"); };

test("CAPTCHA is checked before sending to fixed recipient with visitor Reply-To", async () => {
  const order=[];
  const result=await handleContact(req({...data,to:"attacker@example.com"}),settings,async(token,secret,host)=>{
    order.push("verify"); assert.equal(token,data.token); assert.equal(secret,settings.captchaSecret); assert.equal(host,new URL(origin).hostname);return true;
  },async(url,options)=>{
    order.push("send");assert.equal(url,"https://api.resend.com/emails");
    const payload=JSON.parse(options.body);assert.deepEqual(payload.to,["hello@eunomiapharmaservices.com"]);
    assert.equal(payload.reply_to,data.email);assert.match(payload.from,/enquiries@mail.example.com/);assert.match(payload.text,/A test enquiry/);
    return Response.json({id:"receipt"});
  });
  assert.equal(result.status,200);assert.deepEqual(order,["verify","send"]);
});
test("invalid fields, consent and origin never send", async()=>{
  for(const patch of [{email:"bad"},{email:"a@example.com\r\nBcc:evil@example.com"},{consent:false},{question:""},{name:"x".repeat(121)},{requestId:"bad"}]) {
    assert.equal((await handleContact(req({...data,...patch}),settings,async()=>true,fail)).status,400);
  }
  assert.equal((await handleContact(req(data,{origin:"https://evil.example"}),settings,async()=>true,fail)).status,403);
});
test("rejects oversized payload, unavailable config and failed CAPTCHA",async()=>{
  assert.equal((await handleContact(req({...data,question:"x".repeat(40000)}),settings,async()=>true,fail)).status,413);
  assert.equal((await handleContact(req(),{...settings,apiKey:undefined},async()=>true,fail)).status,503);
  assert.equal((await handleContact(req(),settings,async()=>false,fail)).status,400);
});
test("provider failure does not report success or expose provider details",async()=>{
  for(const send of [async()=>Response.json({error:"PRIVATE_PROVIDER_DETAIL"},{status:403}),async()=>{throw new Error("PRIVATE_PROVIDER_DETAIL");},async()=>Response.json({})]) {
    const result=await handleContact(req(),settings,async()=>true,send);
    assert.equal(result.status,502);const text=await result.text();assert.doesNotMatch(text,/PRIVATE_PROVIDER_DETAIL/);assert.match(text,/"success":false/);
  }
});
test("idempotency survives CAPTCHA refresh but changes when message changes",async()=>{
  const keys=[];const send=async(_,options)=>{keys.push(options.headers["Idempotency-Key"]);return Response.json({id:"receipt"});};
  await handleContact(req(),settings,async()=>true,send);
  await handleContact(req({...data,token:"new-token"}),settings,async()=>true,send);
  await handleContact(req({...data,question:"Different enquiry"}),settings,async()=>true,send);
  assert.equal(keys[0],keys[1]);assert.notEqual(keys[0],keys[2]);
});

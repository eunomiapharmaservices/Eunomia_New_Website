import { NextResponse } from "next/server";

function gone() {
  return new NextResponse(null, {
    status: 410,
    headers: { "Cache-Control": "public, max-age=3600" },
  });
}

export const GET = gone;
export const HEAD = gone;

"use client";
import { track } from "@vercel/analytics";

type ConversionEvent = "enquiry_submitted" | "resource_requested" | "resource_download_clicked";

// Only static resource identifiers belong here; never send form fields or contact details.
export function trackConversion(event: ConversionEvent, resourceSlug?: string): void {
  try {
    track(event, resourceSlug ? { resource: resourceSlug } : undefined);
  } catch {
    // Analytics must not interrupt a successful enquiry or a native download.
  }
}

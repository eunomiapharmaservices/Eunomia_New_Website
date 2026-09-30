"use client";

import type { AnchorHTMLAttributes } from "react";
import { trackConversion } from "../lib/conversion-tracking";
import { trackedResource } from "../lib/resource-attribution";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "onClick"> & {
  action: "download" | "consultation";
  resourceSlug: string;
};

export function ResourceActionLink({ action, resourceSlug, ...props }: Props) {
  return <a {...props} onClick={() => {
    const resource = trackedResource(resourceSlug);
    if (resource) trackConversion(action === "download" ? "resource_download_clicked" : "resource_consultation_clicked", resource);
  }} />;
}

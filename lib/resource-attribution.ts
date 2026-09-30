export const trackedResourceSlugs = [
  "hcp-fmv-assessment",
  "role-based-compliance-training-matrix",
  "disclosure-preparation-checklist",
  "promotional-review-workflow",
] as const;

// Never pass arbitrary query-string values or personal information to analytics.
export function trackedResource(value: string | null): string | undefined {
  return trackedResourceSlugs.find(slug => slug === value);
}

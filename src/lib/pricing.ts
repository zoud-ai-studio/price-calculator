export const projectTypes = {
  "landing-page": { label: "Landing page", basePrice: 1000 },
  "business-website": { label: "Business website", basePrice: 2000 },
  "ai-web-app": { label: "AI web app", basePrice: 3000 },
} as const;

export type ProjectType = keyof typeof projectTypes;

const urgencyMultiplier = 1.2;

export function calculatePrice(projectType: ProjectType, isUrgent: boolean): number {
  const basePrice = projectTypes[projectType].basePrice;
  return isUrgent ? basePrice * urgencyMultiplier : basePrice;
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

export function buildQuoteMailto(projectType: ProjectType, total: number): string {
  const subject = encodeURIComponent("Quote request");
  const body = encodeURIComponent(
    `Project type: ${projectTypes[projectType].label}\nTotal price: ${formatPrice(total)}`,
  );

  return `mailto:fathir.majeed@gmail.com?subject=${subject}&body=${body}`;
}

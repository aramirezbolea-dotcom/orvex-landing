export const LAUNCH_OFFER = { percent: 30, spots: 5 };

export const PLANS = {
  STARTER: { name: "Starter", price: 500, monthly: 39 },
  PROFESSIONAL: { name: "Professional", price: 800, monthly: 39 },
  PREMIUM: { name: "Premium", price: 1500, monthly: 59 },
  CUSTOM: { name: "Custom", price: 2500, monthly: 89 },
} as const;

export type PlanKey = keyof typeof PLANS;

export function offerPrice(price: number) {
  return Math.round((price * (100 - LAUNCH_OFFER.percent)) / 100);
}

// Manual grouping: toLocaleString("es-ES") skips the separator on 4-digit numbers.
export function euros(amount: number) {
  return `${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}€`;
}

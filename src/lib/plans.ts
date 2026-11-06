export const LAUNCH_OFFER = { percent: 15, spots: 3 };

export const PLANS = {
  STARTER: { name: "Starter", price: 390, monthly: 29 },
  PROFESSIONAL: { name: "Professional", price: 650, monthly: 39 },
  PREMIUM: { name: "Premium", price: 1200, monthly: 59 },
  CUSTOM: { name: "Custom", price: 2000, monthly: 89 },
} as const;

export type PlanKey = keyof typeof PLANS;

// Manual grouping: toLocaleString("es-ES") skips the separator on 4-digit numbers.
export function euros(amount: number) {
  return `${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}€`;
}

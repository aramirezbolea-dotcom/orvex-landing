// Los 3 primeros clientes pagan el precio de lanzamiento de cada plan (`launch`).
// `percent` es el descuento más alto de los planes; cada plan tiene el suyo.
export const LAUNCH_OFFER = { percent: 20, spots: 3 };

export const PLANS = {
  STARTER: { name: "Starter", price: 290, launch: 250, monthly: 29 },
  PROFESSIONAL: { name: "Professional", price: 490, launch: 390, monthly: 39 },
  PREMIUM: { name: "Premium", price: 790, launch: 630, monthly: 59 },
  CUSTOM: { name: "Custom", price: 2000, launch: 1700, monthly: 89 },
} as const;

// Descuento del precio de lanzamiento de un plan, en % redondeado.
export function discountPercent(plan: { price: number; launch: number }) {
  return Math.round((1 - plan.launch / plan.price) * 100);
}

export type PlanKey = keyof typeof PLANS;

// Manual grouping: toLocaleString("es-ES") skips the separator on 4-digit numbers.
export function euros(amount: number) {
  return `${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}€`;
}

import { LAUNCH_OFFER } from "@/lib/plans";

export type LaunchOffer = {
  active: boolean;
  percent: number;
  spots: number;
  // null when the platform couldn't be reached and we don't know the count.
  spotsLeft: number | null;
};

const OFFER_ENDPOINT =
  process.env.LAUNCH_OFFER_URL || "https://webs-e3yr.vercel.app/api/public/launch-offer";

// The platform counts the clients who accepted a proposal. Pages refresh this
// every 5 minutes, so the offer ends on its own after the last spot is taken.
export async function getLaunchOffer(): Promise<LaunchOffer> {
  try {
    const res = await fetch(OFFER_ENDPOINT, { next: { revalidate: 300 } });
    if (!res.ok) throw new Error(`Launch offer request failed: ${res.status}`);
    const data = await res.json();
    if (typeof data.active !== "boolean" || typeof data.spotsLeft !== "number") {
      throw new Error("Unexpected launch offer response");
    }
    return {
      active: data.active,
      percent: typeof data.percent === "number" ? data.percent : LAUNCH_OFFER.percent,
      spots: typeof data.spots === "number" ? data.spots : LAUNCH_OFFER.spots,
      spotsLeft: data.spotsLeft,
    };
  } catch {
    return { ...LAUNCH_OFFER, active: true, spotsLeft: null };
  }
}

export function currentPrice(price: number, offer: LaunchOffer) {
  return offer.active ? Math.round((price * (100 - offer.percent)) / 100) : price;
}

export function spotsLeftText(offer: LaunchOffer) {
  if (offer.spotsLeft === null) return `para los ${offer.spots} primeros clientes`;
  return offer.spotsLeft === 1 ? "queda 1 plaza" : `quedan ${offer.spotsLeft} plazas`;
}

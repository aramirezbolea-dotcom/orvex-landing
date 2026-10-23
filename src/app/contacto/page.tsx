import type { Metadata } from "next";
import ContactPage from "./contact-page";
import { getLaunchOffer } from "@/lib/launch-offer";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contacto: pide tu boceto de web gratis",
  description:
    "Cuéntame qué necesita tu negocio y te preparo un boceto sin compromiso. Escríbeme por WhatsApp, llámame o deja tus datos y te contesto el mismo día laborable.",
  path: "/contacto",
});

export default async function Contacto() {
  const offer = await getLaunchOffer();
  return <ContactPage offer={offer} />;
}

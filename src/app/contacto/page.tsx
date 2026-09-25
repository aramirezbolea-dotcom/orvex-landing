import ContactPage from "./contact-page";
import { getLaunchOffer } from "@/lib/launch-offer";

export default async function Contacto() {
  const offer = await getLaunchOffer();
  return <ContactPage offer={offer} />;
}

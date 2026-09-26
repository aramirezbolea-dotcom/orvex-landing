import WhatsAppIcon from "@/components/whatsapp-icon";
import { WHATSAPP_URL } from "@/lib/contact";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbeme por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ORVEX Agency — Diseño y Desarrollo Web Profesional",
  description:
    "Diseño web para negocios, sin intermediarios: landing pages, webs multipágina, tiendas online y desarrollo a medida, con mantenimiento incluido.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={inter.className}>
      <body className="min-h-screen flex flex-col bg-white text-dark">
        <Navbar />
        <main className="flex-1 pt-[73px]">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

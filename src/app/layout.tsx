import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import JsonLd from "@/components/json-ld";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Álvaro Ramírez" }],
  creator: "Álvaro Ramírez",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
  },
  twitter: { card: "summary_large_image", title: SITE_TITLE, description: SITE_DESCRIPTION },
  robots: { index: true, follow: true },
};

// Quién es Vexel y qué es esta web, para que Google lo entienda sin adivinar.
// No lleva dirección: trabajo desde casa y no se publica.
const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#negocio`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      image: `${SITE_URL}/opengraph-image`,
      logo: `${SITE_URL}/icon.png`,
      telephone: "+34636148793",
      priceRange: "500 € - 2.500 €",
      founder: { "@type": "Person", name: "Álvaro Ramírez" },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Comunidad de Madrid" },
        { "@type": "Country", name: "España" },
      ],
      knowsAbout: ["Diseño web", "Landing pages", "Tiendas online", "SEO básico", "Mantenimiento web"],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "15:30",
          closes: "20:30",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#web`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "es-ES",
      publisher: { "@id": `${SITE_URL}/#negocio` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={inter.className}>
      <body className="min-h-screen flex flex-col bg-white text-dark">
        <JsonLd data={siteJsonLd} />
        <Navbar />
        <main className="flex-1 pt-[73px]">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

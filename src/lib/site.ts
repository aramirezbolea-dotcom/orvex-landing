import type { Metadata } from "next";

// Si algún día la web pasa a un dominio propio, basta con poner esta variable en Vercel
// (NEXT_PUBLIC_SITE_URL=https://tudominio.com) y todo el SEO se actualiza solo.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://vexel-webs.vercel.app").replace(/\/$/, "");
export const SITE_NAME = "Vexel";

export const SITE_TITLE = "Diseño web para negocios en Madrid y toda España | Vexel";
export const SITE_DESCRIPTION =
  "Diseño web para negocios y autónomos, sin intermediarios: landing pages, webs multipágina, tiendas online y desarrollo a medida. Boceto gratis, pagas al final y mantenimiento incluido.";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
};

// Metadatos de cada página: título y descripción propios, dirección canónica y la
// ficha que se ve al compartir el enlace (Open Graph).
export function pageMetadata({ title, description, path, noindex }: PageSeo): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "es_ES",
      siteName: SITE_NAME,
      title: `${title} | ${SITE_NAME}`,
      description,
      url: path,
      images: ["/opengraph-image"],
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

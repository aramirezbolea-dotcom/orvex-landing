import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Solo las páginas que queremos que aparezcan en Google. Los textos legales no se
// incluyen (llevan noindex).
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/servicios`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/portfolio`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contacto`, changeFrequency: "yearly", priority: 0.6 },
  ];
}

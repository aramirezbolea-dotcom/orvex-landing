import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio — ORVEX Agency",
  description:
    "Ejemplos reales de nuestro trabajo: desde landing pages hasta desarrollos completos a medida.",
};

const projects = [
  {
    tier: "Starter",
    price: "500€",
    title: "Reformas Castillo",
    description:
      "Landing page para empresa de reformas. Diseño limpio y directo con formulario de contacto integrado.",
    url: "https://orvex500.netlify.app",
    tags: ["Landing page", "Responsive", "Formulario"],
  },
  {
    tier: "Professional",
    price: "800€",
    title: "Reformas Castillo Pro",
    description:
      "Web multipágina con secciones de servicios, galería de proyectos y blog. Diseño premium responsive.",
    url: "https://orvex800.netlify.app",
    tags: ["Multipágina", "Blog", "SEO"],
  },
  {
    tier: "Premium",
    price: "1.500€",
    title: "Stunning Cactus",
    description:
      "Web completa con sistema de reservas integrado, panel de administración y pasarela de pagos.",
    url: "https://orvex1500.netlify.app",
    tags: ["Reservas", "E-commerce", "Dashboard"],
  },
  {
    tier: "Custom",
    price: "2.500€",
    title: "Web 2500 — Desarrollo a medida",
    description:
      "Desarrollo completo a medida con integraciones avanzadas, API personalizada y diseño UX/UI premium.",
    url: "https://orvex2500.netlify.app",
    tags: ["Full-stack", "API", "UX/UI"],
  },
];

export default function Portfolio() {
  return (
    <>
      <section className="bg-gradient-to-b from-gray-light to-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">
              Nuestro trabajo
            </p>
            <h1 className="mt-3 text-3xl font-bold text-dark sm:text-4xl lg:text-5xl">
              Portfolio
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Ejemplos reales de proyectos que hemos desarrollado, uno por
              cada tier de servicio.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.tier}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow hover:shadow-xl"
              >
                {/* Preview bar */}
                <div className="flex items-center justify-between border-b border-gray-100 bg-gray-light px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex rounded-lg bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                      {project.tier}
                    </span>
                    <span className="text-sm font-semibold text-dark">
                      {project.price}
                    </span>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                  >
                    Ver en vivo
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </a>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            ¿Te gusta lo que ves?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-blue-100">
            Cada proyecto empieza con una conversación. Cuéntanos tu idea y
            hagámosla realidad.
          </p>
          <Link
            href="/contacto"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-primary hover:bg-gray-50 transition-colors"
          >
            Empezar mi proyecto
          </Link>
        </div>
      </section>
    </>
  );
}

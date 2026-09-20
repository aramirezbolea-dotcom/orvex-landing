import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servicios — ORVEX Agency",
  description:
    "Planes de diseño web desde 500€. Landing pages, webs multipágina, tiendas online y desarrollo a medida.",
};

const tiers = [
  {
    name: "Starter",
    price: "500",
    monthly: "39",
    description: "Landing simple",
    features: [
      "Diseño one-page responsive",
      "Formulario de contacto",
      "Optimización SEO básica",
      "Hosting incluido",
      "Certificado SSL",
      "Entrega en 5-7 días",
    ],
    cta: "Empezar con Starter",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "800",
    monthly: "39",
    description: "Web multipágina",
    features: [
      "Hasta 5 páginas",
      "Diseño responsive premium",
      "SEO avanzado",
      "Blog integrado",
      "Analítica web",
      "Hosting + mantenimiento",
      "Entrega en 10-14 días",
    ],
    cta: "Elegir Professional",
    highlighted: true,
  },
  {
    name: "Premium",
    price: "1.500",
    monthly: "59",
    description: "Web completa con reservas/tienda",
    features: [
      "Hasta 10 páginas",
      "Tienda online o sistema de reservas",
      "Pasarela de pagos",
      "Panel de administración",
      "SEO + velocidad optimizada",
      "Integraciones personalizadas",
      "Entrega en 15-21 días",
    ],
    cta: "Ir a Premium",
    highlighted: false,
  },
  {
    name: "Custom",
    price: "2.500",
    monthly: "89",
    description: "Desarrollo a medida",
    features: [
      "Páginas ilimitadas",
      "Desarrollo a medida completo",
      "API e integraciones avanzadas",
      "Diseño UX/UI personalizado",
      "Soporte prioritario",
      "Formación incluida",
      "Entrega según alcance",
    ],
    cta: "Solicitar Custom",
    highlighted: false,
  },
];

const extras = [
  {
    name: "Tienda online ampliada",
    price: "300",
    desc: "Catálogo extenso, filtros avanzados, gestión de inventario.",
  },
  {
    name: "Sistema de reservas",
    price: "200",
    desc: "Calendario interactivo, confirmaciones automáticas, recordatorios.",
  },
  {
    name: "Migración de datos",
    price: "150",
    desc: "Traspaso completo de tu web actual: contenido, imágenes y SEO.",
  },
  {
    name: "Chatbot IA",
    price: "250",
    desc: "Asistente virtual inteligente para atención al cliente 24/7.",
  },
];

export default function Servicios() {
  return (
    <>
      <section className="bg-gradient-to-b from-gray-light to-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">
              Planes y precios
            </p>
            <h1 className="mt-3 text-3xl font-bold text-dark sm:text-4xl lg:text-5xl">
              Una solución para cada negocio
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Todos los planes incluyen hosting, certificado SSL y
              mantenimiento mensual. Sin sorpresas.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-4">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl border p-8 transition-shadow hover:shadow-xl ${
                  tier.highlighted
                    ? "border-primary bg-white shadow-lg shadow-primary/10 ring-2 ring-primary"
                    : "border-gray-200 bg-white"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-white">
                    Más popular
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-bold text-dark">{tier.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {tier.description}
                  </p>
                </div>
                <div className="mt-6">
                  <span className="text-4xl font-extrabold text-dark">
                    {tier.price}€
                  </span>
                  <span className="ml-1 text-sm text-gray-500">único</span>
                  <p className="mt-1 text-sm text-gray-500">
                    +{tier.monthly}€/mes mantenimiento
                  </p>
                </div>
                <ul className="mt-8 flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <svg
                        className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contacto"
                  className={`mt-8 block rounded-xl py-3.5 text-center font-semibold transition-colors ${
                    tier.highlighted
                      ? "bg-primary text-white hover:bg-primary-dark"
                      : "bg-gray-100 text-dark hover:bg-primary hover:text-white"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extras */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-dark sm:text-4xl">
              Extras opcionales
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-600">
              Amplía tu web con funcionalidades adicionales según tus
              necesidades.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {extras.map((extra) => (
              <div
                key={extra.name}
                className="rounded-2xl border border-gray-200 p-6 transition-shadow hover:shadow-lg"
              >
                <h3 className="font-bold text-dark">{extra.name}</h3>
                <p className="mt-1 text-2xl font-extrabold text-primary">
                  desde {extra.price}€
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {extra.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            ¿No sabes qué plan elegir?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-gray-400">
            Cuéntanos tu proyecto y te recomendamos la mejor opción sin
            compromiso.
          </p>
          <Link
            href="/contacto"
            className="mt-8 inline-block rounded-xl bg-primary px-8 py-4 font-semibold text-white hover:bg-primary-dark transition-colors"
          >
            Solicitar presupuesto gratis
          </Link>
        </div>
      </section>
    </>
  );
}

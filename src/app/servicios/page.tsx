import type { Metadata } from "next";
import Link from "next/link";
import {
  Rocket,
  Briefcase,
  Crown,
  Wrench,
  Check,
  X,
  Globe,
  Palette,
  Search,
  BarChart3,
  Server,
  Smartphone,
  Headphones,
  RefreshCw,
  ShieldCheck,
  Zap,
  Code,
  Lock,
  CalendarClock,
  ShoppingCart,
  Bot,
  Database,
} from "lucide-react";
import { LAUNCH_OFFER, PLANS, euros, offerPrice } from "@/lib/plans";

export const metadata: Metadata = {
  title: "Servicios — ORVEX Agency",
  description: `Planes de diseño web desde ${euros(offerPrice(PLANS.STARTER.price))} con la oferta de lanzamiento. Landing pages, webs multipágina, tiendas online y desarrollo a medida.`,
};

const plans = [
  {
    ...PLANS.STARTER,
    key: "STARTER" as const,
    icon: Rocket,
    color: "from-emerald-500 to-teal-500",
    colorLight: "bg-emerald-50 text-emerald-700 border-emerald-200",
    tagline: "Ideal para negocios que quieren presencia online básica",
    description:
      "Landing page o web de una página para negocios que necesitan estar en internet con información esencial: quiénes son, qué ofrecen y cómo contactarles.",
    includes: [
      { text: "Landing page de hasta 5 secciones", included: true },
      { text: "Diseño responsive (móvil, tablet, escritorio)", included: true },
      { text: "Formulario de contacto", included: true },
      { text: "Integración Google Maps", included: true },
      { text: "SEO básico (meta tags, sitemap)", included: true },
      { text: "Hosting incluido", included: true },
      { text: "Certificado SSL", included: true },
      { text: "Analítica básica (Google Analytics)", included: true },
      { text: "Soporte por email", included: true },
      { text: "Blog", included: false },
      { text: "Múltiples páginas", included: false },
      { text: "Sistema de reservas", included: false },
      { text: "Tienda online", included: false },
    ],
    ideal: "Autónomos, pequeños comercios, profesionales independientes",
    delivery: "5-7 días laborables",
    popular: false,
  },
  {
    ...PLANS.PROFESSIONAL,
    key: "PROFESSIONAL" as const,
    icon: Briefcase,
    color: "from-indigo-500 to-violet-500",
    colorLight: "bg-indigo-50 text-indigo-700 border-indigo-200",
    tagline: "Para negocios que quieren crecer y posicionarse",
    description:
      "Web corporativa completa con múltiples páginas, blog integrado y optimización SEO avanzada. Perfecta para negocios que quieren generar confianza y captar clientes desde Google.",
    includes: [
      { text: "Web multipágina (hasta 10 páginas)", included: true },
      { text: "Diseño personalizado y responsive", included: true },
      { text: "Blog integrado con CMS", included: true },
      { text: "SEO avanzado (keywords, schema, velocidad)", included: true },
      { text: "Hosting incluido", included: true },
      { text: "Certificado SSL", included: true },
      { text: "Google Analytics + Search Console", included: true },
      { text: "Formularios avanzados", included: true },
      { text: "Integración redes sociales", included: true },
      { text: "Soporte prioritario", included: true },
      { text: "Sistema de reservas", included: false },
      { text: "Tienda online", included: false },
      { text: "Integraciones a medida", included: false },
    ],
    ideal: "PYMEs, clínicas, despachos, restaurantes, academias",
    delivery: "10-15 días laborables",
    popular: true,
  },
  {
    ...PLANS.PREMIUM,
    key: "PREMIUM" as const,
    icon: Crown,
    color: "from-amber-500 to-orange-500",
    colorLight: "bg-amber-50 text-amber-700 border-amber-200",
    tagline: "Para negocios que necesitan funcionalidad avanzada",
    description:
      "Web completa con funcionalidades avanzadas como sistema de reservas, tienda online, pasarela de pago e integraciones con herramientas externas.",
    includes: [
      { text: "Web multipágina (páginas ilimitadas)", included: true },
      { text: "Diseño premium personalizado", included: true },
      { text: "Blog integrado con CMS", included: true },
      { text: "SEO completo + informe mensual", included: true },
      { text: "Hosting premium incluido", included: true },
      { text: "Certificado SSL", included: true },
      { text: "Google Analytics avanzado", included: true },
      { text: "Sistema de reservas online", included: true },
      { text: "Tienda online (hasta 50 productos)", included: true },
      { text: "Pasarela de pago (Stripe)", included: true },
      { text: "Chat en vivo / WhatsApp", included: true },
      {
        text: "Integraciones básicas (CRM, email marketing)",
        included: true,
      },
      { text: "Soporte prioritario + teléfono", included: true },
    ],
    ideal: "Clínicas con citas, talleres, autoescuelas, tiendas, hostelería",
    delivery: "15-25 días laborables",
    popular: false,
  },
  {
    ...PLANS.CUSTOM,
    key: "CUSTOM" as const,
    icon: Wrench,
    color: "from-rose-500 to-pink-500",
    colorLight: "bg-rose-50 text-rose-700 border-rose-200",
    tagline: "Desarrollo a medida sin límites",
    description:
      "Portal web o aplicación completamente a medida. Desarrollo complejo con funcionalidades específicas para tu negocio: portales de clientes, dashboards, automatizaciones y APIs propias.",
    includes: [
      { text: "Desarrollo 100% a medida", included: true },
      { text: "Diseño exclusivo UX/UI", included: true },
      { text: "Blog / CMS avanzado", included: true },
      { text: "SEO completo + estrategia", included: true },
      { text: "Hosting dedicado incluido", included: true },
      { text: "Certificado SSL", included: true },
      { text: "Analítica avanzada personalizada", included: true },
      { text: "Portal de clientes", included: true },
      { text: "Dashboard administrativo", included: true },
      { text: "Tienda online (productos ilimitados)", included: true },
      { text: "Pasarelas de pago múltiples", included: true },
      { text: "Integraciones a medida (API)", included: true },
      { text: "Automatizaciones de negocio", included: true },
      { text: "Soporte dedicado 24/7", included: true },
    ],
    ideal: "Empresas con necesidades específicas, startups, SaaS",
    delivery: "30-60 días laborables",
    popular: false,
  },
];

const allFeatures = [
  {
    icon: Globe,
    title: "Dominio propio",
    desc: "Configuramos tu dominio .es o .com. Si no tienes, te ayudamos a elegirlo.",
  },
  {
    icon: Palette,
    title: "Diseño a medida",
    desc: "Nada de plantillas. Cada web se diseña desde cero adaptada a tu marca.",
  },
  {
    icon: Smartphone,
    title: "Responsive",
    desc: "Todas las webs se ven perfectas en móvil, tablet y escritorio.",
  },
  {
    icon: Search,
    title: "SEO",
    desc: "Optimización para Google desde el primer día. Que te encuentren tus clientes.",
  },
  {
    icon: Server,
    title: "Hosting",
    desc: "Hosting incluido en todos los planes. No tienes que preocuparte de nada.",
  },
  {
    icon: Lock,
    title: "SSL",
    desc: "Certificado de seguridad incluido. Tu web siempre con el candado verde.",
  },
  {
    icon: BarChart3,
    title: "Analítica",
    desc: "Google Analytics configurado para que veas cuántas visitas recibes.",
  },
  {
    icon: Headphones,
    title: "Soporte",
    desc: "Estamos disponibles para resolver cualquier duda o incidencia.",
  },
  {
    icon: RefreshCw,
    title: "Mantenimiento",
    desc: "Actualizaciones de seguridad y contenido incluidas en la cuota mensual.",
  },
  {
    icon: ShieldCheck,
    title: "RGPD",
    desc: "Política de cookies, aviso legal y protección de datos incluidos.",
  },
  {
    icon: Zap,
    title: "Velocidad",
    desc: "Webs optimizadas para cargar en menos de 2 segundos.",
  },
  {
    icon: Code,
    title: "Tecnología moderna",
    desc: "Next.js, React, Tailwind CSS. Tu web con la mejor tecnología del mercado.",
  },
];

const addOns = [
  {
    icon: ShoppingCart,
    title: "Tienda online ampliada",
    price: "Desde 300€",
    desc: "Más de 50 productos, variantes, inventario.",
  },
  {
    icon: CalendarClock,
    title: "Sistema de reservas",
    price: "Desde 200€",
    desc: "Calendario con citas, recordatorios automáticos.",
  },
  {
    icon: Database,
    title: "Migración de datos",
    price: "Desde 150€",
    desc: "Migramos tu web antigua al nuevo sistema.",
  },
  {
    icon: Bot,
    title: "Chatbot IA",
    price: "Desde 250€",
    desc: "Asistente virtual para resolver dudas de tus clientes 24/7.",
  },
];

export default function Servicios() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-28">
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
              mantenimiento mensual. Sin sorpresas. Precios sin IVA.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary">
                Oferta de lanzamiento
              </p>
              <p className="mt-1 text-lg font-bold text-dark">
                -{LAUNCH_OFFER.percent}% en el precio inicial para los{" "}
                {LAUNCH_OFFER.spots} primeros clientes
              </p>
              <p className="mt-1 text-sm text-gray-600">
                A cambio, nos das tu opinión y nos permites enseñar tu web en
                el portfolio. La cuota mensual se mantiene igual.
              </p>
            </div>
            <Link
              href="/contacto"
              className="shrink-0 rounded-xl bg-primary px-6 py-3 text-center text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              Quiero mi plaza
            </Link>
          </div>

          {/* Plan cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col bg-white rounded-xl border overflow-hidden transition-shadow hover:shadow-xl ${
                  plan.popular
                    ? "border-primary shadow-lg shadow-primary/10"
                    : "border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-[0.625rem] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg z-10">
                    Más vendido
                  </div>
                )}

                {/* Gradient header */}
                <div
                  className={`bg-gradient-to-br ${plan.color} p-5 text-white`}
                >
                  <plan.icon
                    className="w-8 h-8 mb-3 opacity-90"
                    strokeWidth={1.5}
                  />
                  <h2 className="text-xl font-bold">{plan.name}</h2>
                  <p className="text-sm opacity-80 mt-1">{plan.tagline}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm">
                    <s className="opacity-70">
                      <span className="sr-only">Antes </span>
                      {euros(plan.price)}
                    </s>
                    <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs font-bold">
                      -{LAUNCH_OFFER.percent}%
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold">
                      {euros(offerPrice(plan.price))}
                    </span>
                    <span className="text-sm opacity-70">único</span>
                  </div>
                  <div className="text-sm opacity-80 mt-1">
                    + {plan.monthly}€/mes mantenimiento
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-5 space-y-4">
                  <p className="text-sm text-gray-500">{plan.description}</p>

                  <div className="space-y-2">
                    {plan.includes.map((item) => (
                      <div
                        key={item.text}
                        className="flex items-start gap-2 text-sm"
                      >
                        {item.included ? (
                          <Check className="w-4 h-4 mt-0.5 text-green-500 shrink-0" />
                        ) : (
                          <X className="w-4 h-4 mt-0.5 text-gray-300 shrink-0" />
                        )}
                        <span
                          className={
                            item.included ? "text-gray-700" : "text-gray-400"
                          }
                        >
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div
                    className={`text-xs border rounded-lg px-3 py-2.5 ${plan.colorLight}`}
                  >
                    <span className="font-semibold">Ideal para:</span>{" "}
                    {plan.ideal}
                  </div>

                  <div className="text-xs text-gray-500">
                    <span className="font-medium text-gray-700">Entrega:</span>{" "}
                    {plan.delivery}
                  </div>
                </div>

                {/* CTA */}
                <div className="px-5 pb-5">
                  <Link
                    href={`/contacto?plan=${plan.key}`}
                    className={`block rounded-xl py-3 text-center text-sm font-semibold transition-colors ${
                      plan.popular
                        ? "bg-primary text-white hover:bg-primary-dark"
                        : "bg-gray-100 text-dark hover:bg-primary hover:text-white"
                    }`}
                  >
                    Solicitar {plan.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incluido en todos los planes */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-dark text-center sm:text-3xl">
            Incluido en todos los planes
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-gray-600">
            Sea cual sea tu plan, siempre tendrás estas funcionalidades base.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {allFeatures.map((feat) => (
              <div
                key={feat.title}
                className="flex items-start gap-3 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <feat.icon className="w-[18px] h-[18px]" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-sm font-medium text-dark">{feat.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extras opcionales */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-dark sm:text-3xl">
              Extras opcionales
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-gray-600">
              Amplía tu web con funcionalidades adicionales. Se presupuestan
              aparte según tus necesidades.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {addOns.map((addon) => (
              <div
                key={addon.title}
                className="bg-white border border-dashed border-gray-300 rounded-lg p-5 space-y-2 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2">
                  <addon.icon
                    className="w-[18px] h-[18px] text-gray-500"
                    strokeWidth={1.75}
                  />
                  <span className="text-sm font-medium text-dark">
                    {addon.title}
                  </span>
                </div>
                <p className="text-xs text-gray-500">{addon.desc}</p>
                <p className="text-sm font-semibold text-primary">
                  {addon.price}
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

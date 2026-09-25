import Link from "next/link";
import { getLaunchOffer, spotsLeftText } from "@/lib/launch-offer";
import { REVISION_ROUNDS } from "@/lib/terms";
import { WHATSAPP_URL } from "@/lib/contact";
import WhatsAppIcon from "@/components/whatsapp-icon";

const steps = [
  {
    title: "Hablamos 15 minutos",
    desc: "Me cuentas tu negocio y qué necesitas. Es gratis y sin compromiso.",
  },
  {
    title: "Te enseño un boceto",
    desc: "Antes de construir nada ves cómo quedará. Si no te convence, lo dejamos ahí y no pagas nada.",
  },
  {
    title: "Construyo tu web",
    desc: `La ves en un enlace de prueba y tienes ${REVISION_ROUNDS} rondas de cambios para dejarla a tu gusto.`,
  },
  {
    title: "Pagas al final y la publico",
    desc: "Solo pagas cuando la web está terminada. Entonces la publico en tu dominio y me encargo del mantenimiento.",
  },
];

export default async function Home() {
  const offer = await getLaunchOffer();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            {offer.active && (
              <Link
                href="/servicios"
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white py-1.5 pl-1.5 pr-4 text-sm font-medium text-dark shadow-sm hover:border-primary transition-colors"
              >
                <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-bold text-white">
                  -{offer.percent}%
                </span>
                <span>
                  Oferta de lanzamiento
                  {offer.spotsLeft !== null ? (
                    <span> · {spotsLeftText(offer)}</span>
                  ) : (
                    <span className="hidden sm:inline"> {spotsLeftText(offer)}</span>
                  )}
                </span>
                <span aria-hidden="true">→</span>
              </Link>
            )}
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">
              Agencia web autónoma
            </p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-dark sm:text-5xl lg:text-6xl">
              Tu web profesional,{" "}
              <span className="text-primary">sin complicaciones</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl">
              Diseñamos y desarrollamos tu presencia digital con tecnología
              moderna. Desde landing pages hasta tiendas online completas, con
              mantenimiento incluido.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/servicios"
                className="rounded-xl bg-primary px-8 py-4 text-center font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark transition-all hover:shadow-xl hover:shadow-primary/30"
              >
                Ver planes y precios
              </Link>
              <Link
                href="/contacto"
                className="rounded-xl border-2 border-gray-200 px-8 py-4 text-center font-semibold text-dark hover:border-primary hover:text-primary transition-colors"
              >
                Contactar
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      </section>

      {/* Qué es ORVEX */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-dark sm:text-4xl">
              ¿Por qué <span className="text-primary">ORVEX</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Somos una agencia web autónoma que combina diseño moderno con
              tecnología de última generación para crear experiencias digitales
              que convierten visitantes en clientes.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128m0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
                  />
                ),
                title: "Diseño a medida",
                desc: "Cada proyecto es único. No usamos plantillas genéricas, diseñamos desde cero para tu marca.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                ),
                title: "Rendimiento extremo",
                desc: "Webs ultra rápidas con Next.js y optimización avanzada. Tu web carga en menos de 2 segundos.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                ),
                title: "Mantenimiento incluido",
                desc: "Nos encargamos de todo: hosting, actualizaciones, seguridad y soporte técnico mensual.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-gray-light p-8 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-bold text-dark">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo trabajo */}
      <section className="bg-gray-light py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-dark sm:text-4xl">Cómo trabajo</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Sabes lo que va a pasar en cada momento. Y no pagas nada hasta que tu web está
              terminada.
            </p>
          </div>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.title} className="rounded-2xl border border-gray-100 bg-white p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-bold text-dark">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{step.desc}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-center text-sm text-gray-600">
            Todos los detalles en las{" "}
            <Link href="/condiciones" className="text-primary underline hover:text-primary-dark">
              condiciones del servicio
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Sobre mí */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-4 text-center sm:flex-row sm:text-left">
          <div
            aria-hidden="true"
            className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-4xl font-bold text-white shadow-lg"
          >
            ÁR
          </div>
          <div>
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">
              Quién está detrás
            </p>
            <h2 className="mt-2 text-3xl font-bold text-dark">Hola, soy Álvaro Ramírez</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              ORVEX soy yo. Hago webs para negocios que quieren estar bien presentados en
              internet sin complicarse. Trabajo solo, así que hablas siempre conmigo: desde la
              primera llamada hasta que tu web está publicada, y también después, cuando necesitas
              cambiar algo.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1ebe5b] transition-colors"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Escríbeme por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            ¿Listo para dar el salto digital?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Cuéntanos tu idea y te prepararemos una propuesta personalizada sin
            compromiso.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/servicios"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-primary shadow-lg hover:bg-gray-50 transition-colors"
            >
              Ver servicios
            </Link>
            <Link
              href="/contacto"
              className="rounded-xl border-2 border-white/30 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Contactar ahora
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { Suspense, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import WhatsAppIcon from "@/components/whatsapp-icon";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/contact";
import { PLANS, euros, offerPrice, type PlanKey } from "@/lib/plans";

const LANDING_ENDPOINT =
  "https://webs-e3yr.vercel.app/api/public/landing-request";

type PlanValue = PlanKey | "UNKNOWN";

export default function Contacto() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Info */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">
              Contacto
            </p>
            <h1 className="mt-3 text-3xl font-bold text-dark sm:text-4xl">
              Hablemos de tu proyecto
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Escríbenos por WhatsApp, llámanos o rellena el formulario y te
              responderemos en menos de 24 horas con una propuesta personalizada
              y sin compromiso.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1ebe5b] transition-colors"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Escríbenos por WhatsApp
              </a>
              <a
                href={PHONE_TEL}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-dark hover:border-primary hover:text-primary transition-colors"
              >
                Llamar al {PHONE_DISPLAY}
              </a>
            </div>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-dark">Teléfono y WhatsApp</h3>
                  <p className="text-sm text-gray-600">
                    <a href={PHONE_TEL} className="hover:text-primary">
                      {PHONE_DISPLAY}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-dark">Email</h3>
                  <p className="text-sm text-gray-600">
                    aramirezbolea@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-dark">
                    Tiempo de respuesta
                  </h3>
                  <p className="text-sm text-gray-600">Menos de 24 horas</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-dark">Sin compromiso</h3>
                  <p className="text-sm text-gray-600">
                    Presupuesto gratuito y sin obligación
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <Suspense fallback={<ContactForm initialPlan="UNKNOWN" />}>
            <ContactFormFromQuery />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

function isPlanValue(value: string | null): value is PlanValue {
  return value === "UNKNOWN" || (value !== null && Object.keys(PLANS).includes(value));
}

function ContactFormFromQuery() {
  const plan = useSearchParams().get("plan");
  return <ContactForm initialPlan={isPlanValue(plan) ? plan : "UNKNOWN"} />;
}

function ContactForm({ initialPlan }: { initialPlan: PlanValue }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    plan: initialPlan,
    message: "",
    website: "",
  });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(LANDING_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || undefined,
          companyName: form.companyName || undefined,
          plan: form.plan,
          message: form.message || undefined,
          sourceUrl: window.location.href,
          website: form.website,
        }),
      });

      if (res.ok) {
        setSuccess(true);
        setForm({
          name: "",
          email: "",
          phone: "",
          companyName: "",
          plan: "UNKNOWN",
          message: "",
          website: "",
        });
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Error enviando la solicitud");
      }
    } catch {
      setError("Error de conexión. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  function updateField<K extends keyof typeof form>(
    key: K,
    value: (typeof form)[K]
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      {success ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg
              className="h-8 w-8 text-green-600"
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
          </div>
          <h3 className="mt-4 text-xl font-bold text-dark">
            Mensaje enviado
          </h3>
          <p className="mt-2 text-gray-600">
            Te responderemos en menos de 24 horas. Gracias por confiar en
            ORVEX.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="mt-6 text-sm font-medium text-primary hover:text-primary-dark"
          >
            Enviar otro mensaje
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Anti-spam trap: hidden from people, bots fill it in. */}
          <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
            <label htmlFor="website">No rellenes este campo</label>
            <input
              id="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              onChange={(e) => updateField("website", e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-dark"
            >
              Nombre completo
            </label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => updateField("name", e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-dark placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-dark"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-dark placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
              placeholder="tu@email.com"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-dark"
              >
                Teléfono{" "}
                <span className="text-gray-400 text-xs">(opcional)</span>
              </label>
              <input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-dark placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                placeholder="+34 600 000 000"
              />
            </div>

            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-dark"
              >
                Empresa{" "}
                <span className="text-gray-400 text-xs">(opcional)</span>
              </label>
              <input
                id="companyName"
                type="text"
                value={form.companyName}
                onChange={(e) =>
                  updateField("companyName", e.target.value)
                }
                className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-dark placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                placeholder="Nombre de tu negocio"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="plan"
              className="block text-sm font-medium text-dark"
            >
              Plan de interés
            </label>
            <select
              id="plan"
              value={form.plan}
              onChange={(e) =>
                updateField("plan", e.target.value as PlanValue)
              }
              className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-dark focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
            >
              <option value="UNKNOWN">No lo tengo claro</option>
              {(Object.keys(PLANS) as PlanKey[]).map((key) => (
                <option key={key} value={key}>
                  {`${PLANS[key].name} — ${euros(offerPrice(PLANS[key].price))} (antes ${euros(PLANS[key].price)})`}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-dark"
            >
              Cuéntanos tu proyecto{" "}
              <span className="text-gray-400 text-xs">(opcional)</span>
            </label>
            <textarea
              id="message"
              rows={4}
              value={form.message}
              onChange={(e) => updateField("message", e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-dark placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none resize-none"
              placeholder="Describe brevemente tu idea, tu negocio y qué necesitas..."
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-primary py-3.5 font-semibold text-white hover:bg-primary-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Enviando..." : "Enviar solicitud"}
          </button>

          <p className="text-xs text-gray-500 text-center leading-relaxed">
            Responsable: Álvaro Ramírez Bolea (ORVEX Agency). Usaremos tus
            datos solo para responder a tu solicitud y no los cederemos a
            terceros. Puedes ejercer tus derechos escribiendo a
            aramirezbolea@gmail.com. Más información en la{" "}
            <Link href="/privacidad" className="underline hover:text-primary">
              política de privacidad
            </Link>
            .
          </p>
        </form>
      )}
    </div>
  );
}

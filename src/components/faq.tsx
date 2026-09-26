import Link from "next/link";
import { MAINTENANCE_HOURS, REVISION_ROUNDS } from "@/lib/terms";

const questions = [
  {
    q: "¿Cuándo pago la web?",
    a: "Al entregarla. No pagas nada por adelantado: primero ves la web terminada en un enlace de prueba y, cuando te parece bien, la pagas y la publico en tu dominio. Puedes pagar con tarjeta, Apple Pay o Google Pay.",
  },
  {
    q: "¿Y si no me gusta?",
    a: `Antes de construir nada te enseño un boceto. Si no te convence, lo dejamos ahí sin coste. Después, con la web ya hecha, tienes ${REVISION_ROUNDS} rondas de cambios incluidas para dejarla a tu gusto.`,
  },
  {
    q: "¿De quién es la web y el dominio?",
    a: "Tuyos. Una vez pagada, la web es tuya, y el dominio se registra a tu nombre. El primer año de dominio está incluido; después la renovación cuesta unos 12 € al año.",
  },
  {
    q: "¿Qué incluye el mantenimiento mensual?",
    a: `El alojamiento de la web, el certificado SSL, las actualizaciones de seguridad y hasta ${MAINTENANCE_HOURS} hora de cambios al mes: textos, fotos, horarios, precios… Si un mes necesitas más, te digo antes cuánto cuesta.`,
  },
  {
    q: "¿Puedo dejar el mantenimiento?",
    a: "Sí, cuando quieras y sin permanencia. La baja se aplica al final del mes pagado, y te entrego los archivos de tu web para que puedas llevarla a otro sitio.",
  },
  {
    q: "¿Cuánto tardas?",
    a: "Depende del plan: desde una semana para una web sencilla. El plazo exacto va en la propuesta y empieza a contar cuando tengo tus textos, fotos y logo.",
  },
  {
    q: "¿Qué tengo que darte yo?",
    a: "Tu logo, los textos básicos de tu negocio y fotos si las tienes. Si no tienes fotos, uso imágenes con licencia libre. En la primera llamada te digo exactamente qué hace falta.",
  },
  {
    q: "¿Me garantizas salir el primero en Google?",
    a: "No, y desconfía de quien te lo garantice. Preparo la web para que Google la entienda bien y trabajo para mejorar tu visibilidad, pero las posiciones dependen de Google.",
  },
];

export default function Faq() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-2xl font-bold text-dark text-center sm:text-3xl">
          Preguntas frecuentes
        </h2>
        <div className="mt-10 divide-y divide-gray-200 border-y border-gray-200">
          {questions.map((item) => (
            <details key={item.q} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-dark">
                {item.q}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-xl leading-none text-primary transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-gray-600">
          Todo esto, con más detalle, en las{" "}
          <Link href="/condiciones" className="text-primary underline hover:text-primary-dark">
            condiciones del servicio
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

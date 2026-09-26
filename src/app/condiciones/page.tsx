import type { Metadata } from "next";
import Link from "next/link";
import { PHONE_DISPLAY } from "@/lib/contact";
import { LAUNCH_OFFER } from "@/lib/plans";
import { MAINTENANCE_HOURS, REVISION_ROUNDS } from "@/lib/terms";

export const metadata: Metadata = {
  title: "Condiciones del servicio — ORVEX Agency",
  description:
    "Cómo trabajo, cuándo se paga, qué incluye el mantenimiento y de quién es la web y el dominio.",
};

export default function Condiciones() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 space-y-8 text-gray-700 leading-relaxed">
        <div>
          <h1 className="text-3xl font-bold text-dark sm:text-4xl">Condiciones del servicio</h1>
          <p className="mt-2 text-sm text-gray-500">Última actualización: septiembre de 2026</p>
          <p className="mt-4">
            Aquí está todo lo que acordamos cuando hago tu web. Cada propuesta concreta (precio,
            plazo y contenido) te la envío por escrito y la aceptas online antes de empezar.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-dark">1. Quién presta el servicio</h2>
          <p>
            Álvaro Ramírez Bolea, que opera bajo el nombre comercial ORVEX Agency. Trabajo solo,
            así que hablas siempre directamente conmigo. Puedes escribirme a <strong>aramirezbolea@gmail.com</strong> o llamarme al{" "}
            <strong>{PHONE_DISPLAY}</strong>. Más datos en el{" "}
            <Link href="/aviso-legal" className="text-primary underline hover:text-primary-dark">
              aviso legal
            </Link>
            .
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-dark">2. Cómo trabajo</h2>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Una llamada de unos 15 minutos para entender tu negocio. Es gratis.</li>
            <li>Te envío la propuesta por escrito, con el precio cerrado y el plazo.</li>
            <li>
              Si la aceptas, te enseño un boceto de la web. Si el boceto no te convence, lo
              dejamos ahí y no pagas nada.
            </li>
            <li>Construyo la web y te la enseño en un enlace de prueba.</li>
            <li>Hago los ajustes que me pidas (ver el punto 4).</li>
            <li>Cuando das la web por buena, la pagas y la publico en tu dominio.</li>
          </ol>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-dark">3. Precio y pago</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>El precio es el que aparece en la propuesta y no cambia sin tu aprobación.</li>
            <li>
              <strong>No pagas nada por adelantado.</strong> La web se paga entera al entregarla,
              cuando ya la has visto terminada.
            </li>
            <li>Puedes pagar con tarjeta, Apple Pay o Google Pay, a través de Stripe.</li>
            <li>
              La web se publica en tu dominio una vez pagada. Hasta entonces la puedes ver y
              revisar en el enlace de prueba.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-dark">4. Cambios antes de la entrega</h2>
          <p>
            La web incluye <strong>{REVISION_ROUNDS} rondas de cambios</strong>. En cada ronda me
            mandas todo lo que quieras ajustar (textos, colores, fotos, orden de las secciones…) y
            lo aplico. Si después quieres algo que no estaba en la propuesta, como una página o
            una función nueva, te lo presupuesto antes y solo lo hago si lo apruebas.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-dark">5. Plazos</h2>
          <p>
            Cada plan tiene un plazo orientativo que se concreta en la propuesta. Empieza a contar
            cuando tengo tus textos, fotos y logo. Si el contenido llega tarde, el plazo se
            mueve lo mismo.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-dark">6. Tus textos, fotos, logo y textos legales</h2>
          <p>
            Necesitas tener derecho a usar el contenido que me pases. Si no tienes fotos propias,
            uso imágenes con licencia libre. Nunca copio textos ni imágenes de otras webs.
          </p>
          <p>
            Te preparo el aviso legal y la política de privacidad de tu web con los datos de tu
            negocio, y revisas que sean correctos. Las estadísticas de visitas que instalo no usan
            cookies, así que tu web no necesita banner de cookies. Si más adelante quieres
            herramientas que sí las usan (Google Analytics, píxeles de anuncios…), añado el aviso
            de cookies antes de activarlas.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-dark">7. Dominio</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>El primer año del dominio está incluido.</strong> Se registra a tu nombre.
            </li>
            <li>
              A partir del segundo año la renovación la pagas tú (unos 12 € al año). Te aviso
              antes de que caduque.
            </li>
            <li>Si ya tienes dominio, lo configuro sin coste.</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-dark">8. De quién es la web</h2>
          <p>
            Una vez pagada, <strong>la web y el dominio son tuyos</strong>. Si algún día dejas el
            mantenimiento, te entrego los archivos de la web y te ayudo a llevarla a otro
            alojamiento.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-dark">9. Mantenimiento mensual</h2>
          <p>
            La cuota mensual de tu plan empieza cuando la web se publica. Incluye:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Alojamiento (hosting) de la web y certificado SSL.</li>
            <li>Actualizaciones de seguridad y vigilancia de que la web funciona.</li>
            <li>
              <strong>Hasta {MAINTENANCE_HOURS} hora de cambios al mes</strong>: textos, fotos,
              horarios, precios, un aviso nuevo… Las horas que no uses no se acumulan.
            </li>
          </ul>
          <p>
            Si un mes necesitas más tiempo, o un cambio grande como una sección nueva, te digo
            antes cuánto cuesta y solo lo hago si lo apruebas.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-dark">10. Sin permanencia</h2>
          <p>
            Puedes cancelar el mantenimiento cuando quieras, sin penalización. La baja se aplica al
            final del mes que ya has pagado. La web y el dominio siguen siendo tuyos (ver el punto
            8).
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-dark">11. Posicionamiento en Google</h2>
          <p>
            Preparo la web para que Google la entienda bien y trabajo para mejorar tu
            visibilidad, pero nadie puede garantizar una posición concreta en Google, y yo
            tampoco lo hago.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-dark">12. Oferta de lanzamiento</h2>
          <p>
            Los {LAUNCH_OFFER.spots} primeros clientes que aceptan una propuesta tienen un{" "}
            {LAUNCH_OFFER.percent}% de descuento en el precio de la web. A cambio, me das tu
            opinión y me dejas enseñar tu web en mi portfolio. La cuota mensual no cambia.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-dark">13. Tus datos</h2>
          <p>
            Cómo trato tus datos personales está en la{" "}
            <Link href="/privacidad" className="text-primary underline hover:text-primary-dark">
              política de privacidad
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso legal — ORVEX Agency",
  description: "Información legal sobre el titular de este sitio web.",
};

export default function AvisoLegal() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 space-y-8 text-gray-700 leading-relaxed">
        <div>
          <h1 className="text-3xl font-bold text-dark sm:text-4xl">Aviso legal</h1>
          <p className="mt-2 text-sm text-gray-500">Última actualización: septiembre de 2026</p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-dark">1. Titular del sitio web</h2>
          <p>
            En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y de
            Comercio Electrónico (LSSI), se informa de que este sitio web pertenece a:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Titular:</strong> Álvaro Ramírez Bolea, que opera bajo el nombre comercial ORVEX Agency</li>
            <li><strong>Actividad:</strong> diseño y desarrollo de páginas web</li>
            <li><strong>Email de contacto:</strong> aramirezbolea@gmail.com</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-dark">2. Objeto</h2>
          <p>
            Este sitio web tiene como finalidad informar sobre los servicios de diseño y desarrollo
            web de ORVEX Agency y permitir que las personas interesadas soliciten información o un
            presupuesto sin compromiso.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-dark">3. Condiciones de uso</h2>
          <p>
            El acceso a este sitio web es gratuito y no requiere registro. Quien lo utiliza se
            compromete a hacer un uso adecuado de sus contenidos y a no emplearlos para actividades
            ilícitas o contrarias a la buena fe.
          </p>
          <p>
            Los precios y condiciones que aparecen en la web son orientativos. Cada proyecto se
            concreta en un presupuesto personalizado, que es el que tiene validez una vez aceptado
            por el cliente.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-dark">4. Propiedad intelectual</h2>
          <p>
            Los textos, diseños, logotipos y demás contenidos de este sitio web pertenecen a su
            titular o se utilizan con autorización. No se permite su reproducción, distribución o
            modificación sin permiso previo por escrito.
          </p>
          <p>
            Las webs mostradas en el portfolio son proyectos de demostración creados para ilustrar
            cada plan de servicio.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-dark">5. Responsabilidad</h2>
          <p>
            El titular procura que la información de este sitio sea correcta y esté actualizada,
            pero no garantiza la ausencia de errores ni se responsabiliza de los daños que pudieran
            derivarse de su uso. Tampoco se hace responsable del contenido de sitios web externos a
            los que se pueda acceder mediante enlaces.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-dark">6. Protección de datos</h2>
          <p>
            El tratamiento de los datos personales que me facilites se explica en la{" "}
            <Link href="/privacidad" className="text-primary underline hover:text-primary-dark">
              política de privacidad
            </Link>
            .
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-dark">7. Legislación aplicable</h2>
          <p>
            Este aviso legal se rige por la legislación española. Para cualquier controversia, las
            partes se someten a los juzgados y tribunales que correspondan conforme a la ley.
          </p>
        </div>
      </div>
    </section>
  );
}

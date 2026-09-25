import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad — ORVEX Agency",
  description: "Cómo tratamos los datos personales que nos facilitas a través de esta web.",
};

export default function Privacidad() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 space-y-8 text-gray-700 leading-relaxed">
        <div>
          <h1 className="text-3xl font-bold text-dark sm:text-4xl">Política de privacidad</h1>
          <p className="mt-2 text-sm text-gray-500">Última actualización: septiembre de 2026</p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-dark">1. Responsable del tratamiento</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Responsable:</strong> Álvaro Ramírez Bolea (ORVEX Agency)</li>
            <li><strong>Email:</strong> aramirezbolea@gmail.com</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-dark">2. Qué datos recogemos</h2>
          <p>Cuando rellenas el formulario de contacto recogemos:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Nombre y email.</li>
            <li>Teléfono y nombre de tu empresa, si decides indicarlos.</li>
            <li>El plan que te interesa y el mensaje que nos escribas.</li>
            <li>
              Datos técnicos del envío (dirección IP, navegador y página desde la que lo envías),
              que usamos para evitar abusos y envíos automáticos.
            </li>
          </ul>
          <p>No recogemos datos de menores de 14 años ni categorías especiales de datos.</p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-dark">3. Para qué los usamos</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Responder a tu solicitud y contactarte por email o teléfono sobre ella.</li>
            <li>Preparar y enviarte un presupuesto de los servicios que te interesan.</li>
            <li>Enviarte un email de confirmación de que hemos recibido tu solicitud.</li>
          </ul>
          <p>
            No usamos tus datos para enviarte publicidad sin tu permiso ni para tomar decisiones
            automatizadas sobre ti.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-dark">4. Base legal</h2>
          <p>
            Tratamos tus datos porque tú nos los facilitas para pedir información o un presupuesto,
            es decir, para aplicar medidas precontractuales a petición tuya (artículo 6.1.b del
            Reglamento General de Protección de Datos). Si llegas a contratar, la base será la
            ejecución del contrato.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-dark">5. Cuánto tiempo los conservamos</h2>
          <p>
            Si no llegas a contratar, conservamos tus datos un máximo de 12 meses desde tu último
            contacto y después los eliminamos. Si contratas, los conservamos mientras dure la
            relación y, después, el tiempo que exija la ley (por ejemplo, las obligaciones fiscales).
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-dark">6. Con quién los compartimos</h2>
          <p>
            No vendemos ni cedemos tus datos a terceros. Para que la web funcione usamos estos
            proveedores, que tratan los datos solo por nuestra cuenta:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Vercel</strong>: alojamiento de la web.</li>
            <li><strong>Neon</strong>: base de datos, con servidores en la Unión Europea (Alemania).</li>
            <li><strong>Resend</strong>: envío de los emails de confirmación.</li>
          </ul>
          <p>
            Si nos escribes por WhatsApp, esos mensajes se tratan a través de WhatsApp (Meta) según
            sus propias condiciones, y los usamos solo para responderte.
          </p>
          <p>
            Algunos de estos proveedores tienen sede en Estados Unidos. En esos casos, la
            transferencia de datos se realiza con las garantías que exige el RGPD, como el Marco de
            Privacidad de Datos UE-EE. UU. o las cláusulas contractuales tipo de la Comisión Europea.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-dark">7. Tus derechos</h2>
          <p>
            Puedes pedir en cualquier momento acceder a tus datos, rectificarlos, suprimirlos,
            limitar su tratamiento, oponerte a él o solicitar su portabilidad. Solo tienes que
            escribir a <strong>aramirezbolea@gmail.com</strong> indicando qué derecho quieres
            ejercer.
          </p>
          <p>
            Si consideras que no hemos tratado bien tus datos, puedes presentar una reclamación ante
            la Agencia Española de Protección de Datos (
            <a
              href="https://www.aepd.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary-dark"
            >
              www.aepd.es
            </a>
            ).
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-dark">8. Cookies</h2>
          <p>
            Esta web no utiliza cookies de análisis, publicidad ni seguimiento. Solo podría usar las
            estrictamente técnicas necesarias para que funcione, que no requieren consentimiento.
          </p>
        </div>
      </div>
    </section>
  );
}

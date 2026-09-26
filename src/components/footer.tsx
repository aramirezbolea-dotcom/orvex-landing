import Link from "next/link";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-400">
      <div className="mx-auto max-w-6xl px-4 pt-12 pb-24 sm:pb-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold text-white">
              ORVEX<span className="text-primary"> Agency</span>
            </h3>
            <p className="mt-3 text-sm leading-relaxed">
              Diseño y desarrollo webs para negocios. Hablas siempre
              directamente conmigo, sin intermediarios.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white">Navegación</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="hover:text-white transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-white transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="hover:text-white transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Servicios</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Landing page</li>
              <li>Web multipágina</li>
              <li>Tienda online</li>
              <li>Desarrollo a medida</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Contacto</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={PHONE_TEL} className="hover:text-white transition-colors">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>aramirezbolea@gmail.com</li>
              <li>
                <Link
                  href="/contacto"
                  className="text-primary hover:text-primary-light transition-colors"
                >
                  Formulario de contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col items-center gap-3 text-xs sm:flex-row sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} ORVEX Agency. Todos los derechos
            reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <Link href="/condiciones" className="hover:text-white transition-colors">
              Condiciones
            </Link>
            <Link href="/aviso-legal" className="hover:text-white transition-colors">
              Aviso legal
            </Link>
            <Link href="/privacidad" className="hover:text-white transition-colors">
              Política de privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

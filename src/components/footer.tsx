import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-400">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold text-white">
              ORVEX<span className="text-primary"> Agency</span>
            </h3>
            <p className="mt-3 text-sm leading-relaxed">
              Agencia web autónoma. Diseñamos y desarrollamos tu presencia
              digital con tecnología moderna.
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

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs">
          &copy; {new Date().getFullYear()} ORVEX Agency. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}

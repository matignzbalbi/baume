import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          // CAMBIO 1: 'text-center' para centrar textos globalmente
          className={`grid grid-cols-1 gap-8 py-8 sm:grid-cols-12 md:py-12 text-center ${
            border
              ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]"
              : ""
          }`}
        >
          {/* 1st block: Logo y Copyright */}
          {/* CAMBIO 2: 'items-center' para centrar el logo y textos verticalmente */}
          <div className="col-span-1 sm:col-span-12 lg:col-span-4 flex flex-col items-center space-y-2">
            <div>
              <Logo />
            </div>
            <div className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} J. Baume Construcciones. <br />
              Todos los derechos reservados.
            </div>
          </div>

          {/* 2nd block: Menú */}
          <div className="col-span-1 sm:col-span-6 md:col-span-3 lg:col-span-2 space-y-2">
            <h3 className="text-base font-bold tracking-tight text-gray-900">
              Menú
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-orange-500"
                  href="/"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-orange-500"
                  href="#services"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-orange-500"
                  href="#contact"
                >
                  Presupuesto
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block: Contacto */}
          <div className="col-span-1 sm:col-span-6 md:col-span-3 lg:col-span-3 space-y-2">
            <h3 className="text-base font-bold tracking-tight text-gray-900">
              Contacto
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-gray-600 transition hover:text-orange-500"
                  href="https://wa.me/5491100000000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +54 9 11 XXX
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 transition hover:text-orange-500 break-all"
                  href="mailto:contacto@jbaume.com"
                >
                  construcciones@jbaume.com.ar
                </a>
              </li>
              <li className="text-gray-600">
                Luján, Buenos Aires.
              </li>
            </ul>
          </div>

          {/* 4th block: Redes Sociales */}
          <div className="col-span-1 sm:col-span-6 md:col-span-3 lg:col-span-3 space-y-2">
            <h3 className="text-base font-bold tracking-tight text-gray-900">
              Nuestras redes
            </h3>
            {/* CAMBIO 3: 'justify-center' para centrar los íconos */}
            <ul className="flex justify-center gap-4">
              {/* Instagram */}
              <li>
                <Link
                  className="flex items-center justify-center text-orange-500 transition hover:text-orange-600"
                  href="#0"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                  </svg>
                </Link>
              </li>

              {/* LinkedIn */}
              <li>
                <Link
                  className="flex items-center justify-center text-orange-500 transition hover:text-orange-600"
                  href="#0"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
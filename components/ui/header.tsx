"use client"; // IMPORTANTE: Esto habilita la interactividad

import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <Logo />
          </div>

          {/* --- NAVEGACIÓN DE ESCRITORIO (Hidden en Mobile) --- */}
          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="#services"
              className="text-sm font-semibold tracking-tight text-gray-600 hover:text-[#ff914d] transition-colors duration-200"
            >
              Servicios
            </Link>
            <Link
              href="#about"
              className="text-sm font-semibold tracking-tight text-gray-600 hover:text-[#ff914d] transition-colors duration-200"
            >
              Nosotros
            </Link>
            <Link
              href="#contact"
              className="text-sm font-semibold tracking-tight text-white bg-[#ff914d] hover:bg-[#e67a3a] px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Contacto
            </Link>
          </nav>

          {/* --- BOTÓN HAMBURGUESA (Visible solo en Mobile) --- */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-[#ff914d] focus:outline-none p-2"
              aria-label="Abrir menú"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  // Ícono de "Cerrar" (X)
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  // Ícono de "Hamburguesa" (Tres líneas)
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* --- MENÚ DESPLEGABLE MÓVIL (Acordeón) --- */}
      {/* Se renderiza condicionalmente si isMobileMenuOpen es true */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl animate-in slide-in-from-top-5 duration-200">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            <Link
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)} // Cierra el menú al hacer clic
              className="text-base font-semibold text-gray-700 hover:text-[#ff914d] py-2 border-b border-gray-50"
            >
              Servicios
            </Link>
            <Link
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-semibold text-gray-700 hover:text-[#ff914d] py-2 border-b border-gray-50"
            >
              Nosotros
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-block text-center text-sm font-bold text-white bg-[#ff914d] hover:bg-[#e67a3a] px-5 py-3 rounded-full shadow-sm mt-2"
            >
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
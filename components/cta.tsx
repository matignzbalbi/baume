export default function Cta() {
  return (
    // CAMBIO CLAVE:
    // 1. 'pt-0': Eliminamos el relleno superior interno.
    // 2. '-mt-12 md:-mt-24': Forzamos a la sección a subir 96px (aprox) sobre el espacio vacío anterior.
    // 3. 'relative z-20': Aseguramos que quede por encima de la foto de fondo si se superpone.
    <section id="contact" className="relative z-20 pt-25 pb-12 md:pb-50 -mt-12 md:-mt-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-2xl bg-[lab(8.11897%_0.811279_-12.254)] px-8 py-10 text-center shadow-2xl md:px-12 md:py-16"
          data-aos="zoom-y-out"
        >
          {/* Barra de acento naranja superior */}
          <div className="absolute top-0 left-0 h-1.5 w-full bg-[#ff914d]" />

          <div className="relative z-10">
            {/* Título en Blanco */}
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              ¿Listo para comenzar tu proyecto?
            </h2>
            
            {/* Texto descriptivo */}
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
              Consultá con un ingeniero civil matriculado. Asesoramiento técnico profesional para cálculo estructural, suelos y obras industriales.
            </p>

            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center gap-4">
              {/* Botón Principal */}
              <a
                className="btn w-full bg-[#ff914d] text-white hover:bg-[#e67a3a] border border-transparent shadow-sm transition-colors sm:w-auto rounded-md py-3 px-8 font-medium"
                href="mailto:contacto@jbaume.com" 
              >
                Solicitar Presupuesto
              </a>
              
              {/* Botón Secundario */}
              <a
                className="btn w-full mt-4 sm:mt-0 bg-transparent text-white border border-gray-600 hover:bg-white hover:text-gray-900 hover:border-white sm:w-auto rounded-md py-3 px-8 font-medium transition-all"
                href="https://wa.me/549XXXXXXXXX" 
              >
                WhatsApp
              </a>
            </div>

            <p className="mt-8 text-sm text-gray-400">
              Atendemos en Luján, CABA, Zona Norte y Zona Oeste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
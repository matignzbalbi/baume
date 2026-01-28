import Image from "next/image";
// Eliminamos PageIllustration porque ensucia la foto de fondo
// import PageIllustration from "@/components/page-illustration";

export default function HeroHome() {
  return (
    <section className="relative overflow-hidden">
      
      {/* 1. FONDO DE IMAGEN (Ocupa todo el espacio) */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero-construction.jpg"
          alt="Obra en construcción fondo"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 2. OVERLAY (Capa oscura para que se lea el texto) */}
      {/* bg-black/70 significa negro al 70% de opacidad. Ajústalo si la foto es muy clara u oscura */}
      <div className="absolute inset-0 -z-10 bg-black/70" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-16 pt-36 md:pb-32 md:pt-48">
          
          <div className="pb-12 text-center md:pb-16">
            
            {/* Tag de Experiencia */}
            <div
              className="mb-6 inline-block rounded-full border border-orange-500/50 bg-orange-900/30 px-4 py-1.5 backdrop-blur-sm"
              data-aos="zoom-y-out"
            >
              <p className="text-orange-400 font-bold text-sm tracking-wide uppercase">
                +15 años de experiencia
              </p>
            </div>

            {/* Título Principal */}
            <h1
              /* Cambié text-gray-900 a text-white para contraste */
              className="mb-8 text-5xl font-extrabold leading-tight text-white md:text-7xl drop-shadow-lg"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Ingeniería Estructural <br className="max-lg:hidden" />
                de Confianza
            </h1>

            <div className="mx-auto max-w-3xl">
              {/* Párrafo */}
              <p
                /* Cambié text-gray-700 a text-gray-200 (gris claro) */
                className="mb-10 text-xl text-gray-200 leading-relaxed font-light"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Especialistas en cálculo estructural, movimiento de suelos y construcción de galpones industriales. 
                Garantizamos la seguridad y solidez de tu proyecto en Buenos Aires.
              </p>

              {/* Botones */}
              <div
                className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center sm:gap-4"
                data-aos="zoom-y-out"
                data-aos-delay={450}
              >
                <a
                  className="btn group mb-4 w-full bg-[#ff914d] text-white hover:bg-[#ffaa70] hover:scale-105 transition-all duration-300 font-bold shadow-lg shadow-orange-500/20 sm:mb-0 sm:w-auto px-8 py-3 rounded-full"
                  href="#contact"
                >
                  <span className="relative inline-flex items-center">
                    Solicitar Presupuesto{" "}
                    <span className="ml-2 tracking-normal transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </a>
                <a
                  /* Botón secundario estilo "Glassmorphism" (transparente) */
                  className="btn w-full bg-white/10 text-white backdrop-blur-sm border border-white/30 hover:bg-white/20 sm:w-auto px-8 py-3 rounded-full font-medium transition-all"
                  href="#services"
                >
                  Ver Servicios
                </a>
              </div>
            </div>
          </div>
          
          {/* NOTA: Eliminé el bloque <div> de la imagen que estaba aquí abajo 
              porque ahora la imagen es el fondo de toda la sección. */}

        </div>
      </div>
    </section>
  );
}
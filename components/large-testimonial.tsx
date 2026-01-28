import Image from "next/image";
import TestimonialImg from "@/public/images/large-testimonial.jpg";

export default function LargeTestimonial() {
  return (
    <section id="about" className="bg-white py-12 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          
          {/* Foto del cliente */}
          {/* ... (Tu código de imagen aquí si lo tienes separado, o el div que ya tenías) ... */}
          
          <blockquote className="max-w-3xl mx-auto">
            {/* CAMBIO AQUI: text-xl (móvil) sm:text-2xl (tablet) md:text-4xl (PC) */}
            <p className="text-xl sm:text-2xl md:text-4xl text-gray-500 font-light leading-snug tracking-tight">
              "Trabajar con un ingeniero civil profesional <br className="hidden md:block" />
              <span className="text-gray-900 font-bold">marcó la diferencia</span>. Desde el 
              cálculo estructural hasta la <span className="text-gray-900 font-bold decoration-[#ff914d] decoration-4 underline-offset-4 underline">dirección de obra</span>, 
              todo fue impecable."
            </p>
          </blockquote>

          {/* Autor Minimalista */}
          <div className="mt-8">
            <div className="text-lg font-semibold text-gray-900">Roberto Fernández</div>
            <div className="text-sm font-medium text-[#ff914d] uppercase tracking-wide">
              Constructor Asociado
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
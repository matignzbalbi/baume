import "./css/style.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "J Baume Construcciones",
  description: "Ingeniería Civil y Construcción",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* --- INICIO DEL BLOQUE MÁGICO PARA OCULTAR LA N --- */}
        <style>{`
          /* Ocultar Vercel Toolbar / Next Badge */
          nextjs-portal,
          #vercel-toolbar,
          .vercel-toolbar,
          [data-nextjs-toast] {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            pointer-events: none !important;
          }
        `}</style>
        {/* --- FIN DEL BLOQUE MÁGICO --- */}
      </head>
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
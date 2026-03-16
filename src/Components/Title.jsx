import React from "react";
import man from "/man.webp";
import SocialLinks from "./MiniComponents/SocialLinks";

const socialLinks = [
  { href: "https://www.linkedin.com/in/dnbravo04/", label: "LinkedIn" },
  { href: "https://github.com/dnbravo04", label: "GitHub" },
];

export const Title = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-paper pt-20">
      {/* Manga screentone pattern */}
      <div className="absolute inset-0 bg-halftone bg-halftone opacity-100"></div>
      
      {/* Subtle speed lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-ink to-transparent transform -rotate-2"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-ink to-transparent transform rotate-1"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left: Text content - manga style clean */}
        <div className="space-y-8 animate-slide-in-left">
          {/* Badge minimalista */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-manga-black text-manga-white border-l-4 border-manga-accent-red">
            <div className="w-2 h-2 bg-manga-accent-red"></div>
            <span className="font-inter text-sm font-semibold tracking-wider uppercase">QA Engineer</span>
          </div>

          {/* Name - estilo manga con líneas limpias */}
          <h1 className="font-display leading-none">
            <span className="block text-7xl md:text-8xl text-manga-black tracking-tight">
              DIEGO
            </span>
            <span className="block text-6xl md:text-7xl text-manga-gray-700 tracking-tight -mt-2">
              BRAVO ARIAS
            </span>
          </h1>

          {/* Línea decorativa manga */}
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-manga-black to-transparent"></div>
            <div className="w-2 h-2 bg-manga-accent-red rotate-45"></div>
          </div>

          {/* Description en panel limpio */}
          <div className="relative bg-white border-l-4 border-manga-accent-blue p-6 shadow-panel">
            <p className="font-inter text-lg text-manga-gray-800 leading-relaxed">
              Especializado en <span className="font-semibold text-manga-black">testing manual</span> de aplicaciones web.
              Background en desarrollo con <span className="font-semibold text-manga-accent-blue">React</span> y <span className="font-semibold text-manga-accent-teal">Node.js</span>.
            </p>
          </div>

          {/* CTAs profesionales con acento manga */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-manga-black text-manga-white font-inter font-semibold border-b-4 border-manga-gray-900 hover:border-manga-accent-red transition-all overflow-hidden"
            >
              <span className="relative z-10">Contáctame</span>
              <div className="absolute inset-0 bg-manga-accent-red transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <a
              href="/cv-diego-bravo.pdf"
              download
              className="px-8 py-4 bg-white text-manga-black font-inter font-semibold border-2 border-manga-black hover:bg-manga-gray-100 transition-all"
            >
              Descargar CV
            </a>
          </div>

          {/* Social Links */}
          <div className="pt-4">
            <SocialLinks links={socialLinks} />
          </div>
        </div>

        {/* Right: Photo - manga panel style */}
        <div className="relative animate-slide-in-right">
          {/* Panel manga con sombra sutil */}
          <div className="relative bg-white border-4 border-manga-black p-3 shadow-panel-hover">
            <img
              src={man}
              alt="Diego Bravo Arias - QA Engineer"
              className="w-full h-auto grayscale-[20%] contrast-110"
            />
            
            {/* Badge disponible minimalista */}
            <div className="absolute -bottom-4 -right-4 bg-manga-accent-red text-white px-6 py-3 border-2 border-manga-black shadow-manga-lg">
              <span className="font-inter text-sm font-bold tracking-wide">DISPONIBLE</span>
            </div>

            {/* Líneas de velocidad sutiles */}
            <div className="absolute -top-2 -left-2 w-16 h-px bg-manga-black"></div>
            <div className="absolute -top-3 -left-3 w-12 h-px bg-manga-gray-400"></div>
          </div>

          {/* Decoración manga - líneas de acción sutiles */}
          <div className="absolute -inset-6 pointer-events-none opacity-30">
            <div className="absolute top-0 right-0 w-24 h-px bg-gradient-to-l from-manga-accent-blue to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-24 h-px bg-gradient-to-r from-manga-accent-teal to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator minimalista */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-2 text-manga-gray-600 hover:text-manga-black transition-colors">
          <span className="font-inter text-xs font-semibold tracking-wider uppercase">Scroll</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Title;
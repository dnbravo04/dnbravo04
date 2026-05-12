import React from "react";

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
      
      <div className="max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* Left: Text content - professional clean */}
        <div className="space-y-10 animate-slide-in-left">
          {/* Badge minimalista */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-manga-black text-manga-white border-l-4 border-manga-accent-olive">
            <div className="w-2 h-2 bg-manga-accent-olive"></div>
            <span className="font-inter text-sm font-semibold tracking-[0.15em] uppercase">App Developer & QA Engineer</span>
          </div>

          {/* Name - professional typography */}
          <h1 className="font-display leading-none">
            <span className="block text-7xl md:text-9xl text-manga-black tracking-tight">
              DIEGO
            </span>
            <span className="block text-5xl md:text-7xl text-manga-gray-700 tracking-tight -mt-3">
              BRAVO ARIAS
            </span>
          </h1>

          {/* Línea decorativa */}
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-manga-black to-transparent"></div>
            <div className="w-2 h-2 bg-manga-accent-olive rotate-45"></div>
          </div>

          {/* Description en panel profesional */}
          <div className="relative bg-white border-l-4 border-manga-accent-olive p-8 shadow-panel">
            <p className="font-inter text-xl text-manga-gray-800 leading-relaxed">
              Desarrollo <span className="font-semibold text-manga-black">aplicaciones móviles y web</span> con <span className="font-semibold text-manga-accent-olive">Flutter</span> y <span className="font-semibold text-manga-accent-blue">React</span>.
              Especialista en <span className="font-semibold text-manga-black">QA y testing</span> para asegurar calidad en cada producto.
            </p>
          </div>

          {/* CTAs profesionales */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group relative px-10 py-4 bg-manga-black text-manga-white font-inter font-semibold border-b-4 border-manga-gray-900 hover:border-manga-accent-olive transition-all overflow-hidden"
            >
              <span className="relative z-10">Contáctame</span>
            </a>
            <a
              href="#projects"
              className="group relative px-10 py-4 bg-white text-manga-black font-inter font-semibold border-2 border-manga-gray-300 hover:border-manga-black transition-all"
            >
              <span className="relative z-10">Ver Proyectos</span>
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


import React from "react";
import Polaroid from "./MiniComponents/Polaroid";
import imagen1 from "/imagen1.jpg";
import imagen2 from "/imagen2.jpg";
import imagen3 from "/imagen3.jpg";
import imagen4 from "/imagen4.jpg";

export const AboutMe = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Subtle screentone */}
      <div className="absolute inset-0 bg-screentone bg-screentone opacity-100"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section title */}
        <div className="mb-20 animate-fade-in">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-manga-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-manga-accent-olive rotate-45"></div>
              <span className="font-inter text-sm font-semibold tracking-[0.15em] uppercase text-manga-gray-600">Sobre mí</span>
              <div className="w-2 h-2 bg-manga-accent-olive rotate-45"></div>
            </div>
            <div className="h-px flex-1 bg-manga-gray-300"></div>
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-manga-black text-center tracking-tight">
            CONOCE MI HISTORIA
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Photos professional style */}
          <div className="grid grid-cols-2 gap-6 animate-slide-in-left">
            <div className="bg-white border-2 border-manga-black p-3 shadow-panel hover:shadow-panel-hover transition-all">
              <img src={imagen1} alt="Diego Bravo explorando la naturaleza" className="w-full grayscale-[30%]" loading="lazy" />
              <p className="font-inter text-xs font-semibold text-center mt-3 text-manga-gray-700">Explorando</p>
            </div>
            <div className="bg-white border-2 border-manga-black p-3 shadow-panel hover:shadow-panel-hover transition-all mt-12">
              <img src={imagen2} alt="Diego Bravo practicando fotografía" className="w-full grayscale-[30%]" loading="lazy" />
              <p className="font-inter text-xs font-semibold text-center mt-3 text-manga-gray-700">Fotografía</p>
            </div>
            <div className="bg-white border-2 border-manga-black p-3 shadow-panel hover:shadow-panel-hover transition-all">
              <img src={imagen3} alt="Diego Bravo tocando el violín" className="w-full grayscale-[30%]" loading="lazy" />
              <p className="font-inter text-xs font-semibold text-center mt-3 text-manga-gray-700">Violín</p>
            </div>
            <div className="bg-white border-2 border-manga-black p-3 shadow-panel hover:shadow-panel-hover transition-all mt-12">
              <img src={imagen4} alt="Diego Bravo programando en su computadora" className="w-full grayscale-[30%]" loading="lazy" />
              <p className="font-inter text-xs font-semibold text-center mt-3 text-manga-gray-700">Coding</p>
            </div>
          </div>

          {/* Text content professional style */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Main info panel */}
            <div className="bg-white border-l-4 border-manga-accent-olive p-8 shadow-panel">
              <p className="font-inter text-xl text-manga-gray-800 leading-relaxed">
                Soy <span className="font-semibold text-manga-black">desarrollador de aplicaciones</span> y <span className="font-semibold text-manga-black">QA Engineer</span> con experiencia en Flutter, React y testing manual de aplicaciones web. Formado en el SENA y cursando Software Development en <span className="font-semibold text-manga-accent-blue">BYU-Idaho</span>.
              </p>
            </div>

            {/* Education panel */}
            <div className="bg-white border-l-4 border-manga-accent-olive-light p-8 shadow-panel">
              <p className="font-inter text-xl text-manga-gray-800 leading-relaxed">
                También curso <span className="font-semibold text-manga-black">Ingeniería Agrícola</span> en la Universidad Nacional de Colombia 🌱 — perspectiva interdisciplinaria para resolver problemas complejos.
              </p>
            </div>

            {/* Skills panel */}
            <div className="bg-white border-l-4 border-manga-accent-blue p-8 shadow-panel">
              <p className="font-inter text-xl text-manga-gray-800 leading-relaxed">
                Combino desarrollo con <span className="font-semibold text-manga-accent-olive">Flutter</span> y <span className="font-semibold text-manga-accent-blue">React</span> con expertise en QA para crear productos de alta calidad.
              </p>
            </div>

            {/* Interests badges */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: '🎻', text: 'Violín' },
                { icon: '📸', text: 'Fotografía' },
                { icon: '💻', text: 'Tecnología' },
                { icon: '🎮', text: 'Gaming' }
              ].map((interest, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white border-2 border-manga-gray-300 px-5 py-3 hover:border-manga-black transition-all cursor-default"
                >
                  <span className="text-xl">{interest.icon}</span>
                  <span className="font-inter text-sm font-medium text-manga-gray-700">{interest.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

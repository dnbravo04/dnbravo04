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
        {/* Section title manga style */}
        <div className="mb-16 animate-fade-in">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-manga-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-manga-accent-blue rotate-45"></div>
              <span className="font-inter text-sm font-semibold tracking-wider uppercase text-manga-gray-600">Sobre mí</span>
              <div className="w-2 h-2 bg-manga-accent-blue rotate-45"></div>
            </div>
            <div className="h-px flex-1 bg-manga-gray-300"></div>
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-manga-black text-center tracking-tight">
            CONOCE MI HISTORIA
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Photos manga style */}
          <div className="grid grid-cols-2 gap-4 animate-slide-in-left">
            <div className="bg-white border-2 border-manga-black p-2 shadow-panel hover:shadow-panel-hover transition-all">
              <img src={imagen1} alt="Diego explorando" className="w-full grayscale-[30%]" />
              <p className="font-inter text-xs font-semibold text-center mt-2 text-manga-gray-700">Explorando</p>
            </div>
            <div className="bg-white border-2 border-manga-black p-2 shadow-panel hover:shadow-panel-hover transition-all mt-8">
              <img src={imagen2} alt="Diego fotografía" className="w-full grayscale-[30%]" />
              <p className="font-inter text-xs font-semibold text-center mt-2 text-manga-gray-700">Fotografía</p>
            </div>
            <div className="bg-white border-2 border-manga-black p-2 shadow-panel hover:shadow-panel-hover transition-all">
              <img src={imagen3} alt="Diego violín" className="w-full grayscale-[30%]" />
              <p className="font-inter text-xs font-semibold text-center mt-2 text-manga-gray-700">Violín</p>
            </div>
            <div className="bg-white border-2 border-manga-black p-2 shadow-panel hover:shadow-panel-hover transition-all mt-8">
              <img src={imagen4} alt="Diego coding" className="w-full grayscale-[30%]" />
              <p className="font-inter text-xs font-semibold text-center mt-2 text-manga-gray-700">Coding</p>
            </div>
          </div>

          {/* Text content manga style */}
          <div className="space-y-6 animate-slide-in-right">
            {/* Main info panel */}
            <div className="bg-white border-l-4 border-manga-accent-red p-6 shadow-panel">
              <p className="font-inter text-lg text-manga-gray-800 leading-relaxed">
                Soy <span className="font-semibold text-manga-black">QA Engineer</span> con experiencia en testing manual de aplicaciones web, formado en el SENA y cursando Software Development en <span className="font-semibold text-manga-accent-blue">BYU-Idaho</span>.
              </p>
            </div>

            {/* Education panel */}
            <div className="bg-white border-l-4 border-manga-accent-teal p-6 shadow-panel">
              <p className="font-inter text-lg text-manga-gray-800 leading-relaxed">
                También curso <span className="font-semibold text-manga-black">Ingeniería Agrícola</span> en la Universidad Nacional de Colombia 🌱 — perspectiva interdisciplinaria para resolver problemas complejos.
              </p>
            </div>

            {/* Skills panel */}
            <div className="bg-white border-l-4 border-manga-accent-blue p-6 shadow-panel">
              <p className="font-inter text-lg text-manga-gray-800 leading-relaxed">
                Mi background en <span className="font-semibold text-manga-accent-blue">React</span> y <span className="font-semibold text-manga-accent-teal">Node.js</span> me permite comunicarme eficazmente con developers.
              </p>
            </div>

            {/* Interests badges */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: '🎻', text: 'Violín' },
                { icon: '📸', text: 'Fotografía' },
                { icon: '💻', text: 'Tecnología' },
                { icon: '🎮', text: 'Gaming' }
              ].map((interest) => (
                <div
                  key={interest.text}
                  className="bg-manga-gray-100 border-2 border-manga-gray-300 px-4 py-2 font-inter text-sm font-medium text-manga-gray-700 hover:border-manga-black hover:bg-white transition-all cursor-default"
                >
                  {interest.icon} {interest.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

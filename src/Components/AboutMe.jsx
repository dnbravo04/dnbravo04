import React from "react";
import violin from "/violin.jpg";
import guitarra from "/guitarra.jpg";
import atardecer from "/imagen atardecer.jpg";
import SectionTitle from "./MiniComponents/SectionTitle";

const photos = [
  { src: violin, alt: "Diego Bravo tocando el violín", label: "Violín" },
  { src: guitarra, alt: "Diego Bravo tocando la guitarra", label: "Guitarra" },
  { src: atardecer, alt: "Atardecer fotografiado por Diego Bravo", label: "Atardecer" },
];

const interests = [
  { icon: "🎵", text: "Canto" },
  { icon: "📸", text: "Fotografía" },
  { icon: "💻", text: "Tecnología" },
  { icon: "🎮", text: "Gaming" },
];

export const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-white relative overflow-hidden"
    >
      {/* Subtle screentone — una sola vez, sin opacity redundante */}
      <div className="absolute inset-0 bg-screentone"></div>

      <div className="max-w-7xl mx-auto relative">
        <SectionTitle label="Sobre mí" title="UN POCO SOBRE MÍ" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Fotos — layout asimétrico con violín dominante */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 animate-slide-in-left">
            {photos.map((photo, index) => {
              const isViolin = index === 0;
              return (
                <div
                  key={index}
                  className={`bg-white border-2 border-manga-black p-3 shadow-panel hover:shadow-panel-hover transition-all ${
                    isViolin ? 'lg:row-span-2 lg:h-full flex flex-col' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {isViolin ? (
                    <>
                      <div className="flex-1 overflow-hidden">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="w-full h-full object-cover grayscale-[30%]"
                          loading="lazy"
                        />
                      </div>
                      <p className="font-inter text-xs font-semibold text-center mt-3 text-manga-gray-700 flex-shrink-0">
                        {photo.label}
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="w-full h-full object-cover grayscale-[30%]"
                          loading="lazy"
                        />
                      </div>
                      <p className="font-inter text-xs font-semibold text-center mt-3 text-manga-gray-700">
                        {photo.label}
                      </p>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* Texto — jerarquía visual diferenciada entre paneles */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Panel principal — más prominente: borde completo + fondo sutil */}
            <div className="bg-manga-gray-50 border-2 border-manga-black p-8 shadow-panel">
              <p className="font-inter text-xl text-manga-gray-800 leading-relaxed">
                Soy{" "}
                <span className="font-semibold text-manga-black">
                  desarrollador de aplicaciones
                </span>{" "}
                y{" "}
                <span className="font-semibold text-manga-black">
                  QA Engineer
                </span>{" "}
                con experiencia en Flutter, React y testing manual de
                aplicaciones web. Formado en el SENA.
                {/* ⚠️ Revisa: si BYU-Idaho no está confirmado, no lo pongas aquí */}
              </p>
            </div>

            {/* Panel secundario — border-l, menos peso visual */}
            <div className="border-l-4 border-manga-accent-olive pl-8 py-2">
              <p className="font-inter text-lg text-manga-gray-700 leading-relaxed">
                También curso{" "}
                <span className="font-semibold text-manga-black">
                  Ingeniería Agrícola
                </span>{" "}
                en la Universidad Nacional de Colombia 🌱 — perspectiva
                interdisciplinaria para resolver problemas complejos.
              </p>
            </div>

            {/* Panel terciario — el más discreto, solo texto */}
            <div className="border-l-4 border-manga-accent-blue pl-8 py-2">
              <p className="font-inter text-lg text-manga-gray-600 leading-relaxed">
                Combino desarrollo con{" "}
                <span className="font-semibold text-manga-accent-olive">
                  Flutter
                </span>{" "}
                y{" "}
                <span className="font-semibold text-manga-accent-blue">
                  React
                </span>{" "}
                con expertise en QA para crear productos de alta calidad.
              </p>
            </div>

            {/* Badges — sin hover porque no son interactivos */}
            <div className="flex flex-wrap gap-4" role="list" aria-label="Intereses personales">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  role="listitem"
                  className="flex items-center gap-2 bg-white border-2 border-manga-gray-300 px-5 py-3"
                >
                  <span className="text-xl" aria-hidden="true">{interest.icon}</span>
                  <span className="font-inter text-sm font-medium text-manga-gray-700">
                    {interest.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
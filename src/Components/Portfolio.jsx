import React from "react";
import project1 from "/territory-run.png";
import project2 from "/academia-ukelele.png";
import project3 from "/hydrotracker.png";

const projects = [
  {
    image: project1,
    title: "Territory Run",
    problem: "Falta de motivación y gamificación en el running diario",
    solution: "App móvil que gamifica las carreras permitiendo conquistar territorios de la ciudad, con mapas interactivos, estadísticas en tiempo real y sistema de logros",
    stack: ["React", "JavaScript", "CSS"],
    link: "https://territory-run.netlify.app/",
  },
  {
    image: project2,
    title: "Academia Ukelele",
    problem: "Necesidad de plataforma para gestionar clases de música a domicilio y virtuales",
    solution: "Web app para academia de música en Bogotá con gestión de clases, reservas, y múltiples instrumentos (violín, guitarra, piano, ukelele) para todas las edades",
    stack: ["React", "Firebase", "TailwindCSS"],
    link: "https://academiaukelele-e89ae.web.app/",
  },
  {
    image: project3,
    title: "HydroTracker",
    problem: "Dificultad para monitorear y automatizar cultivos hidropónicos y plantas caseras",
    solution: "App en desarrollo para monitoreo inteligente y automatización de sistemas de cultivo hidropónico, en tierra y plantas ornamentales",
    stack: ["Flutter", "Firebase", "IoT"],
    link: "#",
    prototype: true,
  },
];

export const Portfolio = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-halftone bg-halftone opacity-100"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section title */}
        <div className="mb-20 animate-fade-in">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-manga-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-manga-accent-olive rotate-45"></div>
              <span className="font-inter text-sm font-semibold tracking-[0.15em] uppercase text-manga-gray-600">Portfolio</span>
              <div className="w-2 h-2 bg-manga-accent-olive rotate-45"></div>
            </div>
            <div className="h-px flex-1 bg-manga-gray-300"></div>
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-manga-black text-center tracking-tight">
            MIS PROYECTOS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group bg-white border-2 border-manga-gray-300 overflow-hidden shadow-panel hover:shadow-panel-hover hover:border-manga-black transition-all animate-slide-up ${!project.prototype ? 'cursor-pointer' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => !project.prototype && window.open(project.link, '_blank', 'noopener,noreferrer')}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56 bg-manga-gray-100">
                <img
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  src={project.image}
                  alt={`Captura del proyecto ${project.title}`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-manga-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                {project.prototype && (
                  <div className="absolute top-4 right-4 bg-manga-accent-olive text-white px-4 py-2 font-inter text-xs font-bold uppercase tracking-wider">
                    Prototipo
                  </div>
                )}
              </div>

              <div className="p-8">
                {/* Title */}
                <h3 className="font-display text-2xl text-manga-black mb-5 group-hover:text-manga-accent-olive transition-colors">
                  {project.title.toUpperCase()}
                </h3>
                
                {/* Problem & Solution */}
                <div className="space-y-4 mb-5">
                  <div className="border-l-2 border-manga-accent-olive pl-4">
                    <p className="font-inter text-xs font-semibold text-manga-gray-600 mb-2 uppercase tracking-wider">Problema</p>
                    <p className="font-inter text-sm text-manga-gray-800 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div className="border-l-2 border-manga-accent-olive-light pl-4">
                    <p className="font-inter text-xs font-semibold text-manga-gray-600 mb-2 uppercase tracking-wider">Solución</p>
                    <p className="font-inter text-sm text-manga-gray-800 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-manga-gray-100 border border-manga-gray-300 px-4 py-2 font-inter text-xs font-medium text-manga-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View project link */}
                <div className="flex items-center gap-2 text-manga-accent-olive font-inter text-sm font-semibold group-hover:gap-3 transition-all">
                  <span>{project.prototype ? 'En desarrollo' : 'Ver proyecto'}</span>
                  {!project.prototype && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

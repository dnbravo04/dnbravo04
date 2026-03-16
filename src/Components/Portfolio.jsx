import React from "react";
import project1 from "/Ana y Gabriel.png";
import project2 from "/Mujeres de la Escrituras.png";
import project3 from "/WorkshopSoftw.png";

const projects = [
  {
    image: project1,
    title: "Ana y Gabriel",
    problem: "Necesidad de una aplicación web para gestión de eventos personales",
    solution: "Desarrollo de plataforma interactiva con interfaz intuitiva",
    stack: ["React", "Firebase", "CSS"],
    link: "https://github.com/dnbravo04/anaygabriel",
  },
  {
    image: project2,
    title: "Mujeres de las Escrituras",
    problem: "Falta de recursos digitales accesibles sobre contenido religioso",
    solution: "Aplicación web educativa con navegación sencilla y contenido organizado",
    stack: ["React", "JavaScript", "TailwindCSS"],
    link: "https://github.com/dnbravo04/mujeres-escrituras",
  },
  {
    image: project3,
    title: "Workshop Software",
    problem: "Gestión manual de talleres y actividades de software",
    solution: "Sistema web para organizar y dar seguimiento a workshops técnicos",
    stack: ["React", "Node.js", "Firebase"],
    link: "https://github.com/dnbravo04/workshopsoftware",
  },
];

export const Portfolio = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-halftone bg-halftone opacity-100"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section title */}
        <div className="mb-16 animate-fade-in">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-manga-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-manga-accent-amber rotate-45"></div>
              <span className="font-inter text-sm font-semibold tracking-wider uppercase text-manga-gray-600">Portfolio</span>
              <div className="w-2 h-2 bg-manga-accent-amber rotate-45"></div>
            </div>
            <div className="h-px flex-1 bg-manga-gray-300"></div>
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-manga-black text-center tracking-tight">
            MIS PROYECTOS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border-2 border-manga-gray-300 overflow-hidden shadow-panel hover:shadow-panel-hover hover:border-manga-black transition-all animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48 bg-manga-gray-100">
                <img
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  src={project.image}
                  alt={`Captura del proyecto ${project.title}`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-manga-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="p-6">
                {/* Title */}
                <h3 className="font-display text-2xl text-manga-black mb-4 group-hover:text-manga-accent-red transition-colors">
                  {project.title.toUpperCase()}
                </h3>
                
                {/* Problem & Solution */}
                <div className="space-y-3 mb-4">
                  <div className="border-l-2 border-manga-accent-red pl-3">
                    <p className="font-inter text-xs font-semibold text-manga-gray-600 mb-1">Problema</p>
                    <p className="font-inter text-sm text-manga-gray-800">
                      {project.problem}
                    </p>
                  </div>
                  <div className="border-l-2 border-manga-accent-teal pl-3">
                    <p className="font-inter text-xs font-semibold text-manga-gray-600 mb-1">Solución</p>
                    <p className="font-inter text-sm text-manga-gray-800">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-manga-gray-100 border border-manga-gray-300 px-3 py-1 font-inter text-xs font-medium text-manga-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View project link */}
                <div className="flex items-center gap-2 text-manga-accent-red font-inter text-sm font-semibold group-hover:gap-3 transition-all">
                  <span>Ver proyecto</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

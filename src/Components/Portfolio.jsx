import React from "react";
import project1 from "/territory-run.png";
import project2 from "/academia-ukelele.png";
import project3 from "/PlantyLink.png";
import SectionTitle from "./MiniComponents/SectionTitle";

const projects = [
  {
    image: project1,
    title: "Territory Run",
    problem: "Falta de motivación y gamificación en el running diario",
    solution: "App móvil que gamifica las carreras permitiendo conquistar territorios de la ciudad, con mapas interactivos, estadísticas en tiempo real y sistema de logros",
    stack: ["Flutter", "Firebase", "Google Maps", "Riverpod"],
    link: "https://territory-run.netlify.app/",
  },
  {
    image: project2,
    title: "Academia Ukelele",
    problem: "Una academia de música en Bogotá necesitaba presencia digital para gestionar clases, instrumentos y estudiantes de forma centralizada",
    solution: "Plataforma web con React y Firebase: autenticación, gestión de clases para múltiples instrumentos, reservas y sitio institucional. Proyecto propio con usuarios reales en producción",
    stack: ["React", "Firebase", "TailwindCSS"],
    link: "https://academiaukelele-e89ae.web.app/",
  },
  {
    image: project3,
    title: "PlantyLink",
    problem: "Falta de herramientas accesibles para monitorear parámetros críticos en cultivos hidropónicos domésticos e institucionales",
    solution: "App movil integrada con dispositivos IoT para monitorear, regar y fertilizar plantas caseras y cultivos hidroponicos que puede ser utilizado en hogares, por agricultores novatos y estudiantes e investigadores.",
    stack: ["Flutter", "Firebase", "IoT"],
    link: "https://plantylink.netlify.app/",
  },
];

export const Portfolio = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-manga-gray-100 relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-halftone"></div>

      <div className="max-w-7xl mx-auto relative">
        <SectionTitle label="Portfolio" title="MIS PROYECTOS" />

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

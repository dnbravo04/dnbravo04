import React from "react";
import { FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiFirebase, SiVite, SiFlutter } from "react-icons/si";

const experience = [
  {
    role: "QA Engineer / Aprendiz",
    company: "Sydicol",
    companyUrl: "https://www.sydicol.com.co/",
    period: "2024 – 2025",
    tasks: [
      "Testing manual de aplicaciones web y móviles en entornos de producción y staging",
      "Documentación de casos de prueba y reporte detallado de bugs",
      "Pruebas funcionales, de regresión y de interfaz de usuario",
      "Comunicación directa con el equipo de desarrollo para resolución de defectos",
    ],
  },
  {
    role: "Desarrollador de Apps (Proyectos Personales)",
    company: "Freelance / Personal",
    period: "2023 – Presente",
    tasks: [
      "Desarrollo de aplicaciones móviles con Flutter y aplicaciones web con React",
      "Diseño e implementación de interfaces de usuario responsivas y nativas",
      "Gestión de repositorios con Git y GitHub",
      "Deploy en Firebase Hosting y configuración de CI/CD básico",
    ],
  },
];

const skills = [
  { name: "Flutter", icon: SiFlutter },
  { name: "React", icon: FaReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Node.js", icon: FaNodeJs },
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "Git", icon: FaGitAlt },
  { name: "Firebase", icon: SiFirebase },
  { name: "Vite", icon: SiVite },
  { name: "SQL Básico", icon: FaDatabase },
];

const education = [
  {
    title: "Software Development",
    institution: "BYU-Idaho (en curso)",
  },
  {
    title: "Tecnólogo en Análisis y Desarrollo de Software",
    institution: "SENA",
  },
];

export const Resume = () => {
  return (
    <section id="resume" className="py-20 px-4 bg-manga-gray-100 relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-screentone bg-screentone opacity-100"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="mb-20 animate-fade-in">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-manga-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-manga-accent-olive rotate-45"></div>
              <span className="font-inter text-sm font-semibold tracking-[0.15em] uppercase text-manga-gray-600">Resumen</span>
              <div className="w-2 h-2 bg-manga-accent-olive rotate-45"></div>
            </div>
            <div className="h-px flex-1 bg-manga-gray-300"></div>
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-manga-black text-center tracking-tight">
            EXPERIENCIA & HABILIDADES
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Experiencia */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="font-display text-2xl text-manga-black mb-8 flex items-center gap-3">
              <div className="w-1 h-8 bg-manga-accent-olive"></div>
              Experiencia
            </h3>
            {experience.map((exp, index) => (
              <div key={exp.role} className="bg-white border-2 border-manga-gray-300 p-8 shadow-panel hover:shadow-panel-hover hover:border-manga-black transition-all animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <h4 className="font-display text-xl text-manga-black mb-3">{exp.role}</h4>
                <p className="font-inter text-manga-gray-700 mb-5">
                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-manga-accent-olive hover:underline"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    exp.company
                  )}
                  {" · "}
                  <span className="text-sm text-manga-gray-600">{exp.period}</span>
                </p>
                <ul className="space-y-3">
                  {exp.tasks.map((task, i) => (
                    <li key={i} className="font-inter text-sm text-manga-gray-700 flex gap-3 leading-relaxed">
                      <span className="text-manga-accent-olive mt-1">▸</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Educación */}
            <h3 className="font-display text-2xl text-manga-black mb-8 flex items-center gap-3 mt-12">
              <div className="w-1 h-8 bg-manga-accent-olive-light"></div>
              Educación
            </h3>
            {education.map((edu, index) => (
              <div key={edu.title} className="bg-white border-2 border-manga-gray-300 p-8 shadow-panel hover:shadow-panel-hover hover:border-manga-black transition-all animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <h4 className="font-inter text-lg font-semibold text-manga-black mb-2">{edu.title}</h4>
                <p className="font-inter text-sm text-manga-gray-700">{edu.institution}</p>
              </div>
            ))}
          </div>

          {/* Habilidades */}
          <div>
            <h3 className="font-display text-2xl text-manga-black mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-manga-accent-olive"></div>
              Habilidades
            </h3>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 bg-white border-2 border-manga-gray-300 px-3 py-2 hover:border-manga-black transition-all cursor-default animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <skill.icon className="text-lg text-manga-accent-olive flex-shrink-0" />
                  <span className="font-inter text-xs font-medium text-manga-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>

            {/* Descargar CV */}
            <a
              href="/cv-diego-bravo.pdf"
              download
              className="w-full flex items-center justify-center gap-2 bg-manga-black text-white px-6 py-4 font-inter font-semibold border-b-4 border-manga-gray-900 hover:border-manga-accent-olive transition-all group"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


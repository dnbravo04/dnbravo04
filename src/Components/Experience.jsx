import React from "react";
import { FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiFirebase, SiVite, SiFlutter } from "react-icons/si";
import SectionTitle from "./MiniComponents/SectionTitle";

const experience = [
  {
    role: "QA Engineer / Aprendiz",
    company: "Sydicol",
    companyUrl: "https://www.sydicol.com.co/",
    period: "2024 – 2025",
    tasks: [
      "Ejecución de pruebas funcionales, de regresión y de UI en aplicaciones web y móviles",
      "Documentación de casos de prueba y reporte detallado de bugs al equipo de desarrollo",
      "Elaboración de manuales técnicos y guías de usuario para módulos del sistema",
      "Capacitación a usuarios finales y apoyo en digitalización de procesos internos",
      "Coordinación directa con el equipo de desarrollo para resolución ágil de defectos",
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
    title: "Ingeniería Agrícola (en curso)",
    institution: "Universidad Nacional de Colombia",
  },
  {
    title: "Tecnólogo en Análisis y Desarrollo de Software",
    institution: "SENA",
  },
];

const workflow = [
  { step: "01", title: "Identificación", desc: "Detección y reproducción de bugs en apps móviles y web", icon: "🔍" },
  { step: "02", title: "Documentación", desc: "Casos de prueba detallados, evidencia y reportes claros", icon: "📝" },
  { step: "03", title: "Comunicación", desc: "Coordinación directa con developers para resolución ágil", icon: "💬" },
];

export const Experience = () => {
  return (
    <section id="resume" className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-screentone"></div>

      <div className="max-w-7xl mx-auto relative">
        <SectionTitle label="Experiencia" title="EXPERIENCIA & HABILIDADES" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna izquierda - 2/3 */}
          <div className="lg:col-span-2 space-y-12">
            {/* Experiencia Laboral */}
            <div>
              <h3 className="font-display text-2xl text-manga-black mb-8 flex items-center gap-3">
                <div className="w-1 h-8 bg-manga-accent-olive"></div>
                Experiencia Laboral
              </h3>
              {experience.map((exp, index) => (
                <div key={exp.role} className="bg-white border-2 border-manga-gray-300 p-8 shadow-panel hover:shadow-panel-hover hover:border-manga-black transition-all animate-slide-up mb-6" style={{ animationDelay: `${index * 100}ms` }}>
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
            </div>

            {/* Educación */}
            <div>
              <h3 className="font-display text-2xl text-manga-black mb-8 flex items-center gap-3">
                <div className="w-1 h-8 bg-manga-accent-olive-light"></div>
                Educación
              </h3>
              {education.map((edu, index) => (
                <div key={edu.title} className="bg-white border-2 border-manga-gray-300 p-8 shadow-panel hover:shadow-panel-hover hover:border-manga-black transition-all animate-slide-up mb-6" style={{ animationDelay: `${index * 100}ms` }}>
                  <h4 className="font-inter text-lg font-semibold text-manga-black mb-2">{edu.title}</h4>
                  <p className="font-inter text-sm text-manga-gray-700">{edu.institution}</p>
                </div>
              ))}
            </div>

            {/* MI WORKFLOW DE TESTING */}
            <div className="bg-manga-black p-8 md:p-12 border-t-4 border-manga-accent-olive relative">
              <h3 className="font-display text-3xl md:text-4xl text-white mb-10 text-center">
                MI WORKFLOW DE TESTING
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {workflow.map((item, index) => (
                  <div key={item.step} className="relative bg-white p-6 shadow-manga-lg animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                    <div className="text-center">
                      <div className="text-5xl mb-4">{item.icon}</div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-manga-accent-olive text-white font-inter text-xs font-bold tracking-wider mb-3">
                        <div className="w-1.5 h-1.5 bg-white"></div>
                        PASO {item.step}
                      </div>
                      <h4 className="font-display text-xl text-manga-black mb-2">
                        {item.title.toUpperCase()}
                      </h4>
                      <p className="font-inter text-sm text-manga-gray-700 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    {index < workflow.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <svg className="w-8 h-8 text-manga-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Columna derecha - 1/3 */}
          <div>
            <h3 className="font-display text-2xl text-manga-black mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-manga-accent-olive"></div>
              Habilidades
            </h3>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 bg-white border-2 border-manga-gray-300 px-3 py-2 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                  title={skill.name}
                >
                  <skill.icon className="text-lg text-manga-accent-olive flex-shrink-0" aria-hidden="true" />
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

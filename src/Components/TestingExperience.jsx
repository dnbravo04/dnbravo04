import React from "react";
import { FaBug, FaClipboardCheck, FaCode, FaGitAlt, FaFileAlt } from "react-icons/fa";

const testingTypes = [
  { name: "Functional Testing", icon: FaClipboardCheck, desc: "Validación de funcionalidades según requisitos" },
  { name: "Regression Testing", icon: FaBug, desc: "Verificación de estabilidad tras cambios" },
  { name: "UI Testing", icon: FaCode, desc: "Pruebas de interfaz y experiencia de usuario" },
];

const tools = [
  { name: "Git", icon: FaGitAlt, desc: "Control de versiones y colaboración" },
  { name: "Bug Documentation", icon: FaFileAlt, desc: "Reportes detallados y evidencia" },
  { name: "Web Interface Testing", icon: FaClipboardCheck, desc: "Testing manual de aplicaciones web" },
];

const workflow = [
  { step: "01", title: "Identificación", desc: "Detección y reproducción de bugs en aplicaciones web", icon: "🔍" },
  { step: "02", title: "Documentación", desc: "Casos de prueba detallados, evidencia y reportes claros", icon: "📝" },
  { step: "03", title: "Comunicación", desc: "Coordinación directa con developers para resolución ágil", icon: "💬" },
];

export const TestingExperience = () => {
  return (
    <section id="testing" className="py-20 px-4 bg-manga-gray-100 relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-halftone bg-halftone opacity-100"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section title */}
        <div className="mb-16 animate-fade-in">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-manga-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-manga-accent-red rotate-45"></div>
              <span className="font-inter text-sm font-semibold tracking-wider uppercase text-manga-gray-600">Experiencia</span>
              <div className="w-2 h-2 bg-manga-accent-red rotate-45"></div>
            </div>
            <div className="h-px flex-1 bg-manga-gray-300"></div>
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-manga-black text-center tracking-tight">
            TESTING EXPERIENCE
          </h2>
        </div>

        {/* Testing Types */}
        <div className="mb-16">
          <h3 className="font-display text-2xl text-manga-black mb-6 flex items-center gap-3">
            <div className="w-1 h-8 bg-manga-accent-blue"></div>
            Tipos de Pruebas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testingTypes.map((item, index) => (
              <div
                key={item.name}
                className="bg-white border-2 border-manga-gray-300 p-6 shadow-panel hover:shadow-panel-hover hover:border-manga-black transition-all animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-manga-accent-blue text-white">
                    <item.icon className="text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-inter text-lg font-semibold text-manga-black mb-2">
                      {item.name}
                    </h4>
                    <p className="font-inter text-sm text-manga-gray-700 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mb-16">
          <h3 className="font-display text-2xl text-manga-black mb-6 flex items-center gap-3">
            <div className="w-1 h-8 bg-manga-accent-teal"></div>
            Herramientas & Metodología
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tools.map((item, index) => (
              <div
                key={item.name}
                className="bg-white border-2 border-manga-gray-300 p-6 shadow-panel hover:shadow-panel-hover hover:border-manga-black transition-all animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <item.icon className="text-3xl text-manga-accent-teal mb-3" />
                <h4 className="font-inter text-lg font-semibold text-manga-black mb-2">
                  {item.name}
                </h4>
                <p className="font-inter text-sm text-manga-gray-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow */}
        <div className="bg-manga-black p-8 md:p-12 border-t-4 border-manga-accent-red relative">
          <h3 className="font-display text-3xl md:text-4xl text-white mb-10 text-center">
            MI WORKFLOW DE TESTING
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workflow.map((item, index) => (
              <div key={item.step} className="relative bg-white p-6 shadow-manga-lg animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="text-center">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-manga-accent-red text-white font-inter text-xs font-bold tracking-wider mb-3">
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
    </section>
  );
};

export default TestingExperience;

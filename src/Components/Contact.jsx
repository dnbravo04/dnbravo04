import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const contactLinks = [
  {
    href: "mailto:dnbravo04@gmail.com",
    icon: FaEnvelope,
    label: "Email",
    text: "dnbravo04@gmail.com",
    color: "from-red-500 to-red-600",
  },
  {
    href: "https://www.linkedin.com/in/dnbravo04/",
    icon: FaLinkedin,
    label: "LinkedIn",
    text: "linkedin.com/in/dnbravo04",
    color: "from-blue-600 to-blue-700",
  },
  {
    href: "https://github.com/dnbravo04",
    icon: FaGithub,
    label: "GitHub",
    text: "github.com/dnbravo04",
    color: "from-gray-700 to-gray-900",
  },
  {
    href: "https://wa.me/573023839873",
    icon: FaWhatsapp,
    label: "WhatsApp",
    text: "+57 302 383 9873",
    color: "from-green-500 to-green-600",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-manga-black relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-halftone bg-halftone opacity-5"></div>

      <div className="max-w-4xl mx-auto text-center relative">
        {/* Section title */}
        <div className="mb-20 animate-fade-in">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-20 bg-manga-gray-700"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-manga-accent-olive rotate-45"></div>
              <span className="font-inter text-sm font-semibold tracking-[0.15em] uppercase text-manga-gray-500">Contacto</span>
              <div className="w-2 h-2 bg-manga-accent-olive rotate-45"></div>
            </div>
            <div className="h-px w-20 bg-manga-gray-700"></div>
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-white text-center tracking-tight mb-8">
            HABLEMOS
          </h2>
          <p className="font-inter text-xl text-manga-gray-400 max-w-2xl mx-auto">
            Abierto a oportunidades en desarrollo de apps y QA.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
          {contactLinks.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-sm border border-manga-gray-600 p-8 hover:bg-white/20 hover:border-manga-accent-olive transition-all animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="p-4 bg-manga-accent-olive text-white group-hover:bg-manga-accent-olive-light transition-colors">
                  <item.icon className="text-2xl" />
                </div>
                <div>
                  <p className="font-inter text-sm font-semibold text-manga-gray-400 mb-2">
                    {item.label}
                  </p>
                  <p className="font-inter text-lg font-semibold text-white">
                    {item.value}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA button */}
        <a
          href="mailto:dnbravo04@gmail.com"
          className="inline-flex items-center gap-3 bg-manga-accent-olive text-white px-10 py-5 font-inter font-semibold border-b-4 border-manga-accent-olive-dark hover:border-manga-black transition-all group animate-pop"
        >
          <FaEnvelope className="text-2xl" />
          <span className="text-lg">Enviar Email</span>
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
};


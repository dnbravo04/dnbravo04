import React, { useState, useEffect } from "react";

const navItems = [
  { href: "#hero", label: "Inicio" },
  { href: "#about", label: "Sobre mí" },
  { href: "#testing", label: "Testing" },
  { href: "#projects", label: "Proyectos" },
  { href: "#resume", label: "CV" },
  { href: "#contact", label: "Contacto" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-manga-lg border-b-2 border-manga-gray-200' : 'bg-white/95 backdrop-blur-sm border-b border-manga-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo minimalista */}
        <a
          href="#hero"
          className="relative group flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-manga-black flex items-center justify-center border-2 border-manga-black group-hover:bg-manga-accent-red transition-colors">
            <span className="font-display text-2xl text-white">DB</span>
          </div>
          <span className="font-inter font-bold text-manga-black hidden sm:block">Diego Bravo</span>
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative px-4 py-2 font-inter text-sm font-medium text-manga-gray-700 hover:text-manga-black transition-colors group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-manga-accent-red group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-manga-black hover:text-manga-accent-red transition-colors"
          aria-label="Abrir menú de navegación"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-manga-gray-200 shadow-manga-md animate-slide-down">
          <ul className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 font-inter text-sm font-medium text-manga-gray-700 hover:text-manga-black hover:bg-manga-gray-100 border-l-2 border-transparent hover:border-manga-accent-red transition-all"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

export const Footer = () => {
  return (
    <footer className="py-8 bg-manga-gray-900 border-t-2 border-manga-gray-700 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-xl text-white mb-1">
              Diego Bravo Arias
            </p>
            <p className="font-inter text-sm text-manga-gray-400">
              App Developer & QA Engineer
            </p>
          </div>
          
          <div className="text-center">
            <p className="font-inter text-sm text-manga-gray-400">
              &copy; {new Date().getFullYear()} Todos los derechos reservados
            </p>
            <p className="font-inter text-xs text-manga-gray-500 mt-1">
              Hecho con ❤️ y React
            </p>
          </div>

          {/* Back to top button */}
          <a 
            href="#hero" 
            className="group flex items-center gap-2 text-manga-gray-400 hover:text-white transition-colors"
          >
            <span className="font-inter text-sm font-medium">Volver arriba</span>
            <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};
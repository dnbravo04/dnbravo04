const Footer = ({ styleType }) => {
    return (
      <footer
        className={`py-4 ${
          styleType === 1
            ? "bg-gray-800 text-white"
            : "bg-white text-gray-800 border-t border-gray-300"
        }`}
      >
        <div className="text-center">
          <p className="text-sm">
            © 2025 MiPortafolio. Todos los derechos reservados.
          </p>
          <p className="text-xs">
            Hecho con <span className="text-red-500">♥</span> y React.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
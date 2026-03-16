/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        caqui: "#D4C5A9",
        // Manga/Comic hybrid palette - monocromático con acentos
        manga: {
          black: "#1a1a1a",
          gray: {
            900: "#2d2d2d",
            800: "#404040",
            700: "#525252",
            600: "#6b6b6b",
            500: "#8a8a8a",
            400: "#a3a3a3",
            300: "#c7c7c7",
            200: "#e0e0e0",
            100: "#f5f5f5",
          },
          white: "#fafafa",
          accent: {
            red: "#e63946",
            blue: "#457b9d",
            teal: "#2a9d8f",
            amber: "#f4a261",
          },
        },
        ink: "#1a1a1a",
        paper: "#fafafa",
      },
      fontFamily: {
        merriweather: ["Merriweather", "serif"],
        caveat: ["Caveat", "cursive"],
        inter: ["Inter", "sans-serif"],
        display: ["Bebas Neue", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-in-left": "slideInLeft 0.8s ease-out",
        "slide-in-right": "slideInRight 0.8s ease-out",
        "slide-down": "slideDown 0.6s ease-out",
        float: "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-40px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(40px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        manga: "0 2px 0 0 rgba(0,0,0,1)",
        "manga-md": "0 4px 0 0 rgba(0,0,0,1)",
        "manga-lg": "0 6px 0 0 rgba(0,0,0,1)",
        "manga-xl": "0 8px 0 0 rgba(0,0,0,1)",
        panel: "4px 4px 0 0 rgba(0,0,0,0.15)",
        "panel-hover": "6px 6px 0 0 rgba(0,0,0,0.2)",
      },
      backgroundImage: {
        'screentone': "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
        'halftone': "radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        'screentone': "8px 8px",
        'halftone': "4px 4px",
      },
    },
  },
  plugins: [],
};

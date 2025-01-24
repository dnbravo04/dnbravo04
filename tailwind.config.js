/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
       'caqui': '#d3bb9f'
      },
      fontFamily:{
        'merriweather': ['Merriweather'], 
        'serif': ['ui-serif', 'Georgia'],
        'caveat': ['Caveat', 'sans-serif']
      }
    }
  },
  plugins: [],
}


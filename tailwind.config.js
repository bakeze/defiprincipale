/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'magenta': '#BB1850',
      },
      fontFamily: {
        gelica: ['GelicaExtraLight', 'sans-serif'], // Ajoutez la famille personnalisée
      },
    },
  },
  plugins: [],
}


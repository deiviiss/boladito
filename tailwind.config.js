/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        primary: '#6541B3',
        secondary: '#493282',
        tertiary: '#D7E34B',
        quaternary: '#2B726E'
      },
      fontFamily: {
        exo: ['Exo2', 'sans-serif']
      },
      textColor: {
        primary: '#5B45AA',
        secondary: '#A861E3',
        tertiary: '#D7E34B',
        quaternary: '#2B726E'
      },
      ringColor: {
        primary: '#5B45AA',
        secondary: '#A861E3',
        tertiary: '#D7E34B',
        quaternary: '#2B726E'
      }
    }
  },
  plugins: []
}

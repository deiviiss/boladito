const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*{html,js,jsx}'],
  theme: {
    colors: {
      ...colors
    }
  },
  plugins: []
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#5B45AA',
        secondary: '#A861E3',
        tertiary: '#D7E34B',
        quaternary: '#2B726E'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
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

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./home.html",
    "./about.html",
    "./products.html",
    "./buffalo-classic.html",
    "./buffalo-revive-flow.html",
    "./buffalo-revive-orange.html",
    "./buffalo-revive-kiwi.html",
    "./buffalo-revive-cool.html",
    "./distributor.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '.60rem',
        'xxxs': '.50rem'
      },
      fontFamily: {},
      colors: {
        'theme-orange': '#F3982C',
        'theme-golden': '#A88E4A',
        'theme-dark-sky': '#00B2D7',
        'theme-sky': '#2CB0F8',
        'theme-green': '#55A932',
        'theme-dark-red': '#C72028',
        'theme-red': '#FF3737',
        'theme-cyan': '#00B1D6',
        'theme-viking': '#56C8E0',
        'theme-pacific-blue': '#009CBC',
        'theme-mercury': '#E6E6E6',
        'theme-gray': '#cccccc',
        'theme-black': '#1A1A1A',
        'theme-dark-gray': '#333333',
      },
      scale: {
        '120': '1.20',
        '130': '1.30',
        '135': '1.35',
      },
      screens: {
        '3xl': '1800px',
        'se': '380px',
      },
      fontFamily: {
        'poppin': 'Poppins',
        'bebas': 'Bebas Neue',
        'hand': 'Gochi Hand',
      },
      height: {
        'screen-50': '50vh',
        'screen-60': '60vh',
        'screen-70': '70vh',
        'screen-75': '75vh',
        'screen-85': '85vh',
        'screen-90': '90vh',
        'screen-95': '95vh',
      }
    },
  },
  plugins: [],
}

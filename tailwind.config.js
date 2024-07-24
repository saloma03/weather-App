/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'main-color': '#1E202B',
        'hover-color': '#009AD8',
        'white': '#fff',
        'secondary':'#262936',
        'gray': '#3C3F4A',
        'darker-secondary': 'rgb(34,37,48)',
        'darker-secondary-opacity': 'rgba(34,37,48,0.7)'
      },
      // backgroundImage: {
      //   'hero-pattern': "url('./assets/banner.png')",
      // },

    },
    
  },
  plugins: [],
}


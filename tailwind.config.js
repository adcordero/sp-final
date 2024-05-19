/** @type {import('tailwindcss').Config} */

// const defaultTheme = require('tailwindcss/defaultTheme');
// const defaultColors = require('tailwindcss/defaultTheme')
// import bg from "./assets/bg.png"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend : {
      fontFamily: {
        poppins: 'Poppins',
        inter: 'Inter',
        lilita: 'Lilita One'

      },
      colors : {
        'main-gray' : '#D9D9D9',
        'main-yellow' : '#FFE194',
        'main-violet' : '#4C4C6D',
        'main-white' : '#FFFFFF',
        'off-white' : '#F6F5E8'
      },
    }
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'navfont': ['Pacifico', 'cursive'],
        'newfont': ['Indie Flower','cursive'],
        'beginner':['Edu VIC WA NT Beginner','cursive'],
        'sabeginner':['Edu SA Beginner','cursive'],
        'save':['Lexend','sans-serif']
      },
      colors:{
        'newpink':'#e186ae',
        'color2': '#BC5A94',
        'neworange':'#FFAF61'
      } 
    },
  },
  plugins: [require("daisyui")],
}


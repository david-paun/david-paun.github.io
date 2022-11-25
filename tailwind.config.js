/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
      screens : {
      's' : '700px',
      'm' : '1000px',
      'l' : '1300px',
      'x' : '1700px'
    },
    extend: {
      colors : {
        background : '#f6f0f7',
          text : '#00000'
      },
        fontFamily : {
          milkyCoffeeImported : "milkyCoffee"
        }
    },
  },
  plugins: [],
}

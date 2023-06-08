/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors:{
        blue: "#2CBCE9",
        red: "#DC4492",
        yellow: "#FDCC49",
        grey:"#EDEDED",
        "deep-blue":"#010026",
        "dark-grey":"#757575",
        "opaque-black":"rgba(0,0,0,0.35)"

      },
      backgroundImage:(theme)=>({
        "gradient-rainbow":"linear-gradient(81.66deg, #00B5EE 7.21%,#FF45A4 45.05%, #FFBA00 78.07% )",
        "gradient-rainblue":"linear-gradient(90deg, #24CBFF 14.53%,#FC599F 69.36%, #FFBD0C 100.07% )",
      }),
      fontFamily: {
        playfair:["Playfair Display", "serif"],
        opensans:["Open Sans", "sans-serif"]
      },
      content:{
        brush:"url('./assets/brush.png')"

      }
    },
    screens:{
      xs:"480px",
      sm:"760px",
      md:"1060px"

    }
  },
  plugins: [],
}

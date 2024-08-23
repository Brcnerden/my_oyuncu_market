/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        "Roboto": "Roboto, sans-serif;",
        "Playwrite":"Playwrite AU QLD, cursive;"
      },
      colors:{

        "text-color":"#232323",
        "textsecandy-color":"#383838",
        "header_bgColor":"#F7F7F7" ,
        gray100:"#A1A1AA",

        gray200:" #999999",
        white100:"#E5E5E5",

      },
    },
  },
  plugins: [],
};

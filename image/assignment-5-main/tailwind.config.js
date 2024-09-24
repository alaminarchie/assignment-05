/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        primary : "#B4F461",
        offWhite: "rgba(17, 17, 17, 0.05)",
        textPrimary: "#111111",
        textSecondary: "rgba(17, 17, 17, 0.7)",
        borderColor: "rgba(17, 17, 17, 0.1)",
      },
      width:{
        primary: "1440px"
      },
      fontFamily:{
        primary: "Lexend"
      },
    },
  },
  plugins: [],
}


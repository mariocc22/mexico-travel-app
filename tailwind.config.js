/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: "#2D4059",
      secondary: "#F07B3F",
      tertiary: "#FFD460",
      gray: "#83829A",
      gray2: "#C1C0C8",
      white: "#FFF",
      lightWhite: "#FAFAFC",
    },
    fontFamily: {
      regular: ["DMRegular"],
      medium: ["DMMedium"],
      bold: ["DMBold"],
    },
    extend: {},
  },
  plugins: [],
};

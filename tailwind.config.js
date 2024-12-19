/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "AppBgColor": "#f8f8f8",
        "FuncCardHeadingColor" : "#a5a5a5",
        "FuntionCardBorder": "#dfdfdf",
        "EquationFieldBorder": "#d3d3d3",
        "CustomBlack": "#252525",
        "CustomYellow": "#E29A2D",
        "CustomGreen": "#4CAF79",
      },
    },
  },
  plugins: [],
}


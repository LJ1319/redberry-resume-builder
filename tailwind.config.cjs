/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "helvetica-neue": ["HelveticaNeue"],
      },
      colors: {
        "redberry-red": "#F93B1D",
      },
      backgroundImage: {
        "home-hero": "url(@/assets/img/home.jpg)",
      },
    },
  },
  plugins: [require("tailwindcss-opentype")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "helvetica-neue": ["HelveticaNeue"],
      },
      backgroundImage: {
        "home-hero": "url(./src/assets/img/home.jpg)",
      },
    },
  },
  plugins: [require("tailwindcss-opentype")],
};

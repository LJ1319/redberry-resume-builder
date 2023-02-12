/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    // "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "helvetica-neue": ["HelveticaNeue"],
      },
      backgroundImage: {
        "home-hero": "url(@/assets/img/home.jpg)",
      },
    },
  },
  plugins: [require("tailwindcss-opentype")],
};

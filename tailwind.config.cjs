/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "helvetica-neue": ["HelveticaNeue"],
      },
    },
  },
  plugins: [require("tailwindcss-opentype")],
};

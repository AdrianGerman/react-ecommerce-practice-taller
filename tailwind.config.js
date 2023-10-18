/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-font": "#242424",
        "black-font-divs": "#343434",
      },
      boxShadow: {
        "3xl": "0 25px 50px -12px rgba(90, 90, 90, 0.3)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        zorba: {
          50: "#f9f8f7",
          100: "#f2f0ee",
          200: "#e8e3e0",
          300: "#d8cfc9",
          400: "#c0b2a9",
          500: "#a79589",
          600: "#917e71",
          700: "#78685d",
          800: "#65584f",
          900: "#564c46",
          950: "#2d2622",
        },
      },
    },
  },
  plugins: [],
};

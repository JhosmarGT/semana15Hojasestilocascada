/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          500: "#2563EB",
          700: "#1E40AF"
        },
        coral: {
          400: "#FB7185",
          600: "#E11D48"
        },
        forest: {
          500: "#16A34A",
          700: "#166534"
        }
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"]
      }
    }
  },
  plugins: []
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

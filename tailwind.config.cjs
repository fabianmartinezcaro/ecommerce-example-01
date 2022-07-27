/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'mobile-s': '320px',
        'mobile-m': '375px',
        'mobile-l': '425px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1440px'
      },
      fontFamily: {

        'lato': ["Lato", "sans-serif"]

      }
    },
  },
  plugins: [],
}

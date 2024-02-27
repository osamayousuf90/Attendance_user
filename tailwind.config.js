/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // extend: {
    screens: {
      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '425px' },
      // => @media (max-width: 425px) { ... }

      'vSm': { 'max': '320px' },
      // => @media (max-width: 320px) { ... }
    }
    // },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Ubuntu', 'sans-serif']
      },
      colors: {
      'custom-blue': '#172340',
      'custom-gray': '#4c4c4c',
      'custom-green': '#029837',
      'input-bg': '#F2F1F1'
      },
      boxShadow: {
      'newdrop': 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
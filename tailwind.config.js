const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
      },
    },
    extend: {
      colors: {
        gray: colors.zinc,
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

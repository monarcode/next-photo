/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  container: {
    padding: {
      DEFAULT: '1.5rem',
      // lg: '3rem',
    },
  },
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  extend: {
    colors: {
      primary: '#23262F',
      accent: '#286F6C',
      grey: {
        DEFAULT: '#919297',
        1: '#D9D9D9',
        2: '#E7E9EB',
        3: '#F5F5F5',
      },
      white: '#fff',
      // pink: 'pink',
    },
    backgroundImage: {
      home: 'url("./images/a2.jpeg")',
      newsletter: 'url("./images/newsletter.png")',
    },
    dropShadow: {
      primary: '0px 4px 10px rgba(15, 27, 51, 0.05);',
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "nav-purple": "#8121D0",
        "font-color": "#331C52",
        "section-color": "#291C3A",
        "hero-text": "#DCCFED",
        "secondary-section-color":"#E1EBED",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.jsx",
    "./src/*.js,",
    "./src/*.html",
    "./src/**/*.jsx",
    "./src/**/*.js",
    "./src/**/*.html",
    "./src/**/**/*.html",
    "./src/**/**/*.jsx",
    "./src/**/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bg1: 'url("../src/assets/bg1.jpg")',
        bg2: 'url("../src/assets/bg2.jpg")',
        bg3: 'url("../src/assets/bg3.jpg")',
        bg4: 'url("../src/assets/bg4.jpg")',
      },
      colors: {
        bgFade: "rgba(147, 192, 253, 0.05)"
      }
    },
  },
  plugins: [],
};


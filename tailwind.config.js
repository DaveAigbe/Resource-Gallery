/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      width: {
        560: "35rem",
        460: "28.75rem",
        380: "23.75rem",
        330: "20.625rem",
      },
      height: {
        315: "19.688rem",
        259: "16.172rem",
        214: "13.359rem",
        186: "11.602rem",
      },
      screens: {
        "my-md": "900px",
        "my-lg": "1224px",
      },
      maxWidth: {
        "8xl": "113rem",
      },
    },
  },
  plugins: [],
};

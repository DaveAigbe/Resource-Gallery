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
      },
      height: {
        315: "19.688rem",
      },
    },
  },
  plugins: [],
};

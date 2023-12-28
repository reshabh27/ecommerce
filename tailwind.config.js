/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
    "./src/**/*.{html,js}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js,ejs}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "space-cadet": "#171738",
        "lavender-blush": "#FFEEF2",
        "pale-purple": "#FFE4F3",
        "federal-blue": "#2E1760",
        "zaffre": "#3423A6",
        "space-light": "#41419E",
        "space-dark": "#171738"
      }
    },
  },
  plugins: [],
}


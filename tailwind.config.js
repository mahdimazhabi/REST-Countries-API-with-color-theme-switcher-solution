/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // فعال‌سازی دارک مود کلاس‌بنیاد
  content: ["./Public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#2B3945", // Very Dark Blue (Dark Mode Background)
        darkBlueElements: "#37475F", // Dark Blue (Dark Mode Elements)
        DarkGray: "#868686",
        VeryLightGray: "#FAFAFA",
      },
    },
  },
  plugins: [],
};

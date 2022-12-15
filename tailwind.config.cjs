/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        QDark: "#1A1A1A",
        QMid: "#333233",
        QLight: "#888788",
      },
    },
  },
  plugins: [],
};

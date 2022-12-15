/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        qdark: "#1A1A1A",
        qmid: "#333233",
        qlight: "#888788",
      },
    },
  },
  plugins: [],
};

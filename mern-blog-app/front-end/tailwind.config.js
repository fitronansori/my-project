/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#1565D8",
        "blue-green": "#183B56",
        "dark-green": "#0D2436",
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-50": "rgba(0, 0, 0, 0.5)", // Transparent black (adjust the alpha value as needed)
      },
      animation: {
        rotate: "rotate 15s linear infinite",
      },
      fontFamily: {
        sans: ["Montserrat", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        primary: "#ffffff",
        third: "#9F9F9F",
        secondary: "#CF0010",
      },
    },
  },
  plugins: [],
};

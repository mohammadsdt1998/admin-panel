/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "	rgb(33, 38, 49)",
        secondary: "#6b7785",
        popup: "rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};

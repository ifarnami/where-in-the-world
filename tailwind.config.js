/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          elements: "rgb(43, 57, 69)",
          bg: "rgb(32, 44, 55)",
          text: "#ffffff",
        },
        light: {
          elements: "#ffffff",
          text: "rgb(17, 21, 23)",
          bg: "#fafafaea",
          input: "rgb(133, 133, 133)",
        },
      },
    },
    boxShadow: {
      primary: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    },
  },
  plugins: [],
};

import daisyui from "daisyui";

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
      primary:
        "inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0 0 1px hsla(0, 0%, 0%, 0.05), 0 0.3px 0.4px hsla(0, 0%, 0%, 0.02), 0 0.9px 1.5px hsla(0, 0%, 0%, 0.045), 0 3.5px 6px hsla(0, 0%, 0%, 0.09) !important",
      secondary: "rgba(0, 0, 0, 0.18) 0px 2px 4px !important",
    },
  },
  plugins: [daisyui],
};

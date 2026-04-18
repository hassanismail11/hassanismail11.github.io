/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        flik: {
          light: "#e8f9f6",
          "light-hover": "#dcf6f1",
          "light-active": "#b7ede2",
          DEFAULT: "#16c5a2",
          hover: "#14b192",
          active: "#129e82",
          dark: "#11947a",
          "dark-hover": "#0d7661",
          "dark-active": "#0a5949",
          darker: "#084539",
        },
      },
      fontFamily: {
        exo2: ['"Exo 2"', "sans-serif"],
        title: ['"Space Grotesk"', "sans-serif"],
        arabic: ['"Noto Sans Arabic"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

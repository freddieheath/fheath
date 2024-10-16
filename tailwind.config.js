/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundImage: {
      "light-pattern": `linear-gradient(#D9D9D950 .1em, transparent .1em),
                       linear-gradient(90deg, #D9D9D950 .1em, transparent .1em)`,
      "dark-pattern": `linear-gradient(#26262650 .1em, transparent .1em),
                       linear-gradient(90deg, #26262650 .1em, transparent .1em)`,
    },
    backgroundSize: {
      "light-size": "3em 3em",
      "dark-size": "3em 3em",
    },
    backgroundColor: {
      "light-bg": "#FAF9F6",
      "dark-bg": "#3B3B3B",
    },
    fontSize: {
      xs: "0.6rem",
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
  },
  plugins: [],
};

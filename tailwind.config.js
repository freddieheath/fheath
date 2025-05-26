/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        hero: "calc(100vh - 4rem)",
      },
      fontFamily: {
        openSans: ['"Open Sans"', "sans-serif"],
        quicksand: ['"Quicksand"', "sans-serif"],
        urbanist: ['"Urbanist"', "sans-serif"],
      },
    },
    backgroundImage: {
      "light-pattern": `linear-gradient(#D9D9D940 .1em, transparent .1em),
                       linear-gradient(90deg, #D9D9D940 .1em, transparent .1em)`,
      "dark-pattern": `linear-gradient(#26262640 .1em, transparent .1em),
                       linear-gradient(90deg, #26262630 .1em, transparent .1em)`,
    },
    backgroundSize: {
      "light-size": "1.5em 1.5em",
      "dark-size": "1.5em 1.5em",
    },
    backgroundColor: {
      "o-w": "#FAF9F6",
      "o-w-hover": "#E1e0dd",
      white: "#eeeeee",
      noir: "#101010",
      "noir-hover": "#2a2a2a",
      "secondary-grey": "#1F1F1F",
      "light-grey": "#ededed",
      black: "#111111",
      "skills-grey": "#DEDEDE",
    },
    colors: {
      "o-w": "#FAF9F6",
      "o-w-hover": "#E1e0dd",
      white: "#eeeeee",
      noir: "#101010",
      "noir-hover": "#2a2a2a",
      "secondary-grey": "#1F1F1F",
      "light-grey": "#ededed",
      black: "#111111",
      grey: "#adadad",
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

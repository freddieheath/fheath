/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
                       linear-gradient(90deg, #26262640 .1em, transparent .1em)`,
    },
    backgroundSize: {
      "light-size": "2.5em 2.5em",
      "dark-size": "2.5em 2.5em",
    },
    backgroundColor: {
      "light-bg": "#FAF9F6",
      "dark-bg": "#3B3B3B",
      "light-grey": "#ededed",
      black: "#111111",
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

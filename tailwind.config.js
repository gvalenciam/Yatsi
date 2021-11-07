const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "320px",
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1440px",
      "3xl": "1920px",
    },
    fontSize: {
      "4xs": "7px",
      "3xs": "8px",
      "2xs": "0.25rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    colors: {
      "yatsi-primary": "#c7ac39",
      black: colors.black,
      white: colors.white,
      transparent: colors.transparent,
    },
    extend: {
      fontFamily: {
        sans: ["Asap"],
      },
    },
  },
  variants: {
    extend: {
      margin: ["last"],
    },
  },
  plugins: [],
};

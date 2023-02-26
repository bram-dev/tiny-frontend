/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
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
      white: "#FFFFFF",
      blue: {
        100: "#DFF5FF",
        200: "#B4E7FF",
        300: "#69CFFF",
        400: "#34B8F8",
        500: "#18A9EE",
        600: "#009BE5",
        700: "#0691D3",
        800: "#0683BF",
        900: "#0272A8",
      },
      red: {
        100: "#FFE7EC",
        200: "#FFBCCC",
        300: "#FF7999",
        400: "#FF547D",
        500: "#FF2055",
        600: "#FF003D",
        700: "#E10036",
        800: "#C70030",
        900: "#9F0026",
      },
      orange: {
        100: "#FFF1E0",
        200: "#FFD39F",
        300: "#FFB258",
        400: "#FF9A24",
        500: "#FF8A00",
        600: "#EF8100",
        700: "#D77400",
        800: "#B46100",
        900: "#8D4C00",
      },
      yellow: {
        100: "#FFFDE3",
        200: "#FFF9A6",
        300: "#FFF783",
        400: "#FFF454",
        500: "#FFF013",
        600: "#F8E800",
        700: "#EDDE00",
        800: "#D4C700",
        900: "#A39800",
      },
      green: {
        100: "#E1FFEA",
        200: "#AEFFC5",
        300: "#7DFAA0",
        400: "#48ED77",
        500: "#1DE355",
        600: "#05D23F",
        700: "#02C539",
        800: "#00AD31",
        900: "#008C28",
      },
      purple: {
        100: "#EDD7FF",
        200: "#D49CFF",
        300: "#BC66FF",
        400: "#A538FA",
        500: "#911AEF",
        600: "#7F00E2",
        700: "#7202CA",
        800: "#6100AD",
        900: "#4C0087",
      },
      gray: {
        100: "#F9FBFD",
        200: "#EEF2F5",
        300: "#E1E9EF",
        400: "#D0DCE4",
        500: "#B9C7D0",
        600: "#9FB1BD",
        700: "#89A0AF",
        800: "#718897",
        900: "#566A78",
      },
      black: {
        100: "#F9F9F9",
        200: "#E7EAEB",
        300: "#C1C7CA",
        400: "#9CA5A9",
        500: "#70797D",
        600: "#475055",
        700: "#333A3E",
        800: "#1C2022",
        900: "#000000",
        DEFAULT: "#000000",
      },
    },
    extend: {
      screens: {
        xs: "480px",
      },

      typography: {
        sm: {
          css: {
            p: {
              margin: "0",
            },
            ul: {
              margin: "0",
            },
            ol: {
              margin: "0",
            },
            h2: {
              margin: "0",
            },
            h3: {
              margin: "0",
            },
            li: {
              "> p": {
                margin: "0",
              },
            },
          },
        },
      },

      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        arial: ["Arial", ...defaultTheme.fontFamily.sans],
        roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme("fontSize.3xl"),
        },
        h2: {
          fontSize: theme("fontSize.2xl"),
        },
        h3: {
          fontSize: theme("fontSize.xl"),
          fontColor: theme("fontColor.textPrimaryColor)"),
        },
      });
    }),
  ],
}

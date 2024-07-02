/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        wideScreen: { raw: "(min-aspect-ratio:3/2)" },
        tallScreen: { raw: "(max-aspect-ratio:13/20)" },
      },
      textColor: {
        "yellow-better": "rgb(204 134 1)",
      },
      boxShadow: {
        nice: "0 0 2px 1px rgba(0,0,0,0.250)",
      },
      colors: {
        "electric-violet": {
          50: "#f5f2ff",
          100: "#ece8ff",
          200: "#dbd4ff",
          300: "#c2b1ff",
          400: "#a585ff",
          500: "#824aff",
          600: "#7a30f7",
          700: "#6c1ee3",
          800: "#5a18bf",
          900: "#4b169c",
          950: "#2d0b6a",
        },
      },
    },
    plugins: ["prettier-plugin-tailwindcss"],
  },
};

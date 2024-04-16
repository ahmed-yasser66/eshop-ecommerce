/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        wideScreen: { raw: "(min-apect-ratio:3/2)" },
        tallScreen: { raw: "(max-apect-ratio:3/2)" },
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};

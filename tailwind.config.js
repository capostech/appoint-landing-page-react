/** @type {import('tailwindcss').Config} */

const flattenColorPalette =
  require("tailwindcss/lib/util/flattenColorPalette").default;

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"], // Adjusted for JavaScript
  theme: {
    extend: {
      fontFamily: {
        serif: ["Lora", "serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
        fadeOut: "fadeOut 2s ease-in-out",
        slideUp: "slideUp 1s ease-in-out",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    function addVariablesForColors({ addBase, theme }) {
      const allColors = flattenColorPalette(theme("colors"));
      const newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
      );

      addBase({
        ":root": newVars,
      });
    },
  ],
};

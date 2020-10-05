module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js"],
  theme: {
    fontFamily: {
      Anton: ["Anton", "sans-serif"],
    },
    extend: {},
    container: {
      center: true,
    },
  },
  variants: {},
  plugins: [require("tailwindcss-textshadow")],
}

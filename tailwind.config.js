module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js"],
  theme: {
    fontFamily: {
      hind: ["hind", "sans-serif"],
    },
    extend: {},
    container: {
      center: true,
    },
  },
  variants: {},
  plugins: [require("tailwindcss-textshadow")],
}

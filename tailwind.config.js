module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js"],
  theme: {
    fontFamily: {
      hind: ["hind", "sans-serif"],
      bungee: ["bungee", "sans-serif"],
      monoton: ["monoton", "sans-serif"],
      eczar: ["eczar", "serif"],
    },
    extend: {},
    container: {
      center: true,
    },
  },
  variants: {},
  plugins: [require("tailwindcss-textshadow")],
}

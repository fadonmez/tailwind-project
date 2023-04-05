/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        "brand-background": "#FCFBFA",
        "brand-primary": "#F38160",
        "brand-secondary": "#F0B70D",
        "brand-black": "#403C39",
      },
    },
  },
  plugins: [],
};

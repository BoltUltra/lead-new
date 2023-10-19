/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      sm: "420px",
      // => @media (min-width: 320px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        opensans: ["Open Sans", "sans-serif"],
      },
      colors: {
        "primary-intl": "#9747FF",
        "secondary-intl": "#3D0C7D",
        "primary-nig": "#385512",
        "secondary-nig": "#39900E",
        "nig-button": "#F7941D",
      },
    },
  },
  plugins: [],
};

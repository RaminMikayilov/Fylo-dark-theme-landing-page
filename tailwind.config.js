/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1220px",
      xl: "1440px",
    },
    colors: {
      darkBlue: {
        100: "hsl(217, 28%, 15%)",
        200: "hsl(218, 28%, 13%)",
        300: "hsl(216, 53%, 9%)",
        400: "hsl(219, 30%, 18%)",
      },
      cyan: "hsl(176, 68%, 64%)",
      blue: "hsl(198, 60%, 50%)",
      red: "hsl(0, 100%, 63%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontSize: {
      sm: "14px",
      md: "20px",
      xl: "24px",
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
      openSans: ["Open Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};

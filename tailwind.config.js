/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xxs: "320px",
      xs: "480px",
      sm: "600px",
      md: "840px",
      lg: "1240px",
      xl: "1640px",
    },
    extend: {},
  },
  plugins: [],
}


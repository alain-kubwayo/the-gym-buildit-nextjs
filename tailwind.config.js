/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: {
          100: "#F4F7FF",
          200: "#C6DBFF",
          300: "#678C92",
          400: "#486A6F",
          500: "#4397A4",
          600: "#5BCCDE",
        },
      },
      borderRadius: {
        btn: "0.313rem",
      },
      padding: {
        6.5: "1.563rem",
      },
      fontSize: {
        "6.5xl": "4rem",
      },
      lineHeight: {
        title: "4.5rem",
      },
      backgroundImage: {
        "home-header-texture": "url('/home-header-bg.svg')",
      },
    },
  },
  plugins: [],
};

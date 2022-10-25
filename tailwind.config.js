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
          50: "#D1E1FC",
          100: "#F4F7FF",
          150: "#E1EBFA",
          200: "#C6DBFF",
          300: "#678C92",
          400: "#486A6F",
          500: "#4397A4",
          600: "#5BCCDE",
        },
      },
      borderRadius: {
        btn: "0.313rem",
        "sm-half": "0.188rem",
      },
      padding: {
        6.5: "1.563rem",
        12.5: "3.125rem",
      },
      fontSize: {
        "6.5xl": "4rem",
      },
      lineHeight: {
        title: "4.5rem",
        subtitle: "3rem",
      },
      backgroundImage: {
        "home-header-texture": "url('/home-header-bg.svg')",
        "header-texture": "url('/header-bg.svg')",
        "section-texture": "url('/assets/section-bg.svg')",
      },
    },
  },
  plugins: [],
};

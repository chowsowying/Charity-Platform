/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#543C32",
        "secondary-500": "#EE7A45",
        "secondary-100": "#FAEBE5",
        "secondary-300": "#D6B9AD",
        green: "#87D980",
      },
      content: {
        dotsprimary: "url('./assets/dots-primary.png')",
        dotssecondary: "url('./assets/dots-secondary.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};

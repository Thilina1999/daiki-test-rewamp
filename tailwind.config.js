/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        "dark-blue": "#002b5b",
        "light-blue": "#1a5f7a",
        "dark-green": "#159895",
        "light-green": "#57c5b6",
        "background-green": "#EEF6F5",
        "card-blue": "#9FEEE3",
        "card-yellow": "#FFD332",
        "card-purple": "#6A3F99",
        "light-gray": "#D9D9D9",
        "header-green": "#B2E3DD",
        "title-black": "#2F2D2D",
        'gray-160': '#52525B'
      },
      screens: {
        'mn': '520px',
        'mx': '770px',
        'sx': '930px',
        'xs': '1030px',
        '2xl': '1200px', 
        '3xl': '1550px', 
      },
      keyframes: {
        scale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        scale: 'scale 5s infinite',
      },
      fontSize: {
        mainTitle: ["3.125rem", { fontWeight: "800" }],
        cardTitle: ["2.3rem", { fontWeight: "600" }],
      },
      height: {
        17: "4.25rem", // 68px
        27.5: "6.875rem", //110px
        100: "30rem",
      },
      width: {
        47: "11.75rem", // 188px
        50: "12.5rem", // 200px
        33.25: "8.313rem", // 133px
        62.5: "15.625rem", // 250px
        68.75: "17.188rem", // 275px
        100: "25rem", // 400px
        120: "450px"
      },
      borderRadius: {
        3.75: "0.938rem", // 15px
        50: '12.5rem', // 200px
      },
      inset: {
        17: "4.25rem",
        15: '3.75rem',
        200: "50rem", // 800px
        250: "62.5rem", // 1000px
      },
      borderWidth: {
        0.25: "0.063rem", // 1px
      },
    },
  },
  plugins: [],
};

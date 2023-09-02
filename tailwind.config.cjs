/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xl: "1110px",
        },
      },
      screens: {
        lg: { max: "1023px" },
        md: { max: "902px" },
        sm: { max: "639px" },
      },
      fontSize: {
        sm: "13px",
      },
      fontFamily: {
        sans: ["karla", "san-serif"],
        serif: ["DM Serif Display", "serif"],
      },
      colors: {
        dark: "#2C2830",
        "dark-gray": "#837D88",
        "dark-purple": "#2D2641",
        "light-blue": "#96A9C6",
        "light-gray": "#FAFAFA",
        line: "#DADADA",
        brown: "#C396C6",
      },
      backgroundImage: {
        "bg-pattern-mobile-nav": "url(/images/bg-pattern-mobile-nav.svg)",

        "bg-pattern-how-we-work": "url(/images/bg-pattern-how-we-work-desktop.svg)",
        "bg-pattern-how-we-work-mobile": "url(/images/bg-pattern-how-we-work-mobile.svg)",

        "bg-pattern-footer": "url(/images/bg-pattern-footer-desktop.svg)",
        "bg-pattern-footer-mobile": "url(/images/bg-pattern-footer-mobile.svg)",

        "bg-pattern-intro-right-desktop": "url(/images/bg-pattern-intro-right-desktop.svg)",
        "bg-pattern-intro-right-mobile": "url(/images/bg-pattern-intro-right-mobile.svg)",

        "bg-pattern-intro-left-desktop": "url(/images/bg-pattern-intro-left-desktop.svg)",
        "bg-pattern-intro-left-mobile": "url(/images/bg-pattern-intro-left-mobile.svg)",
      },
    },
  },
  plugins: [],
};

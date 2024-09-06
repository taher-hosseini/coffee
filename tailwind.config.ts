import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "brown": {
          "100": "#ECE0D1",
          "300": "#DBC1AC",
          "600": "#967259",
          "900": "#634832",
        }
      },
      boxShadow:{
        "normal":"0px 1px 10px 0px rgba(0, 0, 0, 0.05)"
      },
      borderRadius:{
        "4xl":"2rem"
      },
      fontFamily:{
        "Vazir":"Vazir",
        "VazirBold":"Vazir Bold",
      },
      letterSpacing:{
        "tightest":"-0.065em"
      },
      container:{
        center: true,
        padding : {
          "DEFAULT": "1rem",
          "lg" : "0.625rem",
        }
      },
      backgroundImage:{
        "home-mobile":"url(../public/images/headerBgMobile.webp)",
        "home-desktop":"url(../public/images/headerBgDesktop.webp)",
        "body":"url(../public/images/body-bg.png)"
      }
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',

    }
  },
  plugins: [
      function ({addVariant}:any) {
        addVariant('child','&>*');
        addVariant('child-hover','&>*:hover');
      }
  ],
};
export default config;

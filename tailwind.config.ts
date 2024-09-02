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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container:{
        padding : {
          "default": "1rem",
          "lg": "0.625rem",
        }
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
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

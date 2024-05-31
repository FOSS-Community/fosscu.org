import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-green": "#0DFF1C",
        "gradient-green": "linear-gradient(180deg, #00FF00 0%, #008500 99.99%, #006900 100%)",
        "custom-gray": "#6C7275", 
        "custom-gray2": "#AFAFAF",
        "custom-yellow": "#FAFF00",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "custom-green-gradient": "linear-gradient(180deg, #00FF00 0%, #008500 99.99%, #006900 100%)",
      },
    },
  },
  plugins: [],
};
export default config;

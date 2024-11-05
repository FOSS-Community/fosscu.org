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
        "bg-black": "#141718",
        "shipyard": {
          "blue": "#0066FF",
          "purple": "#6B46C1",
          "dark": "#0A0A0A",
          "glow": "#00A3FF"
        },
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-green-gradient": "linear-gradient(180deg, #00FF00 0%, #008500 99.99%, #006900 100%)",
        "shipyard-gradient": "linear-gradient(to bottom right, var(--tw-gradient-stops))",
        "shipyard-glow": "radial-gradient(circle at center, rgba(0, 163, 255, 0.15), transparent 70%)"
      },
      animation: {
        "scroll": "scroll 20s linear infinite",
        "glow": "glow 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        // New portal animations
        "portal-ring-1": "portal-ring-1 3s infinite",
        "portal-ring-2": "portal-ring-2 3s infinite",
        "portal-ring-3": "portal-ring-3 3s infinite",
        "portal-pulse": "portal-pulse 3s infinite"
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-100% - 2rem))" }
        },
        glow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" }
        },
        // New portal keyframes
        "portal-ring-1": {
          "0%": { 
            transform: "translate(-50%, -50%) scale(0.5) rotate(0deg)",
            opacity: "0"
          },
          "100%": { 
            transform: "translate(-50%, -50%) scale(1.5) rotate(180deg)",
            opacity: "0"
          }
        },
        "portal-ring-2": {
          "0%": { 
            transform: "scale(0.5) rotate(0deg)",
            opacity: "0"
          },
          "100%": { 
            transform: "scale(1.5) rotate(-180deg)",
            opacity: "0"
          }
        },
        "portal-ring-3": {
          "0%": { 
            transform: "scale(0.5) rotate(0deg)",
            opacity: "0"
          },
          "100%": { 
            transform: "scale(1.5) rotate(360deg)",
            opacity: "0"
          }
        },
        "portal-pulse": {
          "0%": { 
            transform: "scale(0.8)",
            opacity: "0.5"
          },
          "50%": { 
            transform: "scale(1.1)",
            opacity: "0.3"
          },
          "100%": { 
            transform: "scale(0.8)",
            opacity: "0.5"
          }
        }
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 102, 255, 0.3)',
        'glow-lg': '0 0 30px rgba(0, 102, 255, 0.4)',
      }
    },
  },
  plugins: [],
};

export default config;
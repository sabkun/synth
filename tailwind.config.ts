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
        synth: {
          bg: "#0d0d0d",
          accent: "#f5a623",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "bloom-drift": "bloom-drift 18s ease-in-out infinite alternate",
      },
      keyframes: {
        "bloom-drift": {
          "0%": { transform: "translate(0, 0) scale(1)", opacity: "0.55" },
          "100%": { transform: "translate(-4%, 3%) scale(1.08)", opacity: "0.75" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

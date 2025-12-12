import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        copper: {
          50: "#fef8f5",
          100: "#fceee5",
          200: "#f8dcc8",
          300: "#f2c4a7",
          400: "#e8a87c",
          500: "#DA8A67",
          600: "#C97A4F",
          700: "#B87333",
          800: "#A0522D",
          900: "#8B4513",
        },
      },
    },
  },
};

export default config;


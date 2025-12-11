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
        background: "#F9FAFB", // Very light grey, almost white (matches the clean look)
        foreground: "#111111", // Sharp black for main text
        "brand-green": "#00AFFF", // Modern Mavi tonları
        "brand-dark-pill": "#1F1F1F", // Dark Grey for the navbar pill
        "brand-gray-text": "#666666", // Subtitles
      },
      fontFamily: {
        sans: ["var(--font-body)", "Instrument Sans", "Instrument Sans Placeholder", "sans-serif"],
        body: ["var(--font-body)", "Instrument Sans", "Instrument Sans Placeholder", "sans-serif"],
        display: ["var(--font-display)", "Clash Grotesk", "Clash Grotesk Placeholder", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.02em",
        tight: "-0.01em",
      },
      fontSize: {
        '48': '48px',
      },
      backgroundImage: {
        // Replicating the subtle grid seen in the background
        'grid-pattern': "linear-gradient(to right, #E5E7EB 1px, transparent 1px), linear-gradient(to bottom, #E5E7EB 1px, transparent 1px)",
        // Dotted pattern - daha belirgin
        'dotted-pattern': "radial-gradient(circle,rgb(0, 0, 0) 2px, transparent 2px)",
      },
      backgroundSize: {
        'grid-pattern': '4rem 4rem',
        'dotted-pattern': '3px 3px',
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)', // For floating cards
      },
      keyframes: {
        'scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - 1rem))' },
        },
      },
      animation: {
        'scroll': 'scroll 20s linear infinite',
      }
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};

export default config;

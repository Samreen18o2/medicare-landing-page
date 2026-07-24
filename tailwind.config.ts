import type { Config } from "tailwindcss";

/** Logo-exact brand colors (sampled from /public/images/logo.png) */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mc: {
          // Soft teal / mint — heart + MINDCARE wordmark
          teal: "#70A8A0",
          "teal-dark": "#5A918A",
          "teal-deep": "#3F736D",
          "teal-light": "#E8F4F2",
          "teal-soft": "#D2E8E4",
          // Medium blue — head silhouette
          blue: "#1870A8",
          "blue-dark": "#145C8A",
          "blue-deep": "#0F4A6E",
          "blue-light": "#E6F2F8",
          "blue-soft": "#CDE4F1",
          // Bright leaf green — growth leaves
          leaf: "#88C454",
          "leaf-dark": "#6FA63C",
          "leaf-light": "#F0F8E6",
          "leaf-soft": "#DFF0C4",
          // Warm yellow / gold — crescent accent
          gold: "#F8CC40",
          "gold-dark": "#E0B428",
          "gold-light": "#FFF8E0",
          "gold-soft": "#FEEDED",
          // Structure / text (deep blue from logo family)
          dark: "#0F3D5C",
          "dark-soft": "#1A5270",
          mist: "#F5FAF8",
          slate: "#5A6F6B",
          white: "#FFFFFF",
          // Aliases used by shared utilities
          primary: "#70A8A0",
          "primary-dark": "#5A918A",
          "primary-deep": "#3F736D",
          "primary-light": "#E8F4F2",
          "primary-soft": "#D2E8E4",
          secondary: "#1870A8",
          "secondary-dark": "#145C8A",
          "secondary-light": "#E6F2F8",
        },
      },
      fontFamily: {
        sans: ["Outfit", "system-ui", "sans-serif"],
        heading: ["Outfit", "system-ui", "sans-serif"],
        body: ["Outfit", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
      },
      fontSize: {
        "mc-body": ["1.0625rem", { lineHeight: "1.75" }],
        "mc-large": ["1.25rem", { lineHeight: "1.65" }],
        "mc-small": ["0.9375rem", { lineHeight: "1.65" }],
        "mc-h1": [
          "clamp(2.35rem, calc((3.75 - 1) * 1.2vw + 1rem), 3.75rem)",
          { lineHeight: "1.08", letterSpacing: "-0.03em" },
        ],
        "mc-h2": [
          "clamp(1.875rem, calc((2.75 - 1) * 1.2vw + 1rem), 2.75rem)",
          { lineHeight: "1.15", letterSpacing: "-0.02em" },
        ],
        "mc-h3": [
          "clamp(1.375rem, calc((1.75 - 1) * 1.2vw + 1rem), 1.75rem)",
          { lineHeight: "1.3", letterSpacing: "-0.01em" },
        ],
        "mc-h4": [
          "clamp(0.8125rem, calc((0.9375 - 1) * 1.2vw + 1rem), 0.9375rem)",
          { lineHeight: "1.4", letterSpacing: "0.1em" },
        ],
      },
      maxWidth: {
        content: "1300px",
      },
      borderRadius: {
        card: "1.25rem",
        image: "1.5rem",
      },
      boxShadow: {
        soft: "0 2px 16px -4px rgba(15, 61, 92, 0.08)",
        card: "0 8px 32px -10px rgba(15, 61, 92, 0.12)",
        lift: "0 20px 48px -16px rgba(15, 61, 92, 0.16)",
      },
      backgroundImage: {
          "mc-cta":
          "linear-gradient(135deg, #0F3D5C 0%, #145C8A 50%, #70A8A0 100%)",
        "mc-soft":
          "radial-gradient(ellipse at top left, rgba(112,168,160,0.1), transparent 50%), radial-gradient(ellipse at bottom right, rgba(24,112,168,0.05), transparent 45%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "float-slow": "float 7s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 1.2s infinite",
      },
    },
  },
  plugins: [],
};

export default config;

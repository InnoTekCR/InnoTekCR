import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Azul tecnológico — color primario de marca INNOTEK
        brand: {
          50: "#eef4ff",
          100: "#d9e6ff",
          200: "#b9d1ff",
          300: "#8bb3ff",
          400: "#5b8dff",
          500: "#3566f7",
          600: "#2247e6",
          700: "#1c37c2",
          800: "#1c2f97",
          900: "#1b2b77",
          950: "#131a4a",
        },
        // Acento cian — para gradientes y detalles de "conexión"
        signal: {
          400: "#5eead4",
          500: "#2dd4bf",
        },
        // Neutros oscuros de la interfaz
        ink: {
          950: "#050914",
          900: "#0a1128",
          800: "#101a38",
          700: "#182349",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgb(255 255 255 / 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.05) 1px, transparent 1px)",
        "hero-radial":
          "radial-gradient(60% 60% at 50% 0%, rgb(53 102 247 / 0.16) 0%, rgb(5 9 20 / 0) 70%)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      boxShadow: {
        soft: "0 1px 2px rgb(15 23 42 / 0.04), 0 8px 24px -12px rgb(15 23 42 / 0.12)",
        "soft-lg":
          "0 2px 4px rgb(15 23 42 / 0.04), 0 24px 48px -16px rgb(15 23 42 / 0.16)",
        glow: "0 0 0 1px rgb(53 102 247 / 0.16), 0 8px 32px -8px rgb(53 102 247 / 0.35)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.55" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "dash": {
          to: { strokeDashoffset: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 0.7s ease-out forwards",
        "pulse-soft": "pulse-soft 3.5s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        dash: "dash 1.8s ease-out forwards",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;

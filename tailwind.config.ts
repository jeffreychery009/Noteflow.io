import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          100: "#FDFDFD",
          200: "#FCFCFC",
          300: "#FFFFFF",
          400: "#F3F3F3", // New shade for consistency
          900: "#7F7F7F", // Fixed hex value
        },
        primary: {
          100: "#12A7FB",
          200: "#47B5FF", // Added intermediate shades
          300: "#5EC4FF",
          400: "#6BCFF5",
          500: "#7DC5ED",
        },
        dark: {
          100: "#121212",
          200: "#1A1A1A",
          300: "#1E1E1E",
          400: "#2A2A2A",
          500: "#2C2C2C",
        },
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
} satisfies Config;

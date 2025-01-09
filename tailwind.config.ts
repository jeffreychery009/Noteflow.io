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
          100: "#F7F7F7",
          900: "#FDFDFD",
        },
        primary: {
          100: "#12A7FB",
          500: "#7DC5ED",
        },
        dark: {
          100: "#121212",
          500: "#1F1F1F",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

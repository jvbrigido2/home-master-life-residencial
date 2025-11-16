import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/core/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "2rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontSize: {
        base: "1.05rem",
      },
      colors: {
        primary: {
          DEFAULT: "#0056a6",
          foreground: "#ffffff",
          50: "#e6f0f9",
          100: "#cce0f3",
          200: "#99c2e7",
          300: "#66a3db",
          400: "#3385cf",
          500: "#0056a6",
          600: "#004c95",
          700: "#003d7a",
          800: "#002f5e",
          900: "#001f3f",
        },
        secondary: {
          DEFAULT: "#00a651",
          foreground: "#ffffff",
          50: "#e6f7ef",
          100: "#ccf0df",
          200: "#99e1bf",
          300: "#66d29f",
          400: "#33c37f",
          500: "#00a651",
          600: "#009549",
          700: "#00783b",
          800: "#005c2d",
          900: "#003d1e",
        },
        accent: {
          DEFAULT: "#f7941d",
          foreground: "#ffffff",
          50: "#fef4e8",
          100: "#fde9d1",
          200: "#fbd3a3",
          300: "#f9bd75",
          400: "#f8a747",
          500: "#f7941d",
          600: "#de851a",
          700: "#b86c15",
          800: "#8f5411",
          900: "#5f380b",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;


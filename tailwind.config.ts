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
        brand: {
          pink: "#E6007A",
          pinkHover: "#CC006C",
          pinkLight: "#FFF0F6",
          pinkMuted: "#FCE7F3",
          pinkBorder: "#F9A8D4",
          navy: "#151E28",
          navyMuted: "#334155",
          green: "#2E7D32",
          greenLight: "#EDF7ED",
          greenBorder: "#B7EB8F",
          lavender: "#F3E8FF",
          sky: "#E0F2FE",
          gold: "#F59E0B",
          goldLight: "#FEF3C7",
        },
        cream: {
          50: "#FCFAF7",
          100: "#FAF7F2",
          200: "#F4EEE5",
          300: "#ECE3D6",
          400: "#DFD2C0",
          500: "#CFBEA5",
        },
        terracotta: {
          50: "#FAF1EC",
          100: "#F3E0D6",
          200: "#E7C0AF",
          300: "#D99D83",
          400: "#CB7857",
          500: "#BD5B34",
          600: "#A54C28",
          700: "#853B1D",
          800: "#652C15",
          900: "#491F0E",
        },
        sage: {
          50: "#F2F6F3",
          100: "#E2ECE5",
          200: "#C4D8CA",
          300: "#9EBEA7",
          400: "#709C7B",
          500: "#4E7B5C",
          600: "#3D6249",
          700: "#2F4C39",
          800: "#23392B",
          900: "#18281E",
        },
        earth: {
          50: "#F7F5F2",
          100: "#EAE5DE",
          200: "#D7CEBF",
          300: "#C0B29E",
          700: "#4D4336",
          800: "#362F26",
          900: "#241F1A",
        },
        charcoal: {
          700: "#36423E",
          800: "#242E2A",
          900: "#18211E",
          950: "#101614",
        },
        sand: "#F5EDE3",
        warmgold: "#D4A359",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
        script: ["var(--font-script)", "Caveat", "cursive"],
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(47, 76, 57, 0.08)",
        card: "0 15px 35px -10px rgba(35, 57, 43, 0.07), 0 0 0 1px rgba(165, 140, 120, 0.1)",
        pinkPill: "0 10px 25px -5px rgba(230, 0, 122, 0.35)",
        pinkHover: "0 15px 30px -5px rgba(230, 0, 122, 0.45)",
        elevated: "0 25px 50px -12px rgba(24, 40, 30, 0.14)",
        glow: "0 0 35px rgba(189, 91, 52, 0.2)",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
        "4xl": "2.25rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;

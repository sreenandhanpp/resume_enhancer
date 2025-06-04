/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "oklch(61.44% 0.232 295.85)", // #6C3EF5
        secondary: "oklch(74.18% 0.179 291.73)", // #A589F8
        background: "#F9F9F9",
        surface: "#FFFFFF",
        border: "#E0E0E0",
        accent: "oklch(64.88% 0.2 255.86)", // #3F82F7
        inputFocus: "oklch(61.44% 0.232 295.85)",

        text: {
          primary: "#1C1C1E",
          secondary: "#6E6E73",
          disabled: "#A1A1AA",
        },

        success: "#28C76F",
        warning: "#FFB400",
        error: "#FF4D4F",

        avocado: {
          100: "oklch(99% 0 0)",
          200: "oklch(98% 0.04 113.22)",
          300: "oklch(94% 0.11 115.03)",
          400: "oklch(92% 0.19 114.08)",
          500: "oklch(84% 0.18 117.33)",
          600: "oklch(53% 0.12 118.34)",
        },
      },
      borderRadius: {
        lg: "0.75rem",
        xl: "1rem",
        '2xl': "1.5rem",
      },
      screens: {
        '3xl': '120rem',
      },
    },
  },
  plugins: [],
};

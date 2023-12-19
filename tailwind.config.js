/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            success: {
              DEFAULT: "#000000",
              foreground: "#ffffff",
            },
            focus: "#f1f1f1",
          },
        },
        dark: {
          colors: {
            success: {
              DEFAULT: "#ffffff",
              foreground: "#000000",
            },
            focus: "#f1f1f1",
          },
        },
      },
    }),
  ],
};

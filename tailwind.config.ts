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
        background: "#F0F0F6",
        primary: " #FFFFFF",
        secondary: "#FFB400",
        tertiary: "#2B2B2B"
        },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bg-radial":
          "linear-gradient(135deg, #fee8d8 0%, #e5d7f5 50%, #d6e4f0 100%)",
        "custom-bg": "url('/images/background.png')",
      },
      boxShadow: {
        "custom-shadow": "0px 2px 10px 2px #00000026",
      },
    },
  },
  plugins: [],
};
export default config;

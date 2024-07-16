import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fadein: 'fadein 0.8s linear',
        slideandfade: 'slideandfade 0.8s linear',
      },
      keyframes: {
        fadein: {
          '0%': { opacity: "0", transform: 'translateY(-10%)' },
          '100%': { opacity: "1", transform: 'translateY(0)' },
        },
        slideandfade: {
          '0%': { transform: 'translateX(60%)', opacity: "0" },
          '100%': { transform: 'translateX(0)', opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

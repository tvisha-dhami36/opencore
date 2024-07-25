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
      },
      fontFamily: {
        dmsans: ['var(--font-dmsans)'],
      },
      colors:{
        primary:'#294F74',
        primarylight:'#EDF2F5',
        secoundry:'#667085',
        bordercolor:'#EAECF0',
        lightgray:'#F9FAFB',
        whiteGray:'#FCFCFD'
      }
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: "#01457a",
      white: "#fff",
      "card-rgba": "rgba(253, 217, 102, 0.25)",
    },

    fontSize: {
      40: "40px",
      35: "35px",
      30: "30px",
      28: "28px",
      24: "24px",
      22: "22px",
      20: "20px",
      18: "18px",
      13: "13px",
    },
    spacing: {
      "100": "100px",
      "45": "45px",
      "40": "40px",
      "35": "35px",
      "30": "30px",
      "25": "25px",
      "16": "16px",
      "20": "20px",
      "18": "18px",
      "10": "10px",
    },
    gap: {
      "15": "15px",
      "29": "29px",
      "30": "30px",
      "80": "80px",
    },
    screens: {
      ls: "320px",
      es: "380px",
      xs: "500px",
      mds: "600px",
      sm: "768px",
      xl: "1024px",
      md: "1100px",
      lg: "1300px",
      "2xl": "1440px",
      xh: "1600px",
      "3xl": "1920px",
    },
  },
  plugins: [],
};
export default config;

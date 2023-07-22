import aspectRatio from "@tailwindcss/aspect-ratio";
import appconfig from "appconfig";
import { Config } from "tailwindcss";

const config: Partial<Config> = {
  darkMode: "class",
  theme: {
    colors: appconfig.theme.colors,
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        "2xl": "0",
      },
    },
    extend: {
      fontFamily: {
        sans: "inherit",
      },
      fontSize: {
        "4.5xl": "2.5rem",
      },
      spacing: {
        3.75: "0.9375rem",
        4.5: "1.125rem",
        7.5: "1.875rem",
        12.5: "3.125rem",
        13: "3.25rem",
        15: "3.75rem",
        28.5: "7.5rem",
      },
      borderRadius: {
        big: "3.125rem",
        huge: "6.25rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  configViewer: {
    fonts: [
      "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;700;900&display=swap",
    ],
  },
  plugins: [aspectRatio],
};

export default config;

import defaultConfig from "@acme/tailwindcss-config";

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [defaultConfig],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
};

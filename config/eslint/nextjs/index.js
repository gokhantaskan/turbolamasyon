module.exports = {
  extends: ["@acme", "next/core-web-vitals"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
  },
  parserOptions: {
    presets: [require.resolve("next/babel")],
  },
};

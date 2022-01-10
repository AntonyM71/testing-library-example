module.exports = {
  root: true,
  env: {
    node: true,
    "jest/globals": true,
  },
  plugins: ["testing-library", "jest-dom", "jest"],

  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/prettier",
    "plugin:jest-dom/recommended",
    "plugin:testing-library/vue",
    "@vue/typescript/recommended",
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};

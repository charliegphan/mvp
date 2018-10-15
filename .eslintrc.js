module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  env: {
    browser: true,
  },
  extends: "airbnb",
  plugins: [
    "react",
    "jsx-a11y",
    "import"
  ],
}
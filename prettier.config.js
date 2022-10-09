/** @type {import('prettier').Config} */
module.exports = {
  plugins: [require("prettier-plugin-tailwindcss")],

  bracketSameLine: true,
  jsxSingleQuote: true,
  printWidth: 100,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: false,
}

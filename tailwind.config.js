/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.tsx'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}

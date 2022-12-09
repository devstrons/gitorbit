/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}

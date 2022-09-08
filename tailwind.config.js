/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('./node_modules/@funda/tailwind-config')],
  content: [
    './**/*.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

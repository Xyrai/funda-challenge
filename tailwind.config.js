/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('./node_modules/@funda/tailwind-config')],
  content: [
    './components/**/*.{js,vue,ts}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './**/*.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

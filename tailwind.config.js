/** @type {import('tailwindcss').Config} */
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'src/**/*.{html,js,ts}'),
    join(__dirname, 'src/**/**/*.{html,js,ts}'),
    "./src/**/*.{html, js, ts}", 
    "./src/**/**/*.{html, js, ts}", 
    "./src/**/*"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


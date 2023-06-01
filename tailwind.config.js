/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/screens/**/*.tsx',
    './src/components/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        'white90': '#F0F0F0',
        'grayFaint': '#BEBEBE',
        'grayDark': '#5F6164',
        'accentBlue': '#004F75',
        'accentRed': '#C42604',
        'black': '#000100',
        'statusGreen': '#00B132',
      }
    },
  },
  plugins: [],
}
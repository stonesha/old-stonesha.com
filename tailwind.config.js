module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      'honeydew': '#D9E5D6',
      'cerulean': '#00A7E1',
      'champagne': '#EDDEA4',
      'salmon': '#F7A072',
      'saffron': '#FF9B42'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3498db',
        'secondary': '#f1c40f',
        'tertiary': '#2ecc71',
        "cards":'#ffff'
        },
        backgroundColor:{
          'cards': 'rgb(31 41 60 / var(--tw-bg-opacity))'
        }
    },
  },
  plugins: [],
};

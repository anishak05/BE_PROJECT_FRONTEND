/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}",'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
      'navblue': '#AEB9C7', 'black-variant': '#42505D',
    },
    padding: {
      '9' : '7rem',
    },
    margin: {
      '9' : '7rem',
    },
    dropShadow: {
      '3xl' : '0px 10px 10px 0px rgba(0 0 0/0.06)',
    }

  },
  },
  plugins: [require('flowbite/plugin'),],
}
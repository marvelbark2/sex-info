/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ["Roboto", "sans-serif"],
      'roboto': ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        'bloody-red': '#C81919',
        'light-red': '#E63737',
        'dark-red': '#3e0909',
        'bodyLight': '#F5F5F5',
        'twitter': '#1DA1F2',
      },
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '128': '32rem',
        '144': '36rem',
      }
    },
  },
  plugins: [],
}

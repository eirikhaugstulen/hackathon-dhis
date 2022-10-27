/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6750A4',
        "primary-hover": '#5e4894',
        "primary-text": '#49454f',
        "secondary-text": '#1c1b1f',
        secondary: '#625B71'
      }
    },
  },
  plugins: [],
}

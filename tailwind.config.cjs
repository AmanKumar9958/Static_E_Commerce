/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#38B5FE', // Updated primary brand color
        accent: '#f97316', // existing accent (can adjust later if contrast issues)
      },
      boxShadow: {
        card: '0 6px 18px rgba(15,23,42,0.08)',
      },
    },
  },
  plugins: [],
}

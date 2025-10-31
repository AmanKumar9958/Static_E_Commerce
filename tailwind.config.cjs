/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        accent: '#f97316',
      },
      boxShadow: {
        card: '0 6px 18px rgba(15,23,42,0.08)',
      },
    },
  },
  plugins: [],
}

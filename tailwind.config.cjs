/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
  primary: '#5BBBF2', // reverted brand blue per latest request
        accent: '#F97316', // Warm Orange CTA
        heading: '#0A3D62', // Dark Navy for headings / accents
        body: '#2D3748', // Dark Charcoal for body text
        neutral: '#FFFFFF', // Pure white neutral
      },
      boxShadow: {
        card: '0 6px 18px rgba(15,23,42,0.08)',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0C0C0C',
          dark: '#141414',
          card: '#161616',
          wine: '#410306',
          gold: '#C5A064',
          cream: '#F2F1ED',
          border: 'rgba(242, 241, 237, 0.12)',
          borderHover: 'rgba(242, 241, 237, 0.35)',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        widestLuxury: '0.28em',
      }
    },
  },
  plugins: [],
}

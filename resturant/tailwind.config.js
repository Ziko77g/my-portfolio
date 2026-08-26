/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#0C0C0E',
        bgSurface: '#141418',
        bgCard: '#191920',
        textPrimary: '#F4F0EA',
        textSecondary: '#AAA6A0',
        gold: {
          DEFAULT: '#C5A880',
          hover: '#D8B98F',
          dark: '#8C7351',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Amiri', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Cairo', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

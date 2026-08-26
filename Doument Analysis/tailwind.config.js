/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        arabic: ['"IBM Plex Sans Arabic"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc8fc',
          400: '#36abfa',
          500: '#0c8ee9',
          600: '#0070c7',
          700: '#0159a1',
          800: '#064c84',
          900: '#0b3f6f',
          950: '#072849',
        },
        accent: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        }
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'highlight-fade': 'highlightFade 2.5s ease-out forwards',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        highlightFade: {
          '0%': { backgroundColor: 'rgba(99, 102, 241, 0.35)', color: '#ffffff' },
          '70%': { backgroundColor: 'rgba(99, 102, 241, 0.2)' },
          '100%': { backgroundColor: 'transparent' },
        }
      }
    },
  },
  plugins: [],
}

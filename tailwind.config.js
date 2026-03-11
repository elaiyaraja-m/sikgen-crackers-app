/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'var(--color-primary-50, #f5f3ff)',
          100: 'var(--color-primary-100, #ede9fe)',
          200: 'var(--color-primary-200, #ddd6fe)',
          300: 'var(--color-primary-300, #c4b5fd)',
          400: 'var(--color-primary-400, #a78bfa)',
          500: 'var(--color-primary-500, #8b5cf6)',
          600: 'var(--color-primary-600, #7c3aed)',
          700: 'var(--color-primary-700, #6d28d9)',
          800: 'var(--color-primary-800, #5b21b6)',
          900: 'var(--color-primary-900, #4c1d95)',
        },
        secondary: {
          50: 'var(--color-secondary-50, #fdf2f8)',
          100: 'var(--color-secondary-100, #fce7f3)',
          200: 'var(--color-secondary-200, #fbcfe8)',
          300: 'var(--color-secondary-300, #f9a8d4)',
          400: 'var(--color-secondary-400, #f472b6)',
          500: 'var(--color-secondary-500, #ec4899)',
          600: 'var(--color-secondary-600, #db2777)',
          700: 'var(--color-secondary-700, #be185d)',
          800: 'var(--color-secondary-800, #9f1239)',
          900: 'var(--color-secondary-900, #831843)',
        },
        gold: {
          50: 'var(--color-accent-50, #fffbeb)',
          100: 'var(--color-accent-100, #fef3c7)',
          200: 'var(--color-accent-200, #fde68a)',
          300: 'var(--color-accent-300, #fcd34d)',
          400: 'var(--color-accent-400, #fbbf24)',
          500: 'var(--color-accent-500, #f59e0b)',
          600: 'var(--color-accent-600, #d97706)',
          700: 'var(--color-accent-700, #b45309)',
          800: 'var(--color-accent-800, #92400e)',
          900: 'var(--color-accent-900, #78350f)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px var(--color-accent-400, #fbbf24), 0 0 10px var(--color-accent-400, #fbbf24)' },
          '100%': { boxShadow: '0 0 20px var(--color-accent-400, #fbbf24), 0 0 30px var(--color-accent-400, #fbbf24)' },
        },
        sparkle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        }
      }
    },
  },
  plugins: [],
}

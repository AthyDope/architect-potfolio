/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#F5F1EB', // Background
          100: '#E8DFD6', // Section Background
          200: '#DCCFC0',
          300: '#C2A98A', // Accent
          400: '#A68A6B',
          900: '#2B2B2B', // Main Text
          700: '#6B6B6B', // Secondary Text
        },
        luxury: {
          accent: '#C2A98A',
          cream: '#F5F1EB',
          dark: '#2B2B2B',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}

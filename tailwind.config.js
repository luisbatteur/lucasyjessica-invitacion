/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'ui-sans-serif', 'system-ui'],
        'serif': ['Cormorant Garamond', 'ui-serif', 'Georgia'],
      },
      colors: {
        'gold': '#D4AF37',
        'gold-light': '#E5C158',
        'gold-dark': '#B39429',
        'black': '#0D0D0D',
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in-out',
        scrollDown: 'scrollDown 1.5s infinite',
        bounce: 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scrollDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
      },
    },
  },
  plugins: [],
};
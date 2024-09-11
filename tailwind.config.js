/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
 
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard-Regular'],
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'slide-left-to-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      variants: {
        extend: {
          display: ['responsive'],
        },
      },
      animation: {
        'wave': 'wave 2s infinite',
        'slide-left-to-right': 'slide-left-to-right 15s linear infinite',
      },
      colors: {
        'custom-gray': 'rgb(105 105 105 / 78%)',
      },
    },
  },
  variants: {},
  plugins: [],
}
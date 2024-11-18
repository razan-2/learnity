/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bangers': ['Bangers'],
        'arima': ['Arima']
      },
      colors: {
        customBlue: "#05be9e",
        customLightBlue: "#C7F1F0",
        customBlack: "#2f2f27",
        customWhite: "#F0E6DD",
        customOrange: "#F8A12E",
        customLightOrange: "#FEC782"
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0'},
          '100%': { opacity: '1'}
        },
        headerFallBounce: {
          '0%': { transform: 'translateY(-100vh)' },
          '50%': { transform: 'translateY(0px)' },
          '70%': { transform: 'translateY(10px)'},
          '80%': { transform: 'translateY(0px)' },
          '90%': { transform: 'translateY(5px)' },
          '100%': { transform: 'translateY(0px)' }
        },
        navBarHeight: {
          '0%': { height: 0},
          '100%': { height: 40}
        },
        navBarHeight2: {
          '0%': { height: 40},
          '100%': { height: 0}
        },
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in-out',
        headerFallBounce: `headerFallBounce 1s ease-in-out`,
        spinSlow: 'spin 2s linear infinite',
        navBarHeight: 'navBarHeight 1s ease-in-out',
        navBarHeight2: 'navBarHeight2 1s ease-in-out',
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.25, 0.8, 0.25, 1)',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}


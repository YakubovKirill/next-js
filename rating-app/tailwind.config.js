/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'layout': '230px minmax(320px, 1200px) auto',
      },
      gridTemplateRows: {
        'layout': 'auto 1fr auto',
      }
    },
    letterSpacing: {
      small: '.025em',
      normal: '.05em',
      wide: '.1em',
      widest: '.2em',
    },
    fontSize: {
      small: ['14px', '20px'],
      base: ['16px', '24px'],
      medium: ['18px', '28px'],
      large: ['20px', '32px'],
      lgg: ['24px', '36px'],
      xl: ['28px', '40px'],
    },
    screens: {
      '2xl': {'max': '1535px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
      'desktop': { 'min': '640px', 'max': '4000px'}
    }
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    letterSpacing: {
      small: '.025em',
      normal: '.05em',
      wide: '.1em',
      widest: '.2em',
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      lgg: ['24px', '32px'],
      xl: ['28px', '36px'],
    }
  },
  plugins: [],
}

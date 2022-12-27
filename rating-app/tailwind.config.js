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
      small: ['14px', '20px'],
      base: ['16px', '24px'],
      medium: ['18px', '28px'],
      large: ['20px', '32px'],
      lgg: ['24px', '36px'],
      xl: ['28px', '40px'],
    }
  },
  plugins: [],
}

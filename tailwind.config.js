/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],  
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Great Vibes"],
    },
      screens: {
        xxs: '300px',
        xs: '480px',
        sm: '768px',
        md: '940px',
        lg: '1270px',
        xl: '1920px',
      },
  },
  plugins: [],
}

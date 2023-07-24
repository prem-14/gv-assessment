/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        white: '#FAFAFA',
        rootTextColor: '#212121',
        errorColor: '#D86161',
        placeHolderColor: '#7A7A7A',
        primaryColor: '#1597E4',
        cardColor: '#FFFFFF',
        cardBorderColor: '#E6E6E6',
      },
    },
  },
  plugins: [],
}

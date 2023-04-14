/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textColor: {
        'primary': 'rgb(15 23 42)',
        'secondary': 'rgb(51 65 85)',
        'light': 'rgb(241 245 249)',
      },
      backgroundColor: {
        'primary': 'rgb(241 245 249)',
        'dark': 'rgb(15 23 42)'
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'primary': '#FF5733',
        'secondary': '#C70039',
        'background': '#F0F0F0',
        'text': '#333333',
        'card': '#FFFFFF',
        'cardHover': '#F8F8F8',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '36': '9rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'custom': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'card': '0 2px 10px rgba(0, 0, 0, 0.1)',
      },
    },
    screens: {
      'xl': { 'max': '1200px' },
      'lg': { 'max': '991px' },
      'md': { 'max': '767px' },
      'sm': { 'max': '550px' },
      'xsm': { 'max': '375px' },
    }
  },
  plugins: [],
}

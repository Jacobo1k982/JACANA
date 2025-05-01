/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-slow': 'fadeIn 2s ease-out forwards',
        'ping-once': 'ping 0.6s ease-in-out 1',
        'scanner': 'scanner 3s linear infinite',
        'glow-border': 'glowBorder 5s ease-in-out infinite',
        'plasma-pulse': 'plasma 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
          glowBorder: {
            '0%, 100%': {
              boxShadow: '0 0 10px rgba(0,255,255,0.2), 0 0 20px rgba(0,255,255,0.15)',
            },
            '50%': {
              boxShadow: '0 0 15px rgba(0,255,255,0.6), 0 0 30px rgba(0,255,255,0.4)',
              scanner: {
                '0%': { top: '-100%' },
                '100%': { top: '100%' },
              },

            },
            plasma: {
              '0%, 100%': {
                boxShadow: '0 0 6px #0ff, 0 0 15px #0ff, 0 0 25px #0ff',
              },
              '50%': {
                boxShadow: '0 0 12px #0ff, 0 0 25px #0ff, 0 0 40px #0ff',
              },
            },
          },
        },
        fontFamily: {
          orbitron: ['Orbitron', 'sans-serif'],
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
    plugins: [
      function ({ addComponents }) {
        addComponents({
          '.card-scanner': {
            position: 'relative',
            overflow: 'hidden',
          },
          '.card-scanner::before': {
            content: '""',
            position: 'absolute',
            top: '-100%',
            left: '0',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(0,255,255,0.05), rgba(0,255,255,0.2), rgba(0,255,255,0.05))',
            transform: 'skewY(-8deg)',
            pointerEvents: 'none',
            opacity: '0.2',
            animation: 'scanner 3s linear infinite',
          },
        });
      }
    ],
  }
}

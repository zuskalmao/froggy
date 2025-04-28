/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'froggy-green': '#7ED957',
        'froggy-dark-green': '#48A14D',
        'froggy-tan': '#F5EFD7',
        'froggy-blue': '#A8D8E8',
        'froggy-dark-blue': '#5BAFCA',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'hop': 'hop 1.5s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        hop: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-30px) rotate(5deg)' },
        }
      }
    },
  },
  plugins: [],
  safelist: [
    'animate-bounce-slow',
    'animate-wiggle',
    'animate-float',
    'animate-hop'
  ]
}

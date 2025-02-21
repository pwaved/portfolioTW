module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      primary: '',
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        "wiggle": "wiggle 1s ease-in-out infinite",
      }
    },
  },
  variants: {
    
  },
  plugins: [require('tailwindcss-border-image'),require("tailwindcss-animate")],
  
}

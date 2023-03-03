/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'yellowTail': 'var(--yellowTail)',
        'jakartaSans': 'var(--jakartaSans)'
      },
      colors: {
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'text-blue': 'var(--text-blue)',
        'text-pink': 'var(--text-pink)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'bg-glass-primary': 'var(--bg-glass-primary)',
        'bg-glass-secondary': 'var(--bg-glass-secondary)',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        bounceArrow: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)', color: '#86E5FF'},
          '40%': { transform: 'translateY(-30px)',color: '#F472B6' },
          '60%': { transform: 'translateY(-15px)', color: '#86E5FF' }
        }
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
        'bounce-arrow': 'bounceArrow 2s infinite'
      },
    },
  },
  plugins: [],
}

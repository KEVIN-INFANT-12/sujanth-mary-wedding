/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          950: '#25020A',
          900: '#30030E', // Dark Wine
          800: '#4A0718', // Deep Burgundy
          700: '#641124',
          600: '#831C33',
        },
        gold: {
          100: '#FBF7ED',
          200: '#F3E7CE',
          300: '#E8D3A7',
          400: '#D7B77E',
          500: '#C5A46D', // Champagne Gold
          600: '#A9844B',
          700: '#8E6D38',
          800: '#684E25',
        },
        ivory: {
          50: '#FDFBF7',
          100: '#F8F3E9', // Warm Ivory
          200: '#F2E8D8',
          300: '#E7D8C0',
          400: '#D5BE9E',
        },
        sage: {
          100: '#F0F3ED',
          200: '#D9DFD1', // Pale Sage
          300: '#B8C4AC',
          500: '#7F9371',
          700: '#526348',
          900: '#34402E',
        },
        rose: {
          100: '#F7EDEE',
          200: '#E9D0D2',
          300: '#D8AEB1',
          400: '#C58F91', // Muted Rose
          600: '#A15E61',
        },
        darkBrown: '#4A352C',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['"Poppins"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'envelope': '0 25px 60px -15px rgba(20, 2, 6, 0.7), 0 0 40px rgba(197, 164, 109, 0.15)',
        'wax': '0 10px 25px rgba(20, 2, 6, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.3)',
        'card': '0 20px 45px -10px rgba(74, 53, 44, 0.12), 0 0 1px 1px rgba(197, 164, 109, 0.25)',
      },
      backgroundImage: {
        'gold-foil': 'linear-gradient(135deg, #ECCF9A 0%, #C5A46D 40%, #FFE9B8 60%, #A9844B 100%)',
        'burgundy-velvet': 'radial-gradient(ellipse at 50% 20%, #641124 0%, #4A0718 45%, #30030E 80%, #25020A 100%)',
        'ivory-paper': 'radial-gradient(circle at 50% 30%, #FDFBF7 0%, #F8F3E9 70%, #F1E5D3 100%)',
      },
      animation: {
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}

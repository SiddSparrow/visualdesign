// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        fontFamily: {
        'sans': ['Inter', 'sans-serif'], // Substitui fonte padrão
        'serif': ['Playfair Display', 'serif'],
        'syne': ['Syne', 'sans-serif'],
      },
        // Adicione opacidades para o preto
        black: {
          50: 'rgba(0, 0, 0, 0.5)',
          70: 'rgba(0, 0, 0, 0.7)',
        },
        // Ou para todas as cores
        transparent: 'transparent',
        current: 'currentColor',
      },
      backgroundImage: {
        // Ou crie gradientes customizados
        'gradient-overlay': 'linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 50%, transparent 100%)',
        'gradient-overlay-top': 'linear-gradient(to top, rgba(0, 0, 0, 0.3) 0%, transparent 100%)',
      }
    },
  },
  plugins: [],
}
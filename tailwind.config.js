/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        lora: ['Lora', 'serif']
      },
      colors: {
        coral: "#E91E63",
        charcoal: "#424242",
        ivory: "#FFFFF0"
      },
      keyframes: {
        'fade-slide-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-slide-up': 'fade-slide-up 0.8s ease-in-out',
      },
    },
  },
  plugins: [],
}

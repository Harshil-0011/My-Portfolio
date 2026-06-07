/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B2A4A',
          dark: '#0A0F1D',
          light: '#B0BDD0'
        },
        charcoal: '#4A4A4A',
        accent: {
          cobalt: '#3B82F6',
          coral: '#F43F5E',
          amber: '#F59E0B',
          emerald: '#10B981'
        }
      },
      zIndex: {
        '0': '0',
        '10': '10',
        '20': '20',
        '50': '50',
      }
    },
  },
  plugins: [],
}

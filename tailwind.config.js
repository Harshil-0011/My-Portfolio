/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#050505',
        'pure-white': '#FFFFFF',
        'safety-orange': '#FF3300',
      },
      fontFamily: {
        headline: ['"Inter Tight"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        body: ['Geist', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.05em',
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'quran-paper': '#fdfbf7',
        'quran-border': '#e5e1da',
        'quran-text': '#2c3e50',
      },
      fontFamily: {
        'arabic': ['Amiri', 'serif'],
      }
    },
  },
  plugins: [],
}

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'], // Elegant font for headings
        sans: ['Inter', 'sans-serif'],        // Clean font for body text
      },
      colors: {
        gold: '#D4AF37', // Custom accent color
        dark: '#1a1a1a'
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,ts,vue}'],
  theme: {
    fontFamily: {
      lora: ['Lora', 'serif'],
      'source-sans': ["'Source Sans 3'", 'sans-serif'],
    },
    extend: {
      colors: {
        darkStart: '#0d0d0d',
        darkEnd: '#121212',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: '3rem',
      },
      colors: {
        "dark-purple" : "#202121",
        "light-white" : 'rgba(255,255,255,0.18)'
      }
    },
  },
  plugins: [],  
}


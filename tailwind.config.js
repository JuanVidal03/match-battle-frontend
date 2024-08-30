/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#1e1e1e"
      } 
    },
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: false,
    darkTheme: false
  }
}
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
      },
      borderRadius: {
        "custom-border-radius": "30% 70% 67% 33% / 30% 39% 61% 70%",
      },
      fontFamily: {
        "nerko-one": ["Nerko One"]
      },
      boxShadow: {
        "button-shadow": "#c0392b 0px 7px 2px, #000 0px 8px 5px"
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
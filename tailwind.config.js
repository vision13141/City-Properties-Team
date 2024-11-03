/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#425CEC',
        title: "#292929",
        prh: "#6A6A6A"
      },
      fontFamily: {

        Nunito: ["Nunito Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}


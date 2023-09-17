/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width:{
        "105%":"105%",
        "106%":"106%",
      },
      height:{
        "7.5%":"7.5%",
        "15%":"15%",
        "78%":"78%",
      }
    },
  },
  plugins: [],
}


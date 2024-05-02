/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        custom: {
          green: "#0b9444",
          gray: "#F2F4F7",
          bgGray: "#F9FAFB",
          apricot: "#fdf7ed",
          purple: "#6941C6"
         },
      },
      width: {
       
      },
    },
  },
  plugins: [],
}

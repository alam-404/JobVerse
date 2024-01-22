/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-1': '#1A1919',
        'dark-2': '#474747',
        'dark-3': '#757575',
        'dark-4': '#A3A3A3',
        'dark-5': '#D1D1D1',
        'dark-6': '#E8E8E8',
        'dark-7': '#F4F4F4',
        'grad-l': '#7E90FE',
        'grad-r': '#9873FF'
      }
    },
  },
  plugins: [],
}


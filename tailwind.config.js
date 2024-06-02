<<<<<<< HEAD
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'opensource-green': '#0DFF1C',
=======
module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      screens: {
        'sm': '600px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
>>>>>>> c3bafaf (created landing page using react framework)
      },
    },
  },
  plugins: [],
}
<<<<<<< HEAD
=======

>>>>>>> c3bafaf (created landing page using react framework)

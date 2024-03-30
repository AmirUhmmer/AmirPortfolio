/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html',"./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    fontFamily: {
        mons: ['Montserrat'],
      }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


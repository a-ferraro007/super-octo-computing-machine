/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      cinzel: ['Cinzel']
    },
    extend: {
      backgroundImage: {
        wall: "url('/wall.svg')"
      },
      boxShadow: {
        green: '0 0 0 5px red'
      },
      width: {
        container: 'calc(100vw - 160px)'
      },
      screens: {
        xs: '600px'
      }
    }
  },
  plugins: []
}

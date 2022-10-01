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
      height: {
        abovePlatform: 'calc(100vh - 150px)'
      }
    }
  },
  plugins: []
}

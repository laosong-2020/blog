import colors from 'tailwindcss/colors'
import typography from '@tailwindcss/typography'

export default {
  darkMode: 'class',
  plugins: [
    typography(),
    require('daisyui')
  ],

  daisyui: {
    themes: [
      "light", "dark", "dracula"],
    darkTheme: 'dracula',
    base: true,
    styled: true,
    utils: true,
    rtl: false,
    prefix: "",
    logs: true,
  }
}
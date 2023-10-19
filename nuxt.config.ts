// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@nuxthq/studio'
  ],
  // https://color-mode.nuxtjs.org
  colorMode: {
    preference: 'dark', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },
  // https://content.nuxtjs.org
  content: {
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'material-theme-palenight',
      }
      ,
      preload: ['java'] },
    markdown: {
      toc: {
        depth: 5, searchDepth: 5
      },
      anchorLinks: false,
    },
  }
})
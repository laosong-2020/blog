// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@nuxthq/studio',
    '@nuxt/image-edge'
  ],
  // https://color-mode.nuxtjs.org
  colorMode: {
    preference: 'dark', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },
  image: {
    provider: 'netlify',
    dir: 'assets',
  },
  // https://content.nuxtjs.org
  content: {
    highlight: {
      theme: {
        default: 'github-light',
        light: 'github-light',
        dark: 'github-dark',
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
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@nuxthq/studio',
    '@nuxt/image',
    '@nuxtjs/sitemap',
  ],
  // https://color-mode.nuxtjs.org
  colorMode: {
    preference: 'dark', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },
  image: {
    provider: 'ipx',
  },
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: 'Zhenlei Song' },
        { name: 'keywords', content: 'blog, technology, programming, GIS, engineering' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css' },
      ],
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: tag => {
        const arrTags = ['semantics', 'mrow', 'msup', 'mi', 'math']
        return arrTags.includes(tag.toLowerCase())
      },
    },
  },
  // https://content.nuxtjs.org
  content: {
    highlight: {
      theme: 'dracula',
      preload: [
        'java',
        'c',
        'cpp',
        'vue',
        'html',
        'css',
        'python',
        'ts',
        'js',
        'md',
        'json',
        'xml',
        'yaml',
        'yml',
      ],
    },
    markdown: {
      toc: {
        depth: 5,
        searchDepth: 5,
      },
      anchorLinks: false,
      remarkPlugins: ['remark-math'],
      rehypePlugins: ['rehype-katex'],
    },
  },
  // SEO Configuration
  site: {
    url: 'https://szl-blog.netlify.app',
    name: "Zhenlei Song's Blog",
  },
  sitemap: {
    sources: ['/api/__sitemap__/urls'],
  },
})

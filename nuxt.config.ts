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
  },
  app: {
    head: {
      link: [{
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css'
      }]
    }
  },
  vue: {
    compilerOptions: {
      isCustomElement: tag => {
        const arrTags = ['semantics', 'mrow', 'msup', 'mi', 'math']
        const answ = arrTags.indexOf(tag.toLowerCase()) !== -1
        console.log(tag+' :: '+ answ)
        return answ
      }
    }
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
      ] 
    },
    markdown: {
      toc: {
        depth: 5, searchDepth: 5
      },
      anchorLinks: false,
      remarkPlugins: [
        'remark-math'
      ],
      rehypePlugins: [
        'rehype-katex'
      ]
    },
  }
})
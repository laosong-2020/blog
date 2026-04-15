// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/image",
  ],
  css: ["katex/dist/katex.min.css"],
  // https://color-mode.nuxtjs.org
  colorMode: {
    preference: "dark",
    fallback: "dark",
    dataValue: "theme", // activate data-theme in <html> tag
    classSuffix: "",
  },
  image: {
    provider: "ipx",
    dir: "public",
  },
  app: {
    head: {
      titleTemplate: "%s | Zhenlei Song",
      meta: [
        {
          name: "description",
          content:
            "Personal blog and portfolio of Zhenlei Song — PhD student in GIS & Navigation.",
        },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Zhenlei Song" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => {
        const mathmlElements = new Set([
          "math",
          "semantics",
          "annotation",
          "annotation-xml",
          "mrow",
          "mi",
          "mn",
          "mo",
          "ms",
          "mtext",
          "mspace",
          "msup",
          "msub",
          "msubsup",
          "mover",
          "munder",
          "munderover",
          "mfrac",
          "mroot",
          "msqrt",
          "mpadded",
          "mphantom",
          "mtable",
          "mtr",
          "mtd",
          "mlabeledtr",
          "merror",
          "menclose",
          "mstyle",
          "mglyph",
          "mmultiscripts",
          "mprescripts",
          "none",
        ]);
        return mathmlElements.has(tag.toLowerCase());
      },
    },
  },
  // https://content.nuxtjs.org
  content: {
    highlight: {
      theme: "dracula",
      preload: [
        "python",
        "typescript",
        "javascript",
        "bash",
        "vue",
        "markdown",
        "json",
        "yaml",
      ],
    },
    markdown: {
      toc: {
        depth: 5,
        searchDepth: 5,
      },
      anchorLinks: false,
      remarkPlugins: ["remark-math"],
      rehypePlugins: [["rehype-katex", { output: "html", strict: "ignore" }]],
    },
  },
});

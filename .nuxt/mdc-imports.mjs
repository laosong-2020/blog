import _RemarkEmoji from 'remark-emoji'
import _RemarkMath from 'remark-math'
import _RehypeKatex from 'rehype-katex'
import _Highlight from '/Users/szl/Desktop/26Spring/blog/node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/highlighter/rehype-nuxt.js'

export const remarkPlugins = {
  'remark-emoji': { instance: _RemarkEmoji },
  'remark-math': { instance: _RemarkMath },
}

export const rehypePlugins = {
  'rehype-katex': { instance: _RehypeKatex, options: {"output":"html","strict":"ignore"} },
  'highlight': { instance: _Highlight, options: {} },
}

export const highlight = {"theme":"dracula"}
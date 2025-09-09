import { serverQueryContent } from '#content/server'

export default defineEventHandler(async event => {
  const docs = await serverQueryContent(event).find()

  return docs
    .filter(doc => doc._path?.startsWith('/blogs/'))
    .map(doc => ({
      loc: doc._path,
      lastmod: doc.updatedAt || doc.createdAt || new Date(),
      changefreq: 'monthly',
      priority: 0.8,
    }))
})

import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'

const SITE_URL = 'https://your-domain.netlify.app'

export default defineEventHandler(async (event) => {
  const docs = await serverQueryContent(event, 'blogs').find()
  const sitemap = new SitemapStream({ hostname: SITE_URL })

  sitemap.write({ url: '/', changefreq: 'monthly' })
  sitemap.write({ url: '/blogs', changefreq: 'weekly' })

  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: 'monthly',
      lastmod: doc.date,
    })
  }

  sitemap.end()

  const buffer = await streamToPromise(sitemap)
  setHeader(event, 'Content-Type', 'application/xml')
  return buffer.toString()
})

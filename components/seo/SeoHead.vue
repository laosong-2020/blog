<template>
  <div>
    <!-- This component handles dynamic SEO meta tags -->
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  description: '',
  image: '',
  url: '',
  type: 'website',
})

const appConfig = useAppConfig()
const route = useRoute()

const siteUrl = 'https://szl-blog.netlify.app'
const defaultImage = `${siteUrl}/logos/profile.jpg`

const seoTitle = computed(() =>
  props.title ? `${props.title} | ${appConfig.seo.siteName}` : appConfig.seo.siteName
)

const seoDescription = computed(() => props.description || appConfig.seo.description)

const seoImage = computed(() => (props.image ? `${siteUrl}${props.image}` : defaultImage))

const seoUrl = computed(() => (props.url ? `${siteUrl}${props.url}` : `${siteUrl}${route.path}`))

// Set dynamic meta tags
useHead({
  title: seoTitle.value,
  meta: [
    { name: 'description', content: seoDescription.value },
    // Open Graph
    { property: 'og:site_name', content: appConfig.seo.siteName },
    { property: 'og:type', content: props.type },
    { property: 'og:title', content: seoTitle.value },
    { property: 'og:description', content: seoDescription.value },
    { property: 'og:image', content: seoImage.value },
    { property: 'og:url', content: seoUrl.value },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: appConfig.seo.twitterHandle },
    { name: 'twitter:title', content: seoTitle.value },
    { name: 'twitter:description', content: seoDescription.value },
    { name: 'twitter:image', content: seoImage.value },
  ],
})
</script>

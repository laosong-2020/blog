<script lang="ts" setup>
import BlogList from '~/components/blogs/BlogList.vue'

const route = useRoute()
const router = useRouter()
</script>
<template>
  <section>
    <BlogList />
  </section>
</template>
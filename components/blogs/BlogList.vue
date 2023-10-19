<script setup lang="ts">
import BlogCard from '../blogs/BlogCard.vue';
import { BlogList } from '~/types/blogs';
</script>
<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-0 md:py-4 md:p-0">
    <ContentList path="/blog" v-slot="{ list }">
      <BlogCard v-for="article in list" :key="article._path" :blog="article" />
    </ContentList>
  </div>
</template>
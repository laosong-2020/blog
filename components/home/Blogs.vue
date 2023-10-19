<script setup lang="ts">
import BlogCard from '../blogs/BlogCard.vue';
import { Icon } from '@iconify/vue';
</script>

<template>
  <section>
    <div
      class="flex items-center animate__animated mb-1"
      data-animate="animate__fadeInUp"
    >
      <h2 class="text-3xl font-black capitalize ">
        111
      </h2>
      <div class="mx-auto" />
      <NuxtLink to='/blogs'>
        <button
          class="btn btn-primary btn-ghost btn-sm"
          type="button"
        >
          222
          <Icon
            class="text-xl"
            icon="material-symbols:arrow-forward"
          />
        </button>
      </NuxtLink>
    </div>
    <p class="text-gray-800 dark:text-gray-300">
      333
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-8 lg:gap-4 p-0 md:py-4 md:p-0">
      <BlogCard/>
      <BlogCard/>
    </div>
  </section>
</template>
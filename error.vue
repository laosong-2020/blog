<script setup lang="ts">
const error = useError()
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center gap-4">
    <h1 class="text-8xl font-bold text-primary">{{ error?.statusCode }}</h1>
    <p class="text-xl text-gray-600 dark:text-gray-300">
      {{ error?.statusCode === 404 ? 'Page not found' : 'Something went wrong' }}
    </p>
    <NuxtLink to="/" class="btn btn-primary mt-4">Go Home</NuxtLink>
  </div>
</template>

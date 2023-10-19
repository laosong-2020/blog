<template>
  <div mt-12 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12>
    <ContentList path="/blog" v-slot="{ list }">
      <div 
        v-for="article in list" 
        :key="article._path" 
        class="flex flex-col justify-between rounded-lg border border-gray-300 dark:border-gray-700 p-4"
      >
        <NuxtLink :to="article._path" >
          <p class="text-xl text-gray-800 dark:text-gray-200">{{ article.title }}</p>
          <p class="text-lg text-gray-700 dark:text-gray-100">{{ article.description }}</p>
        </NuxtLink>
      </div>
    </ContentList>
  </div>
</template>
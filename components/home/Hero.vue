<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie';
const route = useRoute();
const router = useRouter();
</script>
<template>
  <section>
    <div class="hero min-h-screen bg-transparent">
      <div class="hero-content space-x-8 lg:flex-row flex-col ">
        <!--
          <img src="~/assets/hero-avatar.jpg" class="max-w-sm rounded-lg shadow-2xl" />
        -->
        <ClientOnly>
          <Vue3Lottie
            animationLink="https://lottie.host/3c06fb22-0ff0-459f-915e-3a82bc036284/Kvv56xo0to.json"
            :scale=1.5
          />
        </ClientOnly>
        <div>
          <h1 class="text-5xl font-bold text-gray-800 dark:text-gray-200">Hi all, I'm Zhenlei!</h1>
          <p class="py-6">A Ph.D candidate in GIScience, A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with Django, Vue, React and some other cool libraries and frameworks.</p>
          <NuxtLink to='/contact'>
            <button class="btn btn-primary mt-4 text-white">
              Contact Me
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

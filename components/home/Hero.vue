<template>
  <section>
    <div class="hero min-h-screen bg-transparent">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src="~/assets/hero-avatar.jpg" class="max-w-sm rounded-lg shadow-2xl" />
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

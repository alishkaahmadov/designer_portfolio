<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const videoRef = ref(null)

const videoSource = computed(() => {
  switch (route.path) {
    case '/':
      return '/videos/home_bg.mp4'
    case '/about':
      return '/videos/about_bg.mp4'
    case '/portfolio':
      return '/videos/portfolio_bg.mp4'
    default:
      return '/videos/default_bg.mp4'
  }
})

watch(videoSource, (newSrc) => {
  if (videoRef.value) {
    videoRef.value.src = newSrc
    videoRef.value.load()
    videoRef.value.play().catch(() => {})
  }
})
</script>

<template>
  <div class="relative w-screen h-dvh overflow-hidden">

    <!-- Global Background Video -->
    <video class="absolute inset-0 w-full h-full object-cover" autoplay muted playsinline webkit-playsinline preload="auto">
        <!-- Mobile -->
        <source src="/videos/home_bg_mobile.mp4" type="video/mp4" media="(max-width: 768px)" />

        <!-- Desktop -->
        <source src="/videos/home_bg.mp4" type="video/mp4" media="(min-width: 769px)" />
    </video>

    <!-- Page Content -->
    <div class="relative z-10 h-full">
      <slot />
    </div>

  </div>
</template>

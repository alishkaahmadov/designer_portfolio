<template>
    <div class="relative h-screen w-screen overflow-hidden about-container">
        <!-- Background Video -->
        <video
            ref="videoRef"
            poster="/images/about_poster.jpg"
            :src="videoSrc"
            class="absolute inset-0 h-full w-full object-cover about-bg"
            autoplay
            muted
            playsinline
        >
            <!-- <source
                src="/videos/about_bg_mobile_2.mp4"
                type="video/mp4"
                media="(max-width: 440px)"
            /> -->
            <!-- <source
                src="/videos/about_bg_mobile.mp4"
                type="video/mp4"
                media="(max-width: 690px)"
            /> -->

            <!-- Desktop -->
            <!-- <source
                src="/videos/about_bg.mp4"
                type="video/mp4"
                media="(min-width: 691px)"
            /> -->
            Your browser does not support the video tag.
        </video>

        <!-- Navigation -->
        <div class="absolute left-4 md:left-10 top-10 z-10 flex items-center justify-center">
            <NuxtLink to="/" class="flex items-center gap-2 relative">
                <span
                    class="w-3 h-3 rounded-full bg-[#002DC1] z-20 relative shrink-0"
                ></span>
                <span class="overflow-hidden relative">
                    <span
                        class="block montserrat-light-italic text-[#002DC1] text-lg md:text-2xl animate-slide-right z-10">
                        home
                    </span>
                </span>
            </NuxtLink>
        </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const videoSrc = ref('/videos/about_bg_mobile.mp4')
const videoRef = ref(null)

onMounted(() => {
  if (window.innerWidth <= 690) {
    videoSrc.value = '/videos/about_bg_mobile.mp4'
  }else{
    videoSrc.value = '/videos/about_bg.mp4'
  }

  const video = videoRef.value
  if (!video) return

  // Explicit play with retry for low-end devices where autoplay fails
  const tryPlay = () => {
    video.play().catch(() => {
      // Retry once after a short delay
      setTimeout(() => video.play().catch(() => {}), 500)
    })
  }

  if (video.readyState >= 3) {
    tryPlay()
  } else {
    video.addEventListener('canplay', tryPlay, { once: true })
  }
})
</script>
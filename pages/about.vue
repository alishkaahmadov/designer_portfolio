<template>
    <div class="relative h-screen w-screen overflow-hidden">
        <!-- Background Video -->
        <video
            :src="videoSrc"
            class="absolute inset-0 h-full w-full object-cover about-bg"
            autoplay
            muted
            playsinline
            preload="auto"
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

const videoSrc = ref('')

onMounted(() => {
  if (window.innerWidth <= 690) {
    videoSrc.value = '/videos/about_bg_mobile.mp4'
  }else{
    videoSrc.value = '/videos/about_bg.mp4'
  }
})
</script>
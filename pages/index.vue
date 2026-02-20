<template>
    <div class="relative w-screen min-h-screen overflow-hidden home-container">
        <!-- Background Video -->
        <video ref="videoRef" :src="videoSrc" poster="/images/home_poster.jpg"
            class="absolute inset-0 w-full h-full object-cover" autoplay muted playsinline>
            <!-- Mobile -->
            <!-- <source src="/videos/home_bg_mobile.mp4" type="video/mp4" media="(max-width: 768px)" /> -->

            <!-- Desktop -->
            <!-- <source src="/videos/home_bg.mp4" type="video/mp4" media="(min-width: 769px)" /> -->
        </video>

        <!-- Overlay Content Layer -->
        <div class="absolute inset-0 flex flex-col justify-between z-10">

            <!-- Top Navigation -->
            <div class="pt-10 pl-4 md:pl-10">
                <NuxtLink to="/about" class="flex items-center gap-2 relative">
                    <span class="w-3 h-3 rounded-full bg-[#002DC1] shrink-0"></span>

                    <span class="overflow-hidden relative">
                        <span
                            class="block montserrat-light-italic text-[#002DC1] text-lg md:text-2xl animate-slide-right">
                            about me
                        </span>
                    </span>
                </NuxtLink>
            </div>

            <!-- Bottom Button -->
            <div :class="['flex justify-center pb-[20vh] sm:pb-[13vh] transition-opacity duration-500',
                isVideoReady ? 'opacity-100 animate-slide-up' : 'opacity-0']">
                <NuxtLink to="/portfolio"
                    class="home-button montserrat-black bg-white/15 backdrop-blur-[15px] relative px-6 py-2 text-[#001C76] text-2xl rounded-2xl overflow-hidden border-2 border-[#A1F1FF] border-t-0 border-b-0">
                    PORTFOLIO

                    <!-- Top border -->
                    <span class="absolute top-0 left-[5%] right-[5%] h-0.5
                        bg-[linear-gradient(90deg,rgba(255,255,255,0.2),white,rgba(255,255,255,0.2))]
                        shadow-[0_0_6px_rgba(255,255,255,0.6),0_0_12px_rgba(255,255,255,0.4)]">
                    </span>
                    <span class="absolute top-0 left-[0%] right-[80%] h-0.5
                    bg-[linear-gradient(180deg,rgba(161,241,255,0.2),#A1F1FF,rgba(161,241,255,0.2))]
                    shadow-[0_0_6px_rgba(161,241,255,0.6),0_0_12px_rgba(161,241,255,0.4)]">
                    </span>
                    <span class="absolute top-0 right-[0%] left-[80%] h-0.5
                    bg-[linear-gradient(180deg,rgba(161,241,255,0.2),#A1F1FF,rgba(161,241,255,0.2))]
                    shadow-[0_0_6px_rgba(161,241,255,0.6),0_0_12px_rgba(161,241,255,0.4)]">
                    </span>
                    <!-- Bottom border -->
                    <span class="absolute bottom-0 left-[5%] right-[5%] h-0.5
                        bg-[linear-gradient(90deg,rgba(255,255,255,0.2),white,rgba(255,255,255,0.2))]
                        shadow-[0_0_6px_rgba(255,255,255,0.6),0_0_12px_rgba(255,255,255,0.4)]">
                    </span>
                    <span class="absolute bottom-0 left-[0%] right-[80%] h-0.5
                    bg-[linear-gradient(180deg,rgba(161,241,255,0.2),#A1F1FF,rgba(161,241,255,0.2))]
                    shadow-[0_0_6px_rgba(161,241,255,0.6),0_0_12px_rgba(161,241,255,0.4)]">
                    </span>
                    <span class="absolute bottom-0 right-[0%] left-[80%] h-0.5
                    bg-[linear-gradient(180deg,rgba(161,241,255,0.2),#A1F1FF,rgba(161,241,255,0.2))]
                    shadow-[0_0_6px_rgba(161,241,255,0.6),0_0_12px_rgba(161,241,255,0.4)]">
                    </span>
                    <!-- Left border -->
                    <span class="absolute left-0 top-[10%] bottom-[10%] w-0
                        bg-[linear-gradient(180deg,rgba(161,241,255,0.2),#A1F1FF,rgba(161,241,255,0.2))]
                        shadow-[0_0_6px_rgba(161,241,255,0.6),0_0_12px_rgba(161,241,255,0.4)]">
                    </span>
                    <!-- Right border -->
                    <span class="absolute right-0 top-[10%] bottom-[10%] w-0
                        bg-[linear-gradient(180deg,rgba(161,241,255,0.2),#A1F1FF,rgba(161,241,255,0.2))]
                        shadow-[0_0_6px_rgba(161,241,255,0.6),0_0_12px_rgba(161,241,255,0.4)]">
                    </span>
                </NuxtLink>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const videoSrc = ref('/videos/home_bg_mobile.mp4')
const videoRef = ref(null)
const isVideoReady = ref(false)

onMounted(() => {
    if (window.innerWidth <= 768) {
        videoSrc.value = '/videos/home_bg_mobile.mp4'
    }else{
        videoSrc.value = '/videos/home_bg.mp4'
    }
    const video = videoRef.value
    if (!video) return

  const handlePlaying = () => {
    isVideoReady.value = true
  }

  video.addEventListener('playing', handlePlaying)

  // Explicit play with retry for low-end devices where autoplay fails
  const tryPlay = () => {
    video.play().catch(() => {
      // Retry once after a short delay
      setTimeout(() => video.play().catch(() => {}), 500)
    })
  }

  if (video.readyState >= 3) {
    isVideoReady.value = true
    tryPlay()
  } else {
    video.addEventListener('canplay', tryPlay, { once: true })
  }
})
</script>
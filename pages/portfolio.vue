<template>
    <div class="relative min-h-screen w-screen overflow-hidden">
        <!-- Background Video -->
        <video ref="videoRef" :src="videoSrc"
            class="absolute inset-0 h-full w-full object-cover" autoplay muted playsinline>
            <!-- Mobile -->
            <!-- <source src="/videos/portfolio_bg_mobile.mp4" type="video/mp4" media="(max-width: 768px)" /> -->

            <!-- Desktop -->
            <!-- <source src="/videos/portfolio_bg.mp4" type="video/mp4" media="(min-width: 769px)" /> -->
            Your browser does not support the video tag.
        </video>

        <!-- Navigation -->
        <div class="absolute left-4 md:left-10 top-10 z-10 flex flex-col gap-1">
            <NuxtLink to="/" class="flex items-center gap-2 relative">
                <!-- Dot -->
                <span class="w-3 h-3 rounded-full bg-[#002DC1] z-20 relative shrink-0"></span>

                <!-- Text mask wrapper -->
                <span class="overflow-hidden relative">
                    <span
                        class="block montserrat-light-italic text-[#002DC1] text-lg md:text-2xl animate-slide-right z-10 leading-none">
                        home
                    </span>
                </span>
            </NuxtLink>
            <NuxtLink to="/about" class="flex items-center gap-2 relative">
                <!-- Dot -->
                <span class="w-3 h-3 rounded-full bg-[#002DC1] z-20 relative shrink-0"></span>

                <!-- Text mask wrapper -->
                <span class="overflow-hidden relative">
                    <span
                        class="block montserrat-light-italic text-[#002DC1] text-lg md:text-2xl animate-slide-right z-10 leading-none">
                        about me
                    </span>
                </span>
            </NuxtLink>
        </div>


        <Swiper :modules="[Navigation]" :navigation="false" @swiper="onSwiper" class="animate-slide-up absolute! left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full h-[65vh]">
            <SwiperSlide v-for="(project, i) in projects" :key="i">
                <!-- ENTIRE CONTAINER IS NOW SLIDE -->
                <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                    w-[83%] sm:w-[90%] lg:w-[80%] xl:w-[65%] 2xl:w-[50%]
                    md:h-[65vh] 
                    max-w-6xl">
                    
                    <div class="custom-swiper relative w-full h-full flex flex-col md:flex-row items-center justify-between
                      bg-white/15 backdrop-blur-[15px] rounded-2xl overflow-hidden px-6 py-6 xl:px-16 xl:py-12 min-h-[63vh]">
                        <span
                            class="pointer-events-none absolute inset-0 rounded-2xl
                                border border-white">
                        </span>
                        <!-- Top border -->
                        <span
                            class="absolute top-0 left-[0%] right-[65%] h-0.5
                                bg-[linear-gradient(90deg,rgba(255,255,255,0.8),rgba(255,255,255,0.6))]
                                shadow-[0_0_6px_rgba(255,255,255,1),0_0_12px_rgba(255,255,255,1)]">
                        </span>
                        <span
                            class="absolute top-0 left-[35%] right-[0%] h-0.5
                            bg-[linear-gradient(90deg,rgba(161,241,255,0.8),rgba(161,241,255,0.6))]
                            shadow-[0_0_6px_rgba(161,241,255,1),0_0_12px_rgba(161,241,255,1)]">
                        </span>
                        <!-- Bottom border -->
                        <span
                            class="absolute bottom-0 left-[0%] right-[65%] h-0.5
                            bg-[linear-gradient(270deg,rgba(161,241,255,0.8),rgba(161,241,255,0.6))]
                            shadow-[0_0_6px_rgba(161,241,255,1),0_0_12px_rgba(161,241,255,1)]">
                        </span>
                        <span
                            class="absolute bottom-0 left-[35%] right-[0%] h-0.5
                                bg-[linear-gradient(270deg,rgba(255,255,255,0.8),rgba(255,255,255,0.6))]
                                shadow-[0_0_6px_rgba(255,255,255,1),0_0_12px_rgba(255,255,255,1)]">
                        </span>
                        <!-- Left border -->
                        <span
                            class="absolute left-0 top-[0%] bottom-[50%] w-0.5
                                bg-[linear-gradient(360deg,rgba(255,255,255,0.8),rgba(255,255,255,0.6))]
                                shadow-[0_0_6px_rgba(255,255,255,1),0_0_12px_rgba(255,255,255,1)]">
                        </span>
                        <span
                            class="absolute left-0 top-[50%] bottom-[0%] w-0.5
                                bg-[linear-gradient(360deg,rgba(161,241,255,0.8),rgba(161,241,255,0.6))]
                                shadow-[0_0_6px_rgba(161,241,255,1),0_0_12px_rgba(161,241,255,1)]">
                        </span>
                            <!-- Right border -->
                        <span
                            class="absolute right-0 top-[0%] bottom-[50%] w-0.5
                                bg-[linear-gradient(180deg,rgba(161,241,255,0.8),rgba(161,241,255,0.6))]
                                shadow-[0_0_6px_rgba(161,241,255,1),0_0_12px_rgba(161,241,255,1)]">
                        </span>
                        <span
                            class="absolute right-0 top-[50%] bottom-[0%] w-0.5
                                bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0.6))]
                                shadow-[0_0_6px_rgba(255,255,255,1),0_0_12px_rgba(255,255,255,1)]">
                        </span>
                        <div class="flex flex-col grow justify-between w-full md:w-1/2 md:h-full">
                            <h1 class="text-3xl sm:text-4xl md:text-5xl text-white montserrat-black leading-tight md:leading-13.5">
                                {{ project.title.split(' ')[0] }}
                                <span class="montserrat-light-italic block">{{ project.title.split(' ').slice(1).join(' ') }}</span>
                            </h1>
                            <button class="relative px-6 py-2 md:px-10 md:py-3 border-[#a1f1ff4b] border cursor-pointer w-fit rounded-2xl my-6 md:my-0" @click="playVideoFullscreen(i)">
                                <img src="/images/play.png" alt="play" class="w-5 md:w-6">
                                <span
                                    class="absolute top-0 left-[10%] right-[10%] h-0.5
                                        bg-[linear-gradient(90deg,rgba(255,255,255,0.2),white,rgba(255,255,255,0.2))]
                                        shadow-[0_0_6px_rgba(255,255,255,0.6),0_0_12px_rgba(255,255,255,0.4)]">
                                </span>
                                <span
                                    class="absolute bottom-0 left-[10%] right-[10%] h-0.5
                                        bg-[linear-gradient(90deg,rgba(255,255,255,0.2),white,rgba(255,255,255,0.2))]
                                        shadow-[0_0_6px_rgba(255,255,255,0.6),0_0_12px_rgba(255,255,255,0.4)]">
                                </span>
                            </button>
                        </div>
                        <div class="w-full md:w-2/5 sm:max-h-[280px] md:h-full md:max-h-full">
                            <video ref="projectVideos" autoplay muted playsinline loop class="w-full h-full object-cover rounded-xl">
                                <source :src="project.video" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>

            </SwiperSlide>
        </Swiper>
        <button ref="prevEl" class="nav-btn prev" v-show="!isBeginning">
            <img src="/images/arrow.png" alt="arrow" class="w-4 rotate-180">
            <!-- Top border -->
            <span
                class="absolute top-0 left-[10%] right-[10%] h-0.5
                    bg-[linear-gradient(90deg,rgba(255,255,255,0.2),white,rgba(255,255,255,0.2))]
                    shadow-[0_0_6px_rgba(255,255,255,0.6),0_0_12px_rgba(255,255,255,0.4)]">
            </span>
            <!-- Bottom border -->
            <span
                class="absolute bottom-0 left-[10%] right-[10%] h-0.5
                    bg-[linear-gradient(90deg,rgba(255,255,255,0.2),white,rgba(255,255,255,0.2))]
                    shadow-[0_0_6px_rgba(255,255,255,0.6),0_0_12px_rgba(255,255,255,0.4)]">
            </span>
        </button>
        <button ref="nextEl" class="nav-btn next" v-show="!isEnd">
            <img src="/images/arrow.png" alt="arrow" class="w-4">
            <!-- Top border -->
            <span
                class="absolute top-0 left-[10%] right-[10%] h-0.5
                    bg-[linear-gradient(90deg,rgba(255,255,255,0.2),white,rgba(255,255,255,0.2))]
                    shadow-[0_0_6px_rgba(255,255,255,0.6),0_0_12px_rgba(255,255,255,0.4)]">
            </span>
            <!-- Bottom border -->
            <span
                class="absolute bottom-0 left-[10%] right-[10%] h-0.5
                    bg-[linear-gradient(90deg,rgba(255,255,255,0.2),white,rgba(255,255,255,0.2))]
                    shadow-[0_0_6px_rgba(255,255,255,0.6),0_0_12px_rgba(255,255,255,0.4)]">
            </span>
        </button>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

const videoSrc = ref('')
const videoRef = ref(null)
const isVideoReady = ref(false)

const prevEl = ref(null)
const nextEl = ref(null)
const swiperInstance = ref(null)
const isBeginning = ref(true)
const isEnd = ref(false)

const onSwiper = (swiper) => {
  swiperInstance.value = swiper

  swiper.params.navigation.prevEl = prevEl.value
  swiper.params.navigation.nextEl = nextEl.value

  swiper.navigation.init()
  swiper.navigation.update()

  isBeginning.value = swiper.isBeginning
  isEnd.value = swiper.isEnd

  swiper.on('slideChange', () => {
    isBeginning.value = swiper.isBeginning
    isEnd.value = swiper.isEnd
    // Stop previous one
    const previousVideo = projectVideos.value[swiper.previousIndex]
    if (!previousVideo) return
    
    previousVideo.pause()
    previousVideo.currentTime = 0
    
    // Start new one
    const nextVideo = projectVideos.value[swiper.activeIndex]
    if (!nextVideo) return
    
    nextVideo.pause()
    nextVideo.currentTime = 0
    nextVideo.play();
  })
}

const projects = [
    {
        title: 'Rolex Daytona Paul Newman Commercial',
        video: '/videos/portfolio_1.mp4'
    },
    {
        title: 'Newman Daytona Rolex Paul Commercial',
        video: '/videos/portfolio_bg.mp4'
    },
    {
        title: 'Paul Commercial Rolex Paul Newman',
        video: '/videos/about_bg.mp4'
    }
]

onMounted(() => {
    if (window.innerWidth <= 768) {
        videoSrc.value = '/videos/portfolio_bg_mobile.mp4'
    }else{
        videoSrc.value = '/videos/portfolio_bg.mp4'
    }
    const video = videoRef.value
    if (!video) return

    const handlePlaying = () => {
        isVideoReady.value = true
    }

    video.addEventListener('playing', handlePlaying)

    if (!video.paused) {
        isVideoReady.value = true
    }
})
const projectVideos = ref([])
const playVideoFullscreen = async (index) => {
    const video = projectVideos.value[index]
    if (!video) return

    video.currentTime = 0
    video.muted = false
    video.volume = 1

    const handlePause = async () => {
        const isDesktopFullscreen = document.fullscreenElement
        const isIOSFullscreen = video.webkitDisplayingFullscreen

        // Əgər hələ də fullscreen-dəyiksə → ignore
        if (isDesktopFullscreen || isIOSFullscreen) return

        // Real exit
        video.muted = true

        try {
            await video.play()
        } catch (e) {
            console.log('Resume blocked:', e)
        }

        video.removeEventListener('pause', handlePause)
    }

    video.addEventListener('pause', handlePause)

    // iOS Native Fullscreen
    if (video.webkitEnterFullscreen) {
        video.play()
        video.webkitEnterFullscreen()
        return
    }

    // Android/Desktop
    if (video.requestFullscreen) {
        await video.requestFullscreen()
        await video.play()

        const handleExit = async () => {
            if (!document.fullscreenElement) {
                video.muted = true
                await video.play()
                document.removeEventListener('fullscreenchange', handleExit)
            }
        }

        document.addEventListener('fullscreenchange', handleExit)
    }
}
</script>


<style scoped>
.nav-btn {
  position: absolute;
  z-index: 200;
  padding: 12px 32px;
  border: 1px solid #a1f1ff4b;
  cursor: pointer;
  border-radius: 16px;
  background-color: rgba(111, 111, 111, 0.1);
}

.prev {
  left: 50%;
  transform: translateX(-50%);
  bottom: 2%;
}

.next {
  left: 50%;
  transform: translateX(-50%);
  bottom: calc(2% + 50px);
}

@media (min-width: 768px) {
  .nav-btn {
    bottom: 10%;
    padding: 12px 60px;
  }

  .prev {
    left: 10%;
    transform: none;
  }

  .next {
    right: 10%;
    left: unset;
    transform: none;
  }
}
</style>
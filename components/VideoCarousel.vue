<template>
    <div class="carousel-wrapper">
        <!-- Custom buttons -->
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
        <div class="flex flex-col md:flex-row items-center justify-between h-full px-2 py-3 sm:px-3 sm:py-5 md:px-6 md:py-8 2xl:px-12 2xl:py-16">
            <div class="flex flex-col justify-between w-full md:w-1/2 h-auto md:h-full min-h-[200px] sm:min-h-[220px] md:min-h-0 gap-6">
                <h1 class="text-4xl md:text-5xl text-white montserrat-black leading-10.5 md:leading-13.5">
                    {{ videoTitles[activeIndex].split(' ')[0] }}
                    <span class="montserrat-light-italic block">{{ videoTitles[activeIndex].split(' ').slice(1).join(' ') }}</span>
                </h1>
                <button class="relative px-10 py-3 border-[#a1f1ff4b] border cursor-pointer w-fit rounded-2xl" @click="playActiveVideoFullscreen">
                    <img src="/images/play.png" alt="play" class="w-6">
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
            <Swiper :modules="[Navigation]" :navigation="false" @swiper="onSwiper" @slideChange="onSlideChange" class="swiper swiper-custom w-full md:w-2/5 h-[200px] sm:h-[300px] md:h-full">
                <SwiperSlide v-for="(video, i) in videos" :key="i">
                    <video ref="videoRefs" autoplay muted playsinline loop preload="metadata" class="video">
                        <source :src="video" type="video/mp4" />
                    </video>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

import 'swiper/css'

const base = useRuntimeConfig().app.baseURL
const prevEl = ref(null)
const nextEl = ref(null)
const swiperInstance = ref(null)
const isBeginning = ref(true)
const isEnd = ref(false)
const videoRefs = ref([]);
const activeIndex = ref(0);

const videos = [
  base + 'videos/home_bg.mp4',
  base + 'videos/portfolio_bg.mp4',
  base + 'videos/about_bg.mp4'
]

const videoTitles = [
    'Rolex Paul Newman Daytona Commercial',
    'Newman Daytona Rolex Paul Commercial',
    'Paul Commercial Rolex Paul Newman'
]

const onSwiper = (swiper) => {
  swiperInstance.value = swiper

  swiper.params.navigation.prevEl = prevEl.value
  swiper.params.navigation.nextEl = nextEl.value

  swiper.navigation.init()
  swiper.navigation.update()

  // initial state
  isBeginning.value = swiper.isBeginning
  isEnd.value = swiper.isEnd

  // listen to slide changes
  swiper.on('slideChange', () => {
    isBeginning.value = swiper.isBeginning
    isEnd.value = swiper.isEnd
  })
}
const onSlideChange = () => {
  if (swiperInstance) activeIndex.value = swiperInstance.value.activeIndex;
};

const playActiveVideoFullscreen = async () => {
  const video = videoRefs.value[activeIndex.value];
  if (!video) return;

  try {
    // Make fullscreen
    if (video.requestFullscreen) {
      await video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      await video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      await video.msRequestFullscreen();
    }

    // Play video
    await video.play();
  } catch (err) {
    console.error("Fullscreen/play error:", err);
  }
}
</script>

<style scoped>
.carousel-wrapper {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
}   

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
  bottom: -120px;
}

.next {
  left: 50%;
  transform: translateX(-50%);
  bottom: -60px;
}

.video {
  width: 100%;
  height: 100%;
  min-height: 220px;
  object-fit: cover;
  border-radius: 16px;
}

@media (min-width: 768px) {
  .nav-btn {
    bottom: -120px;
    padding: 12px 60px;
  }

  .prev {
    left: -120px;
    transform: none;
  }

  .next {
    right: -120px;
    left: unset;
    transform: none;
  }
}
</style>

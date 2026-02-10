<template>
    <div class="relative h-screen w-screen">
        <!-- Background Video -->
        <video
            class="absolute inset-0 h-full w-full object-cover"
            autoplay
            muted
            playsinline
        >
            <source src="/videos/portfolio_bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>

        <!-- Navigation -->
        <div class="absolute left-4 md:left-10 top-10 z-10">
            <NuxtLink to="/" class="flex items-center gap-2 relative mb-4">
                <!-- Dot -->
                <span
                    class="w-3 h-3 rounded-full bg-[#002DC1] z-20 relative shrink-0"
                ></span>

                <!-- Text mask wrapper -->
                <span class="overflow-hidden relative">
                    <span
                        class="block montserrat-light-italic text-[#002DC1] text-lg md:text-2xl animate-slide-right z-10">
                        home
                    </span>
                </span>
            </NuxtLink>
            <NuxtLink to="/about" class="flex items-center gap-2 relative">
                <!-- Dot -->
                <span
                    class="w-3 h-3 rounded-full bg-[#002DC1] z-20 relative shrink-0"
                ></span>

                <!-- Text mask wrapper -->
                <span class="overflow-hidden relative">
                    <span
                        class="block montserrat-light-italic text-[#002DC1] text-lg md:text-2xl animate-slide-right z-10">
                        about me
                    </span>
                </span>
            </NuxtLink>
        </div>


        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[90%] sm:w-[85%] md:w-[70%] lg:w-[55%] h-[70%] sm:h-[65%] md:h-[60%] max-w-6xl">
            <div class="relative w-full h-full flex items-center justify-center bg-white/15 backdrop-blur-[15px] rounded-2xl overflow-hidden p-4 sm:p-6 md:p-8">
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
            </div>
            <VideoCarousel />
        </div>
  </div>
</template>
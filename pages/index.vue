<template>
    <div class="relative h-screen w-screen overflow-hidden">
        <!-- Background Video -->
        <video
            class="absolute inset-0 h-full w-full object-cover"
            autoplay
            muted
            playsinline
        >
            <source
                src="/videos/home_bg_mobile.mp4"
                type="video/mp4"
                media="(max-width: 768px)"
            />

            <!-- Desktop -->
            <source
                src="/videos/home_bg.mp4"
                type="video/mp4"
                media="(min-width: 769px)"
            />
            Your browser does not support the video tag.
        </video>

        <!-- Navigation -->
        <div class="absolute left-4 md:left-10 top-10 z-10 flex items-center justify-center">
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


        <!-- Content -->
        <div class="absolute left-1/2 bottom-50 sm:bottom-10 -translate-x-1/2 z-10 flex items-center justify-center animate-slide-up">
            <NuxtLink to="/portfolio" class="montserrat-black bg-white/15 backdrop-blur-[15px] relative px-6 py-2 text-[#001C76] text-lg md:text-2xl rounded-2xl overflow-hidden border-2 border-[#A1F1FF] border-t-0 border-b-0">
                PORTFOLIO
                <!-- Top border -->
                <span
                    class="absolute top-0 left-[5%] right-[5%] h-0.5
                        bg-[linear-gradient(90deg,rgba(255,255,255,0.2),white,rgba(255,255,255,0.2))]
                        shadow-[0_0_6px_rgba(255,255,255,0.6),0_0_12px_rgba(255,255,255,0.4)]">
                </span>
                <span
                    class="absolute top-0 left-[0%] right-[80%] h-0.5
                    bg-[linear-gradient(180deg,rgba(161,241,255,0.2),#A1F1FF,rgba(161,241,255,0.2))]
                    shadow-[0_0_6px_rgba(161,241,255,0.6),0_0_12px_rgba(161,241,255,0.4)]">
                </span>
                <span
                    class="absolute top-0 right-[0%] left-[80%] h-0.5
                    bg-[linear-gradient(180deg,rgba(161,241,255,0.2),#A1F1FF,rgba(161,241,255,0.2))]
                    shadow-[0_0_6px_rgba(161,241,255,0.6),0_0_12px_rgba(161,241,255,0.4)]">
                </span>
                <!-- Bottom border -->
                <span
                    class="absolute bottom-0 left-[5%] right-[5%] h-0.5
                        bg-[linear-gradient(90deg,rgba(255,255,255,0.2),white,rgba(255,255,255,0.2))]
                        shadow-[0_0_6px_rgba(255,255,255,0.6),0_0_12px_rgba(255,255,255,0.4)]">
                </span>
                <span
                    class="absolute bottom-0 left-[0%] right-[80%] h-0.5
                    bg-[linear-gradient(180deg,rgba(161,241,255,0.2),#A1F1FF,rgba(161,241,255,0.2))]
                    shadow-[0_0_6px_rgba(161,241,255,0.6),0_0_12px_rgba(161,241,255,0.4)]">
                </span>
                <span
                    class="absolute bottom-0 right-[0%] left-[80%] h-0.5
                    bg-[linear-gradient(180deg,rgba(161,241,255,0.2),#A1F1FF,rgba(161,241,255,0.2))]
                    shadow-[0_0_6px_rgba(161,241,255,0.6),0_0_12px_rgba(161,241,255,0.4)]">
                </span>
                <!-- Left border -->
                <span
                    class="absolute left-0 top-[10%] bottom-[10%] w-0
                        bg-[linear-gradient(180deg,rgba(161,241,255,0.2),#A1F1FF,rgba(161,241,255,0.2))]
                        shadow-[0_0_6px_rgba(161,241,255,0.6),0_0_12px_rgba(161,241,255,0.4)]">
                </span>
                 <!-- Right border -->
                 <span
                    class="absolute right-0 top-[10%] bottom-[10%] w-0
                        bg-[linear-gradient(180deg,rgba(161,241,255,0.2),#A1F1FF,rgba(161,241,255,0.2))]
                        shadow-[0_0_6px_rgba(161,241,255,0.6),0_0_12px_rgba(161,241,255,0.4)]">
                </span>
            </NuxtLink>
        </div>
  </div>
</template>
<template>
  <component :is="showSticky ? StickyNavbar : Navbar" />
   <!-- <Navbar />
   <StickyNavbar /> -->

  <main>
    <HeroBanner />

    <section class=" mx-auto grid grid-cols-12 w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      <div class="col-span-12 md:col-span-8 px-5 md:px-0 pb-10">
        <!-- What You'll Learn Card -->
        <section class="bg-white p-6 my-6 border border-[#d1d2e0]">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">What you'll learn</h2>
          <ul class="grid grid-cols-1 md:grid-cols-2 justify-between gap-4">
            <li
              v-for="(item, index) in learnItems"
              :key="index"
              class="flex items-start"
            >
              <Icon name="mdi:check" class="text-gray-500 mr-2 w-4 h-4 mt-1" />
              <span class="text-gray-700 ps-3 text-[15px]">{{ item }}</span>
            </li>
          </ul>
        </section>

        <ExploreTopics />
        <CourseContent />
        <Requirements />
        <Description />
        <StudentsBought />
        <Instructor />
        <CourseRatings />
        <TrandingCourses />
      </div>
      <div class="col-span-12 md:col-span-4"></div>
    </section>
  </main>
  <Footer />
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from '@/components/navbar/Navbar.vue'
import StickyNavbar from '@/components/sticky-navbar/StickyNavbar.vue'

const learnItems = [
  "Guadagnare 10$ (circa 8€) di Benvenuto GRATIS",
  "Come Funziona Coinbase Per Comprare Altre Criptovalute",
  "Come Funziona Coinbase Per Comprare BITCOIN"
]

const showSticky = ref(false)

const handleScroll = () => {
  showSticky.value = window.scrollY > 80 // You can adjust threshold
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

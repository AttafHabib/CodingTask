<template>
  <section class="py-2">
      <h1 class="text-2xl font-bold text-gray-900 mb-4">More Courses by <span class="text-purple-600">ACI69 | Trading ™</span></h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div v-for="course in courses" :key="course.id" class="bg-white overflow-hidden">
          <!-- Course Image -->
          <div class="relative  overflow-hidden">
            <img :src="course.image" :alt="course.title" class="h-[150px] w-full" />
          </div>

          <!-- Course Info -->
          <div class="pt-2">
            <h2 class="text-md font-bold text-gray-700 leading-5 mb-1">{{ course.title }}</h2>
            <p class="text-[13px] text-gray-700 mb-2">{{ course.instructor }}</p>
            
            <!-- Rating -->
            <div class="flex items-center text-[13px] mb-2">
              <span class="text-yellow-800 text-[13px] font-bold mr-1">{{ course.rating }}</span>
              <div class="flex text-yellow-700">
                <template v-for="i in 5" :key="i">
                  <svg v-if="i <= Math.floor(course.rating)" class="w-[14px] h-[14px] fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                  <svg v-else class="w-[14px] h-[14px] text-gray-300 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                </template>
              </div>
              <span class="text-gray-500 text-[13px] ml-1">({{ course.reviews }})</span>
            </div>

            <!-- Course Details -->
            <div class="flex flex-wrap items-center text-[12px] text-gray-600 mb-3">
              <span>{{ course.hours }}</span>
              <span class="mx-1">•</span>
              <span>{{ course.lectures }}</span>
              <span class="mx-1">•</span><br/>
              <span>{{ course.level }}</span>
            </div>

            <!-- Price -->
            <div class="flex items-center">
              <span class="font-bold text-md text-gray-700">${{ course.price }}</span>
              <span class="text-gray-500 line-through ml-2">${{ course.originalPrice }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
      courses: [
        {
          id: 1,
          title: "Bitcoin Trading Bot Robot Strong and Easy Money",
          image: "https://img-c.udemycdn.com/course/240x135/3894936_1a8c_2.jpg",
          instructor: "ACI69 Trading, ACI69 | Trading ™",
          rating: 4.1,
          reviews: "22",
          hours: "5 total hours",
          lectures: "27 lectures",
          level: "Intermediate",
          price: "9.99",
          originalPrice: "19.99"
        },
        {
          id: 2,
          title: "Amazon Power: How To Get Free Products Online?",
          image: "https://img-c.udemycdn.com/course/240x135/2657286_2d98_4.jpg",
          instructor: "ACI69 | Trading ™, ACI69 Trading",
          rating: 3.7,
          reviews: "37",
          hours: "3.5 total hours",
          lectures: "27 lectures",
          level: "All Levels",
          price: "9.99",
          originalPrice: "19.99"
        },
        {
          id: 3,
          title: "Bitcoin corso di TRADING Semplice™ Parte 1",
          image: "https://img-c.udemycdn.com/course/240x135/3910744_6efe_10.jpg",
          instructor: "ACI69 Trading, ACI69 | Trading ™",
          rating: 4.7,
          reviews: "229",
          hours: "7.5 total hours",
          lectures: "48 lectures",
          level: "Intermediate",
          price: "9.99",
          originalPrice: "19.99"
        }
      ]
    };
  }
};
</script>

<style>
.h-14 {
  height: 3.5rem;
  overflow: hidden;
  display: -webkit-box;
  /* -webkit-line-clamp: 2; */
  -webkit-box-orient: vertical;
}
</style>
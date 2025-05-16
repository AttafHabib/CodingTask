<template>
    <section class="space-y-6 mt-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Students also bought</h2>

        <ul class="space-y-4">
            <li v-for="(course, index) in visibleCourses" :key="index"
                class="grid grid-cols-12 gap-4 border-b border-gray-300 pb-4">
                <div class="col-span-12 md:col-span-6">
                    <!-- Thumbnail -->
                    <div class="flex gap-3">
                        <div>
                            <img :src="course.thumbnail" alt="" class="w-16 h-16 object-cover" />
                        </div>
                        <!-- Course Info -->
                        <div class="text-sm text-gray-600 space-y-2">
                            <h3 class="text-gray-800 text-md font-bold">{{ course.title }}</h3>
                            <span v-if="course.badge"
                                class="text-xs font-semibold bg-blue-300 text-teal-900 px-2 py-0.5 mr-2 rounded">
                                {{ course.badge }}
                            </span>
                            <span class="text-green-800 font-bold">{{ course.duration }}</span>
                            <span class="text-green-800">•</span>
                            <span> Updated {{ course.updated }}</span>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 md:col-span-6">
                    <div class="flex justify-between">
                        <p class="font-bold flex">
                            <span class="text-yellow-900">{{ course.rating }}</span>
                            <span class="text-yellow-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 48 48">
                                    <g fill="currentColor">
                                        <path
                                            d="M23.083 14.568a1.025 1.025 0 0 1 1.834 0l2.452 4.951c.15.3.438.51.77.558l5.484.793a1.018 1.018 0 0 1 .567 1.739l-3.968 3.854a1.02 1.02 0 0 0-.294.902l.937 5.441c.143.833-.734 1.468-1.484 1.075l-4.905-2.57a1.03 1.03 0 0 0-.952 0l-4.905 2.57c-.75.393-1.627-.242-1.484-1.075l.937-5.441a1.02 1.02 0 0 0-.294-.902l-3.968-3.854a1.018 1.018 0 0 1 .567-1.739l5.483-.794c.334-.048.622-.256.77-.557z" />
                                        <path fill-rule="evenodd"
                                            d="m24 17.222l-1.577 3.185l-1.792-.888l2.452-4.95a1.025 1.025 0 0 1 1.834 0l2.452 4.95l-1.792.888zm6.222 9.24a1.02 1.02 0 0 0-.294.903l.937 5.441c.143.833-.734 1.468-1.484 1.075l-4.905-2.57a1.03 1.03 0 0 0-.952 0l-4.905 2.57c-.75.393-1.627-.242-1.484-1.075l.937-5.441a1.02 1.02 0 0 0-.294-.902l-3.968-3.854a1.018 1.018 0 0 1 .567-1.739l5.483-.794c.334-.048.622-.256.77-.557l1.793.888a3.02 3.02 0 0 1-2.276 1.649l-3.512.508l2.536 2.464l-1.31 1.349l1.31-1.35a3.02 3.02 0 0 1 .872 2.677l-.6 3.488l3.153-1.652a3.03 3.03 0 0 1 2.808 0l3.153 1.652l-.6-3.488a3.02 3.02 0 0 1 .872-2.676zm1.143-3.898l-3.512-.508a3.02 3.02 0 0 1-2.276-1.65l1.792-.887c.15.3.438.51.77.558l5.484.793a1.018 1.018 0 0 1 .567 1.739l-3.968 3.854l-1.393-1.435z"
                                            clip-rule="evenodd" />
                                    </g>
                                </svg>
                            </span>
                        </p>

                        <p class="text-gray-800 flex gap-1">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M24 14.6c0 .6-1.2 1-2.6 1.2c-.9-1.7-2.7-3-4.8-3.9c.2-.3.4-.5.6-.8h.8c3.1-.1 6 1.8 6 3.5M6.8 11H6c-3.1 0-6 1.9-6 3.6c0 .6 1.2 1 2.6 1.2c.9-1.7 2.7-3 4.8-3.9zm5.2 1c2.2 0 4-1.8 4-4s-1.8-4-4-4s-4 1.8-4 4s1.8 4 4 4m0 1c-4.1 0-8 2.6-8 5c0 2 8 2 8 2s8 0 8-2c0-2.4-3.9-5-8-5m5.7-3h.3c1.7 0 3-1.3 3-3s-1.3-3-3-3c-.5 0-.9.1-1.3.3c.8 1 1.3 2.3 1.3 3.7c0 .7-.1 1.4-.3 2M6 10h.3C6.1 9.4 6 8.7 6 8c0-1.4.5-2.7 1.3-3.7C6.9 4.1 6.5 4 6 4C4.3 4 3 5.3 3 7s1.3 3 3 3" />
                                </svg>
                            </span>
                            <span class="text-sm">{{ course.students.toLocaleString() }}</span>
                        </p>
                        <!-- Pricing -->
                        <div class="text-right flex items-start gap-4">
                            <div>
                                <p class="text-gray-800 font-bold leading-3">${{ course.price }}</p>
                                <del class="text-sm">${{ course.oldPrice }}</del>
                            </div>
                            <button
                                class="p-1.5 rounded-full border border-purple-600 text-purple-700 hover:bg-purple-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="M10.345 11.988C8.885 13.846 8 16.384 8 19.035c0 5.94 3.965 10.927 8.15 14.516a43.8 43.8 0 0 0 7.837 5.32l.252-.14a47 47 0 0 0 7.603-5.371C36.044 29.691 40 24.705 40 19.034c0-2.65-.885-5.189-2.344-7.047C36.2 10.137 34.213 9 31.969 9c-3.103 0-5.51 2.02-7.071 5.202L24 16.03l-.898-1.828C21.541 11.02 19.134 9 16.032 9c-2.245 0-4.232 1.136-5.687 2.988M24 40l-.434.9l-.005-.002l-.011-.005l-.041-.02l-.152-.076c-.13-.066-.32-.164-.56-.292a46 46 0 0 1-7.949-5.436C10.535 31.371 6 25.875 6 19.035c0-3.076 1.021-6.055 2.772-8.283C10.528 8.518 13.056 7 16.032 7c3.503 0 6.167 1.963 7.968 4.734C25.8 8.964 28.465 7 31.969 7c2.975 0 5.504 1.518 7.26 3.753C40.978 12.98 42 15.96 42 19.035c0 6.582-4.544 12.079-8.842 15.831a49 49 0 0 1-8.494 5.914l-.151.08l-.04.022l-.012.005l-.003.002h-.001S24.456 40.89 24 40m0 0l.457.89l-.443.227l-.448-.216z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

            </li>
        </ul>

        <!-- Toggle Button -->
        <div class="text-center">
            <button @click="toggleVisibility"
            class="border text-sm font-bold h-[2.6rem] w-full border-[#6d28d2] hover:bg-[#ede5f9] text-[#6d28d2] transition duration-300 cursor-pointer rounded-sm flex items-center justify-center"
            >
                {{ visibleCount < courses.length ? 'Show more' : 'Show less' }} </button>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const initialVisible = 6
const visibleCount = ref(initialVisible)

const courses = [
    {
        title: 'Crypto Condensed: The Complete Guide To Bitcoin',
        duration: '7 total hours',
        updated: '2/2024',
        rating: 4.3,
        students: 31380,
        price: 9.99,
        oldPrice: 54.99,
        thumbnail: 'https://img-c.udemycdn.com/course/50x50/380970_b5b4_42.jpg',
    },
    {
        title: 'Blockchain and Bitcoin Fundamentals',
        badge: 'Bestseller',
        duration: '3 total hours',
        updated: '5/2025',
        rating: 4.6,
        students: 133276,
        price: 9.99,
        oldPrice: 74.99,
        thumbnail: 'https://img-c.udemycdn.com/course/50x50/1151036_64b6_6.jpg',
    },
    {
        title: 'Bitcoin Advanced Level: Transactions',
        duration: '1.5 total hours',
        updated: '5/2025',
        rating: 4.7,
        students: 5914,
        price: 9.99,
        oldPrice: 59.99,
        thumbnail: 'https://img-c.udemycdn.com/course/50x50/1413060_e8d6.jpg',
    },
    {
        title: 'Bitcoin and Cryptocurrency Bootcamp',
        duration: '8.5 total hours',
        updated: '6/2018',
        rating: 4.5,
        students: 10770,
        price: 9.99,
        oldPrice: 69.99,
        thumbnail: 'https://img-c.udemycdn.com/course/50x50/1664822_78eb_7.jpg',
    },
    {
        title: 'Introduction to Bitcoin & Crypto Assets',
        duration: '1.5 total hours',
        updated: '12/2021',
        rating: 4.5,
        students: 3997,
        price: 9.99,
        oldPrice: 34.99,
        thumbnail: 'https://img-c.udemycdn.com/course/50x50/4442636_e645.jpg',
    },
    {
        title: 'Fundamentals of bitcoin & blockchain',
        badge: 'Highest Rated',
        duration: '1 total hour',
        updated: '11/2024',
        rating: 4.9,
        students: 1128,
        price: 9.99,
        oldPrice: 49.99,
        thumbnail: 'https://img-c.udemycdn.com/course/50x50/5900862_46c7_5.jpg',
    },
    {
        title: 'Crypto Condensed: The Complete Guide To Bitcoin',
        duration: '7 total hours',
        updated: '2/2024',
        rating: 4.3,
        students: 31380,
        price: 9.99,
        oldPrice: 54.99,
        thumbnail: 'https://img-c.udemycdn.com/course/50x50/380970_b5b4_42.jpg',
    },
    {
        title: 'Blockchain and Bitcoin Fundamentals',
        badge: 'Bestseller',
        duration: '3 total hours',
        updated: '5/2025',
        rating: 4.6,
        students: 133276,
        price: 9.99,
        oldPrice: 74.99,
        thumbnail: 'https://img-c.udemycdn.com/course/50x50/1151036_64b6_6.jpg',
    },
]

const visibleCourses = computed(() => courses.slice(0, visibleCount.value))

function toggleVisibility() {
    if (visibleCount.value < courses.length) {
        visibleCount.value = courses.length
    } else {
        visibleCount.value = initialVisible
    }
}
</script>

<template>
    <aside class="absolute hidden [@media(min-width:992px)]:block z-20 right-0 border border-gray-300 shadow-2xl w-[75%] bg-white">
        <!-- Course Preview Video Banner -->
        <!-- when screen scrll 40vh then below code shoulde be hide -->
        <div class="w-full h-[190px] relative transition-opacity duration-300" v-show="!hideBanner">
            <!-- Overlay -->
            <div class="absolute inset-0 bg-black/40 z-10"></div>
            <!-- Background image -->
            <img src="https://img-c.udemycdn.com/course/240x135/3524274_d5ed_5.jpg" class="w-full h-full object-cover"
                alt="">
            <!-- Centered Play Icon & Text -->
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-6 z-20">
                <span
                    class="rounded-full h-16 w-16 bg-gray-50 mx-auto mb-1 flex items-center justify-center cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16">
                        <path fill="#595c73"
                            d="M5 3.72c0-.606.722-.943 1.21-.564l5.51 4.28a.71.71 0 0 1 0 1.13l-5.51 4.28c-.488.378-1.21.042-1.21-.564v-8.55z" />
                    </svg>
                </span>
                <p class="text-white font-bold text-md pt-6">Preview this course</p>
            </div>
        </div>

        <!-- Course Pricing Section  -->
        <!-- when screen scrll 40vh then below code shoulde be sticky -->
        <div class="px-5 pb-5 pt-3 bg-white transition-all duration-300" :class="{ 'sticky top-0 z-30 shadow-md': stickyPricing }">
            <div class="flex items-center space-x-2 mb-3">
                <span class="text-2xl font-bold">$9.99</span>
                <span class="text-gray-500 line-through">$19.99</span>
                <span class="text-gray-700 font-medium">50% off</span>
            </div>

            <!-- Action Buttons -->
            <div class="space-y-2">
                <button
                    class="w-full bg-purple-700 text-white font-bold py-3 px-4 rounded transition-colors hover:bg-purple-600 cursor-pointer">
                    Add to cart
                </button>
                <button
                    class="w-full bg-white text-purple-600 font-bold py-3 px-4 rounded border border-purple-600 transition-colors hover:bg-purple-200 cursor-pointer">
                    Buy now
                </button>
            </div>

            <!-- Money-back Guarantee -->
            <div class="text-center text-gray-600 text-sm mt-3 mb-5">
                30-Day Money-Back Guarantee
            </div>

            <!-- Course Includes -->
            <div class="mb-5">
                <h3 class="font-bold text-gray-800 mb-3">This course includes:</h3>
                <ul class="space-y-2">
                    <li v-for="(el, index) in courseCovers" :key="index">
                        <p class="flex gap-2 text-[14px] text-gray-800">
                            <span class="w-5 h-5" v-html="el.icon" />
                            <span class="">{{ el.text }}</span>
                        </p>
                    </li>
                </ul>
            </div>

            <!-- Share and Gift options -->
            <div class="flex justify-between text-sm font-medium text-gray-700 mb-1">
                <button class="underline decoration-purple-600 hover:bg-gray-300 py-2 px-1 rounded-sm">Share</button>
                <button class="underline decoration-purple-600 hover:bg-gray-300 py-2 px-1 rounded-sm">Gift this
                    course</button>
                <button class="underline decoration-purple-600 hover:bg-gray-300 py-2 px-1 rounded-sm">Apply
                    Coupon</button>
            </div>

            <!-- Coupon Section -->
            <div class="border-t border-b border-gray-200 py-4 mb-5">
                <div class="mb-2 text-sm">
                    <span class="font-bold">CP130525</span> is applied
                    <div class="text-gray-500 text-xs">Udemy coupon</div>
                </div>
                <div class="flex flex-wrap gap-2">
                    <input type="text" placeholder="Enter Coupon"
                        class="flex-grow border min-w-[100px] border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500" />
                    <button
                        class="bg-purple-600 text-white px-4 py-2 rounded font-medium hover:bg-purple-700 cursor-pointer">
                        Apply
                    </button>
                </div>
            </div>

            <!-- Team Training -->
            <h3 class="font-bold text-gray-800 mb-1">Training 5 or more people?</h3>
            <p class="text-gray-700 text-sm">Get your team access to 30,000+ top Udemy courses anytime, anywhere.</p>
            <button
                class="bg-white w-full mt-3 text-sm font-bold text-purple-700 px-4 py-2 rounded border border-purple-600 hover:bg-purple-200 cursor-pointer transition transform duration-200">
                Try Udemy Business
            </button>
        </div>
    </aside>
</template>

<script>
export default {
    name: 'CoursePreviewSidebar',
    data() {
        return {
            scrollY: 0,
            courseCovers: [
                {
                    icon: ` <svg class="mt-1" xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                viewBox="0 0 24 24">
                                <path fill="#fff" d="M3 17h18V5H3zM9 7l7 4l-7 4z" opacity="0.3" />
                                <path fill="currentColor" d="M9 7v8l7-4zm12-4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 14H3V5h18z" />
                             </svg>`,
                    text: '2 hours on-demand video',
                },
                {
                    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 384 512">
	                        <path fill="currentColor" d="M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12m-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12m108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9m-128-80V128h76.1zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416z" />
                            </svg>`,
                    text: '1 article',
                },
                {
                    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
	                        <path fill="currentColor" d="M12 12l4 0h-2.5v0h-3v0h-2.5z">
		                    <animate fill="freeze" attributeName="d" begin="1s" dur="0.2s" values="M12 12l4 0h-2.5v0h-3v0h-2.5z;M12 19l4 -4h-2.5v-3h-3v3h-2.5Z" />
	                        </path>
	                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
		                    <path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M13.5 3l5.5 5.5v11.5c0 0.55 -0.45 1 -1 1h-12c-0.55 0 -1 -0.45 -1 -1v-16c0 -0.55 0.45 -1 1 -1Z">
			                <animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.15s" values="0;0.3" />
			                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0" />
		                    </path>
		                    <path d="M14.5 3.5l2.25 2.25l2.25 2.25z" opacity="0">
			                <animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M14.5 3.5l2.25 2.25l2.25 2.25z;M14.5 3.5l0 4.5l4.5 0z" />
			                <set fill="freeze" attributeName="opacity" begin="0.6s" to="1" />
		                    </path>
	                        </g>
                            </svg>`,
                    text: '2 downloadable resources',
                },
                {
                    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 512 512">
	                        <path fill="currentColor" d="M380 16H132a32.036 32.036 0 0 0-32 32v416a32.036 32.036 0 0 0 32 32h248a32.036 32.036 0 0 0 32-32V48a32.036 32.036 0 0 0-32-32m0 32v32H132V48Zm0 64l.011 224H132V112Zm0 352H132v-96h248.016v96Z" />
	                        <path fill="currentColor" d="M240 400h32v32h-32z" />
                            </svg>`,
                    text: 'Access on mobile and TV',
                },
                {
                    icon: `<svg height="14px" width="14px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	                        viewBox="0 0 405.747 405.747" xml:space="preserve">
                            <g>
	                        <path style="fill:#010002;" d="M310.277,107.305c-43.976,0-92.099,63.076-107.475,84.968
		                    c-15.52-22.071-63.487-84.771-107.332-84.771c-52.64,0-95.47,42.83-95.47,95.47s42.83,95.47,95.47,95.47
		                    c43.976,0,92.099-63.076,107.475-84.968c15.52,22.071,63.488,84.771,107.332,84.771c52.64,0,95.47-42.83,95.47-95.47
		                    S362.917,107.305,310.277,107.305z M95.47,286.508c-46.064,0-83.536-37.472-83.536-83.536s37.472-83.536,83.536-83.536
		                    c40.509,0,89.384,67.766,100.214,83.536C184.854,218.742,135.979,286.508,95.47,286.508z M310.277,286.311
		                    c-40.509,0-89.384-67.766-100.214-83.536c10.824-15.77,59.704-83.536,100.214-83.536c46.064,0,83.536,37.472,83.536,83.536
		                    S356.341,286.311,310.277,286.311z"/>
                            </g>
                            </svg>`,
                    text: 'Full lifetime access',
                },
                {
                    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 48 48">
	                        <path fill="currentColor" fill-rule="evenodd" d="M12 7a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v1h5a1 1 0 0 1 1 1v6a5 5 0 0 1-5 5h-1.683c-1.541 4.36-5.53 7.564-10.317 7.959V34h7a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H16a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h7v-6.041c-4.786-.395-8.776-3.599-10.317-7.959H11a5 5 0 0 1-5-5V9a1 1 0 0 1 1-1h5zm22 9V8H14v8c0 5.523 4.477 10 10 10s10-4.477 10-10m2-6v8h1a3 3 0 0 0 3-3v-5zM8 10h4v8h-1a3 3 0 0 1-3-3zm9 26v4h14v-4z" clip-rule="evenodd" />
                            </svg>`,
                    text: 'Certificate of completion',
                },
            ],

            computed: {
                hideBanner() {
                    return this.scrollY > window.innerHeight * 0.4;
                },
                stickyPricing() {
                    return this.scrollY > window.innerHeight * 0.4;
                }
            },
            mounted() {
                window.addEventListener('scroll', this.handleScroll);
            },
            beforeUnmount() {
                window.removeEventListener('scroll', this.handleScroll);
            },
            methods: {
                handleScroll() {
                    this.scrollY = window.scrollY;
                }
            }
        };
    },
};
</script>


<style scoped>
.border-l-12 {
    border-left-width: 12px;
}
</style>
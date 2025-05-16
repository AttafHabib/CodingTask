// components/CourseReviews.vue
<template>
  <div class="pt-4">
    <!-- Overall Rating Header -->
    <div class="flex items-center mb-4 pb-4 border-gray-200">
      <div class="text-amber-500">
        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
        </svg>
      </div>
      <div class="ml-2">
        <span class="text-2xl font-bold text-gray-900 mb-4">{{ overallRating }} course rating</span>
        <span class="text-gray-600 mx-2">•</span>
        <span class="text-2xl font-bold text-gray-900 mb-4">{{ totalRatings }} ratings</span>
      </div>
    </div>

    <!-- Reviews List -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
      <div v-for="(review, index) in reviews" :key="index" class="border-t border-gray-200 py-6">
        <div class="flex justify-between mb-3">
          <div class="flex items-center">
            <!-- User Avatar -->
            <div class="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center font-medium">
              {{ getInitials(review.name) }}
            </div>

            <!-- User Name and Rating -->
            <div class="ml-3">
              <div class="font-medium text-gray-800">{{ review.name }}</div>
              <div class="flex items-center mt-1">
                <!-- Star Rating -->
                <div class="flex">
                  <template v-for="i in 5" :key="i">
                    <svg :class="i <= review.rating ? 'text-amber-500' : 'text-gray-300'" class="w-4 h-4 fill-current"
                      viewBox="0 0 24 24">
                      <path
                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                      </path>
                    </svg>
                  </template>
                </div>
                <span class="ml-2 text-sm text-gray-600">{{ review.timeAgo }}</span>
              </div>
            </div>
          </div>

          <!-- Options Button -->
          <button class="text-gray-500">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z">
              </path>
            </svg>
          </button>
        </div>

        <!-- Review Content -->
        <p class="text-gray-700">
          {{ review.content }}
        </p>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseReviews',
  data() {
    return {
      overallRating: 4.7,
      totalRatings: 50,
      reviews: [
        {
          name: 'Fabrizio G.',
          rating: 3,
          timeAgo: '2 years ago',
          content: 'Spiegazione elementare dell\'uso di Coinbase.Probabilmente la cosa più fastidiosa è che tutte le risorse "scaricabili" fanno riferimento a pseudo bonus o referral cosa alquanto antipatica ritengo.'
        },
        {
          name: 'Paolo S.',
          rating: 5,
          timeAgo: '3 years ago',
          content: 'Bene! ottima spiegazione, avevo già una buona conoscenza, così è stata approfondita e, sempre a portata di mano la rinfrescata.'
        },
        {
          name: 'Fabrizio G.',
          rating: 3,
          timeAgo: '2 years ago',
          content: 'Spiegazione elementare dell\'uso di Coinbase.Probabilmente la cosa più fastidiosa è che tutte le risorse "scaricabili" fanno riferimento a pseudo bonus o referral cosa alquanto antipatica ritengo.'
        },
        {
          name: 'Paolo S.',
          rating: 5,
          timeAgo: '3 years ago',
          content: 'Bene! ottima spiegazione, avevo già una buona conoscenza, così è stata approfondita e, sempre a portata di mano la rinfrescata.'
        }
      ]
    };
  },
  methods: {
    getInitials(name) {
      return name.split(' ').map(part => part.charAt(0)).join('');
    }
  }
}
</script>
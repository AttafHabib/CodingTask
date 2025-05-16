<template>
  <div class="text-white">
    <h1 class="text-2xl md:text-3xl font-bold my-7">
      Coinbase: Come Comparare Bitcoin e Guadagnare™?
    </h1>
    <h2 class="text-lg md:text-xl my-6">
      Come Acquistare e Guadagnare Facilmente Bitcoin Su Coinbase Corso Online Completo In Italiano
    </h2>

    <div class="flex flex-wrap items-center gap-4 mb-4">
      <div class="flex items-center">
        <span class="text-yellow-500 font-bold text-sm mr-1">4.7</span>
        <div class="flex text-yellow-400">
          <svg v-for="i in 4" :key="i" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"/></svg>
          <svg class="mt-1" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="currentColor" d="m12 15.968l4.247 2.377l-.948-4.773l3.573-3.305l-4.833-.573l-2.038-4.419zm0 2.292l-7.053 3.948l1.575-7.928L.588 8.792l8.027-.952L12 .5l3.385 7.34l8.027.952l-5.934 5.488l1.575 7.928z"/></svg>
        </div>
        
        <span class="text-[#c0c4fc] ml-1 text-sm underline">(50 ratings)</span>
      </div>

      <p class="text-sm">
        1,128 students
      </p>
    </div>
    <p class="text-sm mb-4">
      <span class=" font-semibold">Created by </span>
      <span class=" text-[#c0c4fc] underline">AC169 | Trading ™</span>
    </p>

    <div class="text-sm">
      <span>
      
      </span>
      <span>Last updated 05/2025</span>
      <span class="mx-2">•</span>
      <span>Italian</span>
      <span class="mx-2">•</span>
      <span>Italian [Auto]</span>
    </div>
  </div>
</template>

<script setup>
// If using nuxt-icon (recommended)
defineProps({
  title: String,
  subtitle: String,
  rating: Number,
  ratingsCount: Number,
  students: Number,
  instructor: String,
  lastUpdated: String,
  language: String
})
</script>
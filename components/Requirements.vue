<template>
  <section>
    <h2 class="text-2xl font-bold text-gray-900 mb-4">What you'll learn</h2>
    <ul class="list-disc list-inside space-y-2 text-gray-800">
      <li v-for="(item, index) in items" :key="index" class="text-[15px]">
        {{ item }}
      </li>
    </ul>
  </section>
</template>

<script setup>
const items = [
  'Un qualsiasi dispositivo Computer o Smartphone che navighi online',
]
</script>

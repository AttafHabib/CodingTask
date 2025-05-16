<template>
  <img :src="logoUrl" :alt="altText" width="90" height="34" />
</template>

<script setup>
defineProps({
  logoUrl: {
    type: String,
    required: true
  },
  altText: {
    type: String,
    default: 'Logo'
  }
})
</script>
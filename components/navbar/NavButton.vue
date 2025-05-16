<template>
  <UiButton
    :variant="active ? 'primary' : 'text'"
    :class="['font-medium', buttonClass]"
    @click="$emit('click')"
  >
    <slot />
  </UiButton>
</template>

<script setup>
const props = defineProps({
  active: {
    type: Boolean,
    default: false
  },
  buttonClass: {  // Changed from 'class' to 'buttonClass'
    type: String,
    default: ''
  }
})
</script>
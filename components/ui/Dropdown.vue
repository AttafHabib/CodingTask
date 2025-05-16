<!-- components/CustomDropdown.vue -->
<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

defineProps<{
  items: DropdownMenuItem[]
  buttonLabel?: string
  buttonClass?: string
}>()
</script>

<template>
  <UDropdownMenu
    :items="items"
    :content="{
      align: 'end',
      side: 'bottom',
      sideOffset: 8
    }"
    :ui="{
      content: 'w-[280px] bg-white rounded-md z-[999999] px-2 py-4 mt-1 border border-gray-300 custom-drop-down'
    }"
  >
     <UButton
      :label="buttonLabel || 'Open'"
      color="neutral"
      variant="outline"
      :class="buttonClass"
    />
  </UDropdownMenu>
</template>

<template>
  <div class="relative z-50" ref="dropdownContainer">
    <!-- Main Button -->
    <button @mouseenter="openMainDropdown" @mouseleave="startCloseTimer" :class="[
      'flex items-center transition-colors text-[14px] cursor-pointer p-2 hover:bg-purple-50 font-medium',
      buttonClasses,
      sizeClasses[size],
      variantClasses[variant]
    ]">
      {{ buttonText }}
      <!-- <Icon 
        v-if="showChevron"
        name="mdi:chevron-down" 
        class="ml-1 transition-transform duration-200"
        :class="{ 'rotate-180': showMainDropdown }"
      /> -->
    </button>

    <!-- Main Dropdown -->
    <Transition name="dropdown">
      <div v-show="showMainDropdown" @mouseenter="cancelCloseTimer" @mouseleave="startCloseTimer" :class="[
        'absolute left-0 mt-4 bg-white rounded-l-md border border-gray-300 z-50',
        dropdownClass
      ]" :style="{ width: dropdownWidth }">
        <div class="">
          <p v-if="headerText" class="text-sm text-gray-500 mb-2">{{ headerText }}</p>

          <!-- Main Dropdown Items -->
          <div v-for="(section, sectionIndex) in mainItems" :key="sectionIndex" class=" z-50">
            <h3 v-if="section.title" class="font-bold text-gray-600 mb-2 text-[14px] px-3 pt-3">
              {{ section.title }}
            </h3>
            <ul>
              <li v-for="(item, itemIndex) in section.items" :key="itemIndex"
                @mouseenter="handleItemHover(item, sectionIndex, itemIndex, 'main')" :class="[
                  'py-2 hover:bg-purple-100 px-3',
                  activeMainItem === itemIndex && activeMainSection === sectionIndex ? '' : '',
                  autoOpenFirstItem && sectionIndex === 0 && itemIndex === 0 ? '' : ''
                ]">
                <a href="#" class="flex items-center text-sm justify-between text-gray-800 hover:text-purple-600">
                  <span>{{ item.label }}</span>
                  <Icon v-if="hasNestedItems(item)" name="mdi:chevron-right" class="ml-2 text-gray-500 text-[16px]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Inner Dropdown -->
        <Transition name="dropdown">
          <div v-show="showInnerDropdown || (autoOpenFirstItem && showMainDropdown)" @mouseenter="cancelCloseTimer"
            @mouseleave="handleInnerLeave" :class="[
              'absolute left-full -top-[1px] pb-[1px] bg-white rounded-r-md shadow-lg z-50 border border-gray-300',
              innerDropdownClass
            ]" :style="{ width: innerDropdownWidth, height: '100%' }">
            <div class="">
              <h3 class="font-bold text-gray-600 mb-2 text-[14px] px-3 pt-3">{{ currentInnerItem?.label }}</h3>
              <ul>
                <li v-for="(innerItem, innerIndex) in currentInnerItems" :key="innerIndex"
                  @mouseenter="handleItemHover(innerItem, innerIndex, null, 'inner')" :class="[
                    'py-2 hover:bg-purple-100 px-3',
                    activeInnerItem === innerIndex ? 'bg-gray-50' : ''
                  ]">
                  <a href="#" class="flex items-center text-sm justify-between text-gray-800 hover:text-purple-600">
                    <span>{{ innerItem.label }}</span>
                    <Icon v-if="hasNestedItems(innerItem)" name="mdi:chevron-right" class="ml-2 text-gray-400" />
                  </a>
                </li>
              </ul>
            </div>

            <!-- Nested Inner Dropdown -->
            <Transition name="dropdown">
              <div v-show="showNestedDropdown" @mouseenter="cancelCloseTimer" @mouseleave="handleNestedLeave" :class="[
                'absolute left-full -ms-1 -top-[1px] bg-white rounded-r-md shadow-lg z-50 border border-gray-300',
                nestedDropdownClass
              ]" :style="{ width: nestedDropdownWidth, height: '100%' }">
                <div class="">
                  <h3 class="font-bold text-gray-600 mb-2 text-[14px] px-3 pt-3">{{ currentNestedItem?.label }}</h3>
                  <ul>
                    <li v-for="(nestedItem, nestedIndex) in currentNestedItems" :key="nestedIndex"
                      class="py-2 hover:bg-purple-100 px-3">
                      <a href="#" class="flex items-center text-sm justify-between text-gray-800 hover:text-purple-600">
                        {{ nestedItem.label }}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Transition>
          </div>
        </Transition>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  // Button props
  buttonText: {
    type: String,
    default: 'Explore'
  },
  buttonClass: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'text',
    validator: (value) => ['text', 'outline', 'solid'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  showChevron: {
    type: Boolean,
    default: true
  },

  // Dropdown content
  mainItems: {
    type: Array,
    required: true
  },

  // Dropdown styling
  dropdownWidth: {
    type: String,
    default: '20rem'
  },
  innerDropdownWidth: {
    type: String,
    default: '20rem'
  },
  nestedDropdownWidth: {
    type: String,
    default: '20rem'
  },
  dropdownClass: {
    type: String,
    default: ''
  },
  innerDropdownClass: {
    type: String,
    default: ''
  },
  nestedDropdownClass: {
    type: String,
    default: ''
  },
  headerText: {
    type: String,
    default: ''
  },

  // Behavior
  closeDelay: {
    type: Number,
    default: 200
  },
  autoOpenFirstItem: {
    type: Boolean,
    default: true
  }
})

// State
const showMainDropdown = ref(false)
const showInnerDropdown = ref(false)
const showNestedDropdown = ref(false)
const activeMainSection = ref(null)
const activeMainItem = ref(null)
const activeInnerItem = ref(null)
const currentInnerItem = ref(null)
const currentNestedItem = ref(null)
const closeTimer = ref(null)
const dropdownContainer = ref(null)

// Computed
const currentInnerItems = computed(() => {
  return currentInnerItem.value?.items || []
})

const currentNestedItems = computed(() => {
  return currentNestedItem.value?.items || []
})

const buttonClasses = computed(() => {
  const base = 'px-4 py-2 font-medium rounded-md'
  const variant = {
    text: 'text-gray-700 hover:text-purple-600',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
    solid: 'bg-purple-600 text-white hover:bg-purple-700'
  }
  return `${base} ${variant[props.variant]} ${props.buttonClass}`
})

const sizeClasses = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg'
}

const variantClasses = {
  text: '',
  outline: 'border',
  solid: ''
}

// Methods
const hasNestedItems = (item) => {
  return item.items && item.items.length > 0
}

const openMainDropdown = () => {
  cancelCloseTimer()
  showMainDropdown.value = true
}

const handleItemHover = (item, sectionIndex, itemIndex, level) => {
  cancelCloseTimer()

  if (level === 'main') {
    activeMainSection.value = sectionIndex
    activeMainItem.value = itemIndex
    currentInnerItem.value = item
    showInnerDropdown.value = hasNestedItems(item)
    showNestedDropdown.value = false
  } else if (level === 'inner') {
    activeInnerItem.value = itemIndex
    currentNestedItem.value = item
    showNestedDropdown.value = hasNestedItems(item)
  }
}

const handleInnerLeave = () => {
  startCloseTimer()
  showInnerDropdown.value = false
  showNestedDropdown.value = false
}

const handleNestedLeave = () => {
  showNestedDropdown.value = false
}

const startCloseTimer = () => {
  closeTimer.value = setTimeout(() => {
    showMainDropdown.value = false
    showInnerDropdown.value = false
    showNestedDropdown.value = false
    activeMainSection.value = null
    activeMainItem.value = null
    activeInnerItem.value = null
    currentInnerItem.value = null
    currentNestedItem.value = null
  }, props.closeDelay)
}

const cancelCloseTimer = () => {
  if (closeTimer.value) {
    clearTimeout(closeTimer.value)
    closeTimer.value = null
  }
}

// Watch for main dropdown visibility to auto-open first item
watch(showMainDropdown, (newVal) => {
  if (newVal && props.autoOpenFirstItem && props.mainItems.length > 0 && props.mainItems[0].items.length > 0) {
    const firstSection = props.mainItems[0]
    const firstItem = firstSection.items[0]

    if (hasNestedItems(firstItem)) {
      activeMainSection.value = 0
      activeMainItem.value = 0
      currentInnerItem.value = firstItem
      showInnerDropdown.value = true
    }
  }
})
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
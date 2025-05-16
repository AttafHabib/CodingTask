<template>
    <section class="my-7">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Explore related topics</h2>
        <div class="flex justify-between items-center">
            <p class="text-gray-600">13 sections • 22 lectures • 2h 5m total length</p>
            <button @click="toggleAllSections"
                class="h-[2.6rem] text-[#6d28d2] font-bold px-2 hover:bg-[#ede5f9] transition duration-300 cursor-pointer rounded-sm flex items-center justify-center">
                {{ allExpanded ? 'Collapse all' : 'Expand all' }} sections
            </button>
        </div>
        <div class="">
            <div v-for="(section, index) in courseSections" :key="index"
                class="border border-gray-300 bg-[#f6f7f9] overflow-hidden">
                <button @click="toggleSection(index)"
                    class="w-full flex justify-between items-center p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                    <div class="flex items-center justify-between">
                        <Icon :name="expandedSections[index] ? 'mdi:chevron-up' : 'mdi:chevron-down'"
                            class="text-gray-500 mr-2 w-4 h-4 text-xl" />
                        <h3 class="font-medium text-left">
                            <span class="text-[#2a2b3f] font-bold mr-2">{{ section.title }}</span>
                        </h3>
                    </div>
                    <span class="text-sm font-semibold text-gray-800">{{ section.lectures }} • {{ section.duration
                    }}</span>
                </button>

                <transition enter-active-class="transition duration-400 ease-out"
                    enter-from-class="transform opacity-0 -translate-y-2"
                    enter-to-class="transform opacity-100 translate-y-0"
                    leave-active-class="transition duration-75 ease-in"
                    leave-from-class="transform opacity-100 translate-y-0"
                    leave-to-class="transform opacity-0 -translate-y-2">
                    <div v-show="expandedSections[index]" class="px-4 pb-4 bg-white border-t border-gray-300 pt-4">
                        <ul class="space-y-3">
                            <li v-for="(lecture, lectureIndex) in section.lectureList" :key="lectureIndex"
                                class="flex item-center justify-between gap-4">
                                <div class="flex items-center gap-4">
                                    <svg class="mt-1" xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                        viewBox="0 0 24 24">
                                        <path fill="#fff" d="M3 17h18V5H3zM9 7l7 4l-7 4z" opacity="0.3" />
                                        <path fill="currentColor"
                                            d="M9 7v8l7-4zm12-4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 14H3V5h18z" />
                                    </svg>
                                    <span class="text-gray-800 text-sm"
                                        :style="{ color: lecture.color, textDecoration: lecture.underline ? 'underline' : 'none', }">{{
                                        lecture.title }}</span>
                                </div>
                                <div class="flex items-center gap-4">
                                    <span v-if="lecture.preview" class="underline text-[15px] text-purple-700 px-2 py-0.5">
                                        Preview
                                    </span>
                                    <p class="text-sm text-gray-500">{{ lecture.duration }}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </transition>
            </div>
        </div>
    </section>
</template>

<script setup>
const expandedSections = ref([true, false, false])
const allExpanded = ref(false)

const courseSections = [
  {
    title: "INTRODUZIONE A COINBASE Per Compare BITCOIN",
    lectures: "3 lectures",
    duration: "13min",
    completed: 0,
    lectureList: [
      { title: "Introduzione", color: "#6d28d2", underline: "#6d28d2", duration: "04:31", cursor: "pointer", preview: true, completed: false },
      { title: "Invito Per Studenti Al Gruppo Telegram ACI69", color: "#2a2b3f", duration: "02:17", preview: false, completed: false },
      { title: "Vantaggi Per Studenti ACI69", color: "#2a2b3f", duration: "06:31", preview: false, completed: false }
    ]
  },
  {
    title: "COME CI SI REGISTRA GRATIS A COINBASE IN ITALIANO?",
    lectures: "2 lectures",
    duration: "10min",
    completed: 0,
    lectureList: [
      { title: "IMPORTANTE: Come Ti Registri Gratis Su Coinbase? Guardalo Passo Passo", color: "#6d28d2", cursor: "pointer", underline: "#6d28d2", duration: "07:04", preview: true, completed: false },
      { title: "Documenti e Dati Richiesti Da Coinbase: Come Devi Fare?", color: "#2a2b3f", duration: "02:48", preview: false, completed: false }
    ]
  },
  {
    title: "COINBASE EARN COME SI GUADAGNA E COME FUNZIONA?",
    lectures: "1 lecture",
    duration: "9min",
    completed: 0,
    lectureList: [
      { title: "Coinbase Earn Guadagna Bitcoin E Cripto Gratis Come Funziona?", duration: "08:51", preview: false, completed: false }
    ]
  },
  {
    title: "FUNZIONALITA' BASE COINBASE",
    lectures: "5 lectures",
    duration: "38min",
    completed: 0,
    lectureList: [
      { title: "Panoramica Delle Funzionalità Iniziali Di Coinbase", color: "#2a2b3f", duration: "04:45", preview: false, completed: false },
      { title: "Cosa Vedrai Appena Entrato In Coinbase?", color: "#2a2b3f", duration: "06:23", preview: false, completed: false },
      { title: "Bonifico SEPA Immediato Verso Coinbase Come Si Fa?", color: "#2a2b3f", duration: "17:07", preview: false, completed: false },
      { title: "Carta Di Credito Visa Coinbase: Come Richiederla? Piano Di Accumulo Cryptovalute", color: "#2a2b3f", duration: "03:16", preview: false, completed: false },
      { title: "Acquisti Programmati E PAC Piani Di Accumulo Criptovalute: Come Fare?", color: "#2a2b3f", duration: "06:42", preview: false, completed: false }
    ]
  },
  {
    title: "COME SI ACQUISTANO BITCOIN E ALTRE CRIPTOVALUTE IN COINBASE?",
    lectures: "2 lectures",
    duration: "9min",
    completed: 0,
    lectureList: [
      { title: "Prepagate e Acquisto Cripto Con Conti Corrente: Come Si Fa Su CoinBase?", color: "#2a2b3f", duration: "03:28", preview: false, completed: false },
      { title: "La Scheda Prezzi E Tutte Le Sue Funzionalità", color: "#2a2b3f", duration: "05:52", preview: false, completed: false }
    ]
  }
]

const toggleSection = (index) => {
    expandedSections.value[index] = !expandedSections.value[index]
}

const toggleAllSections = () => {
    allExpanded.value = !allExpanded.value
    expandedSections.value = expandedSections.value.map(() => allExpanded.value)
}
</script>
<style scoped>
.course-list:last-child {
    border: 2px solid red;
}
</style>
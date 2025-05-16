<template>
    <section class="space-y-4 mt-8">
        <!-- Title -->
        <h2 class="text-2xl font-bold text-gray-900">Instructor</h2>

        <!-- Instructor Info -->
        <div class="space-y-2">
            <a href="#" class="text-purple-700 text-[18px] font-bold underline">
                ACI69 | Trading™
            </a>
            <p class="text-gray-700">
                ✔ Ingegnere Informatico Best Seller – Impara e Guadagna!
            </p>

            <!-- Basic Stats -->
            <div class="flex gap-4 items-center">
                <!-- thumbnil -->
                <div>
                    <img src="https://img-c.udemycdn.com/user/200_H/44745822_3f5f_30.jpg"
                        class="h-[120px] w-[120px] rounded-full object-cover border border-gray-200" alt="">
                </div>
                <div class="flex flex-col gap-2 text-sm text-gray-700">
                    <span>⭐ 4.5 Instructor Rating</span>
                    <span>🗣 3,070 Reviews</span>
                    <span>👥 14,760 Students</span>
                    <span>📚 54 Courses</span>
                </div>
            </div>

            <!-- Hidden Content -->
            <div :class="!showMore ? 'line-clamp-3' : ''" class="text-gray-800 transition-all duration-300">
                <p class="text-gray-800 text-sm pt-1">★★★★★ Impara, Applica, Guadagna! ★★★★★</p>
                <p class="text-sm text-gray-800 pt-1">Mi occupo di formazione online da 18 anni</p>
                <ul class="space-y-1 pt-1">
                    <li v-for="(item, index) in genericName" :key="index" class="text-gray-800 font-semibold">✔ {{ item
                    }}
                    </li>
                </ul>
                <p class="mt-2 text-gray-800">
                    Questo corso è insegnato da un professionista con esperienza reale...
                </p>
                <p class="py-2">
                    Ciao, sono <strong>Leo</strong>, meglio conosciuto online come <strong>ACI69 Cripto Trading</strong>
                </p>
                <p>
                    ✔ <strong>14.000 studenti</strong> già formati
                </p>
                <p class="text-gray-800 font-bold text-sm pt-2">★★★★★ 3.000 recensioni verificate</p>
                <p class="text-gray-800 font-bold text-sm pt-2">▶ 4.350.000 visualizzazioni</p>
                <p class="text-gray-800 font-bold text-sm pt-2">▶ 32.000 iscritti tra Udemy e YouTube</p>
                <p class="text-gray-800 text-sm pt-2">Ho creato oltre <strong>500.000 ore di contenuti video</strong>
                    (parliamo di <strong>57 anni di formazione condensati</strong> ).</p>
                <p class="text-gray-800 font-bold text-sm pt-2">✓ Perché dovresti fidarti di me?</p>
                <p class="text-gray-800 text-sm pt-2">Perché <strong>i miei studenti ottengono risultati veri</strong>.
                    Guadagnano, si migliorano e trasformano le competenze apprese nei miei corsi in opportunità
                    concrete.</p>

                <p class="text-gray-800 text-sm pt-2">✔ <strong>Se vuoi imparare davvero un mestiere</strong>, lascia stare le informazioni sparse online e affidati a chi ha già fatto gli errori per te.</p>

                <p class="text-gray-800 text-sm pt-2">⚡ <strong>Iscriviti ora ai miei corsi</strong>: hai la
                    <strong>garanzia soddisfatto o rimborsato</strong>.
                </p>

                <p class="text-gray-800 text-sm pt-2">✉ <strong>Supporto esclusivo</strong> su Telegram & Facebook solo
                    per studenti.</p>
                <p class="text-gray-800 text-sm pt-2">⏳ Non perdere tempo prezioso: <strong>clicca e inizia
                        subito</strong></p>
                <p class="text-gray-800 text-sm pt-2">Ci vediamo dall'altra parte → ✔ACI69 ★★★★★</p>
            </div>

            <!-- Show More / Less -->
            <button @click="showMore = !showMore" 
            class="h-[2.6rem] text-sm text-purple-600 font-bold px-1 hover:bg-[#ede5f9] transition duration-300 cursor-pointer rounded-sm flex items-center justify-center"
            >
                {{ showMore ? 'Show less' : 'Show more' }}
                <Icon :name="showMore ? 'mdi:chevron-up' : 'mdi:chevron-down'"
                    class="inline-block ml-1 -mb-1 text-[16px]" />
            </button>

        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
const showMore = ref(false)

const genericName = [
    "senza fronzoli",
    "senza piedistalli del cavolo",
    "senza perdite di tempo",
]
</script>

<style scoped>
/* Add line-clamp for truncation */
.line-clamp-3 {
    display: -webkit-box;
    /* -webkit-line-clamp: 3; */
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>

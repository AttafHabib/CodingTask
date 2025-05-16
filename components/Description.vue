<template>
    <section class="mt-6">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Description</h2>

        <div :class="{ 'line-clamp-4': !expanded }" class="text-gray-800 space-y-3 transition-all duration-600">
            <p class="text-gray-800 text-[14px]">
                <strong>
                    Come funziona Coinbase per comprare Bitcoin ed altre criptovalute per guadagnarci?
                </strong>
            </p>
            <p v-for="(item, index) in items" :key="index" class="text-[14px] text-gray-800">{{ item }}</p>
            <p class="text-[14px] text-gray-800 py-5">Ecco gli argomenti che vedrai in questo corso su Coinbase:</p>
            <ul class="space-y-7 list-disc list-inside">
                <li v-for="(item, index) in listItems" :key="index"
                    :class="['text-[14px] text-gray-800', index % 2 !== 0 ? 'font-bold' : '']">
                    {{ item }}
                </li>
            </ul>
            <p class="text-[15px] text-gray-800 py-5">Ci vediamo dall'altra parte, iscriviti per non commettere gli
                errori che il 90% fa sempre quando inizia con Coinbase.</p>
            <p class="text-[15px] text-gray-800 pt-1 pb-3">Ci vediamo dall'altra parte nella prima lezione!</p>


            <h2 class="text-2xl font-bold text-gray-900 mb-4">Who this course is for:</h2>
            <ul class="space-y-1 list-disc list-inside">
                <li v-for="(item, index) in courseFor" :key="index">
                    {{ item }}
                </li>
            </ul>
        </div>

        <button @click="expanded = !expanded"
            class="mt-2 h-[2.6rem] text-sm text-purple-600 font-bold px-1 hover:bg-[#ede5f9] transition duration-300 cursor-pointer rounded-sm flex items-center justify-center">
            {{ expanded ? 'Show less' : 'Show more' }}
            <Icon :name="expanded ? 'mdi:chevron-up' : 'mdi:chevron-down'" class="inline-block ml-1 -mb-1 text-[16px]" />
        </button>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const expanded = ref(false)


const items = [
    'Un qualsiasi dispositivo Computer o Smartphone che navighi online',
    "Guarda anche come guadagnare con Coinbase Criprovalute con Coinbase Earn: te lo spiego in maniera semplice.",
    "Coinbase è un ottimo modo facile per iniziare con le criptovalute quindi se ti va iscriviti a questo corso e segui le semplici lezioni.",
    "All'interno del corso troverai anche un invito per guadagnare e ti insegnerò anche come generare il tuo invito personale.",
]
const listItems = [
    "Introduzione: cosa è ed a cosa serve Coinbase?",
    "Come Ti Registri Gratis Passo Passo a Coinbase?",
    "Ecco I Documenti E Dati Che Ti Verranno Richiesti Al Momento Della Tua Registrazione: Come Devi Fare Passo Passo?",
    "Guarda La Panoramica delle Funzionalita Iniziali Di Coinbase...",
    "Cosa Vedrai Appena Entrato In Coinbase?",
    "Carta Di Credito Prepagata Visa Ecco Come Richiederla In Coinbase?",
    "PAC: Piano Di Accumulo E Portafoglio Crypto In Coinbase",
    "Nella Pratica Come Si Fa Con Gli  Acquisti Programmati E Piani Di Accumulo In Coinbase?",
    "Acquisto Cripto Con Conti Corrente, IBAN, Bonifici o Carte Prepagate: Come Si Fa?",
    "Funzionalità Della Scheda Prezzi In Coibase: Cosa Ci Puoi Fare?",
    "Come Si Trasferiscono Criptovalute Da Coinbase Ad Altri Wallet Esterni?",
    "Come Si Ricevono Cryptovalute da altri wallet esterni al tuo Wallet Coinbase?",
    "Cassaforte Coinbase: Cosa è E Cosa Ci Puoi Fare?",
]

const courseFor = [
    "Chiunque Voglia Imparare A Utilizzare Coinbase Senza Stress",
    "Chiunque Voglia Imparare Il Metodo Più Facile Per Comprare BITCOIN",
    "Chiunque Voglia Imparare Il Metodo Più Facile Per Comprare Altre Cirptovalute",
]

</script>

<template>
  <section class="mx-auto px-5 md:px-0 py-8 bg-[#16161d]">
    <div class="mx-auto grid grid-cols-12 w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      <div class="col-span-12 md:col-span-7">
        <Breadcrumb />
        <CourseBanner title="Coinbase: Come Comparare Bitcoin e Guadagnare™?"
          subtitle="Come Acquistare e Guadagnare Facilmente Bitcoin Su Coinbase Corso Online Completo In Italiano"
          :rating="4.7" :ratingsCount="50" :students="1128" instructor="AC169 | Trading ™" lastUpdated="05/2025"
          language="Italian" />
      </div>
      <div class="col-span-12 md:col-span-5 relative">
         <VisibleSidebar />
      </div>
    </div>
  </section>
</template>

<script setup>
// Components will auto-import if in components/ directory
</script>
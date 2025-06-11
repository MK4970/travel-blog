<template>
  <div class="p-6">
  <section class="max-w-6xl mx-auto px-4 py-10">
    <h1 class="text-3xl font-bold mb-8">Мої подорожі</h1>

    <article class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">Неймовірні замки України</h2>
      <p class="mb-4 text-gray-700">Величні кам`яні споруди минулих літ розкажуть вам свою історію.</p>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div class="aspect-square bg-gray-200">
            <img :src="'/images/hotyn.jpg'" class="w-full h-full object-cover" alt="Хотин">
        </div>
        <div class="aspect-square bg-gray-200">
            <img :src="'/images/oleskiy.jpg'" class="w-full h-full object-cover" alt="Олеський замок">
        </div>
        <div class="aspect-square bg-gray-200">
            <img :src="'/images/Zoloch.jpg'" class="w-full h-full object-cover" alt="Золочівський замок">
        </div>
        <div class="aspect-square bg-gray-200">
            <img :src="'/images/palace.jpg'" class="w-full h-full object-cover" alt="Підгорецький замок">
        </div>
        <div class="aspect-square bg-gray-200">
            <img :src="'/images/med.jpg'" class="w-full h-full object-cover" alt="Меджибіж">
        </div>
        <div class="aspect-square bg-gray-200">
            <img :src="'/images/palanok.jfif'" class="w-full h-full object-cover" alt="Замок Паланок">
        </div>
      </div>
    </article>
    <article>
      <h2 class="text-2xl font-semibold mb-4">Тур по Києву</h2>
      <p class="mb-4 text-gray-700">Київ - культурне серце України</p>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div class="aspect-square bg-gray-200">
            <img :src="'/images/pech.jpg'" class="w-full h-full object-cover" alt="Києво - Печерська лавра">
        </div>
        <div class="aspect-square bg-gray-200">
            <img :src="'/images/muzeum.jpg'" class="w-full h-full object-cover" alt="Музей історії України">
        </div>
        <div class="aspect-square bg-gray-200">
            <img :src="'/images/sofy.jpg'" class="w-full h-full object-cover" alt="Софійський собор">
        </div>
        <div class="aspect-square bg-gray-200">
            <img :src="'/images/maidan.jpg'" class="w-full h-full object-cover" alt="Майдан Незалежності">
        </div>
        <div class="aspect-square bg-gray-200">
            <img :src="'/images/vorota.jpg'" class="w-full h-full object-cover" alt="Золоті ворота">
        </div>
        <div class="aspect-square bg-gray-200">
            <img :src="'/images/andriy.jpg'" class="w-full h-full object-cover" alt="Андріївський узвіз">
        </div>
      </div>
    </article>
  </section>
  <div class="mt-10">
      <h3 class="text-lg font-medium mb-2">Коментарі:</h3>
      <p class="text-gray-500 italic">(тут може буде блок коментарів)</p>
    </div>
  </div>
</template>


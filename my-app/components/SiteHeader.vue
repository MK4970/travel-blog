<template>
  <header class="bg-white shadow sticky top-0 z-50">
    <nav class="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
      <NuxtLink to="/" class="text-xl font-bold text-teal-700">🌍 Travellisimo</NuxtLink>
      <ul class="flex space-x-4">
        <li><NuxtLink to="/" class="text-gray-700 hover:text-teal-600 transition">Головна</NuxtLink></li>
        <li><NuxtLink to="/trips" class="text-gray-700 hover:text-teal-600 transition">Подорожі</NuxtLink></li>
        <li><NuxtLink to="/contacts" class="text-gray-700 hover:text-teal-600 transition">Контакти</NuxtLink></li>
        <li><NuxtLink to="/author" class="text-gray-700 hover:text-teal-600 transition">Про Мене</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>


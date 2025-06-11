<template>
  <section class="my-10">
    <div class="max-w-6xl mx-auto px-4">
    <h2 class="text-2xl font-semibold mb-4">Цікаві фото</h2>
    <Swiper
      :modules="[Navigation, Pagination, Autoplay]"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{ delay: 3000 }"
      pagination
      navigation
      class="rounded-lg shadow-md overflow-hidden"
    >
      <SwiperSlide v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Travel photo" class="w-full h-140 object-cover" />
      </SwiperSlide>
    </Swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const images = [
  '/images/snowyforest.jpg',
  '/images/hmel.jpg',
  '/images/monument.jpg',
  '/images/zakat.jpg'
]
</script>
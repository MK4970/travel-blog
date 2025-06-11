<template>
  <div class="p-6">
    <!-- Вітання -->
    <section class="text-center mb-8">
      <h1 class="text-4xl font-bold text-teal-700">Ласкаво просимо до мого тревел-блогу!</h1>
    <p class="text-lg text-gray-600 mt-2">Подорожуй зі мною по найцікавіших місцях світу!</p>
    </section>

    <!-- Слайдер з фото -->
    <TravelSlider />

    <!-- Карта -->
    <section class="my-10">
    <div class="max-w-5xl mx-auto px-4">
      <h2 class="text-2xl font-semibold mb-4">Місце знаходження замку</h2>
      <div class="w-full h-[400px]">
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2594.5405849079375!2d27.41228!3d49.436499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d8b6da396e069%3A0x59fff1ab4c0fa95f!2z0JPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INC40YHRgtC-0YDQuNC60L4t0LrRg9C70YzRgtGD0YDQvdGL0Lkg0LfQsNC_0L7QstC10LTQvdC40LogItCc0LXQttC40LHQvtC2Ig!5e0!3m2!1sru!2sua!4v1749406025705!5m2!1sru!2sua" 
        width="100%" height="450" style="border:0;" allowfullscreen="" 
        loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>  
    </section>

    <!-- Відео -->
    <section class="mt-6 max-w-5xl mx-auto px-4">
    <div class="aspect-w-16 aspect-h-9 mt-4">
        <h2 class="text-2xl font-semibold mb-4 mt-10">Краєвиди з вежі Меджибізького замку</h2>
        <iframe 
          class="w-full h-full rounded-lg"
          width="560" height="315" src="https://www.youtube.com/embed/zlfRBCXBz-s?si=ZR7p4sjSdsRCCtL7" 
          title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
          encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
    </div>
    </section>

<!-- Погода -->
    <section class="my-10">
    <div class="max-w-5xl mx-auto px-4">
    <h2 class="text-2xl font-semibold mb-4">Поточна погода в Меджібожі</h2>
    <div class="w-full">
      <a 
        class="weatherwidget-io w-full" 
        href="https://forecast7.com/uk/49d4427d40/medzhybizh/" 
        data-label_1="MEDZHYBIZH" 
        data-label_2="WEATHER" 
        data-icons="Climacons Animated" 
        data-theme="original" 
        data-basecolor="#174a81" 
        data-highcolor="#ff8989" 
        >MEDZHYBIZH WEATHER
     </a>
    </div>
  </div>
</section>
  </div>
</template>

<!-- імпорт слайдера та загрузка віджета -->
<script setup>
import TravelSlider from '~/components/TravelSlider.vue'
onMounted(() => {
const script = document.createElement("script")
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
script.async = true
document.body.appendChild(script)
})
</script>

<!-- фікс сторін відео -->
<style scoped>
.aspect-w-16 {
  position: relative;
  padding-bottom: 56.25%;
}
.aspect-w-16 iframe {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>

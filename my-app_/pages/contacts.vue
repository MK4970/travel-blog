<template>
  <section class="max-w-xl mx-auto mt-10 px-4">
    <h2 class="text-2xl font-bold mb-6">Зв'яжіться з нами</h2>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label class="block font-medium">Ім’я</label>
        <input v-model="form.name" type="text" required class="w-full border rounded p-2" />
      </div>
      
      <div>
        <label class="block font-medium">Email</label>
        <input v-model="form.email" type="email" required class="w-full border rounded p-2" />
      </div>
      <div>
        <label class="block font-medium">Повідомлення</label>
        <textarea v-model="form.message" required class="w-full border rounded p-2 h-32"></textarea>
      </div>
      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Надіслати
      </button>
      <p v-if="success" class="text-green-600 mt-2">Повідомлення надіслано успішно!</p>
      <p v-if="error" class="text-red-600 mt-2">Сталася помилка при надсиланні.</p>
    </form>
  </section>
</template>
<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})
const success = ref(false)
const error = ref(false)
const handleSubmit = async () => {
  success.value = false
  error.value = false
  try {
    const res = await $fetch('http://localhost:5000/send-email', {
      method: 'POST',
      body: form.value
    })
    if (res.success) {
      success.value = true
      form.value = { name: '', email: '', message: '' }
    } else {
      error.value = true
    }
  } catch (err) {
    error.value = true
  }
}
</script>


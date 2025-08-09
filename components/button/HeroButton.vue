<template>
  <button :class="['btn', bgClass, 'd-flex', 'flex-column', 'align-items-center', 'p-3']" @click="handleClick">
    <component :is="icon" class="hero-icon mb-2" :style="{ fontSize: iconSize + 'px' }" />
    <span class="ms-2" :style="{ cursor: 'pointer' }">{{ label }}</span> <!-- Menambahkan pointer cursor pada label -->
  </button>
</template>

<script setup>
defineProps({
  label: String,
  icon: Object,
  bgClass: String,
  iconSize: {
    type: Number,
    default: 50, // Ukuran default ikon, bisa disesuaikan
  }
})
</script>

<style scoped>
.hero-icon {
  color: #5cc6f7; /* Warna ikon */
}

button {
  border-radius: 10px;
  border: 2px solid transparent;
  display: flex;
  flex-direction: column; /* Mengatur layout agar ikon di atas dan label di bawah */
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 20px;
  transition: background-color 0.3s ease;
  width: 100px; /* Lebar tombol */
  height: 100px; /* Tinggi tombol */
}

button:hover {
  background-color: rgba(144, 222, 241, 0.991);
}

span {
  font-size: 14px;
  color: #333;
}
</style>

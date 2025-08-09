<template>
  <div 
    class="card hover-card" 
    style="max-width: 300px"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <img class="card-img-top" :src="cityRainImage" alt="City Rain">

    <div 
      class="card-img-overlay text-overlay"
      :class="{ 'show-details': isHovered }"
    >
      <h4 class="card-title">John Doe</h4>
      <p class="card-text">Some example text.</p>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import cityRainImage from '~/assets/img/city-rain.jpg';

// Variabel reaktif untuk melacak status hover
const isHovered = ref(false);
</script>

<style scoped>
/* Styling dasar untuk card */
.card {
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  height: auto;
  position: relative; /* Penting untuk positioning overlay */
  cursor: pointer;
}
.card-img-top {
  filter: brightness(0.6);
  transition: filter 0.3s ease;
}
.hover-card:hover .card-img-top {
  filter: brightness(0.4); /* Efek gambar jadi lebih gelap saat dihover */
}

/* Styling overlay (bagian yang muncul/hilang) */
.text-overlay {
  background-color: rgba(0, 0, 0, 0.5); /* Background overlay yang lebih gelap */
  color: white;
  opacity: 0; /* Secara default tidak terlihat */
  transition: opacity 0.3s ease; /* Transisi halus saat muncul */
}
.text-overlay.show-details {
  opacity: 1; /* Tampilkan overlay saat kelas 'show-details' ada */
}

.card-title, .card-text {
    margin-bottom: 0.5rem;
}
</style>
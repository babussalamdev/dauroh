<template>
  <div class="container mt-5">
    <div class="row g-4 justify-content-center">
      <div class="col-md-4" v-for="(card, index) in cards" :key="index">
        <div 
          class="card hover-card h-100" 
          @mouseenter="isHovered = true"
          @mouseleave="isHovered = true"
        >
          <img class="card-img-top" :src="card.image" :alt="card.title">
          <div 
            class="card-img-overlay text-overlay"
            :class="{ 'show-details': isHovered }"
          >
            <h4 class="card-title">{{ card.title }}</h4>
            <p class="card-text">{{ card.text }}</p>
            <a :href="card.link" class="btn btn-primary">See Profile</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// PENTING: Impor gambar dari assets/ sebagai module
import cityRainImage from '~/assets/img/city-rain.jpg';

// Data untuk 3 card
const cards = ref([
  { id: 1, title: 'Card 1', text: 'Some example text.', link: '#', image: cityRainImage },
  { id: 2, title: 'Card 2', text: 'Some example text.', link: '#', image: cityRainImage },
  { id: 3, title: 'Card 3', text: 'Some example text.', link: '#', image: cityRainImage },
]);

const isHovered = ref(false);
</script>

<style scoped>
/* Styling dasar untuk card */
.card {
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative; /* Penting untuk positioning overlay */
  cursor: pointer;
}
.card-img-top {
  filter: brightness(0.6);
  transition: filter 0.3s ease;
  width: 100%;
  height: 100%; /* Mengisi seluruh tinggi card */
  object-fit: cover; /* Agar gambar tidak terdistorsi */
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
}
.text-overlay.show-details {
  opacity: 1; /* Tampilkan overlay saat kelas 'show-details' ada */
}

.card-title, .card-text {
    margin-bottom: 0.5rem;
}
</style>
<template>
  <div 
    id="comingSoonCarousel" 
    class="carousel slide carousel-dark" 
    data-bs-ride="carousel"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="carousel-inner">
      <div 
        v-for="(chunk, chunkIndex) in movieChunks"
        :key="chunkIndex"
        :class="['carousel-item', { 'active': chunkIndex === 0 }]"
      >
        <div class="row g-3 justify-content-center">
          <a href="#" v-for="movie in chunk" :key="movie.id" class="movie-card-wrapper">
            <div class="card movie-card rounded-lg overflow-hidden h-100">
              <div class="position-relative">
                <img :src="movie.poster" class="card-img-top" :alt="movie.title">
                <span class="overlay-top">{{ movie.topOverlay }}</span>
              </div>
              <div class="card-body d-flex flex-column p-3">
                <h6 class="card-title fw-bold">{{ movie.title }}</h6>
                <small class="text-muted mb-2">{{ movie.date }}</small>
                <div class="mt-auto d-flex justify-content-between gap-2">
                    <button class="btn btn-sm btn-outline-primary rounded-pill">Lihat trailer</button>
                    <button class="btn btn-sm btn-primary rounded-pill">Beli tiket</button>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <template v-if="movieChunks.length > 1">
      <button
        class="carousel-control-prev"
        :class="{ 'd-none': !isHovered }"
        type="button"
        data-bs-target="#posterCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        :class="{ 'd-none': !isHovered }"
        type="button"
        data-bs-target="#posterCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </template>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
// PENTING: Impor gambar dari assets/ sebagai module
import cityRainImage from '~/assets/img/city-rain.jpg';

const movies = ref([
  { id: 1, title: 'Tinggal Meninggal', poster: cityRainImage, topOverlay: 'XXI Telah Dibuka', date: 'Di Bioskop 14 Agustus 2025' },
  { id: 2, title: 'Pamali', poster: cityRainImage, topOverlay: 'Advance ticket sales', date: '7 Agustus 2025 di Bioskop' },
  { id: 3, title: 'Panggil Aku Ayah', poster: cityRainImage, topOverlay: 'Advance ticket sales', date: '7 Agustus 2025 di Bioskop' },
  { id: 4, title: 'My Daughter is a Zombie', poster: cityRainImage, topOverlay: 'Advance ticket sales', date: '12 Agustus 2025 di Bioskop' },
  { id: 5, title: 'Movie 5', poster: cityRainImage, topOverlay: 'Advance ticket sales', date: '7 Agustus 2025 di Bioskop' },
  { id: 6, title: 'Movie 6', poster: cityRainImage, topOverlay: 'Advance ticket sales', date: '7 Agustus 2025 di Bioskop' },
  { id: 7, title: 'Movie 7', poster: cityRainImage, topOverlay: 'Advance ticket sales', date: '7 Agustus 2025 di Bioskop' },
  { id: 8, title: 'Movie 8', poster: cityRainImage, topOverlay: 'Advance ticket sales', date: '7 Agustus 2025 di Bioskop' },
]);

const isHovered = ref(false);

const movieChunks = computed(() => {
  const chunkSize = 4; // Mengubah ukuran slide menjadi 4
  const chunks = [];
  for (let i = 0; i < movies.value.length; i += chunkSize) {
    chunks.push(movies.value.slice(i, i + chunkSize));
  }
  return chunks;
});
</script>
<style scoped>
/* Wrapper utama carousel, ini jadi patokan posisi tombol */
.carousel {
  position: relative;
  /* Beri sedikit ruang di kiri-kanan agar tombol tidak terlalu mepet */
  padding: 0 50px; 
}
.carousel-inner {
  overflow: hidden;
  padding: 10px;
} /* Kembalikan ke default Bootstrap agar rapi */
/* Style untuk kartu film dan overlay */
.movie-card {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}
.movie-card:hover {
  transform: translateY(-5px); /* Efek naik saat hover */
}
.movie-card img {
    width: 100%;
    height: 350px;
    object-fit: cover;
}
.overlay-top {
    position: absolute;
    top: 10px;
    left: 10px;
  background-color: #0d6efd; /* Gunakan warna primary Bootstrap */
    color: white;
    padding: 4px 8px;
    border-radius: 5px;
    font-size: 0.75rem;
  font-weight: bold;
}
.card-body {
  flex-grow: 1; /* Pastikan card-body mengisi sisa ruang */
  display: flex;
  flex-direction: column;
}
.card-body .btn {
  font-size: 0.8rem;
}
.carousel-control-prev,
.carousel-control-next {
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  opacity: 0.8; /* Sembunyikan secara default */
  transition: opacity 0.3s ease;
  top: 50%; /* Posisikan 50% dari atas container */
  transform: translateY(-50%); /* Geser ke atas 50% dari tinggi TOMBOL itu sendiri */
}
.carousel-control-prev {
  left: 30px; 
}
.carousel-control-next {
  right: 30px;
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: invert(1) grayscale(100);
}
.movie-card-wrapper {
  /* Tentukan lebar setiap kartu di sini */
  /* flex: 0 0 auto; agar tidak menyusut/melebar */
  /* width: 23%; sedikit kurang dari 25% untuk memberi ruang bagi 'gap' */
  flex: 0 0 100%;
  max-width: 250px; /* Batasi lebar maksimal jika perlu */
}
</style>
<template>
  <div class="container mt-5">
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
          <a href="#" v-for="movie in chunk" :key="movie.id" class="col-6 col-md-3 mb-4">
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
        data-bs-target="#comingSoonCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        :class="{ 'd-none': !isHovered }"
        type="button"
        data-bs-target="#comingSoonCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </template>
  </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import cityRainImage from '~/assets/img/city-rain.jpg';

const isHovered = ref(false);

// Data film tetap sama
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

const movieChunks = computed(() => {
  const chunkSize = 4;
  const chunks = [];
  for (let i = 0; i < movies.value.length; i += chunkSize) {
    chunks.push(movies.value.slice(i, i + chunkSize));
  }
  return chunks;
});
</script>

<style scoped>
/* Udah pas ini */
.carousel {
  position: relative;
}

/* Beri ruang agar bayangan kartu tidak terpotong */
.carousel-inner {
  overflow: visible;
  padding: 60px;
  overflow-x: hidden;

}

/* Wrapper <a> tidak perlu style khusus, biarkan Bootstrap yg mengatur */
/* Kita styling langsung card-nya */
.card.movie-card {
  box-shadow: 0 4px 10px #b924241a;
  transition: transform 0.3s ease;
  border: none; /* Hilangkan border default card */
  
}

.card.movie-card:hover {
  transform: translateY(-5px);
}

.card.movie-card img {
  width: 100%;
  aspect-ratio: 2 / 3; /* Ini kunci agar gambar selalu proporsional */
  object-fit: cover;
}

.overlay-top {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #0d6efd;
  color: white;
  padding: 4px 8px;
  border-radius: 5px;
  font-size: 0.75rem;
  font-weight: bold;
}

.card-body {
  flex-grow: 1;
}

.card-body .btn {
  font-size: 0.8rem;
  padding: 0.25rem 0.75rem; /* Ukuran tombol lebih pas */
}

/* Pindahkan tombol keluar dari area konten */
.carousel-control-prev,
.carousel-control-next {
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  opacity: 0.8;
  transition: opacity 0.3s ease;
  top: 50%;
  transform: translateY(-50%);
}

.carousel-control-prev {
  position: absolute;
}

.carousel-control-next {
  position: absolute;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: invert(1) grayscale(100);
}

.movie-card-wrapper {
  flex: 0 0 100%;
  max-width: 250px;
  margin: auto;
}
</style>
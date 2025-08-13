<template>
  <div
    id="filmCarousel"
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
          <a href="#" v-for="(movie, index) in chunk" :key="movie.id" class="col-4">
            <div class="movie-card">
              <img :src="movie.poster" class="img-fluid rounded-lg" :alt="movie.title">
              <div class="overlay p-2">
                <p class="title fw-bold mb-1">{{ movie.overlayTitle }}</p>
                <p class="subtitle text-muted mb-0">{{ movie.overlaySubtitle }}</p>
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
        data-bs-target="#filmCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        :class="{ 'd-none': !isHovered }"
        type="button"
        data-bs-target="#filmCarousel"
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
  // Data film dummy dengan semua poster disamakan
  { id: 1, title: 'Movie 1', poster: cityRainImage},
  { id: 2, title: 'Movie 3', poster: cityRainImage },
  { id: 3, title: 'Movie 4', poster: cityRainImage},
  { id: 4, title: 'Movie 5', poster: cityRainImage},
  { id: 5, title: 'Movie 6', poster: cityRainImage},
  { id: 6, title: 'Movie 7', poster: cityRainImage},
]);

const isHovered = ref(false);

const movieChunks = computed(() => {
  const chunkSize = 3;
  const chunks = [];
  for (let i = 0; i < movies.value.length; i += chunkSize) {
    chunks.push(movies.value.slice(i, i + chunkSize));
  }
  return chunks;
});
</script>

<style scoped>
/* Style untuk kartu film dan overlay */
.movie-card {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    width: 100%;
    height: auto;
}
.movie-card:hover {
    transform: scale(1.05);
}
.movie-card img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
}
.overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0));
    color: white;
    padding: 10px;
}
.overlay .title {
    font-size: 0.9rem;
    margin-bottom: 0;
}
.overlay .subtitle {
    font-size: 0.8rem;
    color: #ccc;
}

/* Style untuk carousel container */
.carousel-inner {
  overflow: visible;
  padding: 10px;
  position: relative;
}
.carousel-item {
  /* Hapus padding dari carousel-item agar row bisa mengisi penuh */
  padding: 0 10px;
}
/* Ganti row g-3 menjadi row g-3 */
.carousel-item .row {
    margin: 0; /* Hapus margin default row */
}

/* Styling tombol navigasi */
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
  left: -40px;
}

.carousel-control-next {
  right: -40px;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: invert(1) grayscale(100);
}
.carousel-item-link {
  text-decoration: none;
  display: block;
  transition: transform 0.3s ease;
}
</style>
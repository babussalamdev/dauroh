<template>
  <div class="container mt-5">
  <div 
    id="posterCarousel"
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
        <div class="row g-3 justify-content-center align-items-center">
          <div v-for="(movie, index) in chunk" :key="index" class="col-6 col-md-3 mb-4">
            <div class="movie-card">
              <img :src="movie.poster" class="img-fluid rounded-lg" :alt="movie.title">
              <div class="overlay p-2">
                <p class="title fw-bold mb-1">{{ movie.title }}</p>
                <p class="subtitle text-muted mb-0">{{ movie.genre }}</p>
              </div>
            </div>
          </div>
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
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import cityRainImage from '~/assets/img/city-rain.jpg';

const isHovered = ref(false);

const movies = ref([
  { id: 1, title: 'Film 1', genre: 'Aksi', poster: cityRainImage },
  { id: 2, title: 'Film 2', genre: 'Drama', poster: cityRainImage },
  { id: 3, title: 'Film 3', genre: 'Komedi', poster: cityRainImage },
  { id: 4, title: 'Film 4', genre: 'Horror', poster: cityRainImage },
  { id: 5, title: 'Film 5', genre: 'Aksi', poster: cityRainImage },
  { id: 6, title: 'Film 6', genre: 'Drama', poster: cityRainImage },
  { id: 7, title: 'Film 7', genre: 'Komedi', poster: cityRainImage },
  { id: 8, title: 'Film 8', genre: 'Horror', poster: cityRainImage },
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
/* Style untuk container carousel */
.carousel {
  position: relative;
}

/* Style untuk wrapper carousel inner */
.carousel-inner {
  overflow: visible;
  padding: 60px;
  align-items: center;
  overflow-x: hidden;
}

/* Style untuk kartu film */
.movie-card {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  width: 100%;
}

/* Efek hover untuk memperbesar kartu */
.movie-card:hover {
  transform: scale(1.05);
}

/* Style untuk gambar film */
.movie-card img {
  width: 100%;
  height: auto;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  display: block;
}

/* Efek hover untuk menggelapkan gambar */
.movie-card:hover img {
  filter: brightness(0.4);
}

/* Style untuk overlay teks */
.overlay {
  position: absolute;
  width: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

/* Teks overlay muncul saat kursor di-hover */
.movie-card:hover .overlay {
  opacity: 1;
}

.overlay .title {
  font-size: 0.9rem;
  font-weight: bold;
}

.overlay .subtitle {
  font-size: 0.8rem;
  color: #ccc;
}

/* Styling tombol navigasi carousel */
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
  /* ABSOLUTE BIAR PAS SAMA CONTAINER */
  position:absolute; 
}

.carousel-control-next {
  position:absolute;
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: invert(1) grayscale(100);
}

/* Styling untuk setiap card */
.movie-card-wrapper {
  flex: 0 0 100%;
  max-width: 250px;
  margin: auto;
}
</style>

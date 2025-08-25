<template>
  <div
    id="topCarousel"
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
          <a href="#" v-for="(movie, index) in chunk" :key="movie.id" class="col-12 col-md-4">
           <div class="movie-card-container d-flex justify-content-center align-items-center">
            <div class="movie-card">
              <img :src="movie.poster" class="img-fluid rounded-lg" :alt="movie.title">
              <div class="overlay p-2">
                <p class="title fw-bold mb-1">{{ movie.overlayTitle }}</p>
                <p class="subtitle text-muted mb-0">{{ movie.overlaySubtitle }}</p>
              </div>
            </div>
           </div>
          </a>
        </div>
      </div>
    </div>

    <template v-if="movieChunks.length > 1">
      <div class="container mt-1">
      <button
        class="carousel-control-prev"
        :class="{ 'd-none': !isHovered }"
        type="button"
        data-bs-target="#topCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        :class="{ 'd-none': !isHovered }"
        type="button"
        data-bs-target="#topCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import cityRainImage from '~/assets/img/city-rain.jpg';

const isHovered = ref(false);
const isMobile = ref(false); // Variabel reaktif untuk melacak mode HP

const movies = ref([
  { id: 1, title: 'Movie 1', poster: cityRainImage, overlayTitle: 'Advance ticket sales', overlaySubtitle: '7 Agustus 2025 di Bioskop' },
  { id: 2, title: 'Movie 2', poster: cityRainImage, overlayTitle: 'Advance ticket sales', overlaySubtitle: '7 Agustus 2025 di Bioskop' },
  { id: 3, title: 'Movie 3', poster: cityRainImage, overlayTitle: 'Advance ticket sales', overlaySubtitle: '7 Agustus 2025 di Bioskop' },
  { id: 4, title: 'Movie 4', poster: cityRainImage, overlayTitle: 'Advance ticket sales', overlaySubtitle: '7 Agustus 2025 di Bioskop' },
  { id: 5, title: 'Movie 5', poster: cityRainImage, overlayTitle: 'Advance ticket sales', overlaySubtitle: '7 Agustus 2025 di Bioskop' },
  { id: 6, title: 'Movie 6', poster: cityRainImage, overlayTitle: 'Advance ticket sales', overlaySubtitle: '7 Agustus 2025 di Bioskop' },
]);

const movieChunks = computed(() => {
  // Mengubah ukuran slide secara dinamis berdasarkan ukuran layar
  const chunkSize = isMobile.value ? 1 : 3;
  const chunks = [];
  for (let i = 0; i < movies.value.length; i += chunkSize) {
    chunks.push(movies.value.slice(i, i + chunkSize));
  }
  return chunks;
});

const handleResize = () => {
  isMobile.value = window.innerWidth <= 800; // Definisikan lebar layar HP
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize(); // Panggil saat pertama kali dimuat
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
/* Style untuk kartu film dan overlay */
.movie-card {
    position:sticky;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    width: 100%;
    height: auto;
    align-items: center;
    
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
    width: 100%;
    background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0));
    color: white;
    
}
.overlay .title {
    font-size: 0.9rem;
}
.overlay .subtitle {
    font-size: 0.8rem;
    color: #ccc;
}

/* Style untuk carousel container */
.carousel-inner {
  overflow: visible;
  padding: 60px;
  align-items: center;
  overflow-x: hidden;
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
  position: absolute;
}
.carousel-control-next {
  position: absolute;
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
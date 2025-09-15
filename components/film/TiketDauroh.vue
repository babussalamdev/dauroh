<template>
  <div class="container mt-0">

    <div
      id="tiketDauroh"
      class="carousel slide carousel-dark"
      data-bs-ride="carousel"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <div class="carousel-inner">
        <div
          v-for="(chunk, chunkIndex) in daurohStore.tiketDaurohChunks"
          :key="chunkIndex"
          :class="['carousel-item', { 'active': chunkIndex === 0 }]"
        >
          <div class="row g-3 justify-content-center">
            <a href="#" v-for="dauroh in chunk" :key="dauroh.id" class="col-6 col-md-3 mb-4 text-decoration-none">
              <div class="card dauroh-card rounded-lg overflow-hidden h-100">
                <div class="position-relative">
                  <img :src="dauroh.poster" class="card-img-top" :alt="dauroh.title">
                  <span class="overlay-top">{{ dauroh.topOverlay }}</span>
                </div>
                <div class="card-body d-flex flex-column p-3">
                  <h6 class="card-title fw-bold text-dark">{{ dauroh.title }}</h6>
                  <small class="text-muted mb-2">{{ dauroh.date || dauroh.genre }}</small>
                  <div class="mt-auto d-flex flex-column flex-sm-row gap-2">
                    <button class="btn btn-sm btn-outline-primary rounded-pill w-100">Detail</button>
                    <button class="btn btn-sm btn-primary rounded-pill w-100">Daftar</button>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <template v-if="daurohStore.tiketDaurohChunks.length > 1">
        <button
          class="carousel-control-prev"
          :class="{ 'd-none': !isHovered }"
          type="button"
          data-bs-target="#tiketDauroh"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          :class="{ 'd-none': !isHovered }"
          type="button"
          data-bs-target="#tiketDauroh"
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
import { ref } from 'vue';
import { useDaurohStore } from '~/stores/dauroh';

const isHovered = ref(false);
const daurohStore = useDaurohStore();

</script>

<style scoped>

.carousel {
  position: relative;
}
.carousel-inner {
  overflow: visible;
  padding: 60px;
  overflow-x: hidden;
}
.card.dauroh-card {
  box-shadow: 0 4px 10px rgba(185, 36, 36, 0.1);
  transition: transform 0.3s ease;
  border: none;
}
.card.dauroh-card:hover {
  transform: translateY(-5px);
}
.card.dauroh-card img {
  width: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
}
.overlay-top {
  position:absolute;
  top: 10px; left: 10px;
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
  padding: 0.25rem 0.75rem;
}
/* Sisa CSS Anda tidak diubah */
.carousel-control-prev,
.carousel-control-next {
  width: 50px; height: 50px;
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
@media (min-width: 375px) {
  .flex-sm-row .btn {
    width: auto;
  }
}
</style>
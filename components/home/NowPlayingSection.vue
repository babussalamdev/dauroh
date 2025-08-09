<template>
  <div class="container mt-5" style="height: 300px;">
  <FilmCarousel />
  </div>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="mb-0">Lagi tayang</h2>
        <a href="#" class="text-primary fw-bold text-decoration-none">Lihat semua ></a>
    </div>
    <div>
      <PosterCarousel/>
    </div>

    <div style="height: 50px;"></div>
  </div>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="mb-0">Coming Soon</h2>
        <a href="#" class="text-primary fw-bold text-decoration-none">Lihat semua ></a>
    </div>
    <div>
      <PosterCarousel/>
    </div>

    <div style="height: 50px;"></div>
  </div>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="mb-0">Promo</h2>
        <a href="#" class="text-primary fw-bold text-decoration-none">Lihat semua ></a>
    </div>
    <div>
      <PosterCarousel/>
    </div>

    <div style="height: 50px;"></div>
  </div>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="mb-0">Yuk, nyemil di m.food</h2>
        <a href="#" class="text-primary fw-bold text-decoration-none">Lihat semua ></a>
    </div>
    <div>
      <PosterCarousel/>
    </div>
    <div style="height: 50px;"></div>
  </div>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="mb-0">Cari tau studio XXI, yuk!</h2>
        <a href="#" class="text-primary fw-bold text-decoration-none">Lihat semua ></a>
    </div>
    <div>
      <PosterCarousel/>
    </div>

    <div style="height: 50px;"></div>
  </div>
</template>

<script setup>
// Import komponen FilmCarousel dari folder film
import FilmCarousel from '../film/FilmCarousel.vue';
import PosterCarousel from '../film/PosterCarousel.vue';
</script>

<style scoped>
.text-primary {
  color: var(--color-primary) !important;
}
</style>
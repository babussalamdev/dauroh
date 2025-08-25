<template>
  <div class="container mt-1">
    <div>
      <TopCarousel />
    </div>

    <div class="mt-1">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="mb-0">Lagi tayang</h2>
        <a href="#" class="btn btn-primary">Lihat semua ></a>
      </div>
      <div class="mb-0">
        <PosterCarousel />
      </div>
    </div>

    <div class="mt-1">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="mb-0">Coming Soon</h2>
        <a href="#" class="btn btn-primary">Lihat semua ></a>
      </div>
      <div class="mb-0">
        <ComingSoonCarousel />
      </div>
    </div>

    <div class="mt-1">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="mb-0">Promo</h2>
        <a href="#" class="btn btn-primary">Lihat semua ></a>
      </div>
      <div class="mb-0">
        <PromoCarousel />
      </div>
    </div>

    <div class="mt-1">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="mb-0">Yuk, nyemil di m.food</h2>
        <a href="#" class="btn btn-primary">Lihat semua ></a>
      </div>
      <div class="mb-0">
        <FoodBanner />
      </div>
    </div>

    <div class="mt-1">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="mb-0">Cari tau studio XXI, yuk!</h2>
      </div>
      <div class="mb-0">
        <Studio />
      </div>
    </div>

    <div class="mt-1">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="mb-0">Cari tau studio XXI, yuk!</h2>
      </div>
      <div class="mb-0"> 
        <BottomBanner />
      </div>
    </div>
  </div>
</template>

<script setup>
// Bagian script kamu tidak perlu diubah sama sekali
import ComingSoonCarousel from "../film/ComingSoonCarousel.vue";
import PosterCarousel from "../film/PosterCarousel.vue";
import Studio from "../film/Studio.vue";
import BottomBanner from "../film/BottomBanner.vue";
import FoodBanner from "../film/FoodBanner.vue";
import TopCarousel from "../film/TopCarousel.vue";
import PromoCarousel from "../film/PromoCarousel.vue";
</script>

<style scoped>
/* Media queries untuk tampilan responsif */
@media (max-width: 375px) {
  .movie-card-wrapper {
    flex: 0 0 50%; /* 2 kolom pada perangkat mobile */
    max-width: 50%;
  }
}

@media (min-width: 1280px) {
  .movie-card-wrapper {
    flex: 0 0 25%; /* 4 kolom pada perangkat desktop */
    max-width: 25%;
  }
}
</style>

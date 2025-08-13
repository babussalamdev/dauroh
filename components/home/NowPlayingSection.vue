<template>
  <div class="container mt-5" style="height: 300px">
    <TopCarousel />
  </div>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="mb-0">Lagi tayang</h2>
      <a href="#" class="btn btn-primary" bgClass="bg-info-light"
        >Lihat semua ></a
      >
    </div>
    <div>
      <PosterCarousel />
    </div>
    <div style="height: 50px"></div>
  </div>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="mb-0">Coming Soon</h2>
      <a href="#" class="btn btn-primary" bgClass="bg-info-light"
        >Lihat semua ></a
      >
    </div>
  </div>
  <div><ComingSoonCarousel /></div>
  <div style="height: 50px"></div>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="mb-0">Promo</h2>
      <a href="#" class="btn btn-primary" bgClass="bg-info-light"
        >Lihat semua ></a
      >
    </div>
    <div>
      <PromoCarousel />
    </div>
    <div style="height: 50px"></div>
  </div>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="mb-0">Yuk, nyemil di m.food</h2>
      <a href="#" class="btn btn-primary" bgClass="bg-info-light"
        >Lihat semua ></a
      >
    </div>
    <div>
      <FoodBanner />
    </div>
    <div style="height: 50px"></div>
  </div>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="mb-0">Cari tau studio XXI, yuk!</h2>
    </div>
    <div>
      <Studio />
    </div>
    <div style="height: 50px"></div>
  </div>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="mb-0">Cari tau studio XXI, yuk!</h2>
    </div>
    <div>
      <BottomBanner />
    </div>
    <div style="height: 50px"></div>
  </div>
</template>

<script setup>
// Import komponen FilmCarousel dari folder film
import ComingSoonCarousel from "../film/ComingSoonCarousel.vue";
import PosterCarousel from "../film/PosterCarousel.vue";
import Studio from "../film/Studio.vue";
import BottomBanner from "../film/BottomBanner.vue";
import FoodBanner from "../film/FoodBanner.vue";
import TopCarousel from "../film/TopCarousel.vue";
import PromoCarousel from "../film/PromoCarousel.vue";
</script>

<style scoped></style>

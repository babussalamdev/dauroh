<template>
  <div class="container">
    <div>
      <TopCarousel />
    </div>

    <div class>
      <div class="d-flex justify-content-between align-items-center">
        <h2 class="mb-0">Lagi tayang</h2>
        <a href="#" class="btn btn-primary">Lihat semua ></a>
      </div>
      <div>
        <PosterCarousel />
      </div>
    </div>

    <div class>
      <div class="d-flex justify-content-between align-items-center">
        <h2 class="mb-0">Coming Soon</h2>
        <a href="#" class="btn btn-primary">Lihat semua ></a>
      </div>
      <div>
        <TiketDauroh />
      </div>
    </div>

    <div class="pt-5">
      <div class="d-flex justify-content-between align-items-center">
        <h2 class="mb-0">Promo</h2>
        <a href="#" class="btn btn-primary">Lihat semua ></a>
      </div>
      <div>
        <PromoCarousel />
      </div>
    </div>

    <div class="pt-5">
      <div class="d-flex justify-content-between align-items-center">
        <h2 class="mb-0">Yuk, nyemil di m.food</h2>
        <a href="#" class="btn btn-primary">Lihat semua ></a>
      </div>
      <div>
        <FoodBanner />
      </div>
    </div>

    <div class="pt-5">
      <div class="d-flex justify-content-between align-items-center">
        <h2 class="mb-0">Cari tau, yuk!</h2>
      </div>
      <div>
        <Studio />
      </div>
    </div>

    <div class="pt-5">
      <div class="d-flex justify-content-between align-items-center">
        <h2 class="mb-0">Download XXI, yuk!</h2>
      </div>
      <div> 
        <BottomBanner />
      </div>
    </div>
  </div>
</template>

<script setup>
// Bagian script kamu tidak perlu diubah sama sekali
import TiketDauroh  from "../dauroh/TiketDauroh.vue";
import PosterCarousel from "../dauroh/PosterCarousel.vue";
import Studio from "../dauroh/Studio.vue";
import BottomBanner from "../dauroh/BottomBanner.vue";
import FoodBanner from "../dauroh/FoodBanner.vue";
import TopCarousel from "../dauroh/TopCarousel.vue";
import PromoCarousel from "../dauroh/PromoCarousel.vue";
</script>

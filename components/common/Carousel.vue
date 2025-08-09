<template>
  <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" v-for="(item, index) in items" :key="index">
        <img :src="item.image" class="d-block w-100" :alt="item.altText">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script setup>
// Array untuk gambar carousel
const items = [
  { image: "https://via.placeholder.com/1200x500?text=WEAPONS", altText: "Weapons" },
  { image: "https://via.placeholder.com/1200x500?text=La+Tahzan", altText: "La Tahzan" },
  { image: "https://via.placeholder.com/1200x500?text=Doaku", altText: "Doaku" },
];
</script>

<style scoped>
.carousel-inner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

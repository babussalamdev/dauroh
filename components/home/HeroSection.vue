<template>
  <section class="hero-section">
    <div class="container text-center">
      <h1 class="display-5 fw-bold mb-5" style="font-family: 'Montserrat', sans-serif;">
        Feel the memories beyond
      </h1>
      <div class="search-bar-hero mx-auto" style="max-width: 600px;">
        <SearchBar />
      </div>

      <!-- Tombol Wrapper -->
      <div class="button-container mt-1">
        <div class="button-item" >
          <HeroButton :icon="BioskopIcon" bgClass="btn-hero-custom" />
          <p class="mt-1">Bioskop</p>
        </div>
        <div class="button-item">
          <HeroButton :icon="FilmIcon" bgClass="btn-hero-custom" />
          <p class="mt-1">Film</p>
        </div>
        <div class="button-item">
          <HeroButton :icon="FoodIcon" bgClass="btn-hero-custom" />
          <p class="mt-1">Makanan</p>
        </div>
        <div class="button-item">
          <HeroButton :icon="SewaIcon" bgClass="btn-hero-custom" />
          <p class="mt-1">Sewa Tempat</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SearchBar from '~/components/common/SearchBar.vue';
import HeroButton from '~/components/button/HeroButton.vue';
import BioskopIcon from '~/components/icons/BioskopIcon.vue';
import FilmIcon from '~/components/icons/FilmIcon.vue';
import FoodIcon from '~/components/icons/FoodIcon.vue';
import SewaIcon from '~/components/icons/SewaIcon.vue';
</script>

<style scoped>
.hero-section {
  background: #ffffff;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.hero-section h1 {
  font-size: 30px;
  color: #333;
}

.search-bar-hero {
  margin: 0 auto;
}

/* Tombol Kotak */
:deep(.btn-hero-custom) {
  background-color: #f8f9fa;
  border: 1.5px solid #79bcff;
  border-radius: 0.5rem; /* Sudut tumpul sedikit lebih besar agar pas */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease-in-out;
  display:flexbox;
  align-items: center;
  justify-content: center;
}

:deep(.btn-hero-custom:hover) {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
}

:deep(.hero-icon) {
  font-size: 20px;
}

.button-container {
  padding-top: 1%;
  display: flex;
  justify-content: center; /* Untuk menyejajarkan tombol di tengah */
  gap: -10px; /* Memberikan jarak antar tombol */
}

.button-item {
  flex: 1 1 auto; /* Membuat elemen fleksibel, dengan lebar yang proporsional */
  max-width: 100px; /* Atur maksimal lebar tombol */
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Judul Tombol */
.button-item p {
  font-size: 13px;
  color: #555;
  font-weight: 500;
  margin-bottom: 0;
}
</style>

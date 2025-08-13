<template>
  <section class="hero-section">
    <div class="container text-center">
      <h1 class="display-5 fw-bold mb-5" style="font-family: 'Montserrat', sans-serif;">
        Feel the memories beyond
      </h1>
      <SearchBar />

      <!-- Pembungkus tombol dan teks -->
      <div class="d-flex flex-column justify-content-center align-items-center mx-auto">
        <div class="d-flex justify-content-around align-items-center mb-5">
          <div class="button-wrapper">
            <HeroButton :icon="BioskopIcon" bgClass="bg-info-light" />
            <p>Bioskop</p>
          </div>
          <div class="button-wrapper">
            <HeroButton :icon="FilmIcon" bgClass="bg-info-light" />
            <p>Film</p>
          </div>
          <div class="button-wrapper">
            <HeroButton :icon="FoodIcon" bgClass="bg-info-light" />
            <p>Makanan</p>
          </div>
          <div class="button-wrapper">
            <HeroButton :icon="SewaIcon" bgClass="bg-info-light" />
            <p>Sewa Tempat</p>
          </div>
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
  background: linear-gradient(180deg, #ffffff 0%, #ffffff 100%) !important;
  position: relative;
}

.hero-section h1 {
  font-size: 30px;
  color: var(--color-text-dark);
}

.bg-info-light {
  background-color: #e0ffff;
  border-color: #6accef;
}

.bg-success-light,
.bg-danger-light,
.bg-warning-light {
  background-color: #ffffff00;
  border-radius: 10px;
  border: 2px solid transparent;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bg-success-light:hover,
.bg-danger-light:hover,
.bg-warning-light:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

/* Pembungkus tombol dan teks */
.button-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px; /* Lebar tombol */
  height: 50px; /* Tinggi tombol */
  margin-top: 20px;
}

/* Gaya teks di bawah tombol */
.button-wrapper p {
  font-size: 14px;
  color: var(--color-text-dark);
  margin-top: 5px;
  text-align: center;
  
}

</style>

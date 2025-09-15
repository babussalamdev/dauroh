<template>
  <div class="container mt-5">
    <!-- Form Tambah Film sudah dihapus dari sini -->

    <div id="posterCarousel" class="carousel slide carousel-dark" data-bs-ride="carousel" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
      <div class="carousel-inner">
        <div
          v-for="(chunk, chunkIndex) in daurohStore.daurohChunks"
          :key="chunkIndex"
          :class="['carousel-item', { 'active': chunkIndex === 0 }]"
        >
          <div class="row g-3 justify-content-center align-items-center">
            <div v-for="dauroh in chunk" :key="dauroh.id" class="col-6 col-md-3 mb-4">
              <a href="#" class="text-decoration-none">
                <div class="dauroh-card">
                  <img :src="dauroh.poster" class="img-fluid rounded-lg" :alt="dauroh.title">
                  <div class="overlay p-2">
                    <p class="title fw-bold mb-1">{{ dauroh.title }}</p>
                    <p class="subtitle text-muted mb-0">{{ dauroh.genre }}</p>
                    <!-- Tombol Edit & Hapus sudah dihapus dari sini -->
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <template v-if="daurohStore.daurohChunks.length > 1">
        <button class="carousel-control-prev" :class="{ 'd-none': !isHovered }" type="button" data-bs-target="#posterCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" :class="{ 'd-none': !isHovered }" type="button" data-bs-target="#posterCarousel" data-bs-slide="next">
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

// Logika untuk CRUD (newTitle, handleAdd, handleUpdate, handleDelete) sudah dihapus
</script>

<style scoped>
/* CSS Anda tidak diubah, hanya bagian .actions yang tidak terpakai lagi */
.carousel {
  position: relative;
}
.carousel-inner {
  overflow: visible;
  padding: 60px;
  align-items: center;
  overflow-x: hidden;
}
.dauroh-card {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  width: 100%;
}
.dauroh-card:hover {
  transform: scale(1.05);
}
.dauroh-card img {
  width: 100%;
  height: auto;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  display: block;
}
.dauroh-card:hover img {
  filter: brightness(0.4);
}
.overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
}
.dauroh-card:hover .overlay {
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
  position:absolute;
}
.carousel-control-next {
  position:absolute;
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: invert(1) grayscale(100);
}
</style>
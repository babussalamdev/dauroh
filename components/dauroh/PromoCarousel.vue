<template>
  <div class="container mt-4">
    <!-- Form Tambah Promo sudah dihapus dari sini -->

    <div
      id="promoCarousel"
      class="carousel slide carousel-dark"
      data-bs-ride="carousel"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <div class="carousel-inner">
        <div
          v-for="(chunk, chunkIndex) in daurohChunks"
          :key="chunkIndex"
          :class="['carousel-item', { 'active': chunkIndex === 0 }]"
        >
          <div class="row g-3 justify-content-center">
            <a href="#" v-for="(dauroh) in chunk" :key="dauroh.id" class="col-12 col-md-4 text-decoration-none">
              <div class="dauroh-card-container d-flex justify-content-center align-items-center">
                <div class="dauroh-card">
                  <img :src="dauroh.poster" class="img-fluid rounded-lg" :alt="dauroh.title">
                  <div class="overlay p-2">
                    <p class="title fw-bold mb-1 text-white">{{ dauroh.title }}</p>
                    <p class="subtitle text-white-50 mb-0">{{ dauroh.genre }}</p>
                    <!-- Tombol Edit & Hapus sudah dihapus dari sini -->
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <template v-if="daurohChunks.length > 1">
        <!-- Tombol navigasi tidak diubah -->
        <button class="carousel-control-prev" :class="{ 'd-none': !isHovered }" type="button" data-bs-target="#promoCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" :class="{ 'd-none': !isHovered }" type="button" data-bs-target="#promoCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useDaurohStore } from '~/stores/dauroh';

const isHovered = ref(false);
const isMobile = ref(false);
const daurohStore = useDaurohStore();

// Komponen ini tetap mengambil data dari store untuk ditampilkan
const daurohChunks = computed(() => daurohStore.promoDaurohChunks(isMobile.value));

// Logika untuk CRUD (newTitle, handleAdd, handleUpdate, handleDelete) sudah dihapus

const handleResize = () => {
  isMobile.value = window.innerWidth <= 800;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
/* CSS Anda tidak diubah, hanya bagian .actions yang tidak terpakai lagi */
.dauroh-card {
    position: relative; /* Diubah dari sticky */
    overflow: hidden;
    border-radius: 8px;
    transition: transform 0.3s ease;
    width: 100%;
    height: 180px; /* Atur tinggi kartu menjadi lebih pendek */
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
}
.dauroh-card:hover {
    transform: scale(1.05);
}
.dauroh-card img {
    width: 100%;
    height: 100%; /* Buat gambar mengisi seluruh tinggi kartu */
    object-fit: cover; /* Ini akan memotong gambar agar pas */
    display: block;
    transition: filter 0.3s ease;
}
.dauroh-card:hover img {
    filter: brightness(0.4);
}
.overlay {
    position: absolute;
    width: 100%;
    background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0));
    bottom: 0;
    color: white;
    padding: 10px;
    opacity: 0;
    transition: opacity 0.3s ease;
}
.dauroh-card:hover .overlay {
  opacity: 1;
}
.overlay .title {
    font-size: 0.9rem;
}
.overlay .subtitle {
    font-size: 0.8rem;
    color: #ccc;
}
/* Style untuk .actions dihapus karena tidak terpakai */
.carousel-inner {
  overflow: visible;
  padding: 60px;
  overflow-x: hidden;
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
  position: absolute;
}
.carousel-control-next {
  position: absolute;
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: invert(1) grayscale(100);
}
</style>
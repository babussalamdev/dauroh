<template>
  <nav 
    class="fixed-navbar navbar navbar-expand-lg py-3 sticky-top"
    :class="{ 'scrolled': isScrolled }"
  >
    <div class="container">
      <a class="navbar-brand fw-bold text-dark-custom" href="#">
        <span class="fs-4">Cinema</span> <span class="fs-4 text-primary">XXI</span>
      </a>

      <!-- Pindahkan JABODETABEK ke sebelah kiri -->
      <div class="d-flex align-items-center me-auto">
        <a href="#" class="btn btn-primary text-dark-custom me-3" bgClass="bg-info-light"><i class="bi bi-geo-alt me-1"></i> JABODETABEK</a>
      </div>

      <!-- Sisanya tetap di sebelah kanan -->
      <div class="d-flex align-items-center">
        <ul class="navbar-nav d-none d-lg-flex flex-row me-3">
          <li class="nav-item me-3">
            <a class="nav-link text-dark-custom" href="#"><i class="bi bi-tag-fill me-1"></i> Promo</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark-custom" href="#">Login</a>
          </li>
        </ul>

        <button class="btn btn-primary rounded-pill d-none d-lg-block">Buat akun</button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isScrolled = ref(false); // Variabel reaktif untuk melacak status scroll

const handleScroll = () => {
  // Jika posisi scroll lebih dari 50px, ubah isScrolled menjadi true
  // Angka 50 ini bisa disesuaikan
  if (window.scrollY > 50) {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
};

onMounted(() => {
  // Tambahkan event listener saat komponen dipasang
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  // Hapus event listener saat komponen akan dilepas
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.fixed-navbar {
  /* Transparan di awal */
  background-color: transparent !important;
  box-shadow: none !important;
  transition: all 0.3s ease;
  z-index: 1000;
}

/* Style navbar saat di-scroll */
.fixed-navbar.scrolled {
  background-color: transparent !important;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  /* Efek blur pada background di belakang navbar */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); /* Untuk kompatibilitas browser */
}

.navbar-brand {
  font-family: 'Montserrat', sans-serif;
}

.nav-link {
    font-weight: 500;
    color: #333 !important;
    transition: all 0.2s ease;
}

.nav-link:hover {
    color: var(--color-primary) !important;
}

/* Untuk memastikan "JABODETABEK" tetap di kiri */
.me-auto {
  margin-right: auto;
}
</style>

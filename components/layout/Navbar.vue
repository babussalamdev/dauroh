<template>
  <nav 
    class="fixed-navbar navbar navbar-expand-lg py-3 sticky-top"
    :class="{ 'scrolled': isScrolled }"
  >
    <div class="container">
      <a class="navbar-brand fw-bold text-dark-custom" href="#">
        <span class="fs-4">Cinema</span> <span class="fs-4 text-primary">XXI</span>
      </a>

      <div class="d-flex align-items-center me-auto">
        <a href="#" class="btn btn-primary text-dark-custom me-3" bgClass="bg-info-light"><i class="bi bi-geo-alt me-1"></i> JABODETABEK</a>
      </div>

      <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="d-flex align-items-center d-none d-lg-flex">
        <ul class="navbar-nav flex-row me-3">
          <li class="nav-item me-3">
            <a class="nav-link text-dark-custom" href="#"><i class="bi bi-tag-fill me-1"></i> Promo</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark-custom" href="#">Login</a>
          </li>
        </ul>

        <button class="btn btn-primary rounded-pill">Buat akun</button>
      </div>
    </div>
  </nav>

  <div class="offcanvas offcanvas-end" tabindex="1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Beranda</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="bi bi-tag-fill me-1"></i> Promo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Login</a>
        </li>
      </ul>
      <button class="btn btn-primary rounded-pill mt-3">Buat akun</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isScrolled = ref(false); // Variabel reaktif untuk melacak status scroll

const handleScroll = () => {
  if (window.scrollY > 50) {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.fixed-navbar {
  background-color: transparent !important;
  box-shadow: none !important;
  transition: all 0.3s ease;
  z-index: 1000;
}

.fixed-navbar.scrolled {
  background-color: transparent !important;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.navbar-brand {
  font-family: 'Montserrat', sans-serif;
}

.nav-link {
  font-weight: 500;
  color: #333 !important;
}

.nav-link:hover {
  color: var(--color-primary) !important;
}

.me-auto {
  margin-right: auto;
}
</style>
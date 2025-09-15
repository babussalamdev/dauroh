<template>
  <nav 
    class="fixed-navbar navbar navbar-expand-lg py-3 sticky-top"
    :class="{ 'scrolled': isScrolled }"
  >
    <div class="container">
      <NuxtLink class="navbar-brand fw-bold text-dark-custom" to="/">
        <img src="/assets/img/Logo-Mahad.png" alt="Dauroh Tickets Logo" style="height: 40px;" class="me-2">
        <span class="fs-4">Dauroh</span> <span class="fs-4 text-primary"></span>
      </NuxtLink>

      <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="d-flex align-items-center d-none d-lg-flex">
        <ul class="navbar-nav flex-row me-3 align-items-center">
          
          <!-- JIKA SUDAH LOGIN -->
          <template v-if="authStore.isLoggedIn">
            <li class="nav-item me-3">
              <NuxtLink class="nav-link text-dark-custom" to="/"><i class="bi bi-house-fill me-1"></i> Home</NuxtLink>
            </li>
            <li class="nav-item me-3">
              <NuxtLink class="nav-link text-dark-custom" to="/dashboard">Dashboard</NuxtLink>
            </li>
            <li class="nav-item">
              <span class="navbar-text text-dark-custom me-3">Halo, {{ authStore.userName }}</span>
            </li>
            <li class="nav-item">
              <button @click="handleLogout" class="btn btn-danger rounded-pill btn-sm">Logout</button>
            </li>
          </template>

          <!-- JIKA BELUM LOGIN -->
          <template v-else>
            <li class="nav-item">
              <NuxtLink class="nav-link text-dark-custom" to="/login">Login</NuxtLink>
            </li>
             <li class="nav-item ms-3">
              <button class="btn btn-primary rounded-pill">Buat akun</button>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>

  <!-- ====================================================== -->
  <!-- Tampilan Mobile (Offcanvas) - Logika Diperbarui di Sini -->
  <!-- ====================================================== -->
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        
        <!-- JIKA SUDAH LOGIN (MOBILE) -->
        <template v-if="authStore.isLoggedIn">
          <li class="nav-item">
            <NuxtLink class="nav-link active" aria-current="page" to="/">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="bi bi-tag-fill me-1"></i> Promo</a>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/dashboard">Dashboard</NuxtLink>
          </li>
           <li class="nav-item mt-3">
            <button @click="handleLogout" class="btn btn-danger rounded-pill w-100">Logout</button>
          </li>
        </template>

        <!-- JIKA BELUM LOGIN (MOBILE) (TANPA PROMO) -->
        <template v-else>
          <li class="nav-item">
            <NuxtLink class="nav-link active" aria-current="page" to="/">Beranda</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/login">Login</NuxtLink>
          </li>
           <li class="nav-item mt-3">
            <button class="btn btn-primary rounded-pill w-100">Buat akun</button>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useAuthStore } from '~/stores/auth';

const isScrolled = ref(false);
const authStore = useAuthStore();

const handleScroll = () => {
  if (window.scrollY > 50) {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
};

const handleLogout = () => {
  authStore.logout();
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


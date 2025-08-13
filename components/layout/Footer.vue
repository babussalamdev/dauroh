<template>
  <footer class="footer mt-5 p-5 border-top">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div class="d-flex align-items-center">
          <a class="navbar-brand fw-bold me-5" href="#">
            <span class="fs-4 text-dark-custom">Cinema</span> <span class="fs-4 text-primary">XXI</span>
          </a>
          <div class="d-flex gap-3">
            <a href="#" class="btn btn-outline-secondary rounded-circle btn-social"><i class="bi bi-instagram"></i></a>
            <a href="#" class="btn btn-outline-secondary rounded-circle btn-social"><i class="bi bi-tiktok"></i></a>
            <a href="#" class="btn btn-outline-secondary rounded-circle btn-social"><i class="bi bi-twitter"></i></a>
            <a href="#" class="btn btn-outline-secondary rounded-circle btn-social"><i class="bi bi-facebook"></i></a>
          </div>
        </div>

        <div class="d-flex align-items-center gap-3">
          <div class="dropdown">
            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-globe me-2"></i> Bahasa (Indonesia)
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">English</a></li>
            </ul>
          </div>
          <button class="btn btn-outline-secondary rounded-circle"><i class="bi bi-sun"></i></button>
        </div>
      </div>

      <hr class="my-4">

      <div class="text-center">
        <ul class="list-unstyled d-flex justify-content-center gap-4 fw text-dark-custom mb-3">
          <li><a href="#" class="text-decoration-none">Tentang kami</a></li>|
          <li><a href="#" class="text-decoration-none">FAQ</a></li>|
          <li><a href="#" class="text-decoration-none">Syarat penggunaan</a></li>|
          <li><a href="#" class="text-decoration-none">Relasi Investor</a></li>|
          <li><a href="#" class="text-decoration-none">Lowongan</a></li>|
          <li><a href="#" class="text-decoration-none">Kebijakan privasi</a></li>|
          <li><a href="#" class="text-decoration-none">Hubungi kami</a></li>
        </ul>
        <p class="text-muted-custom small">
          Copyrights © 
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Tidak ada logika JS spesifik di sini
</script>

<style scoped>
.footer {
  background-color: #F8FAFC;
  border-top: 1px solid #e9ecef;
}
.footer a {
    color: var(--color-text-dark) !important;
    transition: color 0.2s ease;
}
.footer a:hover {
    color: var(--color-primary) !important;
}
.btn-social {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
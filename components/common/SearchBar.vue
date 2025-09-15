<template>
  <!-- Ganti class mb-3 dengan class yang mengatur jarak -->
  <div class="search-bar">
    <!-- Pindahkan ikon ke dalam input-group -->
    <i class="search-icon bi-search"></i>
    <input type="text" class="form-control" placeholder="Cari..." />
  </div>
</template>

<style scoped>
.search-bar {
  position: relative; /* Ini penting agar ikon bisa diatur posisinya di dalam div */
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px; /* Sesuaikan lebar maksimum */
  margin: 10px auto; /* Atur jarak dan posisi */
  margin-top: 0%;
}

.search-bar .form-control {
  padding: 12px 12px 12px 40px; /* Tambah padding kiri untuk ikon */
  border: 1px solid #ddd;
  border-radius: 50px; /* Bikin rounded penuh */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); /* Tambah bayangan */
  transition: all 0.3s ease;
}

.search-bar .form-control:focus {
  outline: none;
  border-color: #00bcd4; /* Warna border saat fokus */
  box-shadow: 0 4px 20px rgba(0, 188, 212, 0.1);
}

.search-icon {
  position: absolute; /* Posisikan ikon secara absolut di dalam div */
  left: 15px; /* Jarak dari kiri */
  font-size: 1.2em;
  color: #888;
  pointer-events: none; /* Penting agar input bisa diklik meskipun ada ikon di atasnya */
}
</style>
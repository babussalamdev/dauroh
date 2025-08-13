<template>
  <div class="card text-bg-dark" style="width:1500px">
    <img :src="cityRainImage" class="card-img" alt="City Rain">
    <div class="card-img-overlay">
      <p class="card-text fw-bold" >Makanan & minuman enak siap nemenin nonton! <br>
        <a href="#" class="btn btn-primary" bgClass="bg-info-light">Lihat semua ></a>
    </p>
    </div>
  </div>
</template>
<script setup>
// Bagian SCRIPT: Kode JavaScript untuk logika komponen
// Mengimpor gambar lokal sebagai module dari folder assets/
// "~/" adalah alias di Nuxt.js yang merujuk ke direktori root proyek
import cityRainImage from '~/assets/img/city-rain.jpg';
</script>

<style scoped>
/* Bagian STYLE: Styling khusus untuk komponen card */
.card {
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative; /* Penting untuk positioning overlay */
  /* Hapus width: 300px dan height: 180px agar card menjadi potret */
  width: 70%;
  max-width: 100%;
  height: 120px;
  aspect-ratio: 9 / 16; /* Mengatur rasio potret */
}
.card-img {
  /* Membuat gambar sedikit lebih gelap agar teks overlay terlihat jelas */
  filter: brightness(0.6); 
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-img-overlay {
  /* Memberi background transparan agar teks tidak bertabrakan dengan gambar */
  background-color: rgba(0, 0, 0, 0.2);
  color: white; /* Mengatur warna teks menjadi putih */
  padding-top: 2%;
  font-size: medium;
}
</style>
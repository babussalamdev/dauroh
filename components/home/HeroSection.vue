<template>
  <section class="hero-section">
    <div class="container text-center">
      <h1 class="display-5 fw-bold mb-5" style="font-family: 'Montserrat', sans-serif;">
        Dauroh <span class="text-primary">Babussalam</span>
      </h1>
      <div class="search-bar-hero mx-auto" style="max-width: 600px;">
        <SearchBar />
      </div>

      <div class="button-container">
        <div class="button-item" @click="handleButtonClick('/qr')">
          <HeroButton :icon="QrCode" bgClass="btn-hero-custom" />
          <p class="mt-1">QR Code</p>
        </div>
        
        <div class="button-item" @click="handleButtonClick('/jadwal')">
          <HeroButton :icon="JadwalIcon" bgClass="btn-hero-custom" />
          <p class="mt-1">Jadwal</p>
        </div>

        <div class="button-item" @click="handleButtonClick('/sewa-booth')">
          <HeroButton :icon="BoothIcon" bgClass="btn-hero-custom" />
          <p class="mt-1">Sewa Booth</p>
        </div>
      </div>
    </div>

    <QrCodeModal :show="showQrModal" @close="closeQrModal" />
    <InfoModal 
      :show="showInfoModal" 
      :title="infoModalContent.title" 
      :message="infoModalContent.message" 
      @close="closeInfoModal" 
    />
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '~/stores/auth';
import { useUserStore } from '~/stores/user';
import { useRouter } from 'vue-router'; // Import useRouter
import SearchBar from '~/components/common/SearchBar.vue';
import HeroButton from '~/components/button/HeroButton.vue';
import QrCode from '~/components/icons/QrIcon.vue';
import JadwalIcon from '~/components/icons/JadwalIcon.vue';
import BoothIcon from '~/components/icons/BoothIcon.vue';
import QrCodeModal from '~/components/modals/QrCodeModal.vue';
import InfoModal from '~/components/modals/InfoModal.vue';

const authStore = useAuthStore();
const userStore = useUserStore();
const router = useRouter(); // Gunakan router

const showQrModal = ref(false);
const showInfoModal = ref(false);
const infoModalContent = ref({ title: '', message: '' });

// --- FUNGSI BARU UNTUK MENGHANDLE SEMUA TOMBOL ---
const handleButtonClick = (path) => {
  if (!authStore.isLoggedIn) {
    // Jika belum login, arahkan ke halaman login
    router.push('/login');
    return;
  }

  // Jika sudah login, lanjutkan ke fungsi masing-masing
  switch (path) {
    case '/qr':
      handleQrClick();
      break;
    case '/jadwal':
      router.push('/jadwal');
      break;
    case '/sewa-booth':
      router.push('/sewa-booth');
      break;
  }
};

const handleQrClick = () => {
  if (userStore.upcomingDauroh.length > 0) {
    showQrModal.value = true;
  } else {
    infoModalContent.value = {
      title: 'Informasi',
      message: 'Anda belum terdaftar pada dauroh manapun untuk menampilkan QR Code.'
    };
    showInfoModal.value = true;
  }
};

const closeQrModal = () => (showQrModal.value = false);
const closeInfoModal = () => (showInfoModal.value = false);
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
  background-color: #daecff;
  border: 1.5px solid #79bcff;
  border-radius: 1rem; /* Sudut tumpul sedikit lebih besar agar pas */
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
  font-size: 50px;
}

.button-container {
  padding-top: 1%;
  display: flex;
  justify-content: center; /* Untuk menyejajarkan tombol di tengah */
  /*gap: -10px; /* Memberikan jarak antar tombol */
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

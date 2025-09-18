    // stores/user.ts
import { defineStore } from 'pinia';
import cityRainImage from '~/assets/img/city-rain.jpg';
import type { Dauroh } from '~/stores/dauroh';

export const useUserStore = defineStore('user', {
  state: () => ({
    // "Database bohongan" untuk data spesifik user
    upcomingDauroh: [
        { id: 301, title: 'Coming Soon: Tinggal Meninggal', genre: 'Horor', poster: 'https://ia.media-imdb.com/images/M/MV5BMTcyMzc1MjI5MF5BMl5BanBnXkFtZTgwMzE4ODY2OTE@._V1_SX300.jpg' },
        { id: 302, title: 'Coming Soon: Pamali', genre: 'Horor', poster: 'https://ia.media-imdb.com/images/M/MV5BMTcyMzc1MjI5MF5BMl5BanBnXkFtZTgwMzE4ODY2OTE@._V1_SX300.jpg' },
    ] as Dauroh[],
        
    historyDauroh: [
        { id: 101, title: 'Promo: Interstellar', genre: 'Adventure, Drama, Sci-Fi', poster: 'https://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg'},
        { id: 102, title: 'Promo: The Wolf of Wall Street', genre: 'Biography, Comedy, Crime', poster: 'https://ia.media-imdb.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg'},
    ] as Dauroh[],

    isLoading: false,
  }),

  getters: {
    getUpcomingDauroh: (state) => state.upcomingDauroh,
    getHistoryDauroh: (state) => state.historyDauroh,
  },

  actions: {
    registerDauroh(registrationData: { dauroh: Dauroh, participants: { name: string }[] }) {
      const { dauroh, participants } = registrationData;
      const toastStore = useToastStore(); // Panggil store di dalam action

      const isAlreadyRegistered = this.upcomingDauroh.some(item => item.id === dauroh.id);
      
      if (!isAlreadyRegistered) {
        this.upcomingDauroh.unshift(dauroh);
        
        // --- PICU NOTIFIKASI DI SINI ---
        toastStore.showToast({
          message: `Pendaftaran untuk "${dauroh.title}" berhasil!`,
          type: 'success'
        });
        
      } else {
        // Notifikasi jika sudah terdaftar
        toastStore.showToast({
          message: `Anda sudah terdaftar di dauroh ini.`,
          type: 'info'
        });
      }
    },
  }
});
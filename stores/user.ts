    // stores/user.ts
import { defineStore } from 'pinia';
import cityRainImage from '~/assets/img/city-rain.jpg';

// Impor tipe data Movie dari store utama agar bisa dipakai ulang
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
    /*
    // NANTI (Dengan Backend): Hapus komentar di bawah ini untuk mengambil data dari server
    
    async fetchMyDauroh() {
      this.isLoading = true;
      try {
        // Panggil API khusus untuk mendapatkan Dauroh milik user yang login
        // const response = await $fetch('/api/user/my-dauroh');
        // this.upcomingDauroh = response.upcoming;
        // this.historyDauroh = response.history;
      } catch (error) {
        console.error('Gagal mengambil data Dauroh saya:', error);
      } finally {
        this.isLoading = false;
      }
    },
    */
  }
});

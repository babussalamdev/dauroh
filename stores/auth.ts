import { defineStore } from 'pinia';

// Definisikan tipe data User berdasarkan apa yang akan dikembalikan oleh API 'get-account'
interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

export const useAuthStore = defineStore('auth', {
  // state dan getters tidak perlu diubah karena sudah menggunakan `useState` di composable
  state: () => ({
    user: null as User | null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.user,
    userName: (state) => state.user?.name,
    isAdmin: (state) => state.user?.role === 'admin',
  },
  actions: {
    setUser(userData: User | null) {
      this.user = userData;
    },
    async fetchUser() {
    },

    logout() {
      this.user = null;
      // Logika redirect dan hapus cookie sudah ditangani oleh composable
    },
  },
});
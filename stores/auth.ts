import { defineStore } from 'pinia';

// Definisikan struktur data untuk user, sekarang dengan 'role'
interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user'; // Peran bisa admin atau user
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.user,
    userName: (state) => state.user?.name,
    isAdmin: (state) => state.user?.role === 'admin',
  },
  actions: {
    // Action login sekarang menerima 'role'
    login(payload: { email: string, password?: string, role: 'admin' | 'user' }) {
      // SAAT INI (Frontend-only): Logika simulasi login
      this.user = {
        id: payload.role === 'admin' ? 1 : 101,
        name: payload.role === 'admin' ? 'Admin Dauroh' : 'Peserta Dauroh',
        email: payload.email,
        role: payload.role,
      };
      
      const router = useRouter();
      if (payload.role === 'admin') {
        router.push('/admin');
      } else {
        router.push('/dashboard');
      }

      /*
      // NANTI (Dengan Backend): Ganti kode di atas dengan ini
      try {
        // 1. Kirim data login ke backend
        const response = await $fetch('/api/auth/login', { 
          method: 'POST', 
          body: { email: payload.email, password: payload.password } 
        });

        // 2. Simpan token yang diterima dari backend ke dalam cookie
        const accessToken = useCookie('accessToken', { maxAge: 60 * 60 * 24 }); // Cookie 1 hari
        accessToken.value = response.token;

        // 3. Ambil data user yang login
        await this.fetchUser();
        
        // 4. Arahkan ke halaman yang sesuai
        const router = useRouter();
        if (this.isAdmin) {
          router.push('/admin');
        } else {
          router.push('/dashboard');
        }

      } catch (error) {
        console.error('Login gagal:', error);
        // Di sini bisa ditambahkan notifikasi error untuk pengguna
      }
      */
    },

    logout() {
      // SAAT INI (Frontend-only):
      this.user = null;
      const router = useRouter();
      router.push('/');

      /*
      // NANTI (Dengan Backend):
      const accessToken = useCookie('accessToken');
      accessToken.value = null; // Hapus token dari cookie
      this.user = null;
      const router = useRouter();
      router.push('/');
      */
    },
    
    // NANTI (Dengan Backend): Fungsi ini akan sangat penting untuk menjaga status login
    async fetchUser() {
      /*
      const accessToken = useCookie('accessToken');
      if (!accessToken.value) {
        return; // Jika tidak ada token, tidak melakukan apa-apa
      }

      try {
        // Gunakan token untuk mengambil data user dari backend
        const userData = await $fetch<User>('/api/auth/me', {
          headers: {
            'Authorization': `Bearer ${accessToken.value}`
          }
        });
        this.user = userData;
      } catch (error) {
        // Jika token tidak valid, hapus cookie dan logout
        const accessToken = useCookie('accessToken');
        accessToken.value = null;
        this.user = null;
      }
      */
    }
  },
});


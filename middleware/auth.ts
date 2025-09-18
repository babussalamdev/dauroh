import { useAuthStore } from '~/stores/auth'; // Pastikan baris ini ada

export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStore();
  const accessToken = useCookie('accessToken');

  // Jika data pengguna belum ada di store (misalnya, karena baru refresh halaman)
  // DAN ada token di cookie, coba ambil data pengguna
  if (accessToken.value && !authStore.isLoggedIn) {
    await authStore.fetchUser();
  }

  // Definisikan halaman-halaman publik
  const publicPages = ['/', '/login'];
  const isPublicPage = publicPages.includes(to.path);

  // Jika pengguna belum login (setelah mencoba fetchUser) DAN mencoba akses halaman yang dilindungi
  if (!authStore.isLoggedIn && !isPublicPage) {
    console.log(`Akses ke '${to.path}' ditolak! Anda harus login dulu.`);
    // Arahkan ke halaman login
    return navigateTo('/login');
  }
});

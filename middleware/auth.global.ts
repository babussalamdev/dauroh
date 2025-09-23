// middleware/auth.global.ts
import { useAuth } from '~/composables/useAuth';

export default defineNuxtRouteMiddleware(async (to) => {
  // Mengambil state pengguna dari useState, sama seperti di composable
  const user = useState('auth_user');
  const accessToken = useCookie('accessToken');
  const { getUser, logout } = useAuth();

  // Definisikan halaman-halaman publik Anda
  const publicPages = ['/', '/login', '/register', '/admin/login'];
  const isPublicPage = publicPages.includes(to.path);

  // Jika halaman yang dituju adalah halaman publik, tidak perlu cek apa-apa lagi
  if (isPublicPage) {
    return;
  }

  // Jika TIDAK ADA token, langsung arahkan ke halaman login
  if (!accessToken.value) {
    return navigateTo('/login');
  }

  // Jika ADA token TAPI data user belum ada (misalnya setelah refresh halaman)
  if (accessToken.value && !user.value) {
    try {
      // Coba ambil data user menggunakan token
      await getUser();
    } catch (error) {
      // Jika gagal (token tidak valid), logout paksa dan arahkan ke login
      await logout();
      return navigateTo('/login');
    }
  }
  
  // Proteksi tambahan untuk halaman admin
  const isAdminRoute = to.path.startsWith('/admin');
  if (user.value && (user.value as any).role !== 'admin' && isAdminRoute) {
    console.log(`Akses ke '${to.path}' ditolak! Hanya untuk admin.`);
    return navigateTo('/'); // Arahkan ke halaman utama jika user biasa mencoba masuk admin
  }
});
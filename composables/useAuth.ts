import Swal from "sweetalert2"

// Kita tidak lagi butuh Pinia Store di sini
// import { useAuthStore } from '~/stores/auth'

export const useAuth = () => {
    // Menggunakan useState untuk state user, persis seperti contoh
    const user = useState('auth_user', () => null)
    
    const router = useRouter()
    const { $api } = useNuxtApp()

    const loading = ref(false)

    // Fungsi getUser, dipindahkan dari store ke sini
    const getUser = async () => {
        try {
            // Ganti 'get-account' dengan endpoint GET profil Anda jika berbeda
            const res = await $api.get('get-account')
            user.value = res.data // Menyimpan data user ke state global
            return user.value
        } catch (error) {
            user.value = null
            // Hapus token jika tidak valid, agar tidak mencoba lagi
            const accessToken = useCookie('accessToken')
            accessToken.value = null
            throw error
        }
    }

    // Fungsi Login, disesuaikan dengan contoh
    const login = async (payload: { email: string, password?: string }) => {
        loading.value = true
        try {
            const res = await $api.post('signin-account', payload)

            // 1. Simpan AccessToken ke cookie
            const accessToken = useCookie('accessToken', { maxAge: 60 * 60 * 24 }) // 1 hari
            accessToken.value = res.data.AccessToken

            // 2. Simpan token lain ke localStorage (jika Anda membutuhkannya nanti)
            localStorage.setItem('IdToken', res.data.IdToken)
            localStorage.setItem('RefreshToken', res.data.RefreshToken)
            
            // 3. Ambil data user setelah login
            await getUser()

            Swal.fire({
              text: 'Login berhasil!',
              icon: 'success',
              timer: 1500,
              showConfirmButton: false,
            })

            // 4. Arahkan ke halaman yang sesuai berdasarkan role dari data user asli
            //    Asumsi: user.value sekarang berisi { ..., custom:role: 'admin' } atau { ..., custom:role: 'user' }
            //    Sesuaikan 'custom:role' jika nama propertinya berbeda di backend Anda
            if (user.value && (user.value as any)['custom:role'] === 'user') {
                router.push('/admin')
            } else {
                router.push('/dashboard')
            }

        } catch (error: any) {
            Swal.fire({
                text: error.response?.data?.message || 'Email atau password salah.',
                icon: "error",
                showConfirmButton: false,
                timer: 2000,
            })
        } finally {
            loading.value = false
        }
    }

    // Fungsi Logout, disesuaikan dengan contoh
    const logout = async () => {
        const accessToken = useCookie('accessToken')
        
        try {
            // Panggil API untuk signout (opsional, tapi praktik yang baik)
            await $api.post('signout-account', { AccessToken: accessToken.value })
        } catch (error) {
            console.error("Gagal signout dari server, token akan dihapus di sisi klien saja.", error)
        } finally {
            // Bersihkan semua data sesi
            accessToken.value = null
            localStorage.removeItem('IdToken')
            localStorage.removeItem('RefreshToken')
            user.value = null
            router.push('/login')
        }
    }

    // Kembalikan semua fungsi dan state yang dibutuhkan, seperti contoh
    return {
        user,
        loading,
        login,
        logout,
        getUser
    }
}
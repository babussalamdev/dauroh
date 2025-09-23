<template>
  <div class="login-container">
    <div class="login-overlay">
      <div class="login-box">
        <div class="login-content">
          <div class="text-center mb-4">
            <img src="~/assets/img/Logo-Mahad.png" alt="Logo Dauroh" style="height: 60px;" class="mb-3">
            <h1 class="login-title">
              Admin <span class="text-primary">Login</span>
            </h1>
            <p class="text-muted small">Silakan masuk untuk mengakses dasbor</p>
          </div>
          
          <form @submit.prevent="doLogin">
            <div class="mb-3">
              <label for="username" class="form-label">Username</label>
              <input type="text" id="username" v-model="username" placeholder="Masukkan username" class="form-control" required />
            </div>

            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" v-model="password" id="password" placeholder="Masukkan password" class="form-control" required />
            </div>
            
            <div class="d-grid gap-2 mt-4">
              <button type="submit" class="btn btn-primary btn-lg" :disabled="loading">
                <span v-if="loading" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuth } from '~/composables/useAuth';

definePageMeta({
  layout: 'auth'
});

useHead({
  title: 'Admin Login'
});

const { login, loading } = useAuth();

// === PERUBAHAN DI SINI ===
const username = ref('root'); // Diganti dari 'email' menjadi 'username'
const password = ref('User12345');

const doLogin = () => {
  login({
    email: username.value,
    password: password.value,
  });
};
</script>

<style scoped>
/* CSS Anda tidak berubah */
.login-container { 
    display: flex; 
    min-height: 100vh; 
    background: url('~/assets/img/city-rain.jpg') no-repeat center center/cover; 
}
.login-overlay { 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    flex: 1; 
    width: 100%; 
    padding: 2rem 1rem; 
    background-color: rgba(0, 0, 0, 0.55); 
}
.login-box { 
    width: 100%; 
    max-width: 480px; 
}
.login-content { 
    background-color: white; 
    padding: 2.5rem; 
    border-radius: 1rem; 
    box-shadow: 0 10px 25px rgba(0,0,0,0.1); 
}
.login-title { 
    font-weight: 600; 
    font-size: 1.8rem; 
    color: #333; 
    }
</style>
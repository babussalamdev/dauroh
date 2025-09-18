<template>
  <div v-if="show" class="modal fade show d-block" tabindex="-1" @click.self="close">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Konfirmasi Pendaftaran</h5>
          <button type="button" class="btn-close" @click="close"></button>
        </div>
        <div class="modal-body" v-if="dauroh">
          <p>Anda akan mendaftar untuk dauroh:</p>
          <h4 class="fw-bold">{{ dauroh.title }}</h4>
          <ul class="list-unstyled text-muted">
            <li><strong>Kategori:</strong> {{ dauroh.genre }}</li>
            <li><strong>Tanggal:</strong> {{ dauroh.date || 'Akan diumumkan' }}</li>
          </ul>
          <p class="mt-3">Apakah Anda yakin ingin melanjutkan?</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="close">Batal</button>
          <button type="button" class="btn btn-primary" @click="confirm">Ya, Lanjutkan</button>
        </div>
      </div>
    </div>
  </div>
  <div v-if="show" class="modal-backdrop fade show"></div>
</template>

<script setup>
defineProps({
  show: { type: Boolean, required: true },
  dauroh: { type: Object, default: null },
});

const emit = defineEmits(['close', 'confirm']);

const close = () => emit('close');
const confirm = () => emit('confirm');
</script>

<style scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
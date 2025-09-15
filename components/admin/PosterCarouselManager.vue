<template>
  <div class="card shadow-sm mt-4">
    <div class="card-header d-flex justify-content-between align-items-center bg-white py-3">
      <h5 class="mb-0">Manajemen Dauroh (Poster Carousel)</h5>
      <button class="btn btn-success btn-sm" @click="openAddModal">+ Tambah Dauroh</button>
    </div>
    <div class="card-body">
      <div v-if="daurohStore.isLoadingDaurohs" class="text-center">
        <p>Memuat data...</p>
      </div>
      <div v-else class="table-responsive">
        <table class="table table-striped table-hover align-middle">
          <thead>
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">Poster</th>
              <th scope="col">Judul</th>
              <th scope="col">Genre</th>
              <th scope="col" class="text-end">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="dauroh in daurohStore.nowPlayingDauroh" :key="dauroh.id">
              <th scope="row">{{ dauroh.id }}</th>
              <td><img :src="dauroh.poster" :alt="dauroh.title" width="50" class="rounded"></td>
              <td>{{ dauroh.title }}</td>
              <td>{{ dauroh.genre }}</td>
              <td class="text-end">
                <button class="btn btn-primary btn-sm me-2" @click="openUpdateModal(dauroh)">Edit</button>
                <button class="btn btn-danger btn-sm" @click="handleDelete(dauroh.id)">Hapus</button>
              </td>
            </tr>
            <tr v-if="daurohStore.nowPlayingDauroh.length === 0">
              <td colspan="5" class="text-center text-muted">Belum ada data Dauroh.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- Modal untuk Tambah/Edit Dauroh -->
  <div v-if="showModal" class="modal fade show d-block" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ isEditing ? 'Edit Dauroh' : 'Tambah Dauroh Baru' }}</h5>
          <button type="button" class="btn-close" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="daurohTitle" class="form-label">Judul Dauroh</label>
            <input type="text" class="form-control" id="daurohTitle" v-model="editableDauroh.title">
          </div>
          <div class="mb-3">
            <label for="daurohGenre" class="form-label">Genre/Kategori</label>
            <input type="text" class="form-control" id="daurohGenre" v-model="editableDauroh.genre">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal">Batal</button>
          <button type="button" class="btn btn-primary" @click="handleSave">Simpan</button>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showModal" class="modal-backdrop fade show"></div>
</template>

<script setup>
// // components/admin/PosterCarouselManager.vue
import { ref, reactive, onMounted } from 'vue';
import { useDaurohStore } from '~/stores/dauroh';

const daurohStore = useDaurohStore();
const showModal = ref(false);
const isEditing = ref(false);
const editableDauroh = reactive({
  id: null,
  title: '',
  genre: ''
});

onMounted(() => {
  // Pastikan data film sudah ter-load saat komponen ini muncul
  if (daurohStore.nowPlayingDauroh.length === 0) {
    daurohStore.fetchDaurohs();
  }
});

const openAddModal = () => {
  isEditing.value = false;
  editableDauroh.id = null;
  editableDauroh.title = '';
  editableDauroh.genre = '';
  showModal.value = true;
};

const openUpdateModal = (dauroh) => {
  isEditing.value = true;
  editableDauroh.id = dauroh.id;
  editableDauroh.title = dauroh.title;
  editableDauroh.genre = dauroh.genre;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const handleSave = () => {
  const payload = {
    title: editableDauroh.title,
    genre: editableDauroh.genre
  };
  if (isEditing.value) {
    daurohStore.updateDauroh(editableDauroh.id, payload);
  } else {
    daurohStore.addDauroh(payload);
  }
  closeModal();
};

const handleDelete = (id) => {
  if (confirm('Apakah Anda yakin ingin menghapus Dauroh ini?')) {
    daurohStore.deleteDauroh(id);
  }
};
</script>

<style scoped>
.modal {
  background-color: rgba(0,0,0,0.5);
}
.table-responsive {
  min-height: 200px;
}
</style>

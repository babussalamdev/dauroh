<template>
  <div class="col-md-3">
    <div class="card p-3 text-center">
      <img :src="image" class="card-img-top mb-2" :alt="title" />
      <h6>{{ title }}</h6>
      <span class="badge bg-secondary">Genre</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  image: {
    type: String,
    default: 'https://via.placeholder.com/250x350'
  }
});
</script>

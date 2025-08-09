<template>
  <div class="homepage">
    <HeroSection />
    <NowPlayingSection />
  </div>
</template>

<script setup>
useHead({ title: 'Beranda' });

import HeroSection from '~/components/home/HeroSection.vue';
import NowPlayingSection from '~/components/home/NowPlayingSection.vue';
</script>

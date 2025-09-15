<template>
  <div class="homepage">
    <HeroSection />
    <TiketDauroh />
  </div>
</template>

<script setup>
useHead({ title: 'Beranda' });

import TiketDauroh from '~/components/film/TiketDauroh.vue';
import HeroSection from '~/components/home/HeroSection.vue';
import NowPlayingSection from '~/components/home/NowPlayingSection.vue';
</script>

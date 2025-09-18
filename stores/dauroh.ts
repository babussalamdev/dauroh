// stores/dauroh.ts
import { defineStore } from 'pinia';
import cityRainImage from '~/assets/img/city-rain.jpg';
import daurohImage from '~/assets/img/dauroh1.jpg';

// DIUBAH: "Blueprint" data dari Movie menjadi Dauroh
export interface Dauroh {
  id: number;
  title: string;
  genre: string; // Bisa diartikan sebagai "kategori" atau "tema" Dauroh
  poster: string;
  overlayTitle?: string;
  overlaySubtitle?: string;
  topOverlay?: string;
  date?: string;
}
export interface StudioCard {
  id: number;
  title: string;
  text: string;
  link: string;
  image: string;
}

// Variabel untuk melacak ID baru agar unik
let nextNowPlayingId = 9;
let nextTopDaurohId = 7;
let nextTiketDaurohId = 9;
let nextPromoId = 7;
let nextStudioId = 4;

// DIUBAH: Nama store menjadi useDaurohStore dan 'dauroh'
export const useDaurohStore = defineStore('dauroh', {
  state: () => ({
    // state 
    searchQuery: '',
    // STATE LOADING
    isLoadingDaurohs: false,
    isLoadingTopDaurohs: false,
    isLoadingTiketDauroh: false,
    isLoadingPromos: false,
    isLoadingStudios: false,
    // DIUBAH: Nama "gudang data" disesuaikan
    nowPlayingDauroh: [
      { id: 1, title: 'Dauroh Fiqih', genre: 'Fiqih', poster: cityRainImage },
      { id: 2, title: 'Dauroh ', genre: 'Sejarah', poster: cityRainImage },
      { id: 3, title: 'Dauroh Tajwid', genre: 'Al-Quran', poster: cityRainImage },
      { id: 4, title: 'Dauroh Parenting Islami', genre: 'Keluarga', poster: cityRainImage },
      { id: 5, title: 'Dauroh 5', genre: 'Umum', poster: cityRainImage },
      { id: 6, title: 'Dauroh 6', genre: 'Umum', poster: cityRainImage },
      { id: 7, title: 'Dauroh 7', genre: 'Umum', poster: cityRainImage },
      { id: 8, title: 'Dauroh 8', genre: 'Umum', poster: cityRainImage },
    ] as Dauroh[],
    
    topDauroh: [
        { id: 201, title: 'Top Dauroh: Belajar Bahasa Arab', genre: 'Bahasa', poster: cityRainImage },
        { id: 202, title: 'Top Dauroh: Memahami Hadits', genre: 'Hadits', poster: cityRainImage },
        { id: 203, title: 'Top Dauroh: Fiqih Wanita', genre: 'Fiqih', poster: cityRainImage },
    ] as Dauroh[],

    tiketDauroh: [
        { id: 301, title: 'Akan Datang: Dauroh Fiqih', genre: 'Fiqih', topOverlay: 'Segera', date: 'Oktober 2025', poster: daurohImage },
        { id: 302, title: 'Akan Datang: Dauroh Zakat', genre: 'Fiqih', topOverlay: 'Segera', date: 'November 2025', poster: daurohImage },
        { id: 303, title: 'Akan Datang: Dauroh Zakat', genre: 'Fiqih', topOverlay: 'Segera', date: 'November 2025', poster: daurohImage },
        { id: 304, title: 'Akan Datang: Dauroh Zakat', genre: 'Fiqih', topOverlay: 'Segera', date: 'November 2025', poster: daurohImage },
        { id: 305, title: 'Akan Datang: Dauroh Zakat', genre: 'Fiqih', topOverlay: 'Segera', date: 'November 2025', poster: daurohImage },
    ] as Dauroh[],

    promoDauroh: [
      { id: 101, title: 'Promo: Dauroh 1', genre: 'Promo', poster: cityRainImage },
      { id: 102, title: 'Promo: Dauroh 2', genre: 'Promo', poster: cityRainImage },
    ] as Dauroh[],

    studioCards: [
      { id: 401, title: 'Kelas Online', text: 'Belajar dari mana saja.', link: '#', image: cityRainImage },
      { id: 402, title: 'Kelas Offline', text: 'Tatap muka langsung.', link: '#', image: cityRainImage },
    ] as StudioCard[],
  }),

  getters: {
    // DIUBAH: Nama "pengolah data" disesuaikan
    nowPlayingDaurohChunks: (state) => { const c = 4; const a = []; for(let i=0; i<state.nowPlayingDauroh.length; i+=c) a.push(state.nowPlayingDauroh.slice(i,i+c)); return a; },
    topDaurohChunks: (state) => (isMobile: boolean) => { const c = isMobile ? 1 : 3; const a = []; for(let i=0; i<state.topDauroh.length; i+=c) a.push(state.topDauroh.slice(i,i+c)); return a; },
    promoDaurohChunks: (state) => (isMobile: boolean) => { const c = isMobile ? 1 : 3; const a = []; for(let i=0; i<state.promoDauroh.length; i+=c) a.push(state.promoDauroh.slice(i,i+c)); return a; },
    getStudioCards: (state) => state.studioCards,
    filteredTiketDauroh(state): Dauroh[] { if (!state.searchQuery) { return state.tiketDauroh; } return state.tiketDauroh.filter(dauroh => dauroh.title.toLowerCase().includes(state.searchQuery.toLowerCase()) );
    },
    tiketDaurohChunks(state): Dauroh[][] {
      const sourceData = this.filteredTiketDauroh; // Menggunakan getter baru
      const chunkSize = 4;
      const chunks = [];
      for (let i = 0; i < sourceData.length; i += chunkSize) {
        chunks.push(sourceData.slice(i, i + chunkSize));
      }
      return chunks;
    },
    
  },

  actions: {
    // search
    setSearchQuery(query: string) {
      this.searchQuery = query;
    },
     // --- TAMBAHKAN FUNGSI FETCH UNTUK SIMULASI ---
    async fetchDaurohs() {
      this.isLoadingDaurohs = true;
      // Simulasi jeda waktu 1 detik seolah-olah mengambil data dari internet
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Di sini nantinya akan diisi dengan data dari API
      this.isLoadingDaurohs = false;
    },
        async fetchTiketDauroh() {
      this.isLoadingTiketDauroh = true;
      // Simulasi jeda 1 detik
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.isLoadingTiketDauroh = false;
    },
    // DIUBAH: Nama "pusat kendali" disesuaikan
    addNowPlayingDauroh(payload: { title: string, genre: string }) { const d: Dauroh = { id: nextNowPlayingId++, title: payload.title, genre: payload.genre, poster: cityRainImage }; this.nowPlayingDauroh.unshift(d); },
    updateNowPlayingDauroh(id: number, payload: { title: string, genre: string }) { const d = this.nowPlayingDauroh.find(i => i.id === id); if(d) { d.title = payload.title; d.genre = payload.genre; } },
    deleteNowPlayingDauroh(id: number) { this.nowPlayingDauroh = this.nowPlayingDauroh.filter(d => d.id !== id); },

    addTopDauroh(payload: { title: string, genre: string }) { const d: Dauroh = { id: nextTopDaurohId++, title: payload.title, genre: payload.genre, poster: cityRainImage }; this.topDauroh.unshift(d); },
    updateTopDauroh(id: number, payload: { title: string, genre: string }) { const d = this.topDauroh.find(i => i.id === id); if(d) { d.title = payload.title; d.genre = payload.genre; } },
    deleteTopDauroh(id: number) { this.topDauroh = this.topDauroh.filter(d => d.id !== id); },

    addTiketDauroh(payload: { title: string, genre: string }) { const d: Dauroh = { id: nextTiketDaurohId++, title: payload.title, genre: payload.genre, poster: cityRainImage }; this.tiketDauroh.unshift(d); },
    updateTiketDauroh(id: number, payload: { title: string, genre: string }) { const d = this.tiketDauroh.find(i => i.id === id); if(d) { d.title = payload.title; d.genre = payload.genre; } },
    deleteTiketDauroh(id: number) { this.tiketDauroh = this.tiketDauroh.filter(d => d.id !== id); },

    addPromoDauroh(payload: { title: string, genre: string }) { const d: Dauroh = { id: nextPromoId++, title: payload.title, genre: payload.genre, poster: cityRainImage }; this.promoDauroh.unshift(d); },
    updatePromoDauroh(id: number, payload: { title: string, genre: string }) { const d = this.promoDauroh.find(i => i.id === id); if(d) { d.title = payload.title; d.genre = payload.genre; } },
    deletePromoDauroh(id: number) { this.promoDauroh = this.promoDauroh.filter(d => d.id !== id); },

    addStudioCard(payload: { title: string, text: string }) { const c: StudioCard = { id: nextStudioId++, title: payload.title, text: payload.text, link: '#', image: cityRainImage }; this.studioCards.unshift(c); },
    updateStudioCard(id: number, payload: { title: string, text: string }) { const c = this.studioCards.find(i => i.id === id); if(c) { c.title = payload.title; c.text = payload.text; } },
    deleteStudioCard(id: number) { this.studioCards = this.studioCards.filter(c => c.id !== id); },
  }
});


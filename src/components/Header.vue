<script setup lang="ts">
import { ref } from 'vue';
// Importando o logo
import logoImg from '../assets/logo.png';

const isMenuOpen = ref(false);
</script>

<template>
  <header class="fixed w-full top-0 z-50 transition-all duration-300 bg-gradient-to-b from-black/90 to-transparent backdrop-blur-sm">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

      <a href="/" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <img
            :src="logoImg"
            alt="B10 Logo"
            class="h-12 w-auto object-contain"
        />
      </a>

      <nav class="hidden md:flex gap-8 uppercase text-sm font-bold tracking-widest text-white">
        <a href="#" class="hover:text-b10-gold transition-colors">Eventos</a>
        <a href="#" class="hover:text-b10-gold transition-colors">Galeria</a>
        <a href="#" class="hover:text-b10-gold transition-colors">Mídia</a>
        <a href="https://furia.gg" target="_blank" class="hover:text-b10-gold transition-colors">Loja</a>
      </nav>

      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>

    <div v-if="isMenuOpen" class="md:hidden bg-b10-dark text-white p-6 absolute w-full border-b border-gray-800 shadow-2xl">
      <nav class="flex flex-col gap-4 text-center font-bold uppercase">
        <a href="#" class="block py-2 hover:text-b10-gold">Eventos</a>
        <a href="#" class="block py-2 hover:text-b10-gold">Galeria</a>
        <a href="#" class="block py-2 hover:text-b10-gold">Mídia</a>
        <a href="https://furia.gg" target="_blank" class="block py-2 hover:text-b10-gold">Loja</a>
      </nav>
    </div>
  </header>
</template>
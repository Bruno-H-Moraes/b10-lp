<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
// Importando o logo
import logoImg from '../assets/logo.png';

const isMenuOpen = ref(false);
const router = useRouter();
const route = useRoute();

// Função genérica para rolar até uma seção
const scrollToSection = async (sectionId: string) => {
  isMenuOpen.value = false; // Fecha o menu mobile se estiver aberto

  if (route.path !== '/') {
    await router.push('/');
    // Pequeno delay para garantir que a página carregou antes de rolar
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  } else {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <header class="fixed w-full top-0 z-50 transition-all duration-300 bg-gradient-to-b from-black/90 to-transparent backdrop-blur-sm">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

      <router-link to="/" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <img
            :src="logoImg"
            alt="B10 Logo"
            class="h-12 w-auto object-contain"
        />
      </router-link>

      <nav class="hidden md:flex gap-8 uppercase text-sm font-bold tracking-widest text-white">
        <!-- Botão Início (só aparece se NÃO estiver na home) -->
        <router-link v-if="route.path !== '/'" to="/" class="hover:text-b10-gold transition-colors">
          Início
        </router-link>

        <a @click.prevent="scrollToSection('eventos')" class="hover:text-b10-gold transition-colors cursor-pointer">Eventos</a>
        
        <router-link to="/galeria" class="hover:text-b10-gold transition-colors">
          Galeria
        </router-link>

        <router-link to="/noticias" class="hover:text-b10-gold transition-colors">Notícias</router-link>
      </nav>

      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>

    <div v-if="isMenuOpen" class="md:hidden bg-b10-dark text-white p-6 absolute w-full border-b border-gray-800 shadow-2xl">
      <nav class="flex flex-col gap-4 text-center font-bold uppercase">
        <!-- Botão Início Mobile -->
        <router-link v-if="route.path !== '/'" to="/" class="block py-2 hover:text-b10-gold" @click="isMenuOpen = false">
          Início
        </router-link>

        <a @click.prevent="scrollToSection('eventos')" class="block py-2 hover:text-b10-gold cursor-pointer">Eventos</a>
        <router-link to="/galeria" class="block py-2 hover:text-b10-gold" @click="isMenuOpen = false">Galeria</router-link>
        <a href="https://rp-b10s-newsletter.beehiiv.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcAPTubNleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAafSjru-VNNz37JWOHsJ6W-peIpWrqcego8utR-uX0DX45gtrHRn7VR9iXYKaA_aem_O_c4oc0pfjcrjyNvQqZStw" target="_blank" class="block py-2 hover:text-b10-gold">
          Notícias
        </a>
      </nav>
    </div>
  </header>
</template>
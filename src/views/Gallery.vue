<script setup lang="ts">
import { ref } from 'vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

// Importando as imagens dos assets
import img1 from '../assets/gal1.png';
import img2 from '../assets/gal2.png';
import img3 from '../assets/gal3.png';

const galleryImages = [img1, img2, img3, img1, img2, img3];

// Estado para controlar a imagem selecionada
const selectedImage = ref<string | null>(null);

// Função para abrir a imagem
const openImage = (image: string) => {
  selectedImage.value = image;
  document.body.style.overflow = 'hidden'; // Bloqueia o scroll da página
};

// Função para fechar o modal
const closeImage = () => {
  selectedImage.value = null;
  document.body.style.overflow = ''; // Libera o scroll
};
</script>

<template>
  <div class="bg-b10-dark min-h-screen text-white">
    <Header />

    <main class="pt-32 pb-20 px-4 md:px-6">
      <div class="max-w-7xl mx-auto">

        <div class="mb-12 border-l-4 border-b10-gold pl-6">
          <h1 class="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            Nossa <span class="text-b10-gold">Galeria</span>
          </h1>
          <p class="text-gray-400 mt-4 max-w-2xl font-medium uppercase italic">
            Registros históricos da Bateria Dezorganizada e da caminhada com a Furia.
          </p>
        </div>

        <div class="flex flex-col gap-8">
          <div
              v-for="(image, index) in galleryImages"
              :key="index"
              class="relative group overflow-hidden border border-gray-800 rounded-sm cursor-pointer"
              @click="openImage(image)"
          >
            <div class="aspect-[1241/446] w-full relative">
              <img
                  :src="image"
                  alt="Galeria b10"
                  class="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-700 ease-in-out"
              />

              <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span class="text-b10-gold font-black uppercase tracking-widest border-2 border-b10-gold px-6 py-2 bg-black/50">
                  Ver Fullscreen
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>

    <!-- Modal Fullscreen -->
    <div
        v-if="selectedImage"
        class="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
        @click="closeImage"
    >
      <button
          class="absolute top-6 right-6 text-white hover:text-b10-gold transition"
          @click="closeImage"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-10 h-10">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <img
          :src="selectedImage"
          alt="Fullscreen"
          class="max-w-full max-h-full object-contain shadow-2xl"
          @click.stop
      />
    </div>

    <Footer />
  </div>
</template>
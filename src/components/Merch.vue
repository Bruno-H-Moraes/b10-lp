<script setup lang="ts">
// Importando a imagem diretamente para o Vite processar corretamente
import camisetasImg from '../assets/camisetas.png';

const products = [
  {
    id: 1,
    name: 'Manto Oficial Pro 2024',
    image: camisetasImg, // Usando a imagem importada
    tag: 'Lançamento',
    link: 'https://furia.gg'
  },
  {
    id: 2,
    name: 'Jersey Torcedor Casual',
    image: camisetasImg, // Usando a imagem importada
    tag: null,
    link: 'https://furia.gg'
  },
  {
    id: 3,
    name: 'Kit Sócio Ouro',
    image: camisetasImg, // Usando a imagem importada
    tag: 'Exclusivo',
    link: 'https://furia.gg'
  }
];
</script>

<template>
  <section class="py-24 px-6 bg-b10-dark text-white border-t border-gray-900">
    <div class="max-w-7xl mx-auto">

      <div class="flex items-end justify-between mb-12">
        <h2 class="text-4xl md:text-5xl font-black uppercase tracking-tighter">
          Merch <span class="text-b10-gold">Oficial</span>
        </h2>
        <a href="https://furia.gg" target="_blank" class="hidden md:flex items-center gap-2 font-bold text-sm uppercase text-gray-400 hover:text-white transition">
          Ver Loja Completa
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
            v-for="product in products"
            :key="product.id"
            class="group relative bg-[#151515] border border-gray-800 rounded-sm hover:border-b10-gold/50 transition duration-300"
        >
          <div v-if="product.tag" class="absolute top-4 left-4 z-10 bg-b10-gold text-black text-xs font-bold px-3 py-1 uppercase tracking-wider">
            {{ product.tag }}
          </div>

          <div class="p-8 pb-0 relative overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-[#151515]">
            <img
                :src="product.image"
                :alt="product.name"
                class="w-full h-auto object-contain transform group-hover:scale-110 group-hover:-translate-y-2 transition duration-500 ease-out"
            />

            <div class="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition duration-300 ease-out">
              <a
                  :href="product.link"
                  target="_blank"
                  class="block w-full text-center bg-white text-black font-black uppercase py-3 hover:bg-b10-gold transition-colors cursor-pointer"
              >
                Comprar Agora
              </a>
            </div>
          </div>

          <div class="p-6">
            <h3 class="text-xl font-bold uppercase mb-2 group-hover:text-b10-gold transition-colors">
              {{ product.name }}
            </h3>
          </div>

        </div>
      </div>

      <div class="mt-12 text-center md:hidden">
        <a href="https://furia.gg" target="_blank" class="inline-block border border-gray-600 text-white font-bold uppercase px-8 py-3 rounded hover:bg-white hover:text-black transition">
          Ver Loja Completa
        </a>
      </div>

    </div>
  </section>
</template>
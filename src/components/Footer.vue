<script setup lang="ts">
import logoImg from '../assets/logo.png';
</script>

<template>
  <footer class="bg-black text-white pt-20 pb-10 px-6 border-t border-gray-900">
    <div class="max-w-7xl mx-auto">

      <div class="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 mb-20">

        <div class="flex-shrink-0">
          <img
              :src="logoImg"
              alt="B10 Logo"
              class="h-28 w-auto object-contain"
          />
        </div>

        <div class="flex flex-col md:flex-row gap-12 md:gap-24 w-full md:w-auto">

          <div class="flex flex-col">
            <a href="https://www.instagram.com/dez.organizada/" target="_blank" class="text-white font-black text-3xl uppercase tracking-tighter hover:text-b10-gold transition">
              Instagram
            </a>
            <a href="https://furia.gg" target="_blank" class="text-white font-black text-3xl uppercase tracking-tighter hover:text-b10-gold transition">
              Loja
            </a>
          </div>

          <div class="flex flex-col">
            <a href="https://furia.gg" target="_blank" class="text-white font-black text-3xl uppercase tracking-tighter hover:text-b10-gold transition">
              Twitter
            </a>
            <a href="#" class="text-white font-black text-3xl uppercase tracking-tighter hover:text-b10-gold transition">
              Galeria
            </a>
          </div>

          <div class="flex flex-col">
            <a href="https://furia.gg" target="_blank" class="text-white font-black text-3xl uppercase tracking-tighter hover:text-b10-gold transition">
              Linkedin
            </a>
            <a href="https://furia.gg" target="_blank" class="text-white font-black text-3xl uppercase tracking-tighter hover:text-b10-gold transition">
              Notícias Furia
            </a>
          </div>

        </div>
      </div>

      <div class="w-full h-px bg-gray-800 mb-8"></div>

      <div class="flex flex-col text-xs text-gray-500 uppercase font-medium tracking-wide gap-1">
        <p>Copyright © 2025 Bateria Dezorganizada</p>
        <p>Todos os direitos reservados</p>
      </div>

    </div>
  </footer>
</template>
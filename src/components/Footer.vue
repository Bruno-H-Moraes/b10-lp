<script setup lang="ts">
import logoImg from '../assets/logo.png';
</script>

<template>
  <footer class="bg-white pt-20 pb-10 px-6">
    <div class="max-w-7xl mx-auto flex flex-col gap-32">

      <div class="flex-shrink-0">
        <img
            :src="logoImg"
            alt="B10 Logo"
            class="h-28 w-auto object-contain"
        />
      </div>

      <div class="flex flex-col text-xs text-gray-500 uppercase font-medium tracking-wide gap-1">
        <p>Copyright © 2025 Bateria Dezorganizada</p>
        <p>Todos os direitos reservados</p>
      </div>

    </div>
  </footer>
</template>

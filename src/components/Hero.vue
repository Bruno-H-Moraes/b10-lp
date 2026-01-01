<script setup lang="ts">
import image7 from '../assets/image7.png';
import frame86 from '../assets/Frame86.png';
</script>

<template>
  <section class="relative min-h-screen flex flex-col justify-end pb-20 pt-32 px-6 bg-b10-dark text-white overflow-hidden">

    <div class="absolute inset-0 z-0">
      <div class="w-full h-full bg-cover bg-center opacity-[3.0] grayscale" :style="{ backgroundImage: `url(${image7})` }"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-b10-dark via-b10-dark/50 to-transparent"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto w-full flex justify-center">
      <img
          :src="frame86"
          alt="Hero Content"
          class="w-full h-auto object-contain"
      />
    </div>
  </section>
</template>
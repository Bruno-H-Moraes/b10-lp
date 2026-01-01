<script setup lang="ts">
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Identity from './components/Identity.vue';
import AboutEvents from './components/AboutEvents.vue'; // <--- Importe
import MembershipStaticBanner from './components/MembershipStaticBanner.vue';
import Merch from './components/Merch.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="font-sans antialiased text-white bg-b10-dark min-h-screen">
    <Header />
    <main>
      <Hero />
      <Identity />

      <AboutEvents />

      <MembershipStaticBanner />
      <Merch />
    </main>
    <Footer />
  </div>
</template>
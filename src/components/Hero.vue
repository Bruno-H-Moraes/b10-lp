<script setup lang="ts">
import { ref, onMounted } from 'vue';
import image7 from '../assets/image7.png';
import frame86 from '../assets/Frame86.png';
import news1 from '../assets/news1.png';
import news2 from '../assets/news2.png';
import news3 from '../assets/news3.jpeg';

interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  image: string; // Adicionada propriedade de imagem
}

const news = ref<NewsItem[]>([]);
const newsImages = [news1, news2, news3]; // Array com as imagens locais

onMounted(async () => {
  try {
    // Tenta buscar notícias reais
    const rssUrl = 'https://rp-b10s-newsletter.beehiiv.com/feed';
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
    
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.status === 'ok' && data.items.length > 0) {
      // Pega as 3 primeiras notícias e associa com as imagens locais
      news.value = data.items.slice(0, 3).map((item: any, index: number) => ({
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        image: newsImages[index] || newsImages[0] // Usa a imagem correspondente ao índice ou a primeira como fallback
      }));
    } else {
      throw new Error('Falha ao carregar RSS');
    }
  } catch (e) {
    // Fallback com notícias de exemplo se a API falhar
    news.value = [
      {
        title: 'B10 LANÇA NOVA COLEÇÃO DE INVERNO',
        link: 'https://rp-b10s-newsletter.beehiiv.com/',
        pubDate: new Date().toISOString(),
        image: news1
      },
      {
        title: 'FURIA VENCE E GARANTE VAGA NOS PLAYOFFS',
        link: 'https://rp-b10s-newsletter.beehiiv.com/',
        pubDate: new Date(Date.now() - 86400000).toISOString(),
        image: news2
      },
      {
        title: 'CONFIRA A AGENDA DE WATCHPARTIES DA SEMANA',
        link: 'https://rp-b10s-newsletter.beehiiv.com/',
        pubDate: new Date(Date.now() - 172800000).toISOString(),
        image: news3
      }
    ];
  }
});
</script>

<template>
  <section class="relative min-h-screen flex flex-col justify-end pb-12 pt-24 md:pb-20 md:pt-32 px-4 md:px-6 bg-b10-dark text-white overflow-hidden">

    <div class="absolute inset-0 z-0">
      <div class="w-full h-full bg-cover bg-center opacity-[3.0] grayscale" :style="{ backgroundImage: `url(${image7})` }"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-b10-dark via-b10-dark/50 to-transparent"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto w-full flex flex-col gap-10 md:gap-16">
      
      <!-- Imagem Principal -->
      <div class="flex justify-center px-2 md:px-0">
        <img
            :src="frame86"
            alt="Hero Content"
            class="w-full max-w-md md:max-w-full h-auto object-contain"
        />
      </div>

      <!-- Blocos de Notícias -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <a
            v-for="(item, index) in news"
            :key="index"
            :href="item.link"
            target="_blank"
            class="h-48 md:h-64 relative overflow-hidden rounded-sm cursor-pointer group flex items-end p-4 md:p-6 border border-gray-800 hover:border-b10-gold transition duration-300"
        >
          <!-- Imagem de Fundo do Card -->
          <div class="absolute inset-0">
            <img 
              :src="item.image" 
              alt="News Background" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          </div>

          <!-- Conteúdo -->
          <div class="relative z-10 w-full">
            <span class="text-[10px] md:text-xs font-bold text-b10-gold uppercase tracking-widest mb-1 md:mb-2 block">
              {{ new Date(item.pubDate).toLocaleDateString('pt-BR') }}
            </span>
            <span class="text-white font-black uppercase text-base md:text-xl leading-tight group-hover:text-b10-gold transition-colors line-clamp-3">
              {{ item.title }}
            </span>
          </div>
        </a>
      </div>

    </div>
  </section>
</template>
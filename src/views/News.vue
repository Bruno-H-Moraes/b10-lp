<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

// Definindo a interface para os posts
interface Post {
  guid: string;
  title: string;
  pubDate: string;
  link: string;
  thumbnail: string;
  description: string;
}

// Tipando o ref corretamente
const posts = ref<Post[]>([]);
const loading = ref(true);

onMounted(async () => {
  try {
    // Tentativa 1: URL /feed
    let rssUrl = 'https://rp-b10s-newsletter.beehiiv.com/feed';
    let apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

    let response = await fetch(apiUrl);
    let data = await response.json();

    if (data.status === 'ok' && data.items.length > 0) {
      posts.value = data.items;
    } else {
      console.warn('Tentativa 1 falhou. Tentando URL alternativa /rss...');
      
      // Tentativa 2: URL /rss
      rssUrl = 'https://rp-b10s-newsletter.beehiiv.com/rss';
      apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
      
      response = await fetch(apiUrl);
      data = await response.json();
      
      if (data.status === 'ok' && data.items.length > 0) {
        posts.value = data.items;
      } else {
        console.warn('Não foi possível carregar o feed RSS real. Exibindo dados de demonstração.');
        
        // Fallback: Vários dados de exemplo para mostrar o layout em grade
        posts.value = [
          {
            guid: '1',
            title: 'Bem-vindo à Newsletter da B10',
            pubDate: new Date().toISOString(),
            link: 'https://rp-b10s-newsletter.beehiiv.com/',
            thumbnail: '',
            description: 'Fique por dentro de tudo que acontece na maior torcida organizada de e-sports do Brasil. Inscreva-se agora!'
          },
          {
            guid: '2',
            title: 'Cobertura dos Jogos da Semana',
            pubDate: new Date(Date.now() - 86400000).toISOString(), // 1 dia atrás
            link: 'https://rp-b10s-newsletter.beehiiv.com/',
            thumbnail: '',
            description: 'Resumo completo das partidas da Furia no CBLOL e CS2. Análises, destaques e a festa da torcida.'
          },
          {
            guid: '3',
            title: 'Eventos Exclusivos para Sócios',
            pubDate: new Date(Date.now() - 172800000).toISOString(), // 2 dias atrás
            link: 'https://rp-b10s-newsletter.beehiiv.com/',
            thumbnail: '',
            description: 'Confira a agenda de watchparties e encontros presenciais da Bateria Dezorganizada.'
          },
          {
            guid: '4',
            title: 'Lançamento da Nova Coleção',
            pubDate: new Date(Date.now() - 259200000).toISOString(), // 3 dias atrás
            link: 'https://rp-b10s-newsletter.beehiiv.com/',
            thumbnail: '',
            description: 'O novo drop de merch já está disponível. Garanta seu manto oficial antes que acabe.'
          }
        ];
      }
    }
  } catch (error) {
    console.error("Erro ao carregar notícias:", error);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="font-sans antialiased text-white bg-b10-dark min-h-screen">
    <Header />

    <main class="pt-32 pb-20 px-6">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-5xl font-black uppercase mb-12 border-l-8 border-b10-gold pl-6">
          Últimas <span class="text-b10-gold">Notícias</span>
        </h1>

        <div v-if="loading" class="flex justify-center py-20">
          <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-b10-gold"></div>
        </div>

        <div v-else-if="posts.length === 0" class="text-center py-20 text-gray-400">
          <p>Nenhuma notícia encontrada no momento.</p>
          <a href="https://rp-b10s-newsletter.beehiiv.com/" target="_blank" class="text-b10-gold hover:underline mt-4 inline-block">
            Acesse nossa newsletter oficial
          </a>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
              v-for="post in posts"
              :key="post.guid"
              class="bg-gray-900 border border-gray-800 rounded-sm overflow-hidden group hover:border-b10-gold transition-colors flex flex-col h-full"
          >
            <div class="aspect-video overflow-hidden bg-gray-800 shrink-0">
              <img
                  v-if="post.thumbnail"
                  :src="post.thumbnail"
                  alt="Thumbnail da notícia"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div v-else class="w-full h-full flex items-center justify-center text-gray-600 bg-gray-800">
                <span class="text-4xl font-black opacity-20">B10</span>
              </div>
            </div>

            <div class="p-6 space-y-4 flex flex-col flex-grow">
              <span class="text-xs font-bold text-b10-gold uppercase tracking-widest">
                {{ new Date(post.pubDate).toLocaleDateString('pt-BR') }}
              </span>
              <h2 class="text-xl font-black uppercase leading-tight group-hover:text-b10-gold transition-colors line-clamp-2">
                {{ post.title }}
              </h2>
              <p class="text-gray-400 text-sm line-clamp-3 flex-grow">
                {{ post.description.replace(/<[^>]*>?/gm, '') }}
              </p>
              <a
                  :href="post.link"
                  target="_blank"
                  class="inline-block pt-2 text-white font-bold uppercase text-xs border-b-2 border-b10-gold hover:text-b10-gold transition-colors mt-auto w-max"
              >
                Ler na íntegra
              </a>
            </div>
          </article>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>
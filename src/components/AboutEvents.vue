<script setup lang="ts">
import stadiumImg from '../assets/stadium.png';
import playersImg from '../assets/players.png';

// Dados dos eventos (Baseado na imagem 2.png)
const events = [
  { date: '16 DE JUNHO', title: 'Major de Birmingham', desc: 'Presença confirmada da torcida.' },
  { date: '27 DE JUNHO', title: 'Noite da Furia', desc: 'Evento exclusivo para sócios no Discord.' },
  { date: '23 DE JULHO', title: 'CBLOL Split 2', desc: 'Grande final contra a Loud.' }
];
</script>

<template>
  <section id="eventos" class="bg-b10-dark text-white">

    <!-- Altura ajustada para mobile: h-[200px] -->
    <div class="w-full h-[200px] md:h-[500px] overflow-hidden relative border-y border-gray-800">
      <div class="absolute inset-0 bg-black/40 z-10"></div> <img
        :src="stadiumImg"
        alt="Arena B10"
        class="w-full h-full object-cover transform hover:scale-105 transition duration-1000 ease-in-out"
    />
    </div>

    <div class="max-w-7xl mx-auto px-6 py-12 md:py-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">

        <div class="relative group">
          <div class="absolute -inset-2 bg-gradient-to-r from-b10-gold to-transparent opacity-20 rounded-lg blur-lg group-hover:opacity-40 transition duration-500"></div>
          <img
              :src="playersImg"
              alt="Time e Torcida B10"
              class="relative rounded-sm border border-gray-800 shadow-2xl w-full h-auto object-cover grayscale group-hover:grayscale-0 transition duration-500"
          />
        </div>

        <div class="space-y-10 md:space-y-16">

          <div class="space-y-4 md:space-y-6">
            <h2 class="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              Nossa <br/>
              <span class="text-b10-gold">B10</span>
            </h2>
            <p class="text-gray-400 text-base md:text-lg leading-relaxed border-l-4 border-gray-800 pl-4 md:pl-6">
              Muito mais que uma torcida, somos um movimento. Nascemos do caos e nos organizamos pela paixão.
              Onde a Furia joga, a <strong class="text-white">Dezorganizada</strong> faz barulho.
              <br><br>
              Acompanhe nossos eventos e faça parte da história.
            </p>
          </div>

          <div class="space-y-6 md:space-y-8">
            <h2 class="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              Eventos
            </h2>

            <div class="space-y-6">
              <div
                  v-for="(event, index) in events"
                  :key="index"
                  class="flex flex-col md:flex-row gap-2 md:gap-6 pb-6 border-b border-gray-800 hover:border-b10-gold/50 transition cursor-default group"
              >
                <span class="text-b10-gold font-black uppercase whitespace-nowrap text-lg md:text-xl md:w-40 shrink-0">
                  {{ event.date }}
                </span>

                <div>
                  <h4 class="text-white font-bold uppercase text-base md:text-lg group-hover:text-b10-gold transition">
                    {{ event.title }}
                  </h4>
                  <p class="text-gray-500 text-xs md:text-sm mt-1">
                    {{ event.desc }}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>

  </section>
</template>
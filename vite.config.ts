import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/b10-lp/', // IMPORTANTE: Deve corresponder ao nome do seu repositório no GitHub
  plugins: [vue()],
})

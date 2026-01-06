import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/REACT-MiniProjetos/Jogo-Da-Velha/dist/',
  plugins: [react()],
})

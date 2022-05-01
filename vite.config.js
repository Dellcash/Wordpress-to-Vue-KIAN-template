import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
import transformerDirective from '@unocss/transformer-directives'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Unocss({
    presets: [
      presetAttributify(),
      presetUno(),
    ],
    transformers: [
      transformerDirective(),
    ],
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

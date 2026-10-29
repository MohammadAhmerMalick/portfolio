// @ts-check

import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import { site } from './src/lib/site.ts'

// https://astro.build/config
export default defineConfig({
  site: site.url,
  vite: {
    plugins: [tailwindcss()],
  },
})

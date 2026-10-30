// @ts-check

import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import icon from 'astro-icon'
import { site } from './src/lib/site.ts'

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      include: {
        andrsrxn: ['menu-burger', 'x'],
      },
    }),
  ],
  site: site.url,

  vite: {
    plugins: [tailwindcss()],
  },
})

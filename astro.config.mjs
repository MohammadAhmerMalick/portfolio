// @ts-check

import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import icon from 'astro-icon'
import { site } from './src/lib/site.ts'
import { deviconIconSlugs } from './src/lib/technologies.ts'

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      include: {
        coolicons: [
          'menu',
          'close',
          'arrow-right',
          'download',
          'chevron-left',
          'chevron-right',
          'chevron-up',
          'whatsapp',
          'phone-call',
          'linkedin',
          'github',
          'mail',
          'copy',
          'check',
        ],
        devicon: [...deviconIconSlugs],
      },
    }),
  ],
  site: site.url,

  vite: {
    plugins: [tailwindcss()],
  },
})

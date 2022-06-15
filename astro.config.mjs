import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    tailwind({ config: { applyBaseStyles: false } }),
    {
      name: '@astrojs/tailwindcss',
      hooks: {
        'astro:config:setup': ({ injectScript }) => {
          injectScript('page-ssr', `import './src/assets/css/tailwind.css'`);
        },
      },
    },
  ],
});

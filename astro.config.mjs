import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), vue()],
  output: 'static', // Asegúrate de que se genera un sitio estático
  // base: '/lionware/', // Ruta base del repositorio (nombre del repositorio)
  site: 'https://lionware-solutions.github.io/lionware/', // URL pública de tu sitio en GitHub Pages
  outDir: './docs',
});

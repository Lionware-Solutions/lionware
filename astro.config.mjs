import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), vue()],
  output: 'static', // Generación de un sitio estático
  base: '/lionware/', // Nombre del repositorio
  site: 'https://lionware-solutions.github.io/lionware/', // URL pública de tu sitio en GitHub Pages
  outDir: './docs', // Carpeta para los archivos de construcción
});

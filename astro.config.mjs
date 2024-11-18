import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), vue()],
  output: 'static', // Asegúrate de que se genera un sitio estático
  site: 'https://lionware-solutions.github.io/lionware/', // URL pública de tu sitio en GitHub Pages
  base: '/lionware/', // Esto asegura que las rutas usen el subdirectorio correcto
  outDir: './docs', // Directorio donde se generará el build
});

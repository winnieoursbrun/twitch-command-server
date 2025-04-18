import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    port: 3000,
    host: true,
    watch: {
      usePolling: true,
    },
    hmr: {
      host: 'localhost',
    },
  },
});

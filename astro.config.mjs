// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://isabellereinhardt.github.io',
  vite: {
    plugins: [tailwindcss()],
    // Dev-Server erkennt Datei-Änderungen per Polling (nötig, wenn Dateien über
    // eine Bridge/synchronisiert geschrieben werden und keine fs-Events auslösen).
    server: {
      watch: { usePolling: true, interval: 300 },
    },
  },
});

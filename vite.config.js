import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        // Keep the WebGL engine cacheable and separate from page content.
        manualChunks: { 'three-engine': ['three'] },
      },
    },
  },
});

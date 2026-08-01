import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    sourcemap: false, // Disable sourcemaps for slightly faster prod load
    minify: 'esbuild', // Faster and usually good enough
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined;
          // Path-anchored, not substring: a bare `id.includes('react')` also
          // matches lucide-react and made later rules unreachable.
          if (/[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/.test(id)) {
            return 'vendor-react';
          }
          return 'vendor-utils';
        },
      },
    },
  },
});

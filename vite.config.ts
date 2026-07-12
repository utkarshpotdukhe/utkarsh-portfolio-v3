import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  // Served from https://utkarshpotdukhe.github.io/utkarsh-portfolio-v3/ on GitHub Pages
  base: '/utkarsh-portfolio-v3/',
  plugins: [tailwindcss(), react(), tsconfigPaths()],
  server: {
    proxy: {
      '/.netlify/functions': {
        target: 'http://localhost:9999',
        changeOrigin: true,
      },
    },
  },
});

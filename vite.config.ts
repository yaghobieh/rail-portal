import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@forgedevstack/anvil': path.resolve(__dirname, '../Anvil/dist/index.mjs'),
      '@forgedevstack/rail/modules': path.resolve(__dirname, '../rail/src/modules/index.ts'),
      '@forgedevstack/rail/hooks': path.resolve(__dirname, '../rail/src/hooks/index.ts'),
      '@forgedevstack/rail/styles.css': path.resolve(__dirname, '../rail/src/styles/rail.css'),
      '@forgedevstack/rail': path.resolve(__dirname, '../rail/src/index.ts'),
    },
  },
});

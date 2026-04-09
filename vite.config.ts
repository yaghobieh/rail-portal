import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const monorepoRoot = path.resolve(__dirname, '..');
const localRailSrc = path.join(monorepoRoot, 'rail', 'src');
const useLocalRail =
  process.env.VERCEL !== '1' &&
  fs.existsSync(path.join(localRailSrc, 'index.ts'));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@forgedevstack/anvil': path.resolve(
        __dirname,
        './src/shims/forgedevstack-anvil.ts',
      ),
      ...(useLocalRail
        ? {
            '@forgedevstack/rail/modules': path.join(localRailSrc, 'modules', 'index.ts'),
            '@forgedevstack/rail/hooks': path.join(localRailSrc, 'hooks', 'index.ts'),
            '@forgedevstack/rail/styles.css': path.join(localRailSrc, 'styles', 'rail.css'),
            '@forgedevstack/rail': path.join(localRailSrc, 'index.ts'),
          }
        : {}),
    },
  },
});

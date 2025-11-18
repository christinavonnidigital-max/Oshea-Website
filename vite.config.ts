import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // FIX: Replaced process.cwd() with '.' to avoid TypeScript type errors where 'process.cwd' is not defined.
  const env = loadEnv(mode, '.', '');
  return {
    base: './', // Add this line
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    },
    resolve: {
      alias: {
        // FIX: Replaced `__dirname` which is not available in ES modules.
        // `path.resolve('.')` resolves to the project root, which is the intended behavior.
        '@': path.resolve('.'),
      }
    },
    optimizeDeps: {
      include: ['react', 'react-dom']
    }
  };
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx', // Treat all JS/JSX files as JSX
    include: /\.jsx$/, // Apply to .jsx files
  },
});

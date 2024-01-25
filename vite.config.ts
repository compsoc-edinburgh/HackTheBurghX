import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.obj', '**/*.mtl'],
  build: {
    outDir: 'docs', // Specify the custom output directory here
  },

})

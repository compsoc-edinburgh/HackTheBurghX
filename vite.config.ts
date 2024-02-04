import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'], // Add this line to include glb files
  build: {
    outDir: 'docs', // Specify the custom output directory here
  },
  base: '/HackTheBurghX/', // Add this line

})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@shadcn/ui': '/node_modules/@shadcn/ui',
      '@components': '/src/components',
      '@/lib':'/src/lib'
    },
  }
})

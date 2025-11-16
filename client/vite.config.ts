import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        configure: (proxy, options) => {
          proxy.on('error', (err, req, res) => {
            console.log('⚠️ Proxy error, trying port 4000...')
            // If port 3001 fails, try 4000
            proxy.close()
            proxy.target = 'http://localhost:4000'
            proxy.open()
          })
        }
      }
    }
  }
})





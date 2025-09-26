import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/textutils",
  server: {
    host: true,      // exposes your app on your network (LAN)
    port: 5173      // optional, you can change the port if needed
  }
})

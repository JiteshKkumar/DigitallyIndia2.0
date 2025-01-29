import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // need to remove later
  server: {
    allowedHosts: ['digitallyindia.onrender.com'],
  },
  
})

// export default {
//   server: {
//     allowedHosts: ['digitallyindia.onrender.com'],
//   },
// };
// vite.config.js
import { format, resolve } from 'path'
import { defineConfig } from 'vite'


export default defineConfig({
    
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        
        form: resolve(__dirname, './src/pages/form/index.html'),
        modify: resolve(__dirname, './src/pages/modify/index.html'),
        about: resolve(__dirname, './src/pages/about/index.html'),
        social: resolve(__dirname, './src/pages/social/index.html'),
      }
    },
    

    // main: {
    //     entry: resolve(__dirname, './src/main.ts'),
    //     name: 'main.js',
    //     format: ['es', 'cjs']
    // }
  }
})
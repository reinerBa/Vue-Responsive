const { createVuePlugin } = require('vite-plugin-vue2')
const { resolve } = require('path')

module.exports = {
  base: "./",
  publicDir: false, 
  plugins: [createVuePlugin()],
  server: {
    open: '/Vite.html'
  },
  build: {
    minify: false,
    assetsDir: 'assets/',
    outDir: 'dist/',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'Vite.html')
      }
    }
  }
}

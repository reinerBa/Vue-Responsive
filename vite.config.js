const { createVuePlugin } = require('vite-plugin-vue2')
const { resolve } = require('path')

module.exports = {
  plugins: [createVuePlugin()],
  server: {
    open: '/Vite.html'
  },
  build: {
    outDir: 'dist/',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'Vite.html')
      }
    }
  }
}

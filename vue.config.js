const path = require('path')
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
    port: 8085,
    open: false
  },
  configureWebpack: config => {
    Object.assign(config, {
      // externals: {
      //   vue: 'Vue',
      //   vuex: 'Vuex',
      //   'vue-router': 'VueRouter',
      //   'mint-ui': 'MINT'
      // },
      resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          '@': path.resolve(__dirname, './src'),
          'img': path.resolve(__dirname, './src/assets/img'),
          'vue$': 'vue/dist/vue.esm.js'
        }
      }
    })
  }
}

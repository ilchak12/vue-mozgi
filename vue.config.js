const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/vue-mozgi/',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/assets/scss/style.scss";`,
      }
    }
  },
})

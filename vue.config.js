module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/fox-cards/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/styles/variables.scss";`
      }
    }
  }
}
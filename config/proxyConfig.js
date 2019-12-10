module.exports = {
  proxy: {
    '/api': {
      target: 'http://192.168.5.188:8080',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
  }
}

module.exports = {
    devServer: {
      proxy: {
        '^/api': {
          target: 'http://localhost:5000',
          logLavel: 'debug',
          changeOrigin: true,
        }
      }
    }
  }
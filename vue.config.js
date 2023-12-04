const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:60020', // Express 서버 주소
        changeOrigin: true,
        pathRewrite: {
          '^/api': '', // API 엔드포인트를 빈 문자열로 변경
        },
      },
    },
  },
  transpileDependencies: true
})
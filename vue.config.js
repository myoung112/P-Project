const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
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
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()],
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  }
})
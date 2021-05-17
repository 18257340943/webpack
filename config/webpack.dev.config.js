const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { resolve } = require('path');
const commonConfig = require('./webpack.base.config');

const config = merge(commonConfig, {
  mode: 'development',
  devServer: {
    // 项目构建后路径
    contentBase: resolve(__dirname, '../dist'),
    // 启动gzip压缩
    compress: true,
    // 端口号
    port: 3001,
    hot: true
    // 自动打开浏览器
    // open: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'source-map'
});
// console.log(config, 'config')
module.exports = config;

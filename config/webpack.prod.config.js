const webpack = require('webpack');
const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const commonConfig = require('./webpack.base.config');

const config = merge(commonConfig, {
  mode: 'production',
  devtool: "source-map",
  optimization: {
    minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      `...`,
      new CssMinimizerPlugin(),
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `css/[name].[contenthash:10].css`
    }),
  ]
});
// console.log(config, 'config')
module.exports = config;

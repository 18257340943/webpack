const path = require('path');
const { resolve } = path;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV === 'development' ? true : false;
const srcDir = path.join(__dirname, '../src');

// 复用loader
const commonCssLoader = [
  devMode ? 'style-loader' : {
    loader: MiniCssExtractPlugin.loader,
    options: {
      publicPath: '../',
    },
  },
  'css-loader',
  {
    loader: "postcss-loader",
    options: {
      postcssOptions: {
        plugins: [
          [
            "postcss-preset-env",
          ],
        ],
      }
    }
  }
];

module.exports = {
  entry: './src/main.js',
  output: {
    filename: `[name]${devMode ? '' : '.[contenthash:10]'}.js`,
    path: resolve(__dirname, '../dist'),
    // chunkFilename: "[name].chunk.js",
  },
  module: {
    rules: [
      // {
      //   // 在package.json中eslintConfig --> airbnb
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   // 优先执行
      //   enforce: 'pre',
      //   loader: 'eslint-loader',
      //   options: {
      //     fix: true
      //   }
      // },
      {
        oneOf: [
          {
            test: /\.css$/,
            use: [...commonCssLoader]
          },
          {
            test: /\.less$/,
            use: [...commonCssLoader, 'less-loader']
          },
          {
            test: /\.(jpg|png|gif)/,
            loader: 'url-loader',
            options: {
              limit: 8 * 1024,
              name: '[hash:10].[ext]',
              outputPath: 'imgs',
              esModule: false
            }
          },
          {
            exclude: /\.(js|css|less|html|jpg|png|gif)/,
            loader: 'file-loader',
            options: {
              outputPath: 'media'
            }
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    alias: {
      '@': srcDir
    },
  },
};
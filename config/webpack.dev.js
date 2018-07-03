'use strict';


const HtmlWebpackPlugin = require('html-webpack-plugin');
const util              = require('./util');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  mode   : 'development',
  entry  : {
    'index': './src/index.ts',
  },

  output: {
    path         : util.fromRoot('dist/lib-umd'),
    publicPath   : '/',
    filename     : '[name].js',
    libraryTarget: 'umd',
    library      : 'vuelib',
  },

  resolve: {
    extensions: ['.ts', '.js'],
    alias     : {
      'vue$': 'vue/dist/vue.esm.js',
    },
  },

  module   : {
    rules: [
      {
        test  : /\.ts$/,
        loader: {
          loader : 'awesome-typescript-loader',
          options: {
            declaration: false,
            sourceMap  : true,
          },
        },
      },
    ],
  },
  plugins  : [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
  devServer: {
    historyApiFallback: true,
    port              : 8002,
    stats             : 'minimal',
    proxy             : {
      '/api/*': {
        target: 'http://localhost:8001',
        secure: false,
      },
    },
  },
};

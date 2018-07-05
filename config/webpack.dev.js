'use strict';


const HtmlWebpackPlugin    = require('html-webpack-plugin');
const util                 = require('./util');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin      = require('vue-loader/lib/plugin');


module.exports = {
  devtool: 'cheap-module-eval-source-map',
  mode   : 'development',
  entry  : {
    'app': './src/app.ts',
  },

  output: {
    path         : util.fromRoot('dist/lib-umd'),
    publicPath   : '/',
    filename     : '[name].js',
    libraryTarget: 'umd',
    library      : 'vuelib',
  },

  resolve: {
    extensions: ['.vue', '.ts', '.js'],
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
      }, {
        test  : /\.(png|jpe?g|gif|ico|cur)$/,
        loader: 'file-loader?name=../img/[name].[ext]',
      }, {
        test  : /\.(ttf|eot|svg|woff|woff2)(\?v=.*?)?$/,
        loader: 'file-loader?name=../font/[name].[ext]',
      }, {
        test   : /\.css$/,
        include: util.fromRoot('client/src'),
        loaders: ['raw-loader'],
      }, {
        test   : /\.(s[ac]ss|css)$/,
        loaders: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {loader: 'postcss-loader', options: {config: {path: './config/postcss.config.js'}}},
          'sass-loader',
        ],
      }, {
        test  : /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  plugins  : [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename     : '[name].css',
      chunkFilename: '[id].css',
    }),
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

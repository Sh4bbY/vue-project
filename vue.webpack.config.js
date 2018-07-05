module.exports = {
  mode         : 'development',
  context      : '/home/vagrant/dev/vue/vue-lib',
  devtool      : 'cheap-module-eval-source-map',
  node         : {
    setImmediate : false,
    process      : 'mock',
    dgram        : 'empty',
    fs           : 'empty',
    net          : 'empty',
    tls          : 'empty',
    child_process: 'empty',
  },
  output       : {
    path      : '/home/vagrant/dev/vue/vue-lib/dist',
    filename  : '[name].js',
    publicPath: '/',
  },
  resolve      : {
    symlinks  : false,
    alias     : {
      '@' : '/home/vagrant/dev/vue/vue-lib/src',
      vue$: 'vue/dist/vue.esm.js',
    },
    extensions: [
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.ts',
      '.tsx',
    ],
    modules   : [
      'node_modules',
      '/home/vagrant/dev/vue/vue-lib/node_modules',
      '/home/vagrant/dev/vue/vue-lib/node_modules/@vue/cli-service/node_modules',
    ],
  },
  resolveLoader: {
    modules: [
      'node_modules',
      '/home/vagrant/dev/vue/vue-lib/node_modules',
      '/home/vagrant/dev/vue/vue-lib/node_modules/@vue/cli-service/node_modules',
    ],
  },
  module       : {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules  : [
      {
        test: /\.vue$/,
        use : [
          {
            loader : 'cache-loader',
            options: {
              cacheDirectory : '/home/vagrant/dev/vue/vue-lib/node_modules/.cache/vue-loader',
              cacheIdentifier: 'be9521e2',
            },
          },
          {
            loader : 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false,
              },
              cacheDirectory : '/home/vagrant/dev/vue/vue-lib/node_modules/.cache/vue-loader',
              cacheIdentifier: 'be9521e2',
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use : [
          {
            loader : 'url-loader',
            options: {
              limit: 4096,
              name : 'img/[name].[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(svg)(\?.*)?$/,
        use : [
          {
            loader : 'file-loader',
            options: {
              name: 'img/[name].[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use : [
          {
            loader : 'url-loader',
            options: {
              limit: 4096,
              name : 'media/[name].[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use : [
          {
            loader : 'url-loader',
            options: {
              limit: 4096,
              name : 'fonts/[name].[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.pug$/,
        use : [
          {
            loader: 'pug-plain-loader',
          },
        ],
      },
      {
        test : /\.css$/,
        oneOf: [
          {
            resourceQuery: /module/,
            use          : [
              {
                loader : 'vue-style-loader',
                options: {
                  sourceMap : false,
                  shadowMode: false,
                },
              },
              {
                loader : 'css-loader',
                options: {
                  minimize      : false,
                  sourceMap     : false,
                  importLoaders : 2,
                  modules       : true,
                  localIdentName: '[name]_[local]_[hash:base64:5]',
                },
              },
              {
                loader : 'postcss-loader',
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          {
            resourceQuery: /\?vue/,
            use          : [
              {
                loader : 'vue-style-loader',
                options: {
                  sourceMap : false,
                  shadowMode: false,
                },
              },
              {
                loader : 'css-loader',
                options: {
                  minimize     : false,
                  sourceMap    : false,
                  importLoaders: 2,
                },
              },
              {
                loader : 'postcss-loader',
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          {
            test: /\.module\.\w+$/,
            use : [
              {
                loader : 'vue-style-loader',
                options: {
                  sourceMap : false,
                  shadowMode: false,
                },
              },
              {
                loader : 'css-loader',
                options: {
                  minimize      : false,
                  sourceMap     : false,
                  importLoaders : 2,
                  modules       : true,
                  localIdentName: '[name]_[local]_[hash:base64:5]',
                },
              },
              {
                loader : 'postcss-loader',
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          {
            use: [
              {
                loader : 'vue-style-loader',
                options: {
                  sourceMap : false,
                  shadowMode: false,
                },
              },
              {
                loader : 'css-loader',
                options: {
                  minimize     : false,
                  sourceMap    : false,
                  importLoaders: 2,
                },
              },
              {
                loader : 'postcss-loader',
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
        ],
      },
      {
        test : /\.p(ost)?css$/,
        oneOf: [
          {
            resourceQuery: /module/,
            use          : [
              {
                loader : 'vue-style-loader',
                options: {
                  sourceMap : false,
                  shadowMode: false,
                },
              },
              {
                loader : 'css-loader',
                options: {
                  minimize      : false,
                  sourceMap     : false,
                  importLoaders : 2,
                  modules       : true,
                  localIdentName: '[name]_[local]_[hash:base64:5]',
                },
              },
              {
                loader : 'postcss-loader',
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          {
            resourceQuery: /\?vue/,
            use          : [
              {
                loader : 'vue-style-loader',
                options: {
                  sourceMap : false,
                  shadowMode: false,
                },
              },
              {
                loader : 'css-loader',
                options: {
                  minimize     : false,
                  sourceMap    : false,
                  importLoaders: 2,
                },
              },
              {
                loader : 'postcss-loader',
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          {
            test: /\.module\.\w+$/,
            use : [
              {
                loader : 'vue-style-loader',
                options: {
                  sourceMap : false,
                  shadowMode: false,
                },
              },
              {
                loader : 'css-loader',
                options: {
                  minimize      : false,
                  sourceMap     : false,
                  importLoaders : 2,
                  modules       : true,
                  localIdentName: '[name]_[local]_[hash:base64:5]',
                },
              },
              {
                loader : 'postcss-loader',
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          {
            use: [
              {
                loader : 'vue-style-loader',
                options: {
                  sourceMap : false,
                  shadowMode: false,
                },
              },
              {
                loader : 'css-loader',
                options: {
                  minimize     : false,
                  sourceMap    : false,
                  importLoaders: 2,
                },
              },
              {
                loader : 'postcss-loader',
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
        ],
      },
      {
        test : /\.scss$/,
        oneOf: [
          {
            resourceQuery: /module/,
            use          : [
              {
                loader : 'vue-style-loader',
                options: {
                  sourceMap : false,
                  shadowMode: false,
                },
              },
              {
                loader : 'css-loader',
                options: {
                  minimize      : false,
                  sourceMap     : false,
                  importLoaders : 3,
                  modules       : true,
                  localIdentName: '[name]_[local]_[hash:base64:5]',
                },
              },
              {
                loader : 'postcss-loader',
                options: {
                  sourceMap: false,
                },
              },
              {
                loader : 'sass-loader',
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          {
            resourceQuery: /\?vue/,
            use          : [
              {
                loader : 'vue-style-loader',
                options: {
                  sourceMap : false,
                  shadowMode: false,
                },
              },
              {
                loader : 'css-loader',
                options: {
                  minimize     : false,
                  sourceMap    : false,
                  importLoaders: 3,
                },
              },
              {
                loader : 'postcss-loader',
                options: {
                  sourceMap: false,
                },
              },
              {
                loader : 'sass-loader',
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          {
            test: /\.module\.\w+$/,
            use : [
              {
                loader : 'vue-style-loader',
                options: {
                  sourceMap : false,
                  shadowMode: false,
                },
              },
              {
                loader : 'css-loader',
                options: {
                  minimize      : false,
                  sourceMap     : false,
                  importLoaders : 3,
                  modules       : true,
                  localIdentName: '[name]_[local]_[hash:base64:5]',
                },
              },
              {
                loader : 'postcss-loader',
                options: {
                  sourceMap: false,
                },
              },
              {
                loader : 'sass-loader',
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          {
            use: [
              {
                loader : 'vue-style-loader',
                options: {
                  sourceMap : false,
                  shadowMode: false,
                },
              },
              {
                loader : 'css-loader',
                options: {
                  minimize     : false,
                  sourceMap    : false,
                  importLoaders: 3,
                },
              },
              {
                loader : 'postcss-loader',
                options: {
                  sourceMap: false,
                },
              },
              {
                loader : 'sass-loader',
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
        ],
      },
      {
        test : /\.sass$/,
        oneOf: [
          {
            resourceQuery: /module/,
            use          : [
              {
                loader : 'vue-style-loader',
                options: {
                  sourceMap : false,
                  shadowMode: false,
                },
              },
              {
                loader : 'css-loader',
                options: {
                  minimize      : false,
                  sourceMap     : false,
                  importLoaders : 3,
                  modules       : true,
                  localIdentName: '[name]_[local]_[hash:base64:5]',
                },
              },
              {
                loader : 'postcss-loader',
                options: {
                  sourceMap: false,
                },
              },
              {
                loader : 'sass-loader',
                options: {
                  sourceMap     : false,
                  indentedSyntax: true,
                },
              },
            ],
          },
          {
            resourceQuery: /\?vue/,
            use          : [
              {
                loader : 'vue-style-loader',
                options: {
                  sourceMap : false,
                  shadowMode: false,
                },
              },
              {
                loader : 'css-loader',
                options: {
                  minimize     : false,
                  sourceMap    : false,
                  importLoaders: 3,
                },
              },
              {
                loader : 'postcss-loader',
                options: {
                  sourceMap: false,
                },
              },
              {
                loader : 'sass-loader',
                options: {
                  sourceMap     : false,
                  indentedSyntax: true,
                },
              },
            ],
          },
          {
            test: /\.module\.\w+$/,
            use : [
              {
                loader : 'vue-style-loader',
                options: {
                  sourceMap : false,
                  shadowMode: false,
                },
              },
              {
                loader : 'css-loader',
                options: {
                  minimize      : false,
                  sourceMap     : false,
                  importLoaders : 3,
                  modules       : true,
                  localIdentName: '[name]_[local]_[hash:base64:5]',
                },
              },
              {
                loader : 'postcss-loader',
                options: {
                  sourceMap: false,
                },
              },
              {
                loader : 'sass-loader',
                options: {
                  sourceMap     : false,
                  indentedSyntax: true,
                },
              },
            ],
          },
          {
            use: [
              {
                loader : 'vue-style-loader',
                options: {
                  sourceMap : false,
                  shadowMode: false,
                },
              },
              {
                loader : 'css-loader',
                options: {
                  minimize     : false,
                  sourceMap    : false,
                  importLoaders: 3,
                },
              },
              {
                loader : 'postcss-loader',
                options: {
                  sourceMap: false,
                },
              },
              {
                loader : 'sass-loader',
                options: {
                  sourceMap     : false,
                  indentedSyntax: true,
                },
              },
            ],
          },
        ],
      },
      {
        test : /\.less$/,
        oneOf: [
          {
            resourceQuery: /module/,
            use          : [
              {
                loader : 'vue-style-loader',
                options: {
                  sourceMap : false,
                  shadowMode: false,
                },
              },
              {
                loader : 'css-loader',
                options: {
                  minimize      : false,
                  sourceMap     : false,
                  importLoaders : 3,
                  modules       : true,
                  localIdentName: '[name]_[local]_[hash:base64:5]',
                },
              },
              {
                loader : 'postcss-loader',
                options: {
                  sourceMap: false,
                },
              },
              {
                loader : 'less-loader',
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          {
            resourceQuery: /\?vue/,
            use          : [
              {
                loader : 'vue-style-loader',
                options: {
                  sourceMap : false,
                  shadowMode: false,
                },
              },
              {
                loader : 'css-loader',
                options: {
                  minimize     : false,
                  sourceMap    : false,
                  importLoaders: 3,
                },
              },
              {
                loader : 'postcss-loader',
                options: {
                  sourceMap: false,
                },
              },
              {
                loader : 'less-loader',
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          {
            test: /\.module\.\w+$/,
            use : [
              {
                loader : 'vue-style-loader',
                options: {
                  sourceMap : false,
                  shadowMode: false,
                },
              },
              {
                loader : 'css-loader',
                options: {
                  minimize      : false,
                  sourceMap     : false,
                  importLoaders : 3,
                  modules       : true,
                  localIdentName: '[name]_[local]_[hash:base64:5]',
                },
              },
              {
                loader : 'postcss-loader',
                options: {
                  sourceMap: false,
                },
              },
              {
                loader : 'less-loader',
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          {
            use: [
              {
                loader : 'vue-style-loader',
                options: {
                  sourceMap : false,
                  shadowMode: false,
                },
              },
              {
                loader : 'css-loader',
                options: {
                  minimize     : false,
                  sourceMap    : false,
                  importLoaders: 3,
                },
              },
              {
                loader : 'postcss-loader',
                options: {
                  sourceMap: false,
                },
              },
              {
                loader : 'less-loader',
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
        ],
      },
      {
        test : /\.styl(us)?$/,
        oneOf: [
          {
            resourceQuery: /module/,
            use          : [
              {
                loader : 'vue-style-loader',
                options: {
                  sourceMap : false,
                  shadowMode: false,
                },
              },
              {
                loader : 'css-loader',
                options: {
                  minimize      : false,
                  sourceMap     : false,
                  importLoaders : 3,
                  modules       : true,
                  localIdentName: '[name]_[local]_[hash:base64:5]',
                },
              },
              {
                loader : 'postcss-loader',
                options: {
                  sourceMap: false,
                },
              },
              {
                loader : 'stylus-loader',
                options: {
                  sourceMap         : false,
                  preferPathResolver: 'webpack',
                },
              },
            ],
          },
          {
            resourceQuery: /\?vue/,
            use          : [
              {
                loader : 'vue-style-loader',
                options: {
                  sourceMap : false,
                  shadowMode: false,
                },
              },
              {
                loader : 'css-loader',
                options: {
                  minimize     : false,
                  sourceMap    : false,
                  importLoaders: 3,
                },
              },
              {
                loader : 'postcss-loader',
                options: {
                  sourceMap: false,
                },
              },
              {
                loader : 'stylus-loader',
                options: {
                  sourceMap         : false,
                  preferPathResolver: 'webpack',
                },
              },
            ],
          },
          {
            test: /\.module\.\w+$/,
            use : [
              {
                loader : 'vue-style-loader',
                options: {
                  sourceMap : false,
                  shadowMode: false,
                },
              },
              {
                loader : 'css-loader',
                options: {
                  minimize      : false,
                  sourceMap     : false,
                  importLoaders : 3,
                  modules       : true,
                  localIdentName: '[name]_[local]_[hash:base64:5]',
                },
              },
              {
                loader : 'postcss-loader',
                options: {
                  sourceMap: false,
                },
              },
              {
                loader : 'stylus-loader',
                options: {
                  sourceMap         : false,
                  preferPathResolver: 'webpack',
                },
              },
            ],
          },
          {
            use: [
              {
                loader : 'vue-style-loader',
                options: {
                  sourceMap : false,
                  shadowMode: false,
                },
              },
              {
                loader : 'css-loader',
                options: {
                  minimize     : false,
                  sourceMap    : false,
                  importLoaders: 3,
                },
              },
              {
                loader : 'postcss-loader',
                options: {
                  sourceMap: false,
                },
              },
              {
                loader : 'stylus-loader',
                options: {
                  sourceMap         : false,
                  preferPathResolver: 'webpack',
                },
              },
            ],
          },
        ],
      },
      {
        test: /\.ts$/,
        use : [
          {
            loader : 'cache-loader',
            options: {
              cacheDirectory : '/home/vagrant/dev/vue/vue-lib/node_modules/.cache/ts-loader',
              cacheIdentifier: '0fa05996',
            },
          },
          {
            loader : 'ts-loader',
            options: {
              transpileOnly   : true,
              appendTsSuffixTo: [
                '\\.vue$',
              ],
              happyPackMode   : false,
            },
          },
        ],
      },
      {
        test: /\.tsx$/,
        use : [
          {
            loader : 'cache-loader',
            options: {
              cacheDirectory : '/home/vagrant/dev/vue/vue-lib/node_modules/.cache/ts-loader',
              cacheIdentifier: '0fa05996',
            },
          },
          {
            loader : 'ts-loader',
            options: {
              transpileOnly    : true,
              happyPackMode    : false,
              appendTsxSuffixTo: [
                '\\.vue$',
              ],
            },
          },
        ],
      },
    ],
  },
  plugins      : [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"development"',
          BASE_URL: '"/"',
        },
      },
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        additionalTransformers: [
          function () { /* omitted long function */
          },
        ],
        additionalFormatters  : [
          function () { /* omitted long function */
          },
        ],
      },
    ),
    /* config.plugin('hmr') */
    new HotModuleReplacementPlugin(),
    /* config.plugin('no-emit-on-errors') */
    new NoEmitOnErrorsPlugin(),
    /* config.plugin('progress') */
    new ProgressPlugin(),
    /* config.plugin('html') */
    new HtmlWebpackPlugin(
      {
        templateParameters: function () { /* omitted long function */
        },
        template          : '/home/vagrant/dev/vue/vue-lib/public/index.html',
      },
    ),
    /* config.plugin('preload') */
    new PreloadPlugin(
      {
        rel          : 'preload',
        include      : 'initial',
        fileBlacklist: [
          /\.map$/,
          /hot-update\.js$/,
        ],
      },
    ),
    /* config.plugin('prefetch') */
    new PreloadPlugin(
      {
        rel    : 'prefetch',
        include: 'asyncChunks',
      },
    ),
    /* config.plugin('copy') */
    new CopyWebpackPlugin(
      [
        {
          from  : '/home/vagrant/dev/vue/vue-lib/public',
          to    : '/home/vagrant/dev/vue/vue-lib/dist',
          ignore: [
            'index.html',
            '.DS_Store',
          ],
        },
      ],
    ),
    /* config.plugin('fork-ts-checker') */
    new ForkTsCheckerWebpackPlugin(
      {
        vue                 : true,
        tslint              : false,
        formatter           : 'codeframe',
        checkSyntacticErrors: false,
      },
    ),
  ],
  entry        : {
    app: [
      './src/main.ts',
    ],
  },
};

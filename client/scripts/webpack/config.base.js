const webpack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const { src, publicPath, outputPath } = require('./configuration')

const env = process.env.NODE_ENV || 'development'

module.exports = {
  resolve: {
    modules: [
      src,
      'node_modules',
    ],
  },

  entry: {
    index: [
      './src/index',
    ],
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js?$/,
        use: [
          { loader: 'eslint-loader' },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.js?$/,
        use: [
          { loader: 'babel-loader', },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader'],
        }),
      },
    ],
  },

  output: {
    filename: '[name]-[hash].js',
    path: outputPath,
    publicPath,
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `"${env}"`,
    }),

    new ExtractTextPlugin('[name]-[hash].css'),

    new ManifestPlugin({
      fileName: 'manifest.json',
      publicPath,
      writeToFileEmit: true,
    }),
  ],

  externals: [
  ],

  target: 'web',
}

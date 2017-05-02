const webpack = require('webpack')
const merge = require('webpack-merge')

const { host, port, outputPath, publicPath } = require('./configuration')
const base = require('./config.base')

const config = {
  devtool: 'source-map',

  devServer: {
    host,
    port,
    compress: true,
    historyApiFallback: true,
    contentBase: outputPath,
    publicPath,
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.LoaderOptionsPlugin({ minimize: false, debug: true }),
  ],
}

module.exports = merge(base, config)

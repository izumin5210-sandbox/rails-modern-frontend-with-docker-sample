import webpack            from 'webpack'
import ExtractTextPlugin  from 'extract-text-webpack-plugin'
import ManifestPlugin     from 'webpack-manifest-plugin'
import FlowtypePlugin     from  'flowtype-loader/plugin'
import path               from 'path'

const env = process.env.NODE_ENV || 'development'
const isDevelopment = env === 'development'

const filename = isDevelopment ? '[name]' : '[name]-[hash]'

const styleExtractor = new ExtractTextPlugin({ filename: `${filename}.css`, allChunks: true, disable: false });

const config = {
  devtool: 'inline-source-map',

  entry: {
    index: './src/index',
  },

  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.jsx?$/,
        use: [
          { loader: "flowtype-loader" },
          { loader: "eslint-loader" },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        use: [
          { loader: 'babel-loader' },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: styleExtractor.extract({
          loader: [
            "css-loader",
            "postcss-loader",
          ],
        }),
      },
    ],
  },

  output: {
    filename: `${filename}.js`,
    path: path.join(__dirname, 'dist'),
  },

  plugins: [
    new FlowtypePlugin(),

    new webpack.LoaderOptionsPlugin({
      test: /\.css$/,
      options: {
        postcss: bundle => [
          require("postcss-smart-import")({
            addDependencyTo: bundle,
            plugins: [
              require("stylelint"),
            ],
          }),
          require('postcss-custom-properties'),
          require("postcss-reporter"),
        ],
        context: __dirname,
      },
    }),

    styleExtractor,

    new ManifestPlugin(),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `"${env}"`
    }),

    ...(isDevelopment ? ([
      new webpack.NoErrorsPlugin(),
    ]) : ([
      new webpack.LoaderOptionsPlugin({ minimize: false, debug: false }),

      new webpack.optimize.DedupePlugin(),

      new webpack.optimize.OccurrenceOrderPlugin(),

      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          screw_ie8: true,
          warnings: false
        },
      }),
    ])),
  ],

  externals: [
  ],

  target: 'web',
};

export default config;

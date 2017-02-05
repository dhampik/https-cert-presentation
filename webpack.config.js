/* eslint-disable */

const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
      bundle: [
          'webpack-hot-middleware/client',
          'babel-polyfill',
          './index'
      ],
      prism: [
          'prismjs/themes/prism-okaidia.css',
          'prismjs/prism',
          'prismjs/components/prism-jsx'
      ]
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: ''
  },
  context: resolve(__dirname, 'src'),
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({template: resolve(__dirname, 'src/index.html'), inject: 'body', hash: true}),
  ],
  module: {
    loaders: [{
      test: /\.md$/,
      loader: 'html-loader!markdown-loader?gfm=false'
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        plugins: [
          [
            'react-transform', {
              transforms: [{
                transform: 'react-transform-hmr',
                imports: ['react'],
                locals: ['module']
              }, {
                transform: 'react-transform-catch-errors',
                imports: ['react', 'redbox-react']
              }]
            }
          ]
        ]
      },
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /\.css$/,
      loaders: ['style-loader', 'raw-loader'],
      include: __dirname
    }, {
      test: /\.svg$/,
      loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
      include: resolve(__dirname, 'src/assets')
    }, {
      test: /\.png$/,
      loader: 'url-loader?mimetype=image/png',
      include: resolve(__dirname, 'src/assets')
    }, {
      test: /\.gif$/,
      loader: 'url-loader?mimetype=image/gif',
      include: resolve(__dirname, 'src/assets')
    }, {
      test: /\.jpg$/,
      loader: 'url-loader?mimetype=image/jpg',
      include: resolve(__dirname, 'src/assets')
    }]
  }
};

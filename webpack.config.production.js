/* eslint-disable */

const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
      bundle: [
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
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/index.html'),
      inject: 'body',
      hash: true
    }),
  ],
  module: {
    loaders: [{
      test: /\.md$/,
      loader: 'html-loader!markdown-loader?gfm=false'
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader?limit=8192'
    }, {
      test: /\.svg$/,
      loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
    }]
  }
};

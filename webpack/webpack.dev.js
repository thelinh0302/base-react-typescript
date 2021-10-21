/* eslint-disable @typescript-eslint/no-var-requires */

const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

const commonPaths = require('./paths');

const PORT = process.env.REACT_APP_PORT || 3000;

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'babel-loader',
        options: {
          plugins: [require.resolve('react-refresh/babel')]
        },
        exclude: /(node-modules)/
      },
      {
        test: /\.(s[ac]ss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff2|ttf|woff|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          }
        ]
      }
    ]
  },
  output: {
    path: commonPaths.outputPath,
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/',
    environment: {
      arrowFunction: false,
      bigIntLiteral: false,
      const: false,
      destructuring: false,
      dynamicImport: false,
      forOf: false,
      module: false
    }
  },
  plugins: [
    new ErrorOverlayPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin()
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: commonPaths.publicPath,
    port: PORT,
    compress: true,
    hot: true,
    overlay: false,
    historyApiFallback: true,
    watchContentBase: true,
    open: true
  },
  performance: {
    maxEntrypointSize: 800000
  }
};

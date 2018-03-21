const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  devtool: 'eval',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'stream.bundle.js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
}

module.exports = config;

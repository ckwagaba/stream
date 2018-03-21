const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const loadHTML = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

const extractSass = new ExtractTextPlugin({
    filename: 'main.css'
});

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
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    loadHTML,
    extractSass
  ]
}

module.exports = config;

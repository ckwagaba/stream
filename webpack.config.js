const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'stream.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"}
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {minimize: true}
        }
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

const path = require('path');

const config = {
  entry: './index.js',
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
        use: 'babel_loader'
      }
    ]
  }
}

module.exports = config;

var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'none',
  entry: './app/index.js',
//   entry: {
//     app1: './app/app1.js',
//     app2: './app/app2.js',
//     app3: './app/app3.js'  
//   },
  output: {
    filename: 'bundle.js',
    // filename: '[name]_[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.css$/,
    //   use: ['style-loader', 'css-loader']
    use: [
        {
          loader: MiniCssExtractPlugin.loader
        },
        "css-loader"
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
}
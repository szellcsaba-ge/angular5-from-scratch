'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: "./src/main.ts"
  },
  mode: "production",
  output: {
    filename: "main.js"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        "test": /\.ts$/,
        "loader": "ts-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    })
  ]
}

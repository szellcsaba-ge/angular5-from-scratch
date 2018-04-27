'use strict';

module.exports = {
  entry: {
    app: "./src/main.ts"
  },
  mode: "development",
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
  }
}

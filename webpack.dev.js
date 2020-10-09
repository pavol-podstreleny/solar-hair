const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  module : {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        loader: ['style-loader', 'css-loader','sass-loader']
      }
    ]
  }
});
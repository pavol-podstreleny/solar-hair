const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "bundle.[contentHash].js",
    path: path.resolve(__dirname, "dist"),
  },
  module : {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        loader: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader']
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin({
    filename: "css/[name].[contentHash].css",
  })]
});

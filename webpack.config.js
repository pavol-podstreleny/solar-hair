const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[contentHash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/template.html",
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/img/", to: "img" },
        { from: "./src/css/style.css", to: "css/style.css" },
      ],
    }),
  ],
};

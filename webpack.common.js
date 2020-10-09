const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.(svg|png|jpeg|jpg|gif)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "images",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/template.html",
    }),
  ],
};

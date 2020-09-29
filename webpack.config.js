const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./src/index.html", to: "index.html" },
        { from: "./src/img/", to: "img" },
        { from: "./src/css/style.css", to: "css/style.css" },
      ],
    }),
  ],
};

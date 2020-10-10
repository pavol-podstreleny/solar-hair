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
      },
      {
        test: /\.(png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: "[name].[ext]",
              outputPath: "images",
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: [65,80]
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.8],
                speed: 4
              },
            }
          },
        ],
      },
    ]
  },
  plugins: [new MiniCssExtractPlugin({
    filename: "[name].[contentHash].css",
  })]
});

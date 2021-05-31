// const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "./images/[name].[hash].[ext]",
  },
  plugins: [new CleanWebpackPlugin()],
  //   plugins: [
  //     new HtmlWebpackPlugin({
  //       template: "./src/template.html",
  //     }),
  //   ],
  //   module: {
  //     rules: [
  //       //   {
  //       //     test: /\.css$/,
  //       //     use: ["style-loader", "css-loader"],
  //       //   },
  //       {
  //         test: /\.scss$/,
  //         use: ["style-loader", "css-loader", "sass-loader"],
  //       },
  //     ],
  //   },
});

// const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  //   entry: "./src/index.js",
  //   devtool: false,
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  //   plugins: [
  //   new HtmlWebpackPlugin({
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

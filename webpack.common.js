const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  // mode: "development",
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",
  },
  //   devtool: false,
  // output: {
  //   filename: "main.[contenthash].js",
  //   path: path.resolve(__dirname, "dist"),
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      //   {
      //     test: /\.css$/,
      //     use: ["style-loader", "css-loader"],
      //   },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      // {
      //   test: /\.(svg|png|jpe?g|gif)$/i,
      //   // use: ["file-loader"],
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       esModule: false,
      //       name: "[name].[hash].[ext]",
      //       outputPath: "images",
      //     },
      //   },
      // },
    ],
  },
};

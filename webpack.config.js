const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "@ts-tools/webpack-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/assets/demo.html",
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".mjs", ".js", ".json"],
  },
  devServer: {
    open: true,
  },
};

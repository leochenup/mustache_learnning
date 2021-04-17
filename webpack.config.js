const { resolve } = require("path"); // node 内置核心模块，用来处理路径问题。
const HtmlPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // 入口文件
  output: {
    // 输出配置
    filename: "./built.js", // 输出文件名
    path: resolve(__dirname, "build"), // 输出文件路径配置
  },
  devServer: {
    contentBase: resolve(__dirname, "build"),
    port: 3000,
    open: true,
  },
  plugins: [
    new HtmlPlugin({
      template: "./public/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  mode: "development", //开发环境
  module: {
    rules: [
      {
        test: /\.js&/,
        use: [
          "babel-loader",
          {
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      chrome: "58",
                      ie: "11",
                    },
                    corejs: "3",
                    useBuiltIns: "usage",
                  },
                ],
              ],
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
};

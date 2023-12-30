const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  optimization: {
    minimize: false,
  },
  entry: "./src/index.ts",
  devtool: "inline-source-map",

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    environment: {
      arrowFunction: false,
      const: false,
    },
  },

  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "babel-loader",
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
          {
            loader: "ts-loader",
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [
          "style-loader", 
          "css-loader", 
          {
            loader: "postcss-loader",
            options: {
                postcssOptions: {
                plugins: [
                    [
                    "postcss-preset-env",
                    {
                        browsers: "last 2 versions",
                    },
                    ],
                ],
                },
            },
          }, 
          "less-loader"
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "TS Snake Game",
      template: path.join(__dirname, "/src/index.html")
    }),
  ],
};

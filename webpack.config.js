const webpack = require("webpack")
const path = require("path");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
require('file-loader');
require('image-webpack-loader');

module.exports = {
  entry: {
    app: './assets/js/script.js',
    events: './assets/js/events.js',
    schedule: './assets/js/schedule.js',
    tickets: './assets/js/tickets.js'
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname + "/dist"),
  },
  module: {
    rules: [
      {
        test: /\.jpe?g$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name (file) {
                return "[path][name].[ext]"
              },
              publicPath: function(url) {
                return url.replace('../', '/assets/');
              }
            }
          },
          {
            loader: 'image-webpack-loader'
          }
        ]
      }
    ]
  },
  plugins: [
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
  }),
  new BundleAnalyzerPlugin({
    analyzerMode: 'static',
  })
  ],
  mode: "development"
};
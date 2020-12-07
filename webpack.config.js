const webpack = require("webpack")
const path = require("path");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
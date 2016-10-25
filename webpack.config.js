const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const DOCS_PATH = path.resolve(__dirname, './');
const APP_PATH = path.resolve(__dirname, 'src');

module.exports = {
  context: APP_PATH,

  entry: {
    index: './scripts/main.jsx'
  },

  output: {
    path: DOCS_PATH,
    filename: '[name].js'
  },

  sassLoader: {
    includePaths: [ 'client/style' ]
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, exclude: /node_modules/, loaders: ['style', 'css-loader', 'postcss'] },
      { test: /\.ejs$/, exclude: /node_modules/, loader: 'ejs', query: { includePaths: [APP_PATH] } },
      { test: /\.(eot|svg|ttf|woff|woff2)$/, exclude: /node_modules/, loader: 'file?name=fonts/[name].[ext]' },
      { test: /\.[ot]tf$/, exclude: /node_modules/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=fonts/[name].[ext]' }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.ejs',
      inject: false,
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true
     }
    }),

    new CopyWebpackPlugin([{
      from: 'manifest.json',
    },{
      from: 'font-awesome',
      to: 'font-awesome'
    }]),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};

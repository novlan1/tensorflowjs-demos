const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const folder = 'overfit'
// const folder = 'xor'
// const folder = 'height-weight'
// const folder = 'iris'
// const folder = 'mnist'
// const folder = 'linear-regression'
const folder = 'mobilenet';

module.exports = {
  entry: path.resolve(__dirname, `../src/${folder}/script.js`),
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env'],
            },
          },
          {
            loader: 'replace-host-loader',
            options: {
              replace: 'https://123.com',
            },
          },
        ],

      },
      // {
      // test: /\.css$/,
      // use: ["style-loader", "css-loader"]
      // }
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  resolveLoader: {
    modules: [
      path.resolve(__dirname, '../node_modules'),
      path.resolve(__dirname, './loader'),
    ],
  },
  externals: {
    '@tensorflow/tfjs': 'tf',
    '@tensorflow/tfjs-vis': 'tfvis',
  },
  output: {
    path: path.resolve(__dirname, `../docs/${folder}/`),
    // publicPath: "/dist/",
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/dist/',
    hotOnly: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, `../src/${folder}/index.html`),
    }),
  ],
};

const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: [
    './src/index.js'
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: [/\.vert$/, /\.frag$/], use: 'raw-loader' }
    ]
  },
  externals: {
    Phaser: 'phaser'
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      WEBGL_RENDERER: true,
      CANVAS_RENDERER: true
    })
  ],
  devServer: {
    contentBase: __dirname,
    publicPath: '/dist'
  },
};


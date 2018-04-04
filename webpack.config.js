module.exports = {
  mode: 'development',
  entry: [
    './src/index.js'
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'phaser-plugin-isometric.js',
    library: 'phaser-plugin-isometric',
    libraryTarget: 'commonjs2'
  }
};


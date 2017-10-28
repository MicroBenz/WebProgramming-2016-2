module.exports = {
  entry: './app/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}

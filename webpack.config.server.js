module.exports = {
  mode: 'none',
  entry: './src/server.js',
  output: {
    filename: 'server.js'
  },
  target: 'node',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'cheap-eval-source-map',
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  node: {
    __dirname: false
  }
}
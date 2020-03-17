module.exports = {
  mode: 'none',
  entry: './src/client.js',
  output: {
    filename: 'client.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'cheap-eval-source-map',
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
}
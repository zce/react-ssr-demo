module.exports = {
  mode: 'none',
  entry: './src/server.js',
  output: {
    filename: 'server.js'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader' 
      }
    ]
  },
  node: {
    __dirname: false
  }
}
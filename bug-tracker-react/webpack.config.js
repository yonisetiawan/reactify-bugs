module.exports = {
  entry: [ './src/index.js'],
  resolve: {
    extensions: ['.js','.jsx','.json']
  },
  output: {
    // path: __dirname + '/public',
    // publicPath: '/',
    // filename: 'bundle.js'
    filename: 'public/bundle.js'
  },
  module:{
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015','react']
      }
    }]
  }
}

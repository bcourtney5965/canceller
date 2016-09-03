module.exports = {
  entry: './src/client/main.js',
  output: {
    path: './src/client/',
    filename: 'index.js'
  },
  devServer: {
    inline:  true,
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
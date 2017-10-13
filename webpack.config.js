require('require-self-ref')

module.exports = {
  entry: "./src/pages/home/main.js",
  output: {
    path: __dirname,
    filename: "static/bundle.js"
  },
  resolve: {
    extensions: ['.js', '.marko']
  },
  module: {
    loaders: [
      {
        test: /\.marko$/,
        loader: 'marko-loader'
      }, {
        test: /\.css/,
        loader: [ 'style-loader', 'css-loader' ]
      },
    ]
  }
}

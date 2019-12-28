module.exports = {
  mode: 'development',
  entry: ['whatwg-fetch', './favorite.js'],
  output: {
    path: __dirname,
    filename: 'favorite.bundle.js'
  },
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  }
};

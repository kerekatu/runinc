const path = require('path') // ES5 import syntax
const WebpackBar = require('webpackbar')

module.exports = {
  entry: './src/app.js',
  output: {
    // __dirname targets root path of the project
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader', 'sass-loader'],
        test: /\.scss$/
      },
      {
        loader: 'file-loader',
        test: /\.(gif|png|jpe?g|svg)$/i
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    noInfo: true,
    stats: 'minimal',
    open: true
  },
  plugins: [new WebpackBar()]
}

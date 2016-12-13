process.env.NODE_ENV = 'test'

const path         = require('path')
const webpack      = require('webpack')

//resolve path files.
const BASE = path.resolve(__dirname)

//export webpack configuration
module.exports = {
  devtool: 'eval-cheap-module-source-map',
  entry: path.resolve(BASE, 'test-entry.js'),
  plugins: [
    // Enzyme
    new webpack.IgnorePlugin(/react\/lib\/(?:ExecutionEnvironment|ReactContext)/),
    new webpack.IgnorePlugin(/react\/addons/),
  ],
  hot: false,
}
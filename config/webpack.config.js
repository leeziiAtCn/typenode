var webpcak = require('webpack')
var fs = require('fs')
var path = require('path')
var nodeModules = {}
fs.readdirSync('node_modules')
  .filter(function (x) {
    return ['.bin'].indexOf(x) === -1
  })
  .forEach(function (mod) {
    nodeModules[mod] = 'commonjs ' + mod
  })

module.exports = {
  entry: [
    './src/app.ts'
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  },
  target: 'node',
  externals: nodeModules,
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
}
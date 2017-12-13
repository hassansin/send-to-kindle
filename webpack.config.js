const nodeExternals = require('webpack-node-externals')
module.exports = {
  entry: './app.js',
  output: {
    filename: 'webtask.js',
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  externals: [nodeExternals()],
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    clearImmediate: false,
    setImmediate: false,
    clearInterval: false,
    setInterval: false,
    clearTimeout: false,
    setTimeout: false,
    __filename: false,
    __dirname: false
  }
}

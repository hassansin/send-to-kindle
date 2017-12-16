const BannerWebpackPlugin = require('banner-webpack-plugin')
module.exports = {
  entry: {
    'app.js': './app.js'
  },
  externals: (ctx, req, cb) => {
    if (!/^\./.test(req)) {
      return cb(null, req)
    }
    cb()
  },
  output: {
    filename: 'webtask.js',
    library: 'webtask',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {
              shippedProposals: true,
              targets: {
                node: '4.8.7'
              }
            }]],
            plugins: [
              '@babel/transform-runtime'
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new BannerWebpackPlugin({
      chunks: {
        'app.js': {
          afterContent: 'module.exports = module.exports.default'
        }
      }
    })

  ],
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
    setImmediate: false
  },
  target: 'node'
}

const { merge } = require('webpack-merge')
const path = require('path')

const common = require('./webpack.config.common.js')

const devConfig = {
  mode: 'development',
  devServer: {
    allowedHosts: 'auto',
    port: 3000,
    static: {
      directory: path.join(__dirname, 'docs')
    }
  },
  devtool: 'source-map'
}

module.exports = env => merge(common(env), devConfig)

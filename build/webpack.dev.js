var config = require('./webpack.base')
var webpack = require('webpack')

config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin()
])

module.exports = config
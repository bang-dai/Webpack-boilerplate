var webpack = require('webpack')
var webpackDevServer = require('webpack-dev-server')
var config = require('./webpack.dev.js')
var port = 8080

config.entry.app.unshift("webpack-dev-server/client?http://localhost:" + port + "/", "webpack/hot/dev-server")

var server = new webpackDevServer(webpack(config), {
    hot: true,
    contentBase: './',
    quiet: false,
    noInfo: false,
    publicPath: config.output.publicPath,
    stats: { color: true }
})

server.listen(port, function(err) {
    if(err)
        console.log(err)
    else
        console.log("listen on port "+ port)
})
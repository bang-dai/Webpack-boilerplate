require('shelljs/global')
var webpack = require('webpack')
var conf = require('./webpack.prod.js')

rm('-rf', 'dist')

//call webpack with node
webpack(conf, function(err, stats){
    if (err) throw err
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n')
})
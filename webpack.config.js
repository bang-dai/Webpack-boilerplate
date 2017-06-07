var path = require('path')
var root = path.resolve(__dirname)
//const ExtractTextPlugin = require("extract-text-webpack-plugin")
//const webpack = require('webpack')

module.exports = {
    entry: {
        app: ['./src/main.css', './src/main.js']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                include: root,
                use: {
                    loader: 'babel-loader',
                }
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.(png|jpg)$/,
                use: {
                    loader: 'url-loader',
                    query: {
                        limit: 10000,
                        name: '[name]-[hash:7].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [

    ]
}
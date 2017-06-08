var path = require('path')
var root = path.resolve(__dirname, '../')


module.exports = {
    entry: {
        app: ['./src/css/main.css', './src/main.js']
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    resolve: {
        extensions: ['', '.js', '.css']
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint',
                exclude: /(node_modules|bower_components)/
            }
        ],
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            }, {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                include: root,
                loader: 'babel-loader',
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: '[name]-[hash:7].[ext]'
                }
            }
        ]
    },
    plugins: [],
    eslint: {
        configFile: path.resolve(root, './.eslintrc'),
        formatter: require('eslint-friendly-formatter')
    }
    
}
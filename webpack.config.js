var webpack = require('webpack')
var path = require('path')
var OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    context: __dirname + '/src',
    entry: "./js/index.jsx",
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        inline: true,
        proxy: {
            '/api/*': {
                target: "http://127.0.0.1:8888",
                secure: false
            }
        }
    },
    plugins: [
        new OpenBrowserWebpackPlugin({
            url: 'http://localhost:8080/'
        }),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    module: {
        loaders: [{
                test: /\.(js|jsx)?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                loader: 'style-loader!css-loader'
            }, {
                test: /\.less$/,
                exclude: /(node_modules)/,
                loader: 'style-loader!css-loader!less-loader'
            }, {
                test: /\.(png|gif|svg|ttf|eot|woff|woff2|jpg|jpeg|bmp)($|\?)/i,
                exclude: /(node_modules)/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    output: {
        path: __dirname + '/dist/',
        filename: './js/bundle.js'
    }
}
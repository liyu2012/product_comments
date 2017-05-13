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
        inline: true
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
        }]
    },
    output: {
        path: __dirname + '/output/',
        filename: './js/bundle.js'
    }
}
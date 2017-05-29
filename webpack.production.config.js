const webpack = require('webpack')
const path = require('path')
const pkg = require('./package.json')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry: {
        app: './src/js/index.jsx',
        vendor: Object.keys(pkg.dependencies)
    },
    output: {
        filename: './production_online/dist/js/[name].[chunkhash:8].js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
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
                loader: ExtractTextPlugin.extract(['css-loader'])
            }, {
                test: /\.less$/,
                exclude: /(node_modules)/,
                loader: ExtractTextPlugin.extract(['css-loader', 'less-loader'])
            },
            {
                test: /\.(png|gif||jpg|jpeg|bmp)($|\?)/i,
                exclude: /(node_modules)/,
                loader: 'url-loader?limit=100000&name=imgs/[name].one.[ext]'
            },
            {
                test: /\.(png|gif|svg|ttf|eot|woff|woff2)($|\?)/i,
                exclude: /(node_modules)/,
                loader: 'url-loader?limit=100000&name=fonts/[name].one.[ext]'
            },

        ]
    },
    plugins: [
        new webpack.BannerPlugin("copyright:lllyyy2012@icloud.com"),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: './production_online/dist/js/[name].[chunkhash:8].js'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './production_online/dist/index.html'
        }),
        new webpack.DefinePlugin({
            __DEV__: false


        }),
        //   new webpack.DefinePlugin({
        //     'process.env': {
        //     'NODE_ENV':'production'
        //     }
        // }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new ExtractTextPlugin('./production_online/dist/css/[name].[chunkhash:8].css'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),

    ]
}
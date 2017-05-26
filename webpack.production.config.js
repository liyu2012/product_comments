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
            filename: './dist/js/[name].[chunkhash:8].js'
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
                filename: './dist/js/[name].[chunkhash:8].js'
            }),
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: './dist/index.html'
            }),
            new webpack.DefinePlugin({
                __DEV__: false


            }),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': 'production'
                }


            }),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new ExtractTextPlugin('./dist/css/[name].[chunkhash:8].css'),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),

        ]
    }
    //const pkg = require('./package.json')
    //const ExtractTextPlugin = require('extract-text-webpack-plugin')
    /*module.exports = {
        context: __dirname + '/src',
        entry: {
            app: './js/index.jsx',
            // vendor: Object.keys(pkg.dependencies)
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: './js/bundle.js'
                // path: path.resolve(__dirname, 'dist'),
                // filename: './js/[name].[chunkhash:8].js'
        },
        resolve: {
            extensions: ['.js', '.jsx', '.json', '.css']
        },
        module: {
            rules: [{
                    test: /\.jsx?$/,
                    exclude: /(node_modules)/,
                    include: [path.resolve(__dirname,
                        'src')],
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015']
                    }

                },
                {
                    test: /\.css$/,
                    exclude: /(node_modules)/,
                    include: [path.resolve(__dirname, 'src')],
                    loader: 'style-loader!css-loader'
                        // use: ExtractTextPlugin.extract(['css-loader'])
                },
                {
                    test: /\.less$/,
                    exclude: /(node_modules)/,
                    use: ['style-loader,css-loader,less-loader']
                        // use: ExtractTextPlugin.extract(['css-loader,less-loader'])
                },
                {
                    test: /\.(png|gif|jpg|jpeg|bmp)$|/i,
                    exclude: /(node_modules)/,
                    use: [{
                            loader: 'url-loader',
                            options: {
                                limit: 100000
                            }
                        }]
                        //use: 'url-loader?limit=100000&name=imgs/[name].[chunkhash:8].[ext]'
                },
                {
                    test: /\.(png|svg|ttf|eot|woff|woff2)($|\?)/i,
                    exclude: /(node_modules)/,
                    use: [{
                            loader: 'url-loader',
                            options: {
                                limit: 100000
                            }
                        }]
                        // use: 'url-loader?limit=100000&name=fonts/[name].[chunkhash:8].[ext]'
                }
            ]
        },
        plugins: [
            // new webpack.BannerPlugin("copyright:lllyyy2012@icloud.com"),
            new HtmlWebpackPlugin({
                template: 'index.html'
            }),
            // new webpack.DefinePlugin({
            //     'process.env': {
            //         'NODE__DEV': JSON.stringify(process.env.NODE_ENV)
            //     }


            // }),
            // new webpack.optimize.OccurrenceOrderPlugin(),
            // new webpack.optimize.UglifyJsPlugin({
            //     compress: {
            //         warnings: false
            //     }
            // }),
            //  new ExtractTextPlugin('css/[name].[chunkhash:8].css'),
            //new webpack.optimize.CommonsChunkPlugin({
            // name: 'vendor',
            // filename: '/js/[name].[chunkhash:8].js'
            //  }),
            // new webpack.DefinePlugin({
            //     __DEV__: JSON.stringify(JSON.parse(process.env.NODE_ENV === "dev" || 'false'))

            // }),
        ]


    }*/
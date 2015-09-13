'use strict';

var webpack = require('webpack');
var autoprefixer = require('autoprefixer-core');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function makeWebpackConfig(options) {
    var BUILD = !!options.BUILD;
    var TEST = !!options.TEST;

    var config = {};

    if (TEST) {
        config.entry = {}
    } else {
        config.entry = {
            app: './src/'
        }
    }
    if (TEST) {
        config.output = {}
    } else {
        config.output = {
            path: __dirname + '/public',
            publicPath: BUILD ? '/' : 'http://localhost:8080/',
            filename: BUILD ? '[name].[hash].js' : '[name].bundle.js',
            chunkFilename: BUILD ? '[name].[hash].js' : '[name].bundle.js'
        }
    }
    if (TEST) {
        config.devtool = 'inline-source-map';
    } else if (BUILD) {
        config.devtool = 'source-map';
    } else {
        config.devtool = 'eval';
    }
    config.module = {
        preLoaders: [],
        loaders: [{
            test: /\.js$/,
            loader: 'babel?optional[]=runtime',
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            loader: 'file'
        }, {
            test: /\.html$/,
            loader: 'raw'
        }]
    };
    if (TEST) {
        config.module.preLoaders.push({
            test: /\.js$/,
            exclude: [
                /node_modules/,
                /\.test\.js$/
            ],
            loader: 'isparta-instrumenter'
        })
    }
    var sassLoader = {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?importLoaders=2&localIdentName=[name]__[local]___[hash:base64:5]!autoprefixer-loader?{browsers:["last 2 version", "ie >= 10"]}!sass-loader', {
            publicPath: '../'
        })
    };
    if (TEST) {
        sassLoader.loader = 'null'
    }
    config.module.loaders.push(sassLoader);
    config.postcss = [
        autoprefixer({
            browsers: ['last 2 version']
        })
    ];
    config.plugins = [
        new ExtractTextPlugin('[name].[hash].css', {
            disable: !BUILD || TEST
        })
    ];
    if (!TEST) {
        config.plugins.push(
            new HtmlWebpackPlugin({
                template: './src/index.html',
                inject: 'body',
                minify: BUILD
            })
        )
    }
    if (BUILD) {
        config.plugins.push(
            new webpack.NoErrorsPlugin(),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin()
        )
    }
    config.devServer = {
        contentBase: './public',
        stats: {
            modules: false,
            cached: false,
            colors: true,
            chunk: false
        }
    };
    return config;
};
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var extractCss = new ExtractTextPlugin('style.css')
var path = require('path')

module.exports = {
    // entry: './docs/index.js',
    // output: {
    //     path: './build',
    //     publicPath: '/build/',
    //     filename: 'build-docs.js'
    // },
    entry: './src/main.js',
    output: {
        path: './dist',
        publicPath: '/dist/',
        filename: 'build.js'
    },
    // resolve: {
    //   root: path.resolve('./'),
    //   extensions: ['', '.js', '.vue'],
    //   alias: {
    //     'src': path.resolve(__dirname, './src')
    //   }
    // },
    resolveLoader: {
      root: path.join(__dirname, 'node_modules')
    },
    module: {
        loaders: [
        {
            test: /\.vue$/,
            loader: 'vue'
        },
        {
            test: /\.js$/,
            exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
            loader: 'babel'
        },
        {
            test: /\.css$/,
            loader: extractCss.extract(['css'])

        },
        {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }]
    },
    plugins: [
      extractCss
    ],
    vue: {
        loaders: {
            less: ExtractTextPlugin.extract(
                    // activate source maps via loader query
                    'css?sourceMap!' +
                    'less?sourceMap'
                    ),

        }
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    devtool: 'source-map'
};




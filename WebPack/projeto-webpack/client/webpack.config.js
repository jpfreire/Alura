const path = require('path')
const babiliPlugin = require('babili-webpack-plugin')
const etwpp = require('extract-text-webpack-plugin')
const ocawpp = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano')
const webpack = require('webpack')
const htmlwpp = require('html-webpack-plugin')


let plugins = []

plugins.push(new etwpp('styles.css'))

plugins.push(new htmlwpp({
    hash:true,
    minify:{
        html5:true,
        collapseWhitespace: true,
        removeComments: true,
    },
    filename: 'index.html',
    template: __dirname + '/main.html'
}))

plugins.push(new webpack.ProvidePlugin({
    '$':'jquery/dist/jquery.js',
    'jQuery': 'jquery/dist/jquery.js'
}))

plugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename:'vendor.bundle.js'
}))

let SERVICE_URL = JSON.stringify('http://localhost:3000');

if(process.env.NODE_ENV == 'production'){

    SERVICE_URL = JSON.stringify('http://prod:3000/')
    plugins.push(new webpack.optimize.ModuleConcatenationPlugin());
    plugins.push(new babiliPlugin())
    plugins.push(new ocawpp({
        cssProcessor: cssnano,
        cssProcessorOptions:{
            discardComments:{
                removeAll: true
            }
        },
        canPrint:true
    }))
}

plugins.push(new webpack.DefinePlugin({ SERVICE_URL }))

module.exports = { //module do nodejs
    entry: {
        app: './app-src/app.js',
        vendor: ['bootstrap','jquery','reflect-metadata']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: etwpp.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            { 
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=application/font-woff' 
            },
            { 
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            { 
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'file-loader' 
            },
            { 
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml' 
            }
        ]
    },
    plugins
}
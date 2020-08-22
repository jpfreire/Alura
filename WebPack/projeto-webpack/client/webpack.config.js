const path = require('path')
const babiliPlugin = require('babili-webpack-plugin')
const etwpp = require('extract-text-webpack-plugin')
const ocawpp = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano')

let plugins = []

plugins.push(new etwpp('styles.css'))

if(process.env.NODE_ENV == 'production'){
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

module.exports = { //module do nodejs
    entry: './app-src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist'),
        publicPath: 'dist'
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
const path = require('path')
const babiliPlugin = require('babili-webpack-plugin')

let plugins = []

if(process.env.NODE_ENV == 'production'){
    plugins.push(new babiliPlugin())
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
            }
        ]
    },
    plugins
}
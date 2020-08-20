const path = require('path')

module.exports = { //module do nodejs
    entry: './app-src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    }
}
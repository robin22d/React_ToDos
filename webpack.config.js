// var webpack = require('webpack');
var path = require('path');

module.exports = {

    entry:{
        //where it get the react code from
        app: './src/App.js'
    },
    // code is then compiles
    output:{
        // where it puts the react code
        filename: 'public/build/bundle.js',
        sourceMapFilename: 'public/build/bundle.map'
    },
    devtool: '#source-map',
    module:{
        loaders:[{
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query:{
                presets: ['react', 'es2015']
            }
        }]
    }

};
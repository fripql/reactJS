const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: ['babel-polyfill', './src/main.js']
    },

    output: {
      path: path.join(__dirname, 'build'),
      filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node-modules/,
                options: {
                    presets: [
                        ['es2015', {'modules': false}], 'stage-0', 'react'
                    ]
                }
            }
        ]


    }
};
const webpack = require('webpack');
const path = require('path');
const config = {
    entry: __dirname + '/static/js/index.jsx',
    output: {
        path: __dirname + '/static/dist',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test: /\.css$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                ],
                loaders: ['style-loader', 'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]']
            }
        ]
    }
};
module.exports = config;
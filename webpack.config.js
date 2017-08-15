const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: __dirname + '/index.html',
    output: {
        path: __dirname + '/dist',
        filename: 'index.bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{ loader: 'babel-loader' }, { loader: 'wc-loader' }]
            },
            {
                test: /\.js$/,
                use: [{ loader: 'script-loader' }, { loader: 'babel-loader' }]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({ filename: 'index-bundle.html' })
    ]
}
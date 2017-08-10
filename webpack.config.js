const IndexPackerPlugin = require('../index-packer-plugin.js')

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
                use: [{ loader: 'babel-loader' }]
            }
        ]
    },

    plugins: [new IndexPackerPlugin()]
}
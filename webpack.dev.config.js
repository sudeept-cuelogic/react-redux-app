var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, './');

var config = {
    entry: [ path.join(parentDir, 'src/index.js') ],
    devtool: 'source-map',
    output: {
        path: parentDir + '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/

            },
            {
                test: /\.less$/,
                loaders: ['css-loader', 'style-loader', 'less-loader']
            }
        ]
    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    }
}

module.exports = config;

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        app: path.Join(__dirname, 'appComponent.js')
    },
    output: {
        path: path.Join(__dirname, 'dist'),
        filename: '[name].js'
    },
    devtool: 'source map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        hot: true,
        open: true,
        port: 2020,
        historyApiFallback: true,
        compress: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',

        })
    ]
}
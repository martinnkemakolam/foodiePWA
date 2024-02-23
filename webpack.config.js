const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        app: path.join(__dirname, 'appComponent.js')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        assetModuleFilename: '[name][ext]'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     exclude: '/node_modules/',
            //     use: {
            //         loader: 'babel-loader',
            //         option: {
            //             presets: ['@babel-preset-env']
            //         }
            //     }
            // }
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource"
            }
        ]
    },
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